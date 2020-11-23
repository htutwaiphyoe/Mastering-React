import React, { useState, useEffect, useCallback, useReducer } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";
import ErrorModal from "../UI/ErrorModal";

const ingredientsReducer = (ingredients, action) => {
    switch (action.type) {
        case "SET":
            return action.payload;
        case "ADD":
            return [...ingredients, action.payload];
        case "REMOVE":
            return ingredients.filter((ing) => ing.id !== action.payload);
        default:
            throw new Error("Unknown action");
    }
};
const Ingredients = (props) => {
    const [ingredients, dispatch] = useReducer(ingredientsReducer, []);
    // const [ingredients, setIngredients] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // useEffect(() => {
    //     console.log("Rendered Ingredients", ingredients);
    // }, [ingredients]);
    const addIngredients = async (data) => {
        try {
            setLoading(true);
            const response = await fetch(
                "https://react-hooks-355b5.firebaseio.com/ingredients.json",
                {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const body = await response.json();
            dispatch({ type: "ADD", payload: { id: body.name, ...data } });
            // setIngredients((prevIngredients) => [...prevIngredients, { id: body.name, ...data }]);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };
    const setFilteredIngredients = useCallback((data) => {
        dispatch({ type: "SET", payload: data });
    }, []);
    const removeIngredients = (id) => {
        setLoading(true);
        fetch(`https://react-hooks-355b5.firebaseio.com/ingredients/${id}.json`, {
            method: "DELETE",
        })
            .then((response) => {
                dispatch({ type: "REMOVE", payload: id });
                // setIngredients((prevIngredients) => prevIngredients.filter((ing) => ing.id !== id));
                setLoading(false);
            })
            .catch((e) => {
                setError(e);
                setLoading(false);
            });
    };

    const loadingHandler = useCallback((status) => {
        setLoading(status);
    }, []);
    const errorHandler = useCallback((status) => {
        setError(status);
    }, []);
    return (
        <div className="App">
            {error && (
                <ErrorModal onClose={() => errorHandler(null)}>
                    Something went wrong!{" "}
                    <span role="img" aria-label="Error">
                        💥
                    </span>
                </ErrorModal>
            )}
            <IngredientForm onFormSubmit={addIngredients} loading={loading} />

            <section>
                <Search
                    setFilteredIngredients={setFilteredIngredients}
                    loadingHandler={loadingHandler}
                    errorHandler={errorHandler}
                />
                <IngredientList ingredients={ingredients} onRemoveItem={removeIngredients} />
            </section>
        </div>
    );
};

export default Ingredients;
