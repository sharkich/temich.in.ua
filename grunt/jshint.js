module.exports = {

  options: {
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish')
  },

  main: [
    'client/components/**/*.js',
    'client/app/**/*.js'
  ]
};
