import React, { useEffect, useState } from "react";
import "./meal.css";
const Meal = () => {
  const [mealData, setmealData] = useState([]);
  const [area, setarea] = useState("Indian");
  const [inputData, setInputData] = useState("");

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      const data = await api.json();
      console.log(data.meals);
      setmealData(data.meals);
    };
    fetchDataFromAPI();
  }, [area]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`
    );

    const data = await api.json();
    console.log("Search data", data.meals);
    setmealData(data.meals);
  };

  return (
    <>
      <div className="font-bold justify-center text-center">
        <button
          onClick={() => setarea("Indian")}
          type="button"
          className="btn btn-outline-primary mx-3"
        >
          Indian
        </button>
        <button
          onClick={() => setarea("Canadian")}
          type="button"
          className="btn btn-outline-primary mx-3"
        >
          Canadian
        </button>
        <button
          onClick={() => setarea("American")}
          type="button"
          className="btn btn-outline-primary mx-3"
        >
          American
        </button>
        <button
          onClick={() => setarea("Thai")}
          type="button"
          className="btn btn-outline-primary mx-3"
        >
          Thai
        </button>
        <button
          onClick={() => setarea("British")}
          type="button"
          className="btn btn-outline-primary mx-3"
        >
          British
        </button>
        <button
          onClick={() => setarea("Russian")}
          type="button"
          className="btn btn-outline-primary mx-3"
        >
          Russian
        </button>
      </div>
      <form onSubmit={submitHandler} className="mx-auto text-center my-3">
        <input style={{textAlign:"center"}} onChange={(e) => setInputData(e.target.value)} type="text"  placeholder="Search"  />
      </form>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {mealData.map((data) => (
          <div key={data.idMeal} style={{ textAlign: "center" }}>
            <div>
              <img
                src={data.strMealThumb}
                alt=""
                style={{
                  width: "220px",
                  borderRadius: "10px",
                  border: "2px solid",
                }}
              />
            </div>
            <h5>{data.strMeal}</h5>
          </div>
        ))}
      </div>
    </>
  );
};

export default Meal;
