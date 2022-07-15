import { useState, useEffect } from "react";

export default function useFetch(uri) {
  const [dataInput, setDataInput] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(uri)
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error(
              "Une erreur est survenue lors du chargement de la page !"
            );
          }
          return res.json();
        })
        .then((data) => {
          setDataInput(data);
          setIsLoading(false);
          setError(null);
          console.log(data);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
          console.log(err.message);
        });
    }, 2000);
  }, [uri]);

  return { dataInput, isLoading, error };
}
