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
                    'src/01 - title-and-abstract/*.md',
                    'src/02 - introduction/*.md',
                    'src/03 - literature-review/*.md',
                    'src/04 - design/*.md',
                    'src/05 - implementation/*.md',
                    'src/06 - testing-and-evaluation/*.md',
                    'src/07 - conclusion/*.md',
                    'src/08 - references/*.md',
                    'src/09 - appendices/*.md'
                ],
                dest: 'public/md/index.md'
            }
        },
        watch: {
            scripts: {
                files: [
                    'src/01 - title-and-abstract/*.md',
                    'src/02 - introduction/*.md',
                    'src/03 - literature-review/*.md',
                    'src/04 - design/*.md',
                    'src/05 - implementation/*.md',
                    'src/06 - testing-and-evaluation/*.md',
                    'src/07 - conclusion/*.md',
                    'src/08 - references/*.md',
                    'src/09 - appendices/*.md'
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