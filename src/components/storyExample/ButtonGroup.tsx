/** @jsx jsx */
import { jsx, css } from '@emotion/core'


type ButtonGroupProps = {
    /** 종, 횡을 설정 */
    direction?: 'row' | 'column';
    /** 버튼을 오른쪽으로 정렬 */
    rightAlign?: boolean;
    /** 버튼 사이 간격 */
    gap?: string | number;
    /** 노출 될 button 들 */
    children: React.ReactNode;
    /** 스타일 커스터마이징 */
    className?: string;
};

/**
 * 여러개의 버튼을 노출합니다.
 */
const ButtonGroup = ({
    direction = 'row',
    rightAlign,
    gap = '0.5rem',
    className,
    children
}: ButtonGroupProps) => {
    return (
        <div
            css={[
                css({ display: 'flex', flexDirection: direction }),
                rightAlign && rightAlignStyle,
                gapStyle(direction, gap)
            ]}
            className={className}
        >
            { children }
        </div>
    );
};

const rightAlignStyle = css`justify-content: flex-end;`;
const gapStyle = (direction: ButtonGroupProps['direction'], gap: ButtonGroupProps['gap']) => {
    const marginType = direction === 'row' ? 'marginLeft' : 'marginTop';
    return css({ 'button + button': { [marginType]: gap } })
};

export default ButtonGroup;