import React, { Fragment } from 'react';


type HelloProps = {
	/** 보여주고 싶은 이름 */
	name: string
	/** 이 값을 `true` 로 설정하면 h1 태그로 렌더링 됩니다. */
	big: boolean
	/** Hello 버튼 누를 때 호출할 함수 */
	onHello?: () => void
	/** Bye 버튼 누를 때 호출할 함수 */
	onBye?: () => void
};

/**
 * 부차적인 설명을 넣고 싶을때 사용합니다.
 * 
 * - 리스트를 작성할땐 이렇게...
 * - 두번째 리스트를 작성해봅니다.
 */
const Hello = ({ name, big, onHello, onBye }: HelloProps) => {
    return (
		<Fragment>
			{ big ? <h1>{name}</h1> : <p>{name}</p> }
			<div>
				<button onClick={onHello}>Hello</button>
				<button onClick={onBye}>Bye</button>
			</div>
		</Fragment>
	)
};

Hello.defaultProps = {
    big: false
}

export default Hello;