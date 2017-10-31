'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        'Welcome to the scrumtrulescent ' + chalk.red('generator-motor') + ' generator!'
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'Please input project name(react-motor-wap): ',
        default: 'test',
        store: true
      },
      {
        type: 'input',
        name: 'projectDesc',
        message: 'Description: ',
        default: 'project description',
        store: true
      },
      {
        type: 'input',
        name: 'projectAuthor',
        message: 'Author: ',
        default: 'regrex',
        store: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    let projectName = this.projectName;
    let projectDesc = this.projectDesc;
    let projectAuthor = this.projectAuthor;
    let pagePath = 'src/templates/';
    let pageletPath = 'src/pagelets/';
    let widgetPath = 'src/widgets/';
    let componentPath = 'src/components/';
    let assetPath = 'src/assets';

    this.fs.copy(this.templatePath('README.md'), this.destinationPath('README.md'));

    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      {
        projectName: projectName,
        projectDesc: projectDesc,
        projectAuthor: projectAuthor
      }
    );

    this.mkdir(pagePath);
    this.mkdir(pageletPath);
    this.mkdir(widgetPath);
    this.mkdir(componentPath);
    this.mkdir(assetPath);
  }

  install() {
    this.installDependencies();
  }
};
