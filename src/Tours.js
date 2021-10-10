import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, deleteTour }) => {
    return (
        <>
            <div className="title">
                <h2>Our Tours</h2>
                <div className="underline" />
            </div>
            {tours.map((tour) => {
                return (
                    <Tour key={tour.id} tour={tour} deleteTour={deleteTour} />
                );
            })}
        </>
    );
};

export default Tours;
