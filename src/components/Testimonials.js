import TestimonialCard from './TestimonialCard';

const testimonials = [
    {
      userName: "Guest1",
      Text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        getImageSrc: () => require("./images/testimonial1.jpg"),
        getstarimg: () => require("./images/4star.png"),
    },
    {
        userName: "Guest2",
        Text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          getImageSrc: () => require("./images/Testimonial2.jpg"),
          getstarimg: () => require("./images/5star.png"),
      },
      {
        userName: "Guest3 ",
        Text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          getImageSrc: () => require("./images/Testimonial3.jpg"),
          getstarimg: () => require("./images/5star.png"),
      },
  ];


function Testimonials() {
    return (
        <div className="testimonials">
            <h3>Testimonials</h3>
        <div className='testimonialcard'>
        {testimonials.map((testimonial) => (
                <TestimonialCard
                  userName={testimonial.userName}
                  testimonialText={testimonial.Text}
                  imageSrc={testimonial.getImageSrc()}
                  starimage={testimonial.getstarimg()}
                />))}
        </div>
    </div>
    )};
export default Testimonials;