module.exports = (config, env) => {
  config.output.filename = 'bundle.js';
  config.optimization.runtimeChunk = false;
  config.optimization.splitChunks = false;

  return config;
};
