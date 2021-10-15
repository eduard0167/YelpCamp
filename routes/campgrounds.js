const express = require('express');
const router = express.Router();
const ExpressError = require('../utils/expressError');
const catchAsync = require('../utils/catchAsync');
const Campground = require('../models/campground');
const Review = require('../models/review');
const { campgroundSchema, reviewSchema } = require('../schemas');
const { isLoggedIn, validateCampground, isAuthor } = require('../utils/middleware');
const campgroundsControllers = require('../controllers/campgrounds');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

router.route('/')
    .get(catchAsync(campgroundsControllers.index))
    .post(isLoggedIn, upload.array('image'), validateCampground, catchAsync(campgroundsControllers.createCampground))


router.get('/new', isLoggedIn, campgroundsControllers.renderNewForm);

router.route('/:id')
    .get(catchAsync(campgroundsControllers.showCampgrounds))
    .put(isLoggedIn, isAuthor, upload.array('image'), validateCampground, catchAsync(campgroundsControllers.updateCampground))
    .delete(isLoggedIn, isAuthor, catchAsync(campgroundsControllers.deleteCampground));

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgroundsControllers.editCampground));

module.exports = router;