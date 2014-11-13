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
      this.dest.mkdir('www', '755');
      this.dest.mkdir('dist', '755');
      this.dest.mkdir('config', '755');
      this.dest.mkdir('config/production', '755');
      this.dest.mkdir('config/development', '755');
      this.dest.mkdir('config/all', '755');
      this.dest.mkdir('www/js', '755');
      this.dest.mkdir('www/views', '755');
      this.dest.mkdir('www/assets', '755');
      this.dest.mkdir('www/css', '755');
      this.dest.mkdir('www/assets/img', '755');
      this.dest.mkdir('tests', '755');
      this.dest.mkdir('tests/unit', '755');
      this.dest.mkdir('tests/e2e', '755');
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
      this.prompt([{
        type    : 'list',
        name    : 'stack',
        choices : ['NodeJS MongoDB with Modern HTML5/CSS3/JS Client',
                    'Vibe.D MongoDB with Modern HTML5/CSS3/JS Client',
                    'Custom'
                  ],
        message : 'Choose app type',
        default : []
      }, {
        when    : function(answer) {
          return answer.stack == 'Custom';
        },
        type    : 'checkbox',
        name    : 'apptype',
        choices : ['Client',
                    'Server'
                  ],
        message : 'Choose app types',
        default : []
      }, {
        when    : function(answer) {
          return answer.stack == 'Custom' && answer.apptype.contain('Server');
        },
        type    : 'list',
        name    : 'serverstack',
        choices : ['MEAN',
                    'LAMP',
                    'Custom'
                  ],
        message : 'Choose server stack',
        default : []
      }, {
        when    : function(answer) {
          return answer.stack == 'Custom' && answer.apptype.contain('Client');
        },
        type    : 'list',
        name    : 'clientplatform',
        choices : ['Multiplatform HTML5/CSS3/Js',
                    'Multiplatform Native',
                    'Multiplatform Flash'
                  ],
        message : 'Choose client technology',
        default : []
      }, {
        when    : function(answer) {
          return answer.serverstack != undefined && answer.serverstack == 'Custom';
        },
        type    : 'list',
        name    : 'serverplatform',
        choices : ['Javascript',
                    'D',
                    'Ruby',
                    'Python',
                    'PHP',
                    'C#',
                    'Go'
                  ],
        message : 'Choose server language',
        default : []
      }, {
        when    : function(answer) {
          return answer.serverplatform != undefined && answer.serverplatform == 'D';
        },
        type    : 'list',
        name    : 'serverframework',
        choices : ['Vibe.d'
                  ],
        message : 'Choose server frameworks you want to use',
        default : []
      }, {
        when    : function(answer) {
          return answer.serverplatform != undefined && answer.serverplatform == 'Javascript';
        },
        type    : 'list',
        name    : 'serverframework',
        choices : ['NodeJS'
                  ],
        message : 'Choose server framework you want to use',
        default : []
      }, {
        when    : function(answer) {
          return answer.serverplatform != undefined && answer.serverplatform == 'Javascript' &&
                  answer.serverframework == 'NodeJS';
        },
        type    : 'list',
        name    : 'serverwebframework',
        choices : ['Express'
                  ],
        message : 'Choose server web framework you want to use',
        default : []
      }, {
        when    : function(answer) {
          return answer.serverframework != undefined &&
                  answer.serverframework == "NodeJS" && answer.serverwebframework == 'Express';
        },
        type    : 'list',
        name    : 'serverotherswebframeworks',
        choices : ['Passport'
                  ],
        message : 'Choose others server frameworks you want to use',
        default : []
      }, {
        when    : function(answer) {
          return answer.serverplatform != undefined && answer.serverplatform == 'Ruby';
        },
        type    : 'list',
        name    : 'serverframework',
        choices : ['Rails'
                  ],
        message : 'Choose server frameworks you want to use',
        default : []
      }, {
        when    : function(answer) {
          return answer.serverplatform != undefined && answer.serverplatform == 'Python';
        },
        type    : 'list',
        name    : 'serverframework',
        choices : ['Django',
                    'Webpy'
                  ],
        message : 'Choose server frameworks you want to use',
        default : []
      }, {
        when    : function(answer) {
          return answer.serverplatform != undefined && answer.serverplatform == 'PHP';
        },
        type    : 'list',
        name    : 'serverframework',
        choices : ['Laravel',
                    'Symphony'
                  ],
        message : 'Choose server frameworks you want to use',
        default : []
      }, {
        when    : function(answer) {
          return answer.serverplatform != undefined && answer.serverplatform == 'C#';
        },
        type    : 'list',
        name    : 'serverframework',
        choices : ['.NET'
                  ],
        message : 'Choose server frameworks you want to use',
        default : []
      }, {
        when    : function(answer) {
          return answer.serverplatform != undefined && answer.serverplatform == 'Go';
        },
        type    : 'list',
        name    : 'serverframework',
        choices : ['Revel'
                  ],
        message : 'Choose server frameworks you want to use',
        default : []
      }, {
        when    : function(answer) {
          return answer.serverstack != undefined && answer.serverstack == 'Custom';
        },
        type    : 'list',
        name    : 'withdatabase',
        choices : ['yes',
                    'no'
                  ],
        message : 'Do you want to use a database ?',
        default : []
      }, {
        when    : function(answer) {
          return answer.withdatabase != undefined && answer.withdatabase == 'yes';
        },
        type    : 'list',
        name    : 'database',
        choices : ['MongoDB',
                    'Cassandra',
                    'HBase',
                    'BigTable',
                    'MySQL',
                    'PostgreSQL',
                    'MariaDB',
                    'Redis'
                  ],
        message : 'Choose database you want to use',
        default : []
      }, {
        type    : 'checkbox',
        name    : 'frameworkstype',
        choices : ['Javascript Structure Frameworks',
                    'WebComponent Frameworks',
                    'Unit Tests Framework',
                    'CSS Replacements', // A Implementer
                    'Javascript Replacements' // A Implementer
                  ],
        message : 'Choose frameworks types you want to use',
        default : []
      }, {
        when    : function(answer) {
          return answer.frameworkstype.contain('Unit Tests Framework');
        },
        type    : 'list',
        name    : 'unittestframework',
        choices : [{'name':'Jasmine', 'value':'jasmine'},
                    {'name':'Mocha', 'value':'mocha'},
                    {'name':'QUnit', 'value':'qunit'}
                  ],
        message : 'Choose which unit test framework you want to use',
        default : 'jasmine'
      }, {
        when    : function(answer) {
          return answer.frameworkstype.contain('Javascript Structure Frameworks');
        },
        type    : 'checkbox',
        name    : 'structureframeworks',
        choices : [{'name':'AngularJS', 'value':'angularjs'},
                    {'name':'EmberJS', 'value':'ember'},
                    {'name':'BackboneJS', 'value':'backbone'},
                    {'name':'RequireJS', 'value':'requirejs'},
                    {'name':'JQuery', 'value':'jquery'}
                  ],
        message : 'Choose structure frameworks you want to use',
        default : []
      }, {
        when    : function(answer) {
          return answer.structureframeworks.contain('angularjs');
        },
        type    : 'checkbox',
        name    : 'angularmods',
        choices : ['angular-route', 'angular-resource', 'angular-touch', 'angular-mocks', 'angular-animate'],
        message : 'Choose angular modules you want to use',
        default : []
      }, {
        when    : function(answer) {
          return answer.frameworkstype.contain('WebComponent Frameworks');
        },
        type    : 'checkbox',
        name    : 'webcomponentframeworks',
        choices : ["Polymer",
                    "X-Tag",
                    {'name':'Bootstrap', 'value':'bootstrap'},
                    {'name':'Foundation', 'value':'foundation'},
                    {'name':'JQueryUI', 'value':'jquery-ui'},
                    {'name':'JQueryMobile', 'value':'jquery-mobile'}
                  ],
        message : 'Choose UI frameworks you want to use',
        default : []
      }, {
        when    : function(answer) {
          return answer.webcomponentframeworks.contain('Polymer');
        },
        type    : 'checkbox',
        name    : 'polymermods',
        choices : [
                    {'name':'Polymer Core Elements', 'value':'Polymer/core-elements'},
                    {'name':'Polymer Paper Elements', 'value':'Polymer/paper-elements'}
                  ],
        message : 'Choose polymer mods you want to use',
        default : []
      }], function (answers) {
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
