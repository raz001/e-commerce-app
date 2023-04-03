import React, { useState } from "react";
import { Link } from "react-router-dom";
//import { useHistory } from "react-router-dom";
import './Checkout.css'
const Checkout = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  //   const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with user info, such as sending it to a backend
    // Then redirect to home page
    // history.push("/");
  };

  return (

    <div className="main">

      <div id="heading">
        <h2 style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          fontWeight: "300",
          color: "#006BBd"
        }}>Shipping</h2>
      </div>



      <div id="f1">

        <div id="a">
          <label id="lab" for="First Name*">First Name* </label>
          <input type="text" name="First Name" id="First" /><br />
          <label id="lab" for="Last Name*">Last Name*</label><br />
          <input type="text" name="Last Name" id="First" /><br /><br />
        </div>
        <label id="lab" for="Pincode">   Pincode*</label>
        <input type="number" name="Pincode*" id="First" />
        <label id="lab" for="Address line 1*">Address line 1*</label>
        <input type="text" name="Address line 1" id="Add" /><br />
        <label id="lab" for="Address line 2*">Address line 2*</label>
        <input type="text" name="Address line 2 " id="Add" />
        <p id="blue"> + Add another street address field</p><br />

        <div id="b">
          <label id="lab" for="City*">City*</label><br />
          <input type="text" name="City " id="First" /><br />
          <label id="lab" for="State*">State*</label><br />
          <input type="text" name="State " id="First" /><br /><br />
        </div>

        <div id="c">
          <label id="lab" for="Phone Number*">Phone Number*</label><br />
          <input type="number" name="Phone Number" id="First" /><br />
          <label id="lab" for="Email addresss">Email Address*</label><br />
          <input type="text" name="Email Address" id="First" /><br />
        </div>

        <p id="blue"> + Add an alternate phone number
        </p>
        <h6>Do you have GSTIN? <button>No</button></h6>


        <p id="text">We’d love to stay in touch to hear about your needs; and keep you updated on products, services, solutions, exclusive offers and special events. Simply check below to stay in touch by post and phone.</p><br />

        {/* <p id="blue">Dell Technologies and its group of companies</p><br />
        <p id="text">For information on Dell Technologies’ policy on the protection of your personal data, see our Privacy Statement. You can unsubscribe at any time.</p><br /> */}
      </div>
      <hr />
      <h3 id="h4">Billing Address</h3>
      <li>Same as shipping information</li>
      <li> Use a different address and contact</li>

      <hr />
      <h3 id="h4">Delivery method</h3>
      <p id="text">To estimate your delivery date, enter your Postcode above.
      </p>
      <hr />
      <h3 id="h4">Assisted Purchase</h3>
      <p id="text">Please enter the name of the sales representative or the SA code of the Dell Exclusive store who has assisted you in this purchase.</p><br />

      <div id="d">
        <label id="lab" for="Name(Optional)">Name(Optional)</label><br />
        <input type="text" name="Name(Optional)" id="First" /><br />
        <label id="lab" for="SA code(Optional)">SA code(Optional)</label><br />
        <input type="number" name="SA code(Optional)" id="First" /><br />
      </div>

      <button id="redirect">
        <Link to='/' style={{
          textDecoration: "none",
          listStyle: "none",
          color: "black",
          fontWeight: "600"
        }}>Place Order</Link></button>

    </div>
  );
};

export default Checkout;
