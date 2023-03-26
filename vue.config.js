module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('vue', '@vue/compat');

    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => ({
        ...options,
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("swiper"),
          compatConfig: {
            MODE: 3,
          },
        },
      }));
  },
};
