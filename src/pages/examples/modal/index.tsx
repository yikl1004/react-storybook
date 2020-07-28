// /** @jsx jsx */
// import { jsx } from '@emotion/core'
import { createPortal } from 'react-dom'


interface IModalProps {

}

const Modal: React.FC<IModalProps> = ({ children }) => {
    const el = document.body
    return createPortal(children, el)
}

export default Modal