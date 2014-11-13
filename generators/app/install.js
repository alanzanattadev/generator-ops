exports.install = function(answers, that, done) {
  if (answers.frameworkstype.contain('WebComponent Frameworks'))
    {
      for (i in answers.webcomponentframeworks)
        {
          switch (answers.webcomponentframeworks[i])
          {
            case "Polymer/polymer":
              that.bowerInstall([answers.webcomponentframeworks[i]], {'save':true}, done);
              for (j in answers.polymermods)
                {
                  that.bowerInstall([answers.polymermods[j]], {'save':true}, done);
                }
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
            default:
              that.bowerInstall([answers.structureframeworks[i]], {'save':true}, done);
          }
        }
    }
};

exports.makeClientFolderStruct = function(that, answers) {
  that.dest.mkdir('clients', '755');
  that.dest.mkdir('clients/components', '755');
  that.dest.mkdir('clients/configs', '755');
  that.dest.mkdir('clients/configs/development', '755');
  that.dest.mkdir('clients/configs/production', '755');
  that.dest.mkdir('clients/configs/shared', '755');
  that.dest.mkdir('clients/tests', '755');
  that.dest.mkdir('clients/tests/unit', '755');
  that.dest.mkdir('clients/tests/e2e', '755');
  that.dest.mkdir('clients/scripts', '755');
  that.dest.mkdir('clients/scripts/services', '755');
  that.dest.mkdir('clients/scripts/controllers', '755');
  that.dest.mkdir('clients/views', '755');
  that.dest.mkdir('clients/views/browsers', '755');
  that.dest.mkdir('clients/views/mobiles', '755');
  that.dest.mkdir('clients/views/desktops', '755');
  that.dest.mkdir('clients/scripts/controllers', '755');
  that.dest.mkdir('clients/scripts/controllers/mobiles', '755');
  that.dest.mkdir('clients/scripts/controllers/browsers', '755');
  that.dest.mkdir('clients/scripts/controllers/desktops', '755');
  that.dest.mkdir('clients/styles', '755');
  that.dest.mkdir('clients/assets', '755');
  that.dest.mkdir('clients/assets/img', '755');
  that.dest.mkdir('clients/assets/sound', '755');
  that.dest.mkdir('clients/tests/e2e/desktops', '755');
  that.dest.mkdir('clients/tests/e2e/mobiles', '755');
  that.dest.mkdir('clients/tests/e2e/browsers', '755');
  that.dest.mkdir('clients/tests/unit/shared', '755');
  that.dest.mkdir('clients/tests/unit/desktops', '755');
  that.dest.mkdir('clients/tests/unit/mobiles', '755');
  that.dest.mkdir('clients/tests/unit/browsers', '755');
};

exports.makeServerFolderStruct = function(that, answers) {
  that.dest.mkdir('server', '755');
  that.dest.mkdir('server/controllers', '755');
  that.dest.mkdir('server/models', '755');
  that.dest.mkdir('server/routes', '755');
  that.dest.mkdir('server/configs', '755');
  that.dest.mkdir('server/configs/development', '755');
  that.dest.mkdir('server/configs/production', '755');
  that.dest.mkdir('server/configs/shared', '755');
  that.dest.mkdir('server/tests', '755');
  that.dest.mkdir('server/docs', '755');
};

exports.makeBaseFolderStruct = function(that, answers) {
  that.dest.mkdir('builds', '755');
  that.dest.mkdir('dist', '755');
  that.dest.mkdir('dist/server', '755');
  that.dest.mkdir('dist/android', '755');
  that.dest.mkdir('dist/ios', '755');
  that.dest.mkdir('dist/windowsphone', '755');
  that.dest.mkdir('dist/browser', '755');
  that.dest.mkdir('dist/windows', '755');
  that.dest.mkdir('dist/osx', '755');
  that.dest.mkdir('dist/linux', '755');
}
