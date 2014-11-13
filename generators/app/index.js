Array.prototype.contain = function(value) {
  if (this.toString().match(value))
    return true;
  else
    return false;
};

var yeoman = require('yeoman-generator');
module.exports = yeoman.generators.Base.extend({
  constructor: function() {
    yeoman.generators.Base.apply(this, arguments);
  },
  initializing: {
    initHierarchy: function() {
      this.sourceRoot(this.sourceRoot() + '/../../../templates');
      this.dest.mkdir('builds', '755');
      this.dest.mkdir('server', '755');
      this.dest.mkdir('clients', '755');
      this.dest.mkdir('dist', '755');
      this.dest.mkdir('clients/components', '755');
      this.dest.mkdir('clients/configs', '755');
      this.dest.mkdir('clients/configs/development', '755');
      this.dest.mkdir('clients/configs/production', '755');
      this.dest.mkdir('clients/configs/shared', '755');
      this.dest.mkdir('clients/tests', '755');
      this.dest.mkdir('clients/tests/unit', '755');
      this.dest.mkdir('clients/tests/e2e', '755');
      this.dest.mkdir('clients/scripts', '755');
      this.dest.mkdir('clients/scripts/services', '755');
      this.dest.mkdir('clients/scripts/controllers', '755');
      this.dest.mkdir('clients/views', '755');
      this.dest.mkdir('clients/views/browsers', '755');
      this.dest.mkdir('clients/views/mobiles', '755');
      this.dest.mkdir('clients/views/desktops', '755');
      this.dest.mkdir('clients/scripts/controllers', '755');
      this.dest.mkdir('clients/scripts/controllers/mobiles', '755');
      this.dest.mkdir('clients/scripts/controllers/browsers', '755');
      this.dest.mkdir('clients/scripts/controllers/desktops', '755');
      this.dest.mkdir('clients/styles', '755');
      this.dest.mkdir('clients/assets', '755');
      this.dest.mkdir('clients/assets/img', '755');
      this.dest.mkdir('clients/assets/sound', '755');
      this.dest.mkdir('clients/tests/e2e/desktops', '755');
      this.dest.mkdir('clients/tests/e2e/mobiles', '755');
      this.dest.mkdir('clients/tests/e2e/browsers', '755');
      this.dest.mkdir('clients/tests/unit/shared', '755');
      this.dest.mkdir('clients/tests/unit/desktops', '755');
      this.dest.mkdir('clients/tests/unit/mobiles', '755');
      this.dest.mkdir('clients/tests/unit/browsers', '755');
      this.dest.mkdir('dist/server', '755');
      this.dest.mkdir('dist/android', '755');
      this.dest.mkdir('dist/ios', '755');
      this.dest.mkdir('dist/windowsphone', '755');
      this.dest.mkdir('dist/browser', '755');
      this.dest.mkdir('dist/windows', '755');
      this.dest.mkdir('dist/osx', '755');
      this.dest.mkdir('dist/linux', '755');
      this.dest.mkdir('server/controllers', '755');
      this.dest.mkdir('server/models', '755');
      this.dest.mkdir('server/routes', '755');
      this.dest.mkdir('server/configs', '755');
      this.dest.mkdir('server/configs/development', '755');
      this.dest.mkdir('server/configs/production', '755');
      this.dest.mkdir('server/configs/shared', '755');
      this.dest.mkdir('server/tests', '755');
      this.dest.mkdir('server/docs', '755');
      this.dest.mkdir('', '755');
    },
    initConf: function() {
      this.src.copy('.gitignore', '.gitignore');
      this.src.copy('.bowerrc', '.bowerrc');
    }
  },
  prompting: {
    promptInfos: function() {
      var done = this.async();
      this.prompt([{
        type    : 'input',
        name    : 'name',
        message : 'Project Name',
        default : this.appname // Default to current folder name
      }, {
        type    : 'input',
        name    : 'desc',
        message : 'Project Desc',
        default : this.appname // Default to current folder name
      }, {
        type    : 'input',
        name    : 'author',
        message : 'Project Author',
        default : this.appname // Default to current folder name
      }], function (answers) {
        var packagejson = {
          version: '0.1.0',
          main: 'index.js'
        };
        packagejson.name = answers.name;
        packagejson.description = answers.desc;
        packagejson.author = answers.author;
        this.dest.write("package.json", JSON.stringify(packagejson, undefined, 4));
        this.dest.write("bower.json", JSON.stringify(packagejson, undefined, 4));
        done();
      }.bind(this));
    },
    promptFrameworks: function() {
      var done = this.async();
      var basequestions = require('./basestack').basequestions;
      var clientquestions = require('./clientstack').clientquestions;
      var serverquestions = require('./serverstack').serverquestions;
      var questions = basequestions.concat(serverquestions).concat(clientquestions);
      this.prompt(questions, function (answers) {
        if (answers.frameworkstype.contain('WebComponent Frameworks'))
          {
            for (i in answers.webcomponentframeworks)
              {
                switch (answers.webcomponentframeworks[i])
                {
                  case "Polymer":
                    this.bowerInstall(["Polymer/polymer"], {'save':true}, done);
                    for (j in answers.polymermods)
                      {
                        this.bowerInstall([answers.polymermods[j]], {'save':true}, done);
                      }
                    this.dest.mkdir('www/components', 755);
                    break;
                  case "X-Tag":
                    // A Completer
                    break;
                  default:
                    this.bowerInstall([answers.webcomponentframeworks[i]], {'save':true}, done);
                }
              }
          }
        if (answers.frameworkstype.contain('Unit Tests Framework'))
          {
            this.npmInstall([answers.unittestframework], {'save':true}, done);
          }
        if (answers.frameworkstype.contain('Javascript Structure Frameworks'))
          {
            for (i in answers.structureframeworks)
              {
                switch (answers.structureframeworks[i])
                {
                  case "angularjs":
                    for (i in answers.angularmods)
                      {
                        this.bowerInstall([answers.angularmods[i]], {'save':true}, done);
                      }
                    this.dest.mkdir('www/js/controllers', '755');
                    this.dest.mkdir('www/js/services', '755');
                    this.dest.mkdir('www/js/routes', '755');
                    this.dest.mkdir('www/templates', '755');
                  default:
                    this.bowerInstall([answers.structureframeworks[i]], {'save':true}, done);
                }
              }
          }
        done();
      }.bind(this));
    }
  }
});
