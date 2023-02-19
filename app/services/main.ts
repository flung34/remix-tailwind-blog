// const contentful = require('contentful-management')
// const client = contentful.createClient({
//   // This is the access token for this space. Normally you get the token in the Contentful web app
//   accessToken: 'YOUR_ACCESS_TOKEN',
// })

// // This API call will request a space with the specified ID
// client.getSpace('spaceId').then((space) => {
//   // This API call will request an environment with the specified ID
//   space.getEnvironment('master').then((environment) => {
//     // Now that we have an environment, we can get entries from that space
//     environment.getEntries().then((entries) => {
//       console.log(entries.items)
//     })

//     // let's get a content type
//     environment.getContentType('product').then((contentType) => {
//       // and now let's update its name
//       contentType.name = 'New Product'
//       contentType.update().then((updatedContentType) => {
//         console.log('Update was successful')
//       })
//     })
//   })
// })