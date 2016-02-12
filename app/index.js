/**
 * Created by Marcin on 2016-02-12.
 */

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    constructor: function () {
        generators.Base.apply(this, arguments);

        this.tplPath = this.sourceRoot()+'/../../templates/';

    },

    folders: function () {
        console.log('Creating project...');
        this.directory(this.tplPath, '.');
    },

    install: function () {
        console.log('Installing dependencies...');
        this.npmInstall();
        this.bowerInstall();
    }
});