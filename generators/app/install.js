exports.install = function(answers, that, done) {
  if (answers.frameworkstype.contain('WebComponent Frameworks'))
    {
      for (i in answers.webcomponentframeworks)
        {
          switch (answers.webcomponentframeworks[i])
          {
            case "Polymer":
              that.bowerInstall(["Polymer/polymer"], {'save':true}, done);
              for (j in answers.polymermods)
                {
                  that.bowerInstall([answers.polymermods[j]], {'save':true}, done);
                }
              that.dest.mkdir('www/components', 755);
              break;
            case "X-Tag":
              // A Completer
              break;
            default:
              that.bowerInstall([answers.webcomponentframeworks[i]], {'save':true}, done);
          }
        }
    }
  if (answers.frameworkstype.contain('Unit Tests Framework'))
    {
      that.npmInstall([answers.unittestframework], {'save':true}, done);
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
                  that.bowerInstall([answers.angularmods[i]], {'save':true}, done);
                }
              that.dest.mkdir('www/js/controllers', '755');
              that.dest.mkdir('www/js/services', '755');
              that.dest.mkdir('www/js/routes', '755');
              that.dest.mkdir('www/templates', '755');
            default:
              that.bowerInstall([answers.structureframeworks[i]], {'save':true}, done);
          }
        }
    }
}
