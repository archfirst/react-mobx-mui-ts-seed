module.exports = {
    description: 'Generate a React Component',
    prompts: [
        {
            type: 'input',
            name: 'componentName',
            message: "What is your Component's name?",
            validate: function(value) {
                if (/.+/.test(value)) {
                    return true;
                }
                return 'name is required';
            },
            default: 'MyComponent'
        },
        {
            type: 'list',
            name: 'componentType',
            message: 'What type of Component do you want?',
            choices: [
                { name: 'Component Class', value: 'class' },
                { name: 'Stateless Function', value: 'function' }
            ],
            default: 'class'
        },
        {
            type: 'folder',
            name: 'folder',
            message: 'Which folder should this go to?',
            basePath: './src', // Relative to CwD
            validate: function(value) {
                if (/.+/.test(value)) {
                    return true;
                }

                return 'folder is required';
            }
        }
    ],
    actions: function(data) {
        const actions = [];

        if (data.componentType === 'function') {
            actions.push({
                type: 'add',
                path: '../src/{{folder}}/{{dashCase componentName}}.tsx',
                templateFile: './component/function.hbs'
            });
        } else {
            actions.push({
                type: 'add',
                path: '../src/{{folder}}/{{dashCase componentName}}.tsx',
                templateFile: './component/class.hbs'
            });
        }

        return actions;
    }
};
