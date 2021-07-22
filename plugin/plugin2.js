class WebpackPlugin2 {
    constructor(options) {
      this.options = options
    }
    apply(compiler) {
      compiler.hooks.run.tap('run', () => {
        console.log('开始编译...')
      })
  
      compiler.hooks.compile.tap('compile', () => {
        console.log('compile')
      })
  
      compiler.hooks.done.tap('compilation', () => {
        console.log('compilation')
      })
    }
  }
  
  module.exports = WebpackPlugin2