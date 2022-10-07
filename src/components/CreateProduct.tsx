import axios from "axios";
import React, { useState } from "react";
import { PRODUCT_ENDPOINT } from "../config";
import { IProduct } from "../models";
import ErrorMessage from "./ErrorMessage";

const productData: IProduct = {
  title: "",
  price: 10,
  description: "A description",
  categoryId: 1,
  images: ["https://placeimg.com/640/480/any"],
  category: {
    id: 2,
    name: "",
    image: "",
  },
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

export function CreateProduct({ onCreate }: CreateProductProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (value.trim().length === 0) {
      setError("Please enter valid title.");
      return;
    }
    setError("");

    productData.title = value;

    const response = await axios.post<IProduct>(PRODUCT_ENDPOINT, productData);

    onCreate(response.data);
  };

  const changeHandler = (event: any) => {
    setValue(event.target.value);
  };
  // const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   setValue(event.target.value);
  // };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className=" border py-2 px-4 mb-2 w-full outline-0 "
        placeholder="Enter product title..."
        value={value}
        onChange={changeHandler}
      />
      {error && <ErrorMessage error={error} />}
      <button type="submit" className=" py-2 px-4 border bg-yellow-400 ">
        Create
      </button>
    </form>
  );
}
