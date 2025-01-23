import React, { useEffect, useState } from 'react';

const FeatchDataFromAPI = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const api = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await api.json();
      setApiData(data);
      console.log('my data=', data);
    };

    fetchDataFromAPI();
  }, []); 

  return (
    <div>
      {apiData.map((data) => (
        <div key={data.id} style={{
          backgroundColor:"blue",
          margin:"10px",
          border:"2px solid yellow",
          borderRadius:"10px",
          alignItems:"center"
        }}>
          
          <h3>{data.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default FeatchDataFromAPI;
