import React from "react";

const Card = () => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img
                alt="photo"
                src="https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png"
            />
            <div>
                <h1>Name Forname</h1>
                <p>More info about</p>
            </div>
        </div>
    );
};

export default Card;
