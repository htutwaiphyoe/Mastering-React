import React, { useState, useEffect } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo((props) => {
    const [search, setSearchInput] = useState("");
    const { setFilteredIngredients } = props;
    useEffect(() => {
        const query =
            search.trim().length === 0 ? "" : `?orderBy="title"&equalTo="${search.trim()}"`;
        fetch("https://react-hooks-355b5.firebaseio.com/ingredients.json" + query)
            .then((response) => response.json())
            .then((res) => {
                const data = [];
                for (let i in res) {
                    data.push({ id: i, ...res[i] });
                }
            
                setFilteredIngredients(data);
            });
    }, [search, setFilteredIngredients]);
    const onSearchChange = (e) => {
        setSearchInput(e.target.value);
    };
    return (
        <section className="search">
            <Card>
                <div className="search-input">
                    <label>Filter by Title</label>
                    <input type="text" value={search} onChange={onSearchChange} />
                </div>
            </Card>
        </section>
    );
});

export default Search;
