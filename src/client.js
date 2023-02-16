import { createClient } from "contentful";

export const client = createClient({
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  space: process.env.REACT_APP_SPACE_ID,
  // accessToken: "l6CcojMUjw3N7mKEP0ef8lgCGN_ESO76FUyA4ZJqT78",
  // space: "75958qusqnzq",
});
// const client = require("contentful").createClient({
//   space: "<my_space_id>",
//   accessToken: "<my_access_token>",
// });
