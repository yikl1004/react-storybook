/** @jsx jsx */
import { jsx } from '@emotion/core'
import { withKnobs, text } from '@storybook/addon-knobs'
import TextInput from '@components/forms/TextInput'
import Form from '@components/forms/Form'
import { useState } from 'react';
import JSONBeautify from 'json-beautify'


export default {
    title: 'components|Forms/TextInput',
    component: TextInput,
    decorators: [withKnobs],
    parameters: {
        componentSubtitle: '이것은 부제목',
    }
};

export const Text_Input = () => {
    const [formData, seData] = useState()
    const props = {
        name: text('name', 'myinput'),
        label: text('label', '레이블')
    };
  
    return (
        <Form onSubmit={(data: any) => seData(data)}>
            <TextInput {...props} />
            
            <br/><br/>
            <button type="submit">Submit</button>
            <hr/>
            <h2>Result</h2>
            <p>{ JSONBeautify(formData, null, 4, 20) }</p>
        </Form>
    );
};

Text_Input.story = {
    name: 'Default'
};