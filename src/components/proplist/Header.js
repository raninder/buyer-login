import view from '../images/view.png';
import street from '../images/street.png';
import share from '../images/share.png';
import heart from '../images/heart.png';
import circle from '../images/circle.png';
import '../styles/header.css'
import {useNavigate } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart, faShareNodes, faCircle} from "@fortawesome/free-solid-svg-icons";

const Header = ({data}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/images')
  }

	return ( 
		<>
      <div className='content grid5 mtop'>
          <div className='box' >
            <img className="img1" src={data.cover} alt='' />
            <button className="viewBtn1"> 
            {/* <FontAwesomeIcon icon={faCircle} /> 3D Walkthrough  */}
            <img src={view} alt="3d view" height="15" width="15"/>  3D Walkthrough 
            </button> 
            <button className="viewBtn2"> 
            <img src={street} alt="3d view" height="15" width="15"/> Street View
            </button> 
            <div className="img-div">
						  <img className="img2" src={data.img2} alt='' />
						    <img className="img3" src={data.img3} alt=''/>
                <button className="img-button" onClick = {handleClick}> See all 36 images </button> 
              <div className="like-icons">
              <img src={heart} className="hicon" alt="like" />
              <img src={share} className="hicon" alt="share" />
              <img src={circle} className="hicon" alt="subscribe" />
              </div>
            </div>
          </div>
      </div>
    </>
	 );
}
 
export default Header;