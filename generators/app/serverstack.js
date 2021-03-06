exports.serverquestions = [
    {
      when    : function(answer) {
        return answer.stack == 'custom' && answer.apptype.contain('Server');
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
      type    : 'checkbox',
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
      type    : 'checkbox',
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
      message : 'Choose databases you want to use (use only one in general cases)',
      default : []
    }, {
      when    : function(answer) {
        return answer.database != undefined && answer.database == 'MongoDB' &&
                answer.serverframework == 'NodeJS';
      },
      type    : 'checkbox',
      name    : 'databasedriver',
      choices : ['Mongoose'
                ],
      message : 'Which NodeJS MongoDB Specific framework do you want to add to your project',
      default : []
    }
];
