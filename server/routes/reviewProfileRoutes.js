const reviewProfileControllers = require('../controllers/reviewProfileController')
const router = require('express').Router()

//router.route("/filterAndSort").get(reviewProfileControllers.filterAndSortBy)
//router.route("/search").get(reviewProfileControllers.search)
router.route("/:id").get(reviewProfileControllers.getById)
router.route("/").get(reviewProfileControllers.getAll)

router.route("/submit").post(reviewProfileControllers.create)
router.route("/update/:id").put(reviewProfileControllers.update)
router.route("/delete/:id").delete(reviewProfileControllers.delete)

module.exports = router