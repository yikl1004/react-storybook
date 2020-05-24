const path = require('path')

module.exports = {
    stories: ['../src/**/*.stories.js'],
    addons: [
        '@storybook/preset-create-react-app',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-knobs'
    ],
    presets: [
        '@storybook/addon-docs/preset'
    ],
    webpackFinal: (config) => {
        config.resolve.modules = [
            ...(config.resolve.modules || []),
            path.resolve(__dirname, '../')
        ];

        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            '@components': 'src/components',
            '@storyExample': 'src/components/storyExample'
        };

        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [{
                    loader: require.resolve('babel-loader'),
                    options: {
                        presets: [
                            ['react-app', { flow: false, typescript: true }]
                        ]
                    }
                },
                require.resolve('react-docgen-typescript-loader')
            ]
        });
        
        config.resolve.extensions.push('.ts', '.tsx');

        return config
    }
};
