/// <binding ProjectOpened='watch' />
module.exports = function (grunt) {
    grunt.initConfig({
        clean: ["wwwroot/lib/*", "temp/"],
        concat: {
            all: {
                src: ["TypeScript/*.js", "TypeScript/**/*.js", "TypeScript/**/**/*.js", "TypeScript/**/**/**/*.js"],
                dest: "temp/combined.js"
            }
        }, 
        jshint: {
            files: ["temp/*.js"],
            options: {
                "-W069": false
            }
        },
        uglify: {
            all: {
                src: ["temp/combined.js"],
                dest: "wwwroot/lib/combined.min.js"
            }
        },
        watch: {
            files: ["TypeScript/*.js", "TypeScript/**/*.js", "TypeScript/**/**/*.js", "TypeScript/**/**/**/*.js"], tasks: ["all"]
        } 
    });

    grunt.loadNpmTasks("grunt-contrib-clean"); 
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("build", ["clean", "concat", "jshint", "uglify"]);
};