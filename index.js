const { deleteSync, copySync, moveSync, listFileSync, fullPathSync } = require('./src/file');
const { log, warn, error, linelog } = require('./src/log');
const process = require('./src/process');
const options = require('./src/options');
const { get, post } = require('./src/remote');
const network = require('./src/network');
const mimeTypes = require('./src/mime.types');
const server = require('./src/server');

module.exports = {

    // 命令行相关
    options,

    // 文件操作相关
    deleteSync, copySync, moveSync, listFileSync, fullPathSync,

    // 日志打印
    log, warn, error, linelog,

    // 进度打印
    process,

    // 请求
    get, post,

    // 查看网络信息
    network,

    // 文件类型
    mimeTypes,

    // 服务器
    server
};