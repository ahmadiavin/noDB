import React, {Component} from 'react';


export default class Footer extends Component {

	render() {
		return (
			<footer className="page__footer">
				<div class="ui bulleted list" className="footercontainer">
					<div className="column four">
					<h2>Connect</h2>
					<ul className="connect-list">
						<li className="connect-list__item">
							<a 
							    class="item"
								className="connect-list__link"							
								href="https://www.linkedin.com/school/devmountain/"
								target="newwindow"
							>
								LinkedIn
							</a>
							
						</li>
						<li className="connect-list__item">
							<a 
							class="item"
								className="connect-list__link"							
								href="https://github.com/ahmadiavin"
								target="newwindow"
							>
								Github
							</a>
						</li>
						<li className="connect-list__item">
							<a 
							class="item"
								className="connect-list__link"
								href="http://codepen.io/ahmadiavin/"
								target="newwindow"
							>
								Codepen
							</a>
						</li>												
					</ul>
					</div>
				</div>
			</footer>
		);
	}

}
