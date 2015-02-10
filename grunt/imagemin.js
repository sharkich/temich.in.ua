module.exports = {
  all: {
    files: [{
      expand: true,
      cwd: 'client/',
      src: [
        'assets/**/*.{png,jpg,gif}',
        'components/**/*.{png,jpg,gif}',
        'app/**/*.{png,jpg,gif}'
      ],
      dest: 'dist/images/'
    }]
  }
};
