module.exports = {
  publicPath: "./",
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "The Art of Amber Wu";
      args[0].meta = {
        keywords: "plein, Amber Wu",
        description: "Amber Wu's main website"
      }
      return args;
    })
  }
}