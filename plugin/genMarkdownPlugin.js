class genMarkdownPlugin {
    constructor(options) {
        // 获取插件配置项
        this.filename = options && options.filename ? options.filename : 'FILELIST.md'
    }

    apply(compiler) {
        // 注册compiler上的emit钩子
        compiler.hooks.emit.tapAsync('genMarkdownPlugin', (compilation, cb) => {
            // 通过 compilation.assets 获取文件数量
            let fileCount = Object.keys(compilation.assets).length

            // 添加统计信息
            let text = `## webpack处理了${fileCount}个文件 ovo \n\n`

            // 通过compilation.assets获取文件名列表
            for (let filename in compilation.assets) {
                text += `- ${filename}\n`
            }

            // 往compilation.assets中添加清单文件
            compilation.assets[this.filename] = {
                source: () => text,
                size: () => text.length
            }

            // 执行回调，让webpack继续执行
            cb()
        })
    }
}

module.exports = genMarkdownPlugin