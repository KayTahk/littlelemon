function Highlights() {
    return (
    <div className="highlights">
        <h3>Weekly Specials</h3>
        <button>Online Menu</button>
        <div className="highlight-dish">
            <div className="dish-img"><img alt="dish"></img></div>
            <h4 className="dish-name">Dish Name</h4>
            <h4 className="price">$0.00</h4>
            <article className="dish-description"></article>
            <text className="highligh-delivery"></text>
            <div className="highlight-delivery-img"><img alt="Delivery"></img></div>
        </div>
    </div>
    );
}

export default Highlights;