import React, { useState, useEffect, useCallback, useReducer, useMemo } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";
import ErrorModal from "../UI/ErrorModal";
import useHttp from "../../hooks/useHttp";

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
    const [ingredients, dispatchIngredients] = useReducer(ingredientsReducer, []);
    const { loading, error, response, sendRequest, errorHandler, loadingHandler } = useHttp();
    useEffect(() => {
        if (response?.action?.type === "ADD") {
            dispatchIngredients({
                type: "ADD",
                payload: { id: response.name, ...response.action.payload },
            });
        } else if (response?.action?.type === "REMOVE") {
            dispatchIngredients({ type: "REMOVE", payload: response.action.payload });
        }
    }, [response]);
    const addIngredients = useCallback(
        async (data) => {
            sendRequest({
                url: "https://react-hooks-355b5.firebaseio.com/ingredients.json",
                method: "POST",
                body: data,
                action: { type: "ADD", payload: data },
            });
        },
        [sendRequest]
    );
    const setFilteredIngredients = useCallback((data) => {
        dispatchIngredients({ type: "SET", payload: data });
    }, []);
    const removeIngredients = useCallback(
        (id) => {
            sendRequest({
                url: `https://react-hooks-355b5.firebaseio.com/ingredients/${id}.json`,
                method: "DELETE",
                action: {
                    type: "REMOVE",
                    payload: id,
                },
            });
        },
        [sendRequest]
    );
    const handleError = useCallback(
        (status) => {
            errorHandler(status);
        },
        [errorHandler]
    );
    const handleLoading = useCallback(() => {
        loadingHandler();
    }, [loadingHandler]);
    const ingredientsList = useMemo(() => {
        return <IngredientList ingredients={ingredients} onRemoveItem={removeIngredients} />;
    }, [ingredients, removeIngredients]);
    return (
        <div className="App">
            {error && (
                <ErrorModal onClose={() => handleError(null)}>
                    Something went wrong!
                    <span role="img" aria-label="Error">
                        💥
                    </span>
                </ErrorModal>
            )}
            <IngredientForm onFormSubmit={addIngredients} loading={loading} />

            <section>
                <Search
                    setFilteredIngredients={setFilteredIngredients}
                    handleError={handleError}
                    handleLoading={handleLoading}
                />
                {ingredientsList}
            </section>
        </div>
    );
};

export default Ingredients;
