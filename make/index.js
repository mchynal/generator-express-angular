/**
 * Created by Marcin on 2016-04-26.
 */
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    gen: function (type, name) {

        var types = {
            controller: 'controllers',
            directive: 'directives',
            service: 'services'
        }


        if (types[type] === undefined) {
            console.error('Generator "' + type + '" not found!');
            return false;
        }

        this.fs.copyTpl(
            this.templatePath(type + '.js'),
            this.destinationPath('client/js/' + types[type] + '/' + name + '.js'),
            {name: name}
        );

    },

});
