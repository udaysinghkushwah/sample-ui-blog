const { default: fetch } = require('node-fetch')
const { generateTitle, generateBody, generateTag, generateCategory } = require('./helper')

function blogDataGenerator(indexCounter) {
  let tags = []
  for (let i = 0; i < 3; i++) {
    tags.push(generateTag())
  }

  const payload = {
    title: generateTitle(),
    body: generateBody(),
    tags,
    category: generateCategory()
  }

  fetch('http://localhost:3000/blogs', {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVkYXlrdXNod2FoMTJAZ21haWwuY29tIiwic3ViIjoiNjUwZGI1NzhhNmM0N2M1ZjBiNTQ5YWRiIiwiaWF0IjoxNjk1NDY3MTI1LCJleHAiOjE2OTU1NTM1MjV9.4fqkUd5NjFwzh3WYQxVmiEwrpfuJ698DIaohCHfM0ws`,
      'Content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(payload)
  })
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        console.log(indexCounter + ' Records Inserted')
      } else {
        throw Error(response.statusText)
      }
    })
    .catch((ex) => {
      console.error(ex)
    })
}

for (let i = 0; i < 100000; i++) {
  setTimeout(() => {
    blogDataGenerator(i)
  }, i * 20)
}
