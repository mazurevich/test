module.exports = function (config) {
  config.set({
    // base path used to resolve all patterns
    basePath: '',

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: ['PhantomJS'],
    browsers: ['Chrome'],

    coverageReporter: {
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'lcovonly', subdir: '.' },
      ],
    },

    // list of files/patterns to load in the browser
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      {
        pattern: 'spec.bundle.js',
        watched: false
      }
    ],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'spec.bundle.js': ['webpack', 'sourcemap']
    },

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



    webpack: {
      devtool: 'inline-source-map',
      module: {
        preLoaders: [
          {
            test: /\.spec\.js$/,
            include: /client/,
            exclude: /(bower_components|node_modules)/,
            loader: 'babel',
            query: {
              cacheDirectory: true,
            },
          },
          {
            test: /\.js?$/,
            include: /src/,
            exclude: /(node_modules|bower_components|\.spec\.js)/,
            loader: 'babel-istanbul',
            query: {
              cacheDirectory: true,
            },
          },
        ],

        loaders: [
          {
            test: /\.js$/,
            exclude: [/app\/lib/, /node_modules/, /\.spec\.js/],
            loader: 'babel'
          },
          {test: /\.html$/, loader: 'raw'},
          {test: /\.scss$/, loaders: ["style", "css", "sass"]},
          {test: /\.css$/, loaders: ["style", "css"]},
          {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
          {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
          {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
          {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ]
      }
    },

    webpackServer: {
      noInfo: true // prevent console spamming when running in Karma!
    },

    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage'],

    // web server port
    port: 9876,

    // enable colors in the output
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // toggle whether to watch files and rerun tests upon incurring changes
    autoWatch: false,


    // if true, Karma runs tests once and exits
    singleRun: true
  });
};
