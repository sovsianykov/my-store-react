import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchHouses } from "@/App/Products/store/actions";

export const useFetch = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);
};


