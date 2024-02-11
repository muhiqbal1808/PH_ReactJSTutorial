import Get from "./Get";
import Post from "./Post";

// POST
const postNewsBlog = (data) => Post("posts", false, data);

// GET
const getNewsBlog = () => Get("posts?_sort=-createdAt", false);
const getComments = () => Get("comments", true);

const API = {
  postNewsBlog,
  getNewsBlog,
  getComments,
};

export default API;
