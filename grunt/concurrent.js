module.exports = {

  // Опции
  options: {
    limit: 3
  },

  // Задачи разработки
  devFirst: [
    'clean',//clean /dist
    'jshint'//check js
  ],
  devSecond: [
    'sass:dev',//create css
    'uglify'//min js
  ],

  // Производственные задачи
  prodFirst: [
    'clean',//clean /dist
    'jshint'//check js
  ],
  prodSecond: [
    'sass:prod',//create css
    'uglify'//min js
  ],

  // Задачи изображений
  imagemin: [
    'imagemin'
  ],

  // Задачи watch
  watch: [
    'watch'
  ],

  // Задачи test
  test: [
    'jshint'//check js
  ]
};
