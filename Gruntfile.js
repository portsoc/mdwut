module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        markdown: {
            all: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['public/md/index.md'],
                    dest: 'public/',
                    ext: '.html'
                }]
            }
        },
        concat: {
            options: {
                separator: '<br />\n',
            },
            dist: {
                src: [
                    'src/**/*.md'
                ],
                dest: 'public/md/index.md'
            }
        },
        watch: {
            scripts: {
                files: [
                    'src/**/*.md'
                ],
                tasks: ['default'],
                options: {
                    nospawn: true,
                    interrupt: true
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'markdown']);
};