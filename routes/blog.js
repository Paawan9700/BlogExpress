const express = require("express");
const app = express();

const path = require("path");
const router = express.Router();

const allblogs = require("../data/blogs.js");
const blogs = allblogs.blogs

router.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "../templates/index.html"));
  res.render('home');
});

router.get("/blogs", (req, res) => {
  res.render('bloghome', {
    blogs : blogs
  })
});


router.get("/blogpost/:slug", (req, res) => {
  const myBlog = blogs.filter((e) => {
     return e.slug == req.params.slug
  });

  // console.log(myBlog)
  // res.sendFile(path.join(__dirname, "../templates/blogpostpage.html"));
  res.render('blogpostpage', {
    title : myBlog[0].title, 
    content : myBlog[0].description
  })
});


module.exports = router;
