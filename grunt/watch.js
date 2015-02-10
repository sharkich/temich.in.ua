module.exports = {

  options: {
    spawn: false,
    livereload: true
  },

  scripts: {
    files: [
      'client/**/*.js'
    ],
    tasks: [
      'jshint',
      'uglify'
    ]
  },

  styles: {
    files: [
      'client/**/*.scss'
    ],
    tasks: [
      'sass:dev'
    ]
  }
};
