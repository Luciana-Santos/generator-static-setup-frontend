const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  welcome() {
    this.log('Bem-vinde ao Gerador de Setup Estático');
  }

  writing() {
    this.fs.copy(
      this.templatePath('src/index.html'),
      this.destinationPath('src/index.html'),
    );
    this.fs.copy(
      this.templatePath('.eslintrc.json'),
      this.destinationPath('.eslintrc.json'),
    );
    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore'),
    );
    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
    );
    this.fs.copy(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js'),
    );
    this.fs.copy(
      this.templatePath('package-lock.json'),
      this.destinationPath('package-lock.json'),
    );
    this.fs.copy(this.templatePath('src/app'), this.destinationPath('src/app'));
  }

  end() {
    this.log(' ');
    this.log('Tudo certo!');
    this.log(' ');
    this.log('Só executar o npm start e ser feliz!');
    this.log(' ');
  }
};
