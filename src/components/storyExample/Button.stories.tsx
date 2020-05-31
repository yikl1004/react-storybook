/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Button from '@storyExample/Button'
import ButtonGroup from '@storyExample/ButtonGroup'
import Icon from '@storyExample/Icon'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

export default {
    title: 'components|Example/Button',
    component: Button,
    decorators: [withKnobs]
}

export const button = () => {
    const label = text('children', 'BUTTON')
    const size = select('size', ['small', 'medium', 'big'], 'small')
    const theme = select('theme', ['primary', 'secondary', 'tertiary'], 'primary')
    const disabled = boolean('disabled', false)
    const width = text('width', '10rem')

    return (
        <Button
            size={size}
            theme={theme}
            disabled={disabled}
            width={width}
            onClick={action('onClick')}
        >
            { label }
        </Button>
    )
}

button.story = {
    name: 'Default'
}

const wrapper = css`
    .description {
        margin-bottom: 0.5rem;
    }
    & > div + div {
        margin-top: 2rem;
    }
`

export const themes = () => (
    <div css={ wrapper }>
        <div>
            <div className="description">primary</div>
            <Button size="small" theme="primary">PRIMARY</Button>
        </div>
        <div>
            <div className="description">secondary</div>
            <Button size="small" theme="secondary">SECONDARY</Button>
        </div>
        <div>
            <div className="description">tertiary</div>
            <Button size="small" theme="tertiary">TERTIARY</Button>
        </div>
    </div>
);

export const sizes = () => (
    <div css={wrapper}>
        <div>
            <div className="description">small</div>
            <Button size="small" theme="primary">small</Button>
        </div>
        <div>
            <div className="description">medium</div>
            <Button size="medium" theme="primary">medium</Button>
        </div>
        <div>
            <div className="description">big</div>
            <Button size="big" theme="primary">big</Button>
        </div>
    </div>
);

export const disableds = () => (
    <div css={wrapper}>
        <div>
            <div className="description">primary</div>
            <Button disabled theme="primary">disabled</Button>
        </div>
        <div>
            <div className="description">secondary</div>
            <Button disabled theme="secondary">disabled</Button>
        </div>
        <div>
            <div className="description">tertiary</div>
            <Button disabled theme="tertiary">disabled</Button>
        </div>
    </div>
)

export const customSized = () => (
    <div css={wrapper}>
        <div>
            <div className="description">Custom width</div>
            <Button width="20rem">Custom width</Button>
        </div>
        <div>
            <div className="description">Full width</div>
            <Button width="100%">Full width</Button>
        </div>
    </div>
);

export const withIcon = () => (
    <div>
        <ButtonGroup>
            <Button size="small">
                <Icon icon="heart" /> Like
            </Button>
            <Button size="medium">
                <Icon icon="pencil" /> Like
            </Button>
            <Button size="big">
                <Icon icon="exit" /> Like
            </Button>
        </ButtonGroup>
    </div>
)

export const iconOnly = () => (
    <div>
        <ButtonGroup>
            <Button iconOnly size="small">
                <Icon icon="heart" />
            </Button>
            <Button iconOnly size="medium">
                <Icon icon="pencil" />
            </Button>
            <Button iconOnly size="big">
                <Icon icon="exit" />
            </Button>
        </ButtonGroup>
    </div>
)