module.exports = function(grunt) {

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        concat: {
            options: {
                seperator: ';',
            },
            dist: {
                src: ['src/scripts/*.js'],
                dest: 'build/final-fantasy.combined.js'
            },
        },

        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/main.js', 'src/templates/*.hbs', 'src/library/*.js'],
                        dest: 'build/',
                    }
                ]
            }
        },

        clean: [
            "build"
        ],

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');


    grunt.registerTask('build', ['clean', 'concat', 'copy']);
    grunt.registerTask('default', ['build']);
}
