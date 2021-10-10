import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
    const [tourData, setTourData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = () => {
        setLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setTourData(data);
                setLoading(false);
            });
    };

    // Alternative way of getData
    /* 
    const getData = async () => {
      setLoading(true)
      try {
        const response = await fetch(url)
        const tours = await response.json()
        setLoading(false)
        setTours(tours)
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    }
 */
    useEffect(() => {
        getData();
    }, []);

    const deleteTour = (id) => {
        setTourData((prev) => prev.filter((tour) => tour.id !== id));
    };

    return (
        <main>
            {loading && <Loading />}
            {!loading && tourData.length > 0 && (
                <Tours tours={tourData} deleteTour={deleteTour} />
            )}
            {!loading && tourData.length === 0 && (
                <>
                    <h2>no tours left</h2>
                    <button className="btn" onClick={() => getData()}>
                        refresh
                    </button>
                </>
            )}
        </main>
    );
}

export default App;
