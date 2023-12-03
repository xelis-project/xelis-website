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
        routes: ["/"],
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
