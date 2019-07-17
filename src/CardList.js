import React from "react";
import Card from "./Card";

const CardList = ({ users }) => {
    const cardComponent = users.map((user, idx) => {
        return (
            <Card key={idx} id={user.id} name={user.name} email={user.email} />
        );
    });
    return <div>{cardComponent}</div>;
};

export default CardList;
