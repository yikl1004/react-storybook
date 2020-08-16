/** @jsx jsx */
import { jsx, css } from '@emotion/core'
// import {useSpring, animated} from 'react-spring'


interface IToastProps {
    content?: string;
}

const Toast: React.FC<IToastProps> = ({
    content = '내용이 없습니다.'
}) => {
    return (
        <div css={ toastStyle }>
            <div className="list">
                <div className="toast">
                    <div className="icon-wrapper">
                        <svg 
                            aria-hidden="true"
                            height="16"
                            width="12"
                            viewBox="0 0 12 16" 
                            className="icon"
                        >
                                <path fill-rule="evenodd" d="M5.05.01c.81 2.17.41 3.38-.52 4.31C3.55 5.37 1.98 6.15.9 7.68c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.01 8.68 2.15 5.05.02L5.03 0l.02.01z"/>
                        </svg>
                    </div>
                    <div className="content">
                        <strong>TODO</strong>
                        <ul>
                            <li>{ content }</li>
                        </ul>
                    </div>
                    <div 
                        role="button"
                        className="close"
                    >
                        <svg 
                            aria-hidden="true"
                            height="16"
                            width="14"
                            viewBox="0 0 14 16"
                            className="close-icon" 
                        >
                                <path fill-rule="evenodd" d="M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" />
                        </svg>
                        <span className="text">Close</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Toast;


const toastStyle = css`
    box-sizing: border-box;
    max-height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    position: fixed;
    z-index: 1000;
    top: 0px;
    right: 0px;
    padding: 8px;

    .list {

        .toast {
            background-color: rgb(255, 235, 230);
            box-shadow: rgba(0, 0, 0, 0.176) 0px 3px 8px;
            color: rgb(191, 38, 0);
            display: flex;
            margin-bottom: 8px;
            width: 360px;
            transform: translate3d(0px, 0px, 0px);
            border-radius: 4px;

            .icon-wrapper {
                background-color: rgb(255, 86, 48);
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
                color: rgb(255, 235, 230);
                flex-shrink: 0;
                padding-bottom: 8px;
                padding-top: 8px;
                position: relative;
                text-align: center;
                width: 30px;
                overflow: hidden;

                .icon {
                    position: relative;
                    z-index: 1;
                    overflow: hidden;
                    color: rgb(255, 235, 230);
                    text-align: center;
                    display: inline-block;
                    vertical-align: text-top;
                    fill: currentcolor
                }
            }
            .content {
                flex-grow: 1;
                font-size: 14px;
                line-height: 1.4;
                min-height: 40px;
                padding: 8px 12px;
            }

            .close {
                cursor: pointer;
                flex-shrink: 0;
                opacity: 0.5;
                padding: 8px 12px;
                color: rgb(191, 38, 0);

                .close-icon {
                    display: inline-block;
                    vertical-align: text-top;
                    fill: currentcolor;
                }
                .text {
                    clip: rect(1px, 1px, 1px, 1px);
                    height: 1px;
                    position: absolute;
                    white-space: nowrap;
                    width: 1px;
                    border-width: 0px;
                    border-style: initial;
                    border-color: initial;
                    border-image: initial;
                    overflow: hidden;
                    padding: 0px;
                }
            }
        }
    }
`
