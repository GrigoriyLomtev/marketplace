import React, { useState } from "react";
import { IProduct } from "./../models";

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);

  const btnBgClassName: string = details ? "bg-yellow-400" : "bg-blue-400";

  const btnClasses = ["py-2 px-4 border", btnBgClassName];
  return (
    <div className="px-5 py-2 border rounded flex flex-col items-center mb-2">
      <img
        src={product.images[0]}
        className="w-1/6"
        alt={"img loading error"}
      />
      <p>{product.title}</p>
      <p className="font-bold">{`${product.price}$`}</p>
      <button
        className={btnClasses.join(" ")}
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? "Hide details" : "Show details"}
      </button>
      {details && (
        <div>
          <p>{product.description}</p>
          <p>
            Category:{" "}
            <span style={{ fontWeight: "bold" }}>{product.category.name}</span>
          </p>
        </div>
      )}
    </div>
  );
}
