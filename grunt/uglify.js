module.exports = {
  all: {
    files: [{
      expand: true,
      cwd: 'client',
      src: [
        'components/**/*.js',
        'app/**/*.js'
      ],
      dest: 'dist/scripts',
      ext: '.min.js'
    }]
  }
};
