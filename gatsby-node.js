const path = require("path");

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@templates": path.resolve(__dirname, "src/templates"),
        "@constants": path.resolve(__dirname, "src/constants"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
        "@images": path.resolve(__dirname, "src/images"),
      },
    },
  });
};
