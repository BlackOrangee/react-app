import React from "react";

const ShopCardsSorting = ({ sorting, handleSortingChange, sortingMap }) => {
    if (!sortingMap) {
        return null;
    }

    const sortingNames = Object.keys(sortingMap);

    const formatString = (str) => {
        const parts = str.split('-');
        const firstPart = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
        const restParts = parts.slice(1).join(' ');
        return `${firstPart} (${restParts})`;
    };

    return (
        <select value={sorting} onChange={handleSortingChange}>
            {sortingNames.map((name) => (
                <option key={name} value={name}>
                    {formatString(name)}
                </option>
            ))}
        </select>
    );
};

export default ShopCardsSorting;
