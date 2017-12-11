import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.scss';

export default class Header extends Component {
		render() {
				return (
					<header class="navbar">
							<section className="navbar-section">
									<Link className="navbar-brand mr-2" href="/">Home</Link>
									<Link className="btn btn-link" href="/profile">Me</Link>
									<Link className="btn btn-link" href="/profile/john">John</Link>
							</section>

							<section className="navbar-section">
									<div className="input-group input-inline">
											<input className="form-input" type="text" placeholder="search"/>
											<button className="btn btn-primary input-group-btn">Search</button>
									</div>
							</section>
					</header>
				);
		}
}
