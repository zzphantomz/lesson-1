import React from "react";
import StripeCheckout from "react-stripe-checkout";
import * as icon from "../../assets/favicon.ico";
const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JkmaUBZ2NGatRunlJqYp4q3wU2bj6KJVzaJ1EuMB1js9Txpj8WCqp9RBdVCuteFEhlYKm2oLkjWniEXNJnXuBv200IznOQ96B";

  const onToken = (token) => {
    console.log(token);
    alert("payment successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image={icon}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
