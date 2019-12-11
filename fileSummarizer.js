const fs = require('fs');
const path = require('path');
function summarizeFilesInDirectorySync(directory) {
    return fs.readdirSync(directory).map(fileName => ({
        directory,
        fileName
    }));
}
const FOLDER_OBJECT = {
    '/path/to/file1.txt': 'lala',
    '/path/two/file2.txt': 'lplp'
}
const createFolder = (pathObject) => {
    Object.keys(pathObject).forEach((_path) => {
        const isAbsolute = path.isAbsolute(_path);
        const fileName = isAbsolute && path.basename(_path);
        const folderName = isAbsolute && path.dirname(_path);
        fs.mkdir('./' + folderName, { recursive: true }, (err) => {
            if (err) throw err;
            fs.writeFileSync('./' + folderName + '/' + fileName, pathObject[_path], { flag: 'a' });
        });
    })
}
createFolder(FOLDER_OBJECT);
exports.summarizeFilesInDirectorySync = summarizeFilesInDirectorySync;