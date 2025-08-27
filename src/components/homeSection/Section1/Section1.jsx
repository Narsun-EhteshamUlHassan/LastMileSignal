import "./Section1.css"

const Section1 = () => {
    return (
        <div className="section1_main_container">
            <div className="">
                <h2 className="section1_main_heading">
                    Why Choose Us?
                </h2>
                <p
                    style={{ textTransform: "capitalize" }}
                    className="section1_main_para"
                >
                    A career in logistics teaches you transferable skills like forecasting, general management, workflow optimization along with communication, interpersonal and problem-solving skills.
                </p>
            </div>
            <div className="section1_card_main_container">
                <div className="section1_card_container">
                    <img src="" alt="" />
                    <h3>Flexibility</h3>
                    <p style={{ textTransform: "capitalize" }}>
                        We are a flexible company that can adapt to you changing needs. Whether you need a one-tiom shipment or a long-term transportation solution, we can help.
                    </p>
                </div>
                <div className="section1_card_container">
                    <img src="" alt="" />
                    <h3>Relaibility</h3>
                    <p>
                        Delux India Logistics is a reliable company that you can trust. We have a proven track record of delivering on our promises, and we are committed to providing our customers.
                    </p>
                </div>
                <div className="section1_card_container">
                    <img src="" alt="" />
                    <h3>Expertise</h3>
                    <p>
                        Our team of experience professionals is dedicated to providing our customers with the best possible service. We understand the challenges of transportation.
                    </p>
                </div>
                <div className="section1_card_container">
                    <img src="" alt="" />
                    <h3>Experience</h3>
                    <p>
                        Delux India Logistics has been in business for over 3 years and we have a wealth of experience in the transportation industry
                    </p>
                </div>
                <div className="section1_card_container">
                    <img src="" alt="" />
                    <h3>Value</h3>
                    <p>
                        Transport offers a great value for your money. We provide our customers with competitive rates and excellent service.
                    </p>
                </div>
                <div className="section1_card_container">
                    <img src="" alt="" />
                    <h3>
                        Safety
                    </h3>
                    <p>
                        We are committed to safety. We have a comprehensive safety program in place, and we are committed to transporting your cargo safely and securely.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Section1
