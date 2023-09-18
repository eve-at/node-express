import Post from '../models/Post.js'
import fileService from './FileService.js'

class PostService {
    async create(post, picture) {
        const fileName = fileService.saveFile(picture)
        return Post.create({ ...post, picture: fileName })
    }

    async all() {
        return Post.find()
    }

    async get(id) {
        if (!id) {
            throw new Error('ID must be specified')
        }

        return Post.findById(id)
    }

    async update(post) {
        if (!post._id) {
            throw new Error('ID must be specified')
        }

        return Post.findByIdAndUpdate(post._id, post, {new: true})
    }

    async delete(id) {
        if (!id) {
            throw new Error('ID must be specified')
        }

        return Post.findByIdAndDelete(id)
    }
}

export default new PostService()
