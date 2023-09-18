import Post from "../models/Post.js";
import PostService from "../services/PostService.js";

class PostController {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body)
            res.json(post)
        } catch (e) {
            res.status(500).json(`Error: ${e.message}`)
        }
    }

    async all(req, res) {
        try {
            const posts = await PostService.all()
            return res.json(posts)
        } catch (e) {
            res.status(500).json(`Error: ${e.message}`)
        }
    }

    async get(req, res) {
        try {
            const post = await PostService.get(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(`Error: ${e.message}`)
        }
    }

    async update(req, res) {
        try {
            const updatedPost = await PostService.update(req.body)
            return res.json(updatedPost)
        } catch (e) {
            res.status(500).json(`Error: ${e.message}`)
        }
    }

    async delete(req, res) {
        try {
            const post = await PostService.delete(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(`Error: ${e.message}`)
        }
    }
}

export default new PostController()