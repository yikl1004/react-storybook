/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { centerd } from '@/style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import Modal from '@components/common/Modal'
import { useCallback } from 'react'

interface IPopupProps {
    open?: boolean;
    onClose(open: boolean): void
}

const Popup: React.FC<IPopupProps> = ({ open = false, onClose = () => {} }) => {
    const close = useCallback(() => {
        onClose(false)
    }, [onClose])

    if ( open ) {
        return (
            <Modal>
                <div css={[defaultStyle, centerd]}>
                    <div className="popup">
                        <strong>Title</strong>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores blanditiis dicta, est, excepturi quidem at suscipit perspiciatis error fugiat sunt amet alias officiis ipsum ipsa repudiandae harum illo! Aliquam, sapiente!</p>
                        <button type="button" onClick={ close }>
                            <FontAwesomeIcon icon={ faTimes } />
                        </button>
                    </div>
                </div>
            </Modal>
        )
    } else {
        return null
    }
}

export default Popup

const defaultStyle = css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    flex-direction: column;
    background-color: rgba(0,0,0,0.6);
    .popup {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 10;
        transform: translate(-50%, -50%);
        background-color: #fff;
    }
`