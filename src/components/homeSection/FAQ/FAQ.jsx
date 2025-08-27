import "./FAQ.css"

const FAQ = () => {
  return (
    <div className="faq_main_container flex">
      <div className="faq_sub_container">
        <h2>
          Frequently Asked Questions
        </h2>

        <div className="tab">
          <input type="radio" name="acc" id="acc1" />
          <label htmlFor="acc1">
            <h3>
              01
            </h3>
            <h4>
              Will you transport my belongings inside the furniture itself?
            </h4>
          </label>
          <div className="content">
            <p>
              Clothes and other movable items are removed and
              packed separately in boxes.
              This also makes them lighter to carry furniture away.
            </p>
          </div>
        </div>

        <div className="tab">
          <input type="radio" name="acc" id="acc2" />
          <label htmlFor="acc2">
            <h3>
              02
            </h3>
            <h4>
              Should I pre-pack everything for them to carry
              away to the transport facility?
            </h4>
          </label>
          <div className="content">
            <p>
              No, you do not need to pre-pack things.
              But, if you wish to be better prepared, you can do that too.
            </p>
          </div>
        </div>
        <div className="tab">
          <input type="radio" name="acc" id="acc3" />
          <label htmlFor="acc3">
            <h3>
              03
            </h3>
            <h4>
              What will Delux India Logistics in Jaipur not pack?
            </h4>
          </label>
          <div className="content">
            <p>
              Ideally, you should never pack dangerous items that
              come under the 'dangerous goods' list.
              If you are unsure, please check with the representative
              who visits your home to assess your requirements.
            </p>
          </div>
        </div>
        <div className="tab">
          <input type="radio" name="acc" id="acc4" />
          <label htmlFor="acc4">
            <h3>
              04
            </h3>
            <h4>
              Can I call them directly on the day of shifting?
            </h4>
          </label>
          <div className="content">
            <p>
              Personnel from the company needs to visit your home to assess the
              weight and capacity of your belongings so they can plan
              to bring adequate supplies and transport them accordingly.
              Delux India Logistics are available during Monday:- 12:00 am - 11:59 pm,
              Tuesday:- Open 24 Hrs, Wednesday:- Open 24 Hrs,
              thu:- Open 24 Hrs, Friday:- Open 24 Hrs,
              Saturday:- Open 24 Hrs, Sunday:- Open 24 Hrs.
              So, schedule a house call accordingly.
            </p>
          </div>
        </div>
        <div className="tab">
          <input type="radio" name="acc" id="acc5" />
          <label htmlFor="acc5">
            <h3>
              05
            </h3>
            <h4>
              Can I send my pets with the packers and movers?
            </h4>
          </label>
          <div className="content">
            <p>
              No, they only transport movable items and properties.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
