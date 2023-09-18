import Post from "../models/Post.js";

class PostController {
    async create(req, res) {
        try {
            const {author, title, content, picture} = req.body
            const post = await Post.create({author, title, content, picture})
            res.json(post)
        } catch (e) {
            res.status(500).json(`MongoDB error: ${e.message}`)
        }
    }

    async all(req, res) {
        try {
            const posts = await Post.find()
            return res.json(posts)
        } catch (e) {
            res.status(500).json(`MongoDB error: ${e.message}`)
        }
    }

    async get(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                res.status(400).json({'message': 'ID not specified'})
            }
            const post = await Post.findById(id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(`MongoDB error: ${e.message}`)
        }
    }

    async update(req, res) {
        try {
            const post = req.body
            if (!post._id) {
                res.status(400).json({'message': 'ID not specified'})
            }
            const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
            return res.json(updatedPost)
        } catch (e) {
            res.status(500).json(`MongoDB error: ${e.message}`)
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                res.status(400).json({'message': 'ID not specified'})
            }
            const post = await Post.findByIdAndDelete(id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(`MongoDB error: ${e.message}`)
        }
    }

}

export default new PostController()