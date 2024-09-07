const { defineConfig } = require('@vue/cli-service');
const path = require("path");
const PrerendererWebpackPlugin = require('@prerenderer/webpack-plugin')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new PrerendererWebpackPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, "dist"),
        // Required - Routes to render.
        routes: ["/", "/resources", "/merch"],
        postProcess: function (ctx) {
          var meta = {
            '/': {
              title: `XELIS - Private BlockDAG with Smart Contracts`,
              description: `XELIS is an innovative decentralized cryptocurrency built from scratch to preserve your privacy when spending.`,
              keywords: `BlockDAG, Homomorphic Encryption, Rust, Decentralized, Cryptocurrency, Blockchain, XELIS, XEL`
            },
            '/resources': {
              title: `XELIS - Resources`,
              description: `Links for wallets, nodes, exhchanges, mining specifications and more.`,
              keywords: ``,
            },
            '/merch': {
              title: `XELIS - Merchandises`,
              description: `Official XELIS premium merchandise products.`,
              keywords: ``,
            },
          }

          const metaItem = meta[ctx.route];

          ctx.html = ctx.html.replace(
            /<title>[^<]*<\/title>/i,
            '<title>' + metaItem.title + '</title>'
          )

          ctx.html = ctx.html.replace(
            /<meta name="description" content="">/i,
            '<meta name="description" content="' + metaItem.description + '">'
          )

          ctx.html = ctx.html.replace(
            /<meta name="keywords" content="">/i,
            '<meta name="keywords" content="' + metaItem.keywords + '">'
          )

          ctx.html = ctx.html.replace(
            /<meta property="og:title" content="">/i,
            '<meta property="og:title" content="' + metaItem.title + '">'
          )

          ctx.html = ctx.html.replace(
            /<meta property="og:description" content="">/i,
            '<meta property="og:description" content="' + metaItem.description + '">'
          )
        },
        // To check/detect is prerender environment
        rendererOptions: {
          injectProperty: '__PRERENDER_INJECTED',
          inject: {
            prerender: true
          },
        }
      }),
    ],
  },
})
