var path = require('path');

module.exports = function (config) {
  config.set({

    // toggle whether to watch files and rerun tests upon incurring changes
    autoWatch: true,
    basePath: '',
    // browsers: ['PhantomJS'],
    browsers: ['Chrome'],
    coverageReporter: {
      reporters: [
        {type: 'html', subdir: 'html'},
        {type: 'lcovonly', subdir: '.'},
      ],
    },
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      {pattern: 'spec.bundle.js', watched: false}
    ],

    frameworks: [
      'jasmine',
    ],

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_ERROR,

    plugins: [
      // require("karma-phantomjs-launcher"),
      require("karma-chrome-launcher"),
      require("karma-jasmine"),
      require('karma-coverage'),
      require("karma-mocha-reporter"),
      require('jasmine-terminal-reporter'),
      require("karma-sourcemap-loader"),
      require("karma-webpack")
    ],

    preprocessors: {
      'spec.bundle.js': ['webpack', 'sourcemap'],
    },
    reporters: ['mocha'],

    singleRun: false,

    webpack: {
      devtool: 'inline-source-map',
      module: {
        preLoaders: [
          {
            test: /\.spec\.js$/,
            exclude: /(bower_components|node_modules)/,
            loader: 'babel',

          },
          // {
          //   test: /\.js?$/,
          //   exclude: [/node_modules/, /\.spec\.js$/],
          //   loader: 'babel-istanbul'
          //
          // },
        ],
        loaders: [
          {
            test: /\.js$/,
            exclude: [/node_modules/, /\.spec\.js$/],
            loader: 'babel'

          },
          {test: /\.html$/, loader: 'raw'},
          {test: /\.scss$/, loaders: ["style", "css", "sass"]},
          {test: /\.css$/, loaders: ["style", "css"]},
          {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
          {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
          {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
          {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ],
      },
    },
  });
};
