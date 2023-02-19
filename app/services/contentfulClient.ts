const space = process.env.CTF_SPACE_ID;
console.log("🚀 ~ file: contentfulClient.ts:2 ~ space", space)
const accessToken = process.env.CTF_DELIVERY_TOKEN;
console.log("🚀 ~ file: contentfulClient.ts:4 ~ accessToken", accessToken)

const contentful = require('contentful');
export const client = contentful.createClient({
    space: space,
    accessToken: accessToken,
});


