/** @jsx jsx */
import { jsx, css } from '@emotion/core'


type ButtonProps = {
    /** 자식요소 */
    children: React.ReactNode;
    /** 버튼의 생김새를 설정 */
    theme?: 'primary' | 'secondary' | 'tertiary';
    /** 버튼의 크기를 설정 */
    size?: 'small' | 'medium' | 'big';
    /** 버튼을 비활성화 시킵니다. */
    disabled?: boolean;
    /** 버튼의 넗이를 설정 */
    width?: string | number;
    /** 아이콘만 노출할지 여부 */
    iconOnly?: boolean;
    /** click 이벤트 발생 시 트리거되는 함수 */
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
    children,
    onClick,
    theme = 'primary',
    size = 'medium',
    disabled = false,
    width,
    iconOnly = false
}: ButtonProps) => {
    return (
        <button 
            css={[style, themes[theme], sizes[size], { width }, iconOnly && [iconOnlyStyle, iconOnlySizes[size]]]}
            onClick={onClick}
            disabled={disabled}
        >
            { children }
        </button>
    )
}

const style = css`
    outline: none;
    border: none;
    box-sizing: border-box;
    height: 2rem;
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    background: #20c997;
    color: white;
    border-radius: 0.25rem;
    line-height: 1;
    font-weight: 600;
    &:focus {
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    }
    &:hover {
        background: #38d9a9;
    }
    &:active {
        background: #12b886;
    }
    &:disabled {
        cursor: not-allowed;
    }

    svg {
        width: 1em;
        margin-right: 1em;
    }
`;

const themes = {
    primary: css`
        background: #20c997;
        color: white;
        svg {
            fill: white;
        }
        &:hover {
            background: #38d9a9;
        }
        &:active {
            background: #12b886;
        }
        &:disabled {
            background: #aed9cc;
        }
        svg {
            fill: aed9cc;
        }
    `,
    secondary: css`
        background: #e9ecef;
        color: #343a40;
        svg {
            fill: #343a40;
        }
        &:hover {
            background: #f1f3f5;
        }
        &:active {
            background: #dee2e6;
        }
        &:disabled {
            color: #c6d3e1;
        }
        svg {
            fill: #c6d3e1;
        }
    `,
    tertiary: css`
        background: none;
        color: #20c997;
        svg {
            fill: #20c997;
        }
        &:hover {
            background: #e6fcf5;
        }
        &:active {
            background: #c3fae8;
        }
        &:disabled {
            color: #bcd9d0;
        }
        svg {
            fill: #bcd9d0;
        }
    `
};

const sizes = {
    small: css`
        height: 1.75rem;
        font-size: 0.75rem;
        padding: 0 0.875rem;
    `,
    medium: css`
        height: 2.5rem;
        font-size: 1rem;
        padding: 0 1rem;
    `,
    big: css`
        height: 3rem;
        font-size: 1.125rem;
        padding: 0 1.5rem;
    `
}

const iconOnlyStyle = css`
    padding: 0;
    border-radius: 50%;
    svg {
        margin: 0;
    }
`
const iconOnlySizes = {
    small: css`
        width: 1.75rem;
    `,
    medium: css`
        width: 2.5rem;
    `,
    big: css`
        width: 3rem;
    `
}

export default Button
