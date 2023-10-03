const mongoose = require('mongoose')
const { generateTitle, generateBody, generateCategory, generateTag, convertToSlug, randomString } = require('./helper')
const blogModel = require('./schemas/blog.schema')

mongoose
  .connect('mongodb://localhost/uday-blog')
  .then(() => {
    console.log('Connected to Database...')

    bulkInsert()
  })
  .catch((err) => {
    console.log(err)
  }) // Connect to database

function bulkInsert() {
  const paylods = []

  for (let i = 0; i < 300000; i++) {
    let tags = []
    for (let i = 0; i < 3; i++) {
      tags.push(generateTag())
    }
    const title = generateTitle()
    const payload = {
      title,
      slug: convertToSlug(title) + '-' + randomString(10),
      body: generateBody(),
      tags,
      category: generateCategory(),
      author: {
        _id: new mongoose.Types.ObjectId('650db578a6c47c5f0b549adb'),
        name: 'Uday Singh Kushwah'
      },
      timestamp: new Date()
    }
    paylods.push(payload)
  }

  blogModel
    .insertMany(paylods)
    .then(() => {
      console.log('All Insert done')
    })
    .catch((err) => {
      console.error(err)
    })
}
