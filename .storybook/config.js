import { configure } from '@storybook/react';


configure(require.context('../src', true, /\.stories\.(js|mdx|tsx)/), module);