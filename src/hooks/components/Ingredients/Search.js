import React, { useState, useEffect, useRef } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo((props) => {
    const [search, setSearchInput] = useState("");
    const { setFilteredIngredients, loadingHandler, errorHandler } = props;
    const searchRef = useRef();
    useEffect(() => {
        const timer = setTimeout(() => {
            if (search === searchRef.current.value) {
                loadingHandler(true);
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
                        loadingHandler(false);
                    })
                    .catch((e) => {
                        errorHandler(e);
                    });
            }
        }, 500);
        return () => {
            clearTimeout(timer);
        };
    }, [search, setFilteredIngredients, loadingHandler, errorHandler]);
    const onSearchChange = (e) => {
        // console.log(search);
        setSearchInput(e.target.value);
        // setSearchInput((prevSearch) => {
        //     console.log(prevSearch);
        //     return prevSearch + prevSearch;
        // });
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
