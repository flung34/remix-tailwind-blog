const accessToken = process.env.CTF_MANAGEMENT_TOKEN;

export const contentfulManagement = require('contentful-management');
export const managementClient = contentfulManagement.createClient({
  accessToken: accessToken
});

