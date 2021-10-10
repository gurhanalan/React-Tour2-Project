import React, { useState } from "react";

const Tour = ({ tour, deleteTour }) => {
    const { image, name, price, info, id } = tour;

    const [readmore, setReadmore] = useState(false);

    return (
        <div className="single-tour">
            <img src={image} alt="" />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                <p>
                    {!readmore ? info.slice(0, 200).concat("...") : info}
                    <button
                        onClick={() => {
                            setReadmore((prev) => !prev);
                        }}
                    >
                        {readmore ? "Show Less" : "Read More"}
                    </button>
                </p>
                <button onClick={() => deleteTour(id)} className="delete-btn">
                    not interested
                </button>
            </footer>
        </div>
    );
};

export default Tour;
