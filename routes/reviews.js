const express = require('express');
const router = express.Router({ mergeParams: true });
const ExpressError = require('../utils/expressError');
const catchAsync = require('../utils/catchAsync');
const Campground = require('../models/campground');
const Review = require('../models/review');
const { campgroundSchema, reviewSchema } = require('../schemas');
const { isLoggedIn, validateReview, isReviewAuthor } = require('../utils/middleware');
const { createReview } = require('../controllers/reviews');
const reviewsControllers = require('../controllers/reviews')

router.post('/', isLoggedIn, validateReview, catchAsync(reviewsControllers.createReview));

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviewsControllers.deleteReview));

module.exports = router;