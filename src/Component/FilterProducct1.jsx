import React from "react";

const FilterProducct1 = () => {
  const product = [
    { id: 1, title: "iphone-16", category: "mobile", price: 80000 },
    { id: 2, title: "samsung", category: "mobile", price: 950000 },
    { id: 3, title: "mi-tab", category: "mobile", price: 90000 },
    { id: 4, title: "hp probook", category: "mobile", price: 56000 },
  ];
  return (
    <div>
      <div>
        {product.map((data) => (
          <div key={data.id}>
            <h1>Title={data.title}</h1>
            <h1>Title={data.price}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterProducct1;
