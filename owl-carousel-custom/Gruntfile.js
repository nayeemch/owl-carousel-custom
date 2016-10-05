module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify:{
            build:{
                files: [{
                    cwd: 'src/js/',
                    src: '**/**/*.js',
                    dest: 'src/build/js/',
                    expand: true,
                    flattern: false,
                    ext: '.min.js'
                }]
            }
        },
        sass: {
            dist: {
                files: [{
                    cwd: 'src/scss/',
                    src: '**/**/*.scss',
                    dest: 'src/build/css/',
                    expand: true,
                    flattern: false,
                    ext: '.css'
                }]
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                }
            },
            all: ['src/js/carousel.js']
        },
        watch:{
            js:{
                files:['src/js/*.js'],
                tasks:['uglify:build']
            },
            css: {
                files:['src/scss/*.scss'],
                tasks:['sass']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default',['watch']);
};