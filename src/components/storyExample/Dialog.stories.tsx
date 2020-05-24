import React from 'react'
import Dialog from '@storyExample/Dialog'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

// typings
import { DialogProps } from '@storyExample/Dialog'


export default {
    title: 'components|Dialog',
    comnponent: Dialog,
    parameters: {
        docs: {
            inlineStories: false
        }
    },
    decorators: [withKnobs]
}

export const dialog = () => {
    const props: DialogProps = {
        title: text('title', '결제 성공'),
        description: text('description', '결제가 성공적으로 이루어졌습니다.'),
        visible: boolean('visible', true),
        confirmText: text('confirmText', '확인'),
        cancelText: text('cancelText', '취소'),
        cancellable: boolean('cancellable', false),
    }

    return <Dialog {...props} />
}

dialog.story = {
    name: 'Default'
}

export const cancellable = () => (
    <Dialog
        title="포스트 삭제"
        description="포스트를 정말로 삭제 하시겠습니까?"
        visible
        confirmText="삭제"
        cancellable
    />
);

export const customContent = () => (
    <Dialog visible hideButtons>
        Custom Content
    </Dialog>
)