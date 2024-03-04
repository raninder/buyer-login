import search from '../../assets/icons/search.png';
import notification from '../../assets/icons/notification.png';
import logo from "../../assets/icons/logo.png";
import './proplist_styles/nav.css'
import { Avatar } from '@mui/material';


const Navbar = () => {
	return ( 
		<>
      <header>
        <div className='nav-container nav-flex'>
          <div >
          <img src={logo} alt="Logo" className="logo"/>
					</div>
					<form className="search-form">
            <input  type="search" className="search" /> 
						<img src={search} alt="search icon" className='search-icon'/>
						<span className="notif">
						<img src={notification} alt="notification" className='bell-icon'/>
						<Avatar />
						</span>
						</form>
				</div>
			</header>
		</>			
	 );
}
 
export default Navbar;