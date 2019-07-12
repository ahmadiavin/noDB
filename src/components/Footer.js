import React, {Component} from 'react';

export default class Footer extends Component {

	render() {
		return (
			<footer className="page__footer">
				<div className="container">
					<div className="column four">
					<h2>Connect</h2>
					<ul className="connect-list">
						<li className="connect-list__item">
							<a 
								className="connect-list__link"							
								href="https://www.linkedin.com/school/devmountain/"
								target="newwindow"
							>
								<i className="zmdi zmdi-linkedin zmdi-hc-5x" />
							</a>
						</li>
						<li className="connect-list__item">
							<a 
								className="connect-list__link"							
								href="https://github.com/ahmadiavin"
								target="newwindow"
							>
								<i className="zmdi zmdi-github-alt zmdi-hc-5x" />
							</a>
						</li>
						<li className="connect-list__item">
							<a 
								className="connect-list__link"
								href="http://codepen.io/ahmadiavin/"
								target="newwindow"
							>
								<i className="zmdi zmdi-codepen zmdi-hc-5x" />
							</a>
						</li>												
					</ul>
					</div>
				</div>
			</footer>
		);
	}

}
