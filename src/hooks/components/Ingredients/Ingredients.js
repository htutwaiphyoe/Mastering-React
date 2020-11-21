import React, { useState, useEffect } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

const Ingredients = (props) => {
    const [ingredients, setIngredients] = useState([]);
    useEffect(() => {
        fetch("https://react-hooks-355b5.firebaseio.com/ingredients.json")
            .then((response) => response.json())
            .then((res) => {
                const data = [];
                for (let i in res) {
                    data.push(res[i]);
                }
                setIngredients((prevIngredients) => [...prevIngredients, ...data]);
            });
    }, []);
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
