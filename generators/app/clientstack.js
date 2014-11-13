exports.clientquestions = [
  {
    when    : function(answer) {
      return answer.apptype != undefined && answer.apptype.contain('Client');
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
      return answer.apptype != undefined && answer.apptype.contain('Client');
    },
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
      return answer.frameworkstype != undefined &&
              answer.frameworkstype.contain('Unit Tests Framework');
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
      return answer.frameworkstype != undefined &&
              answer.frameworkstype.contain('Javascript Structure Frameworks');
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
      return answer.structureframeworks != undefined &&
              answer.structureframeworks.contain('angularjs');
    },
    type    : 'checkbox',
    name    : 'angularmods',
    choices : ['angular-route', 'angular-resource', 'angular-touch', 'angular-mocks', 'angular-animate'],
    message : 'Choose angular modules you want to use',
    default : []
  }, {
    when    : function(answer) {
      return answer.frameworkstype != undefined &&
              answer.frameworkstype.contain('WebComponent Frameworks');
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
      return answer.webcomponentframeworks != undefined &&
              answer.webcomponentframeworks.contain('Polymer');
    },
    type    : 'checkbox',
    name    : 'polymermods',
    choices : [
                {'name':'Polymer Core Elements', 'value':'Polymer/core-elements'},
                {'name':'Polymer Paper Elements', 'value':'Polymer/paper-elements'}
              ],
    message : 'Choose polymer mods you want to use',
    default : []
  }
];
