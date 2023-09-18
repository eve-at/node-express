import * as uuid from 'uuid'
import * as path from 'path'

class FileService {
    saveFile(file) {
        const fileName = uuid.v4() + '.jpg'
        const filePath = path.resolve('images', fileName)
        file.mv(filePath)

        return fileName
    }
}

export default new FileService()