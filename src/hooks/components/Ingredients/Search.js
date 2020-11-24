import React, { useState, useEffect, useRef } from "react";

import Card from "../UI/Card";
import useHttp from "../../hooks/useHttp";
import "./Search.css";

const Search = React.memo((props) => {
    const [search, setSearchInput] = useState("");
    const { loading, error, sendRequest, response } = useHttp();
    const { setFilteredIngredients, handleError, handleLoading } = props;
    const searchRef = useRef();
    useEffect(() => {
        const timer = setTimeout(() => {
            if (search === searchRef.current.value) {
                const query =
                    search.trim().length === 0 ? "" : `?orderBy="title"&equalTo="${search.trim()}"`;
                sendRequest({
                    url: "https://react-hooks-355b5.firebaseio.com/ingredients.json" + query,
                    method: "GET",
                });
            }
        }, 500);
        return () => {
            clearTimeout(timer);
        };
    }, [search, setFilteredIngredients, sendRequest]);

    useEffect(() => {
        if (response) {
            const data = [];
            for (let i in response) {
                if (i !== "action") data.push({ id: i, ...response[i] });
            }
            setFilteredIngredients(data);
            handleError(null);
        }
        if (error) {
            handleError(error);
        }
        if (loading) {
            handleLoading();
        }
    }, [response, setFilteredIngredients, error, handleError, handleLoading, loading]);
    const onSearchChange = (e) => {
        setSearchInput(e.target.value);
    };
    return (
        <section className="search">
            <Card>
                <div className="search-input">
                    <label>Filter by Title</label>
                    <input type="text" value={search} onChange={onSearchChange} ref={searchRef} />
                </div>
            </Card>
        </section>
    );
});

export default Search;
