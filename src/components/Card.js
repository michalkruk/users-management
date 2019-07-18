import React from "react";
import "./Card.css";
const Card = ({ id, name, email }) => {
    return (
        <div className="dib br3 pa3 ma2 grow bw2 shadow-5 card">
            <img
                alt="photo"
                src="https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png"
            />
            <div>
                <h1>{name}</h1>
                <p>mail: {email}</p>
            </div>
        </div>
    );
};

export default Card;
