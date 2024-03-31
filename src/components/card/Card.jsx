import BedImg from "../../assets/bed.png";
import PimImg from "../../assets/pin.png";
import BathImg from "../../assets/bath.png";
import SaveImg from "../../assets/save.png";
import ChatImg from "../../assets/chat.png";
import { Link } from "react-router-dom";
import "./Card.scss";

function Card({ item }) {
  return (
    <div className='card'>
      <Link to={`/${item.id}`} className='imageContainer'>
        <img src={item.img} alt='Rooms Image' />
      </Link>
      <div className='textContainer'>
        <h2 className='title'>
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className='address'>
          <img src={PimImg} alt='Pin Image' />
          <span>{item.address}</span>
        </p>
        <p className='price'>$ {item.price}</p>
        <div className='bottom'>
          <div className='features'>
            <div className='feature'>
              <img src={BedImg} alt='Bed Image' />
              <span>{item.bedroom} bedrooms</span>
            </div>
            <div className='feature'>
              <img src={BathImg} alt='Bed Image' />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src={SaveImg} alt="save" />
            </div>
            <div className="icon">
              <img src={ChatImg} alt="chat" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
