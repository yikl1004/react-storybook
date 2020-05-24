import React from 'react';
import Hello from '@components/Hello/Hello';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions'
import mdx from '@components/Hello/Hello.mdx'



export default {
    title: 'components|basic/Hello',
    component: Hello,
    decorators: [withKnobs],
    parameters: {
        componentSubtitle: '이것은 부제목',
        docs: {
            page: mdx
        }
    }
}

export const hello = () => {
    const big = boolean('big', false);
    const name = text('name', 'Storybook');
    return (
        <Hello
            name={name}
            big={big}
            onHello={action('onHello')}
            onBye={action('onHello')}
        />
    )
};

hello.story = {
    name: 'Default'
}


export const standard = () => <Hello name="Story Book" />
export const big = () => <Hello name="Story Book" big />