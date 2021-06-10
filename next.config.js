module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.txt$/,
      use: 'raw-loader',
    });
    config.module.rules.push({
      test: /\.woff2$/,
      use: 'raw-loader',
    });
    config.module.rules.push({
      test: /\.mp4$/,
      use: 'file-loader?name=videos/[name].[ext]',
    });
    return config;
  },
};
