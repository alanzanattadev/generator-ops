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
  initHierarchy: function() {
    this.sourceRoot(this.sourceRoot() + '/../../../templates');
    this.dest.mkdir('www', '755');
    this.dest.mkdir('dist', '755');
    this.dest.mkdir('www/css', '755');
    this.dest.mkdir('www/img', '755');
    this.dest.mkdir('www/js', '755');
  },
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
      done();
    }.bind(this));
  },
  /*promptFrameworks: function() {
    var done = this.async();
    this.prompt({
      type    : 'checkbox',
      name    : 'response',
      choices : ['AngularJS', 'Polymer'],
      message : 'Choose frameworks you want to use',
      default : this.appname // Default to current folder name
    }, function (answers) {
      this.log(answers.name);
      if (answers.response.contain('AngularJS'))
        {
          this.prompt({
            type    : 'checkbox',
            name    : 'angularmod',
            choices : ['angular-route', 'angular-resources', 'angular-touch', 'angular-mocks'],
            message : 'Choose angular modules you want to use',
            default : this.appname // Default to current folder name
          }, function (answers) {
            this.log(answers.angularmod);

            done();
          }.bind(this));
        }
      if (answers.response.contain('Polymer'))
        {

        }
      done();
    }.bind(this));
  },*/

  writeConf: function() {
    this.src.copy('.gitignore', '.gitignore');
    this.src.copy('.bowerrc', '.bowerrc');
  }
});
