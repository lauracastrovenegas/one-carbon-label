const reviewProfile = require("../models/ReviewProfileModel")

module.exports = {
    getAll: function(req, res) {
        reviewProfile.find({})
            .select({_id: 1, name: 1, shortDescription: 1, imageUrl: 1, tags: 1, memberRange: 1, acceptingMembers: 1, applicationRequired: 1})
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
                .then(review => findSimilarClubs(res, review))
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
    filterAndSortBy: function(req, res) {
        // TODO; req.query contains filter and/or sort information
        // support pagination with req.query 
        
    },
    search: function(req, res) {
        // TODO; req.query contains search query
        // support pagination with req.query 
    }
}