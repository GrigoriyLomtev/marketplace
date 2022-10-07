import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { PRODUCT_ENDPOINT } from "../config";
import { IProduct } from "../models";

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function addProduct(product: IProduct) {
    setProducts((prev) => [product, ...prev]);
  }

  async function fetchProducts() {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get<IProduct[]>(
        // PRODUCT_ENDPOINT
        `${PRODUCT_ENDPOINT}?offset=0&limit=5`
      );
      setProducts(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    console.log("Effect call");
    fetchProducts();
  }, []);

  return { products, error, loading, addProduct };
}
