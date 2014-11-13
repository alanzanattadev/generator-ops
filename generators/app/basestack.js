exports.basequestions = [
  {
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
  }
];
