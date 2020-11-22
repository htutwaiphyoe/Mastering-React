import React, { useState, useEffect, useCallback } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

const Ingredients = (props) => {
    const [ingredients, setIngredients] = useState([]);
    // useEffect(() => {
    //     console.log("Rendered Ingredients", ingredients);
    // }, [ingredients]);
    const addIngredients = async (data) => {
        const response = await fetch("https://react-hooks-355b5.firebaseio.com/ingredients.json", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const body = await response.json();
        setIngredients((prevIngredients) => [...prevIngredients, { id: body.name, ...data }]);
    };
    const setFilteredIngredients = useCallback((data) => {
        setIngredients(data);
    }, []);
    const removeIngredients = (id) => {
        fetch(`https://react-hooks-355b5.firebaseio.com/ingredients/${id}.json`, {
            method: "DELETE",
        }).then((response) => {
            setIngredients((prevIngredients) => prevIngredients.filter((ing) => ing.id !== id));
        });
    };
    return (
        <div className="App">
            <IngredientForm onFormSubmit={addIngredients} />

            <section>
                <Search setFilteredIngredients={setFilteredIngredients} />
                <IngredientList ingredients={ingredients} onRemoveItem={removeIngredients} />
            </section>
        </div>
    );
};

export default Ingredients;
