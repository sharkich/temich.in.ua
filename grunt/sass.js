module.exports = {
  // Development settings
  dev: {
    options: {
      outputStyle: 'nested',
      sourceMap: true,
      compass: true
    },
    files: [{
      expand: true,
      cwd: 'client',
      src: [
        'components/**/*.scss',
        'app/**/*.scss'
      ],
      dest: 'dist/styles',
      ext: '.css'
    }]
  },
  // Production settings
  prod: {
    options: {
      outputStyle: 'compressed',
      sourceMap: true,
      compass: true
    },
    files: [{
      expand: true,
      cwd: 'client',
      src: [
        'components/**/*.scss',
        'app/**/*.scss'
      ],
      dest: 'dist/styles',
      ext: '.css'
    }]
  }
};
