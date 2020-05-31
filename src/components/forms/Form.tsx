/** @jsx jsx */
import { jsx } from '@emotion/core'
import { createElement, ReactNode, ReactElement } from 'react'
import { useForm } from "react-hook-form";


export interface IFormProps {
    defaultValues?: { [key: string]: any };
    children?: ReactNode | ReactNode[];
    onSubmit: (data: any) => void
}

const Form = ({ defaultValues, children, onSubmit }: IFormProps) => {
    const methods = useForm({ defaultValues });
    const { handleSubmit } = methods;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            { Array.isArray(children)
                ? (children as ReactElement[]).map((child) => {
                    return child.props.name
                        ? createElement(child.type, {...{
                            ...child.props,
                            register: methods.register,
                            key: child.props.name
                        } })
                        :
                        child;
                    }
                )
                : 
                children
            }
        </form>
    )
}

export default Form;