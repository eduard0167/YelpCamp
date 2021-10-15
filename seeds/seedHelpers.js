module.exports.descriptors = [
    'Forest',
    'Ancient',
    'Petrified',
    'Roaring',
    'Cascade',
    'Tumbling',
    'Silent',
    'Redwood',
    'Bullfrog',
    'Maple',
    'Misty',
    'Elk',
    'Grizzly',
    'Ocean',
    'Sea',
    'Sky',
    'Dusty',
    'Diamond'
]

module.exports.places = [
    'Flats',
    'Village',
    'Canyon',
    'Pond',
    'Group Camp',
    'Horse Camp',
    'Ghost Town',
    'Camp',
    'Dispersed Camp',
    'Backcountry',
    'River',
    'Creek',
    'Creekside',
    'Bay',
    'Spring',
    'Bayshore',
    'Sands',
    'Mule Camp',
    'Hunting Camp',
    'Cliffs',
    'Hollow'
]

module.exports.seedImages = [
    {
      url: 'https://res.cloudinary.com/dbkvwdqf4/image/upload/v1629788810/YelpCamp/xsqwtagkaqw8m6p2g668.jpg',
      filename: 'YelpCamp/xsqwtagkaqw8m6p2g668'
    },
    {
      url: 'https://res.cloudinary.com/dbkvwdqf4/image/upload/v1629788811/YelpCamp/tkuol9blx5lnjn1kyepb.png',
      filename: 'YelpCamp/tkuol9blx5lnjn1kyepb'
    },
    {
      url: 'https://res.cloudinary.com/dbkvwdqf4/image/upload/v1629788811/YelpCamp/iuytigtma2s6glc6houg.jpg',
      filename: 'YelpCamp/iuytigtma2s6glc6houg'
    },
    {
      url: 'https://res.cloudinary.com/dbkvwdqf4/image/upload/v1629788811/YelpCamp/cmp2cr1r3flqyszkkx8j.jpg',
      filename: 'YelpCamp/cmp2cr1r3flqyszkkx8j'
    },
    {
      url: 'https://res.cloudinary.com/dbkvwdqf4/image/upload/v1629788812/YelpCamp/optyqxgqpv1jhp3vnta9.png',
      filename: 'YelpCamp/optyqxgqpv1jhp3vnta9'
    },
    {
      url: 'https://res.cloudinary.com/dbkvwdqf4/image/upload/v1629788812/YelpCamp/alsmb3g34b7vzx4thxzk.jpg',
      filename: 'YelpCamp/alsmb3g34b7vzx4thxzk'
    },
    {
      url: 'https://res.cloudinary.com/dbkvwdqf4/image/upload/v1629788812/YelpCamp/jkn4iiuc5xa9poemhgmj.png',
      filename: 'YelpCamp/jkn4iiuc5xa9poemhgmj'
    },
    {
      url: 'https://res.cloudinary.com/dbkvwdqf4/image/upload/v1629788812/YelpCamp/wtnot4fdh5o7xtiwjfkd.jpg',
      filename: 'YelpCamp/wtnot4fdh5o7xtiwjfkd'
    },
    {
      url: 'https://res.cloudinary.com/dbkvwdqf4/image/upload/v1629788813/YelpCamp/y6vxembmbyxwl4sb8tra.png',
      filename: 'YelpCamp/y6vxembmbyxwl4sb8tra'
    },
    {
      url: 'https://res.cloudinary.com/dbkvwdqf4/image/upload/v1629788813/YelpCamp/arjzwgqxktu0rtfhikxy.jpg',
      filename: 'YelpCamp/arjzwgqxktu0rtfhikxy'
    },
    {
      url: 'https://res.cloudinary.com/dbkvwdqf4/image/upload/v1629788813/YelpCamp/ofwihupz3ha6xtgyposf.jpg',
      filename: 'YelpCamp/ofwihupz3ha6xtgyposf'
    },
    {
      url: 'https://res.cloudinary.com/dbkvwdqf4/image/upload/v1629788813/YelpCamp/z6bbxzkxjt6jp7jxlt59.jpg',
      filename: 'YelpCamp/z6bbxzkxjt6jp7jxlt59'
    },
    {
      url: 'https://res.cloudinary.com/dbkvwdqf4/image/upload/v1629788814/YelpCamp/orrljfbgzwe23mvvmiir.jpg',
      filename: 'YelpCamp/orrljfbgzwe23mvvmiir'
    },
    {
      url: 'https://res.cloudinary.com/dbkvwdqf4/image/upload/v1629788813/YelpCamp/dh0jfvngaysxzm1dph0p.jpg',
      filename: 'YelpCamp/dh0jfvngaysxzm1dph0p'
    },
    {
      url: 'https://res.cloudinary.com/dbkvwdqf4/image/upload/v1629788814/YelpCamp/wi94abdlfxwcnopqtnnz.jpg',
      filename: 'YelpCamp/wi94abdlfxwcnopqtnnz'
    }
  ];

module.exports.randomImages = (images) => {
    const num =  Math.floor(Math.random() * 4) + 1;
    const selected = [];
    for (let i = 0; i < num; i++) {
        const randSeed =  Math.floor(Math.random() * 14) + 1;
        selected.push(images[randSeed])
    }

    return selected;
}