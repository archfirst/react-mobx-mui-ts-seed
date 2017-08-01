module.exports = function(plop) {
    plop.inquirer.registerPrompt('folder', require('inquirer-directory'));

    plop.setGenerator('component', require('./component'));
};
