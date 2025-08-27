import "./Hero.css"
import { hero_img } from "../../assets"

const Hero = () => {
  return (
    <div className="flex hero_main_container">
      <div className="hero_left_section">
        <h1 className="hero_left_heading">
          Delux India Logistics
        </h1>
        <p className="hero_left_about">
          Delux India Logistics in KAMLA NEHRU NAGAR, Jaipur, is a leading player in the Packers And Movers industry. With a strong commitment to customer satisfaction and a growing base of clients, they offer a range of services including transport, courier, logistics, and more.
        </p>
        <p className="hero_left_about_small_screen">
        Delux India Logistics(KAMLA NEHRU NAGAR, Jaipur) is a leading player in the Packers And Movers industry.<hr />We offer a range of services including transport, courier, logistics, and more.
        </p>
        <button className="hero_left_action_btn">
          Hire Us
        </button>
      </div>
      <div className="hero_img_container">
        <img src={hero_img} />
      </div>
    </div>
  )
}

export default Hero
