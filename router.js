import Router from 'express'
import Post from "./models/Post.js";
import PostController from "./controllers/PostController.js";

const router = new Router()

router.post('/posts', PostController.create)
router.get('/posts', PostController.all)
router.get('/posts/:id', PostController.get)
router.put('/posts', PostController.update)
router.delete('/posts/:id', PostController.delete)

export default router