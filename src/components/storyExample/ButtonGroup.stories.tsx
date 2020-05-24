import React from 'react'
import ButtonGroup from '@storyExample/ButtonGroup'
import Button from '@storyExample/Button'
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs'


export default {
    title: 'components|ButtonGroup',
    component: ButtonGroup,
    decorators: [withKnobs]
}

export const buttonGroup = () => {
    const direction = radios('direction', { Row: 'row', Column: 'column' }, 'row')
    const rightAlign = boolean('rightAlign', false)
    const gap = text('gap', '0.5rem')
    const props = { direction, rightAlign, gap }
    return (
        <ButtonGroup {...props}>
            <Button>button</Button>
            <Button>button</Button>
        </ButtonGroup>
    )
}

buttonGroup.story = {
    name: 'Default'
}

export const rightAlign = () => (
    <ButtonGroup rightAlign>
        <Button theme="secondary">Button</Button>
        <Button>Button</Button>
        <Button size="big">Button</Button>
    </ButtonGroup>
)

export const customGap = () => (
    <ButtonGroup gap="1rem">
        <Button theme="secondary">Button</Button>
        <Button>Button</Button>
        <Button size="big">Button</Button>
    </ButtonGroup>
)

export const column = () => (
    <ButtonGroup direction="column">
        <Button theme="secondary">Button</Button>
        <Button>Button</Button>
        <Button size="big">Button</Button>
    </ButtonGroup>
)

export const customGapColumn = () => (
    <ButtonGroup direction="column" gap="1rem">
        <Button theme="secondary">Button</Button>
        <Button>Button</Button>
        <Button size="big">Button</Button>
    </ButtonGroup>
)