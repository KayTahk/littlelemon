import { Routes, Route, Link } from 'react-router-dom';
import OrderOnline from './OrderOnline';

const Card = ({ title, description, price, imageSrc, deliveryimage }) => {
    const cardStyle = (
        <div className="highlight-dish">
                <div className="dish-img"><img alt="dish" src={imageSrc}></img></div>
                <div className="dish-header"><h4 className="dish-name">{title}</h4><h4 className="price">{price}</h4></div>
                <article className="dish-description">{description}</article>
                <Link to="/order-online" className="nav-item"><div className='dish-delivery'><text className="highlight-delivery">Order for delivery</text>
                <div className="deliveryimg"><img alt="delivery truck" src={deliveryimage}></img></div></div></Link>
                <Routes>
                    <Route path="/order-online" element={<OrderOnline />}></Route>
                </Routes>
            </div>
    )

    return cardStyle;
  };

  export default Card;