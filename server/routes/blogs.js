const router = require("express").Router();
const Blog = require("../Models/Blog");

// All Blogs
router.route("/").get((req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  Blog.find()
    .sort({ date: -1 })
    .limit(limit)
    .then((blogs) => res.json({"status": 200, "message": "Success!", data: blogs, page, limit}))
    .catch((err) => res.status(400).json({"status": 400, "message": "Error: " + err}));
});


// Add Blog
router.route("/add").post((req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const newBlog = new Blog({ title, content });
  newBlog
    .save()
    .then(() => res.json({"status": 200, "message": "Blog added!"}))
    .catch((err) => res.status(400).json("Error: " + err));
});


// Get Blog
router.route("/blog/:id").get((req, res) => {
  Blog.findById(req.params.id)
    // .then((blog) => res.json(blog))
    .then((blog) => res.json({"status": 200, "message": "Success!", data: blog}))
    .catch((err) => res.status(400).json("Error: " + err));
});


// Update Blog
router.route("/update/:id").post((req, res) => {
  Blog.findById(req.params.id)
    .then((blog) => {
      blog.title = req.body.title;
      blog.content = req.body.content;

      blog
        .save()
        .then(() => res.status(200).json({"status": 200, "message": "Blog updated!"}))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});


// Delete Blog
router.route("/delete/:id").delete((req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then(() => res.json({"status": 200, "message": "Blog deleted."}))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

