import { h, Component } from 'preact';
import style from './content.scss';

export default class Content extends Component {
		render(props) {
			return (
				<div className={style.container}>
						{...props}
				</div>
			);
		}
};