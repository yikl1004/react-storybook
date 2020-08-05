/** @jsx jsx */
import { jsx } from '@emotion/core'
import { ComponentType, createElement } from 'react'
import { Link, LinkProps } from 'react-router-dom'



interface ILinkerProps extends LinkProps {
    tag?: string;
}
const Linker: React.FC<ILinkerProps> = ({ to, tag, target, children, ...rest }) => {

    let component: ComponentType<{ navigate: Function, href: string }> | undefined

    if ( tag ) {
        let props: { [key: string]: any } = {}
        tag === 'button' && ( props.type = tag )
        props.onClick = target === '_blank' && (() => window.open(to as string))
        component = renderProps =>  createElement(
            tag,
            { ...props, onClick: props.onClick || renderProps.navigate },
            children
        )

    }
    
    return <Link { ...rest } to={ to } component={ component }>{ children }</Link>
}

export default Linker