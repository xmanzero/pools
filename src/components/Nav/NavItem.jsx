import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class NavItem extends Component{
	render(){
		return(
			<div>
			  <li className="nav-item active  ">
			  	<Link className='nav-link' to='/dashboard'>
	              <i className="material-icons">dashboard</i>
	              <p>Dashboard</p>
	             </Link>
	          </li>
	          <li className="nav-item ">
	          	<Link className='nav-link' to='/poolblocks'>
	              <i className="material-icons">person</i>
	              <p>User Profile</p>
	            </Link>
	          </li>
	          <li className="nav-item ">
	          	<Link className='nav-link' to='/payments'>
	              <i className="material-icons">content_paste</i>
	              <p>Table List</p>
	            </Link>
	          </li>
	          <li className="nav-item ">
	          	<Link className='nav-link' to='/workerstatic'>
	              <i className="material-icons">library_books</i>
	              <p>Typography</p>
	            </Link>
	          </li>
	          <li className="nav-item ">
	            <a className="nav-link" href="./icons.html">
	              <i className="material-icons">bubble_chart</i>
	              <p>Icons</p>
	            </a>
	          </li>
	          <li className="nav-item ">
	            <a className="nav-link" href="./map.html">
	              <i className="material-icons">location_ons</i>
	              <p>Maps</p>
	            </a>
	          </li>
	          <li className="nav-item ">
	            <a className="nav-link" href="./notifications.html">
	              <i className="material-icons">notifications</i>
	              <p>Notifications</p>
	            </a>
	          </li>
	        </div>
		)
	}
}

export default NavItem;