import { Routes, Route, Link} from 'react-router-dom';
import OrderOnline from './OrderOnline';
import Card from './Card';
import deliveryimage from './images/delivery.svg';

const dishes = [
    {
      title: "Greek Salad",
      price: "$0.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      getImageSrc: () => require("./images/greek salad.jpg"),
    },
    {
      title: "Hummus",
      price: "$0.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      getImageSrc: () => require("./images/hummus.jpg"),
    },
    {
      title: "Bruschetta",
      price: "$0.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      getImageSrc: () => require("./images/greek salad.jpg"),
    },
    {
      title: "Lemon Cake",
      price: "$0.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      getImageSrc: () => require("./images/lemon dessert.jpg"),
    },
  ];


function Highlights() {
    return (
    <div className="highlights">
        <div className="highlights-header">
            <h3>Weekly Specials</h3>
            <Link Link to="/order-online" className="reserve-button"><button>Online Menu</button></Link>
            <Routes>
                    <Route path="/order-online" element={<OrderOnline />}></Route>
            </Routes>
        </div>
        <div className='dishcard'>
            {dishes.map((dish) => (
                <Card
                  key={dish.title}
                  title={dish.title}
                  description={dish.description}
                  price={dish.price}
                  imageSrc={dish.getImageSrc()}
                  deliveryimage={deliveryimage}
                />))}
        </div>
    </div>
    )};
export default Highlights;