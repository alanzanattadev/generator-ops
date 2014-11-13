exports.basequestions = [
  {
    type    : 'list',
    name    : 'stack',
    choices : [{'name':'Scalable NodeJS MongoDB with Modern HTML5/CSS3/JS Client', 'value':'nodemongojs'},
                {'name':'Scalable Vibe.D MongoDB with Modern HTML5/CSS3/JS Client', 'value':'vibemongojs'},
                {'name':'Custom', 'value':'custom'}
              ],
    message : 'Choose app type',
    default : []
  }, {
    when    : function(answer) {
      return answer.stack == 'custom';
    },
    type    : 'checkbox',
    name    : 'apptype',
    choices : ['Client',
                'Server'
              ],
    message : 'Choose app types',
    default : []
  }
];
