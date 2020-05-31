/** @jsx jsx */
import { jsx } from '@emotion/core'
import { MutableRefObject } from 'react'


export interface IProps {
    /** react-hook-form Context에 등록시켜주는 함수 */
    register?: MutableRefObject<any>;
    /** 해당 Form요소의 이름 */
    name: string;
    /** 화면에 표시될 텍스트 */
    label: string;
}

const TextInput = ({ register, name, label, ...rest }: IProps) => {
    return (
        <label>
            <span>{ label }</span>
            <input type="text" name={name} ref={register} {...rest} />
        </label>
    )
}

export default TextInput;