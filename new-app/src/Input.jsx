//onChange = event handler used primarily with form elements

// ex. <input>, <textarea>, <select>, <radio></radio>

//Triggers a function every time the value of the input changes

import React, {useState} from "react";

function TakeInput() {
    const [name, setName] = useState();
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState();
    const [payment, setPayment] = useState();
    const [shipping, setShipping] = useState();

    function ChangeName(e){
        setName(e.target.value);
    }

    function ChangeQuantity(e){
        setQuantity(e.target.value);
    }

    function ChangeComment(e){
        setComment(e.target.value);
    }

    function paymentChange(e){
        setPayment(e.target.value)
    }
    function shippingChange(e){
        setShipping(e.target.value);
    }

    return(
        <div>
            <input value={name} type="text" onChange={ChangeName}/>
            <p>Name: {name}</p>

            <input value={quantity} type="number" onChange={ChangeQuantity}/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} placeholder="Enter delivery instructions" onChange={ChangeComment}/>
            <p>Comment: {comment}</p>

            <select name="" id="" value={payment} onChange={paymentChange}>
                <option value="">Select an option</option>
                <option value="VISA">Visa</option>
                <option value="Master Card">Master Card</option>
                <option value="Gift card">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label value="">
                <input type="radio" value="pick up" 
                 checked = {shipping === "pick up"}
                 onChange={shippingChange} />
                 Pick Up
            </label><br /><br />

            <label htmlFor="">
                <input type="radio" value="Delivery"
                checked = {shipping === "Delivery"} 
                onChange={shippingChange}/> Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}

export default TakeInput