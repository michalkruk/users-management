import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <div className="tc pa3">
            <input
                type="searchbox"
                placeholder="sarch users"
                onChange={searchChange}
            />
        </div>
    );
};

export default SearchBox;
