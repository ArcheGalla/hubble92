import { h } from 'preact';
import style from './style.scss';

export default (props) => (
	<div className={style.content}>
			{props.children}
	</div>
);