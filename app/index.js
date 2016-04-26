/**
 * Created by Marcin on 2016-02-12.
 */

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    constructor: function () {
        generators.Base.apply(this, arguments);
    },

    folders: function () {
        console.log('Creating project...');
        this.directory(this.sourceRoot(), '.');
    },

    install: function () {
        console.log('Installing dependencies...');
        this.npmInstall();
        this.bowerInstall();
        this.runInstall('gulp');
    }
});