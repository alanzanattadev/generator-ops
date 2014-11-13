Array.prototype.contain = function(value) {
  if (this.toString().match(value))
    return true;
  else
    return false;
};

var that;

var yeoman = require('yeoman-generator');
var install = require('./install');
var basestack = require('./basestack');
var clientstack = require('./clientstack');
var serverstack = require('./serverstack');

module.exports = yeoman.generators.Base.extend({
  constructor: function() {
    yeoman.generators.Base.apply(this, arguments);
  },
  initializing: {
    init: function() {
      that = this;
    },
    initHierarchy: function() {
      this.sourceRoot(this.sourceRoot() + '/../../../templates');
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
      var basequestions = basestack.basequestions;
      var clientquestions = clientstack.clientquestions;
      var serverquestions = serverstack.serverquestions;
      var questions = basequestions.concat(serverquestions).concat(clientquestions);
      this.prompt(questions, function (answers) {
        that.answers = answers;
        done();
      }.bind(this));
    }
  },
  configuring: {

  },
  default: {

  },
  writing: {
    makeFolders: function() {
      var done = this.async();
      install.makeBaseFolderStruct(that, that.answers);
      done();
    }
  },
  conflicts: {

  },
  install: {
    run: function() {
      var done = this.async();
      install.install(that.answers, that, done);
      done();
    }
  },
  end: {

  }
});
