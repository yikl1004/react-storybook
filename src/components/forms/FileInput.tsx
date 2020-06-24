/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { MutableRefObject, ChangeEvent, useState } from 'react'


export interface IFileInputProps {
    /** react-hook-form Context에 등록시켜주는 함수 */
    register?: MutableRefObject<any>;
    /** 해당 Form요소의 이름 */
    name: string;
    /** 화면에 표시될 텍스트 */
    label: string;
    /** 확장자 제한, ex) jpg, docx, pdf  */
    accept: string[];
}

const FileInput = ({ register, name, accept = [], label = '파일업로드', ...rest }: IFileInputProps) => {
    const [filename, setFilename] = useState('')
    const accepts = accept.reduce((acc, item, idx) => {
        return acc + (idx === 0 ? `.${item}` : `, .${item}`)
    }, '')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files as FileList
    
        if ( files.length && files[0].size > (10 * Math.pow(1024, 2) )) {
            alert('용량 제한')
            e.target.value = ''
        } else {
            if ( files.length ) {
                setFilename(files[0].name)
            }
        }
    }

    return (
        <label css={fileInput}>
            <span className="fake-button">{ label }</span>
            <span className="fake-input">{ filename }</span>
            <input 
                accept={accepts} 
                type="file" 
                name={name} 
                ref={register} 
                onChange={ onChange }
                {...rest}
            />
        </label>
    );
};

export default FileInput;


const fileInput = css`
    position: relative;
    display: flex;
    width: 280px;

    input {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        opacity: 0;
        top: 0;
        left: 0;
        cursor: pointer;
    }
    .fake-button {
        display: inherit;
        flex-shrink: 0;
        flex-grow: 0;
        background-color: #000;
        padding: 5px 10px;
        color: #fff;
    }
    .fake-input {
        display: inherit;
        box-sizing: border-box;
        border: 1px solid #000;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100%;
    }
`
