import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

const Ingredients = (props) => {
    const [ingredients, setIngredients] = useState([]);
    const addIngredients = (data) => {
        setIngredients((prevIngredients) => [...prevIngredients, data]);
    };
    return (
        <div className="App">
            <IngredientForm onFormSubmit={addIngredients} />

            <section>
                <Search />
                <IngredientList ingredients={ingredients} onRemoveItem={() => {}} />
            </section>
        </div>
    );
};

export default Ingredients;
