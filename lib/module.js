const { resolve } = require('path')

module.exports = function (moduleOptions) {
  this.nuxt.hook('builder:extendPlugins', (plugins) => {
    const options = {
      authModule: false,
      connectOnLogin: true,
      disconnectOnLogout: true,
      ...this.options.echo,
      ...moduleOptions
    }

    const { dst } = this.addTemplate({
      src: resolve(__dirname, 'plugin.js'),
      fileName: 'echo.js',
      options
    })

    plugins.push({
      ssr: false,
      src: resolve(this.options.buildDir, dst)
    })
  })
}

module.exports.meta = require('../package.json')
