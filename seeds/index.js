const express =require('express');
const path = require('path');
const mongoose = require('mongoose');
const cities = require('./cities');
const {places, descriptors, seedImages, randomImages} = require('./seedHelpers');
const Campground = require('../models/campground');
const campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connnection error:"));
db.once("open", () => {
    console.log('Database connected');
});



const sample = arr => arr[Math.floor(Math.random() * arr.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 200 ; i++) {
        const rand = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            location: `${cities[rand].city}, ${cities[rand].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            geometry: {
                type: 'Point',
                coordinates: [cities[rand].longitude, cities[rand].latitude]
            },
            author: "611f7e05cb531f4798ae8bbb",
            images: randomImages(seedImages),
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est omnis recusandae qui nesciunt maxime, incidunt dolorem, possimus reprehenderit aliquam architecto voluptates nihil nulla fugit eveniet provident! Necessitatibus nulla quis sed.Maiores, impedit voluptate quis reprehenderit delectus eveniet sapiente fugit quisquam provident, ullam maxime repellendus temporibus? Tempora saepe delectus, esse id aperiam, reprehenderit, odit quos incidunt maiores modi dolorem consectetur magnam.',
            price
        });
        await camp.save();
    }
}

seedDB()
    .then (() => {
        db.close();
    });
