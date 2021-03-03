const reviewProfile = require("../models/ReviewProfileModel")

const shuffle = (sourceArray) => {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

const findSimilarReviews = (res, reviewResult) => {
    reviewProfile.aggregate([
      {
        '$match': { '$and': [
          {
            'tags': {
              '$in': reviewResult.tags
            }
          },
          {
            '_id': { '$ne': reviewResult._id }
          }
        ]
        }
      }, {
        '$addFields': {
          'intersection': {
            '$setIntersection': [
              '$tags', reviewResult.tags
            ]
          }
        }
      }, {
        '$addFields': {
          'length': {
            '$size': '$intersection'
          }
        }
      }, {
        '$sort': {
          'length': -1
        }
      }, {
        '$limit': 6
      }, {
        '$project': {
          '_id': 1,
          'name': 1,
        }
      }
    ]).exec()
      .then(similarReviews => {
        reviewResult.set('similarReviews', similarReviews)
        res.json(reviewResult)
      })
      .catch(err => res.status(422).json(err));
}

module.exports = {
    getAll: function(req, res) {
        reviewProfile.find({})
            .select({_id: 1, name: 1})
            .then(rdata => {
                var data = JSON.parse(JSON.stringify(rdata))
                var shuffledData = shuffle(data);
                
                res.send(shuffledData)
            })
            .catch(err => res.status(422).json(err));
    },
    getById: function(req, res) {
        // TODO; req.params.id
        reviewProfile.findById( {_id: req.params.id} )
                .then(review => findSimilarReviews(res, review))
                .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        // TODO; req.body contains profile information
        reviewProfile.create(req.body)
                .then(newreviewProfile => res.json(newreviewProfile))
                .catch(err => res.status(422).json(err))
    },
    update: function(req, res) {
        // TODO; req.body contains profile information and req.params.id
        reviewProfile.findOneAndUpdate({ _id: req.params.id}, req.body)
                .then(review => res.json(review))
                .catch(err => res.status(422).json(err))
    },
    delete: function(req, res) {
        // TODO: req.params.id
        reviewProfile.findById({ _id: req.params.id })
                .then(review => review.remove())
                .then(allreviews => res.json(allreviews))
                .catch(err => res.status(422).json(err))
                
    },
}