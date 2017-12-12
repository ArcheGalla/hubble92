import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Footer from './footer';
import Content from './content';
import Home from '../routes/home';
import Profile from '../routes/profile';
import style from './app.scss';

// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {
		handleRoute = event => {
				this.currentUrl = event.url;
		};

		render() {
				return (
					<div className={style.app}>
							<Header/>
							<Content>
									<Router onChange={this.handleRoute}>
											<Home path="/"/>
											<Profile path="/profile/" user="me"/>
											<Profile path="/profile/:user"/>
									</Router>
							</Content>
							<Footer/>
					</div>
				);
		}
}
