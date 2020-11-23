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

const httpReducer = (httpState, action) => {
    switch (action.type) {
        case "FETCH":
            return { ...httpState, loading: true };
        case "FINISH":
            return { ...httpState, loading: false };
        case "ERROR":
            return { loading: false, error: action.payload };
        default:
            throw new Error("Unknown action");
    }
};
const Ingredients = (props) => {
    const [ingredients, dispatchIngredients] = useReducer(ingredientsReducer, []);
    const [http, dispatchHttp] = useReducer(httpReducer, { loading: false, error: null });
    // const [ingredients, setIngredients] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    // useEffect(() => {
    //     console.log("Rendered Ingredients", ingredients);
    // }, [ingredients]);
    const addIngredients = async (data) => {
        try {
            dispatchHttp({ type: "FETCH" });
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
            dispatchIngredients({ type: "ADD", payload: { id: body.name, ...data } });
            // setIngredients((prevIngredients) => [...prevIngredients, { id: body.name, ...data }]);
            dispatchHttp({ type: "FINISH" });
        } catch (err) {
            dispatchHttp({ type: "ERROR", payload: err });
        }
    };
    const setFilteredIngredients = useCallback((data) => {
        dispatchIngredients({ type: "SET", payload: data });
    }, []);
    const removeIngredients = (id) => {
        dispatchHttp({ type: "FETCH" });
        fetch(`https://react-hooks-355b5.firebaseio.com/ingredients/${id}.json`, {
            method: "DELETE",
        })
            .then((response) => {
                dispatchIngredients({ type: "REMOVE", payload: id });
                // setIngredients((prevIngredients) => prevIngredients.filter((ing) => ing.id !== id));
                dispatchHttp({ type: "FINISH" });
            })
            .catch((e) => {
                dispatchHttp({ type: "ERROR", payload: e });
            });
    };

    const loadingHandler = useCallback((status) => {
        if (status) {
            dispatchHttp({ type: "FETCH" });
        } else {
            dispatchHttp({ type: "FINISH" });
        }
    }, []);
    const errorHandler = useCallback((status) => {
        dispatchHttp({ type: "ERROR", payload: status });
    }, []);
    return (
        <div className="App">
            {http.error && (
                <ErrorModal onClose={() => errorHandler(null)}>
                    Something went wrong!{" "}
                    <span role="img" aria-label="Error">
                        💥
                    </span>
                </ErrorModal>
            )}
            <IngredientForm onFormSubmit={addIngredients} loading={http.loading} />

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
