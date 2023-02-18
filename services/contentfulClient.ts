const contentful = require("contentful-management");
export const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "03apgk6h5449",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "Zw3VSMsDxAEohfCJhE_g5OuifqG7x48rM73E8QVCIWw"
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
// client
//   .getEntry("4uSC5c1xWN7riLNP8aK9pW")
//   .then(entry => console.log(entry))
//   .catch(err => console.log(err));