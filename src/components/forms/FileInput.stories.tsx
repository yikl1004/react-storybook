/** @jsx jsx */
import { jsx } from '@emotion/core'
import { withKnobs, text } from '@storybook/addon-knobs'
import FileInput from '@components/forms/FileInput'
import Form from '@components/forms/Form'
import { useState, useEffect } from 'react';
// import JSONBeautify from 'json-beautify'


export default {
    title: 'components|Forms/FileInput',
    component: FileInput,
    decorators: [withKnobs],
    parameters: {
        componentSubtitle: '이것은 부제목',
    }
};

export const File_Input = () => {
    const [formData, setData] = useState()
    useEffect(() => {
        console.log(formData)
    }, [formData])
    const props = {
        name: text('name', 'myfile'),
        label: text('label', 'upload')
    }

    return (
        <Form onSubmit={(data: any) => setData(data)}>
            <FileInput accept={['jpg', 'png', 'gif']} {...props} />
            
            <br/><br/>
            <button type="submit">Submit</button>
            <hr/>
            <h2>Result</h2>
            <p>{ JSON.stringify(formData) }</p>
        </Form>
    )
};

File_Input.story = {
    name: 'Default'
}