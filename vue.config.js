module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: 'demo',
        win: {
          icon: 'build/icons/icon.ico'
        },
        mac: {
          icon: 'build/icons/icon.icns'
        }
      }
    }
  }
}
