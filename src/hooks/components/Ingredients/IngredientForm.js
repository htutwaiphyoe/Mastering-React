import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const onTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const onAmountChange = (e) => {
        setAmount(e.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        props.onFormSubmit({
            title: title.trim(),
            amount,
        });
    };

    return (
        <section className="ingredient-form">
            <Card>
                <form onSubmit={submitHandler}>
                    <div className="form-control">
                        <label htmlFor="title">Name</label>
                        <input type="text" id="title" onChange={onTitleChange} value={title} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount">Amount</label>
                        <input type="number" id="amount" onChange={onAmountChange} value={amount} />
                    </div>
                    <div className="ingredient-form__actions">
                        <button type="submit">Add Ingredient</button>
                    </div>
                </form>
            </Card>
        </section>
    );
});

export default IngredientForm;
