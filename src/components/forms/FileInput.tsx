/** @jsx jsx */
import { jsx } from '@emotion/core'
import { MutableRefObject, ChangeEvent } from 'react'


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
    const accepts = accept.reduce((acc, item, idx) => {
        return acc + (idx === 0 ? `.${item}` : `, .${item}`)
    }, '')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if ( files && files[0].size > (1 * 1024 * 1024 ) ) {
            alert('용량 제한')
            e.target.value = ''
        }
    }

    return (
        <label>
            <span>{ label }</span>
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