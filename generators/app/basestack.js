exports.basequestions = [
  {
    type    : 'list',
    name    : 'stack',
    choices : [{'name':'NodeJS MongoDB with Modern HTML5/CSS3/JS Client', 'value':'nodemongojs'},
                {'name':'Vibe.D MongoDB with Modern HTML5/CSS3/JS Client', 'value':'vibemongojs'},
                {'name':'Custom', 'custom'}
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
