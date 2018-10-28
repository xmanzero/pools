import React, {Component} from 'react';
import NavItem from 'components/Nav/NavItem.jsx';
class Nav extends Component{
	render(){
		return(
			<div className="sidebar" data-color="purple" data-background-color="white" >
				<Logo/>
				<div className="sidebar-wrapper">
					<ul className='nav'>
						<NavItem/>
					</ul>
				</div>
			</div>
		)
	}
}

class Logo extends Component{
	render(){
		return(
			 <div className="logo">
		        <a href="#" className="simple-text logo-normal">
		          Xiao Pool
		        </a>
		      </div>
		);
	}
}

export default Nav;