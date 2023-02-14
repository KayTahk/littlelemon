

const TestimonialCard = ({ userName, testimonialText, imageSrc, starimage }) => {
    const cardStyle = (
        <div className="testimonial-card">
            <div className="username"><h4 className="username">{userName}</h4></div>
            <article className="testimonial-text">{testimonialText}</article>
            <div className="starimg"><img alt="star rating" src={starimage}></img></div>
            <div className="testimonial-img"><img alt="testimonial" src={imageSrc}></img></div>
        </div>
    )

    return cardStyle;
  };

  export default TestimonialCard;