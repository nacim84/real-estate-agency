import { React, useEffect, useState } from "react";
import AllAnnounces from "../components/announces/AllAnnounces";

export default function Home() {
  const [allAnnounces, setAllAnnounces] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const allAnnouncesUri = "http://localhost:4000/announcesss";

  useEffect(() => {
    setTimeout(() => {
      fetch(allAnnouncesUri)
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
          setAllAnnounces(data);
          setIsLoading(false);
          setError(null);
          console.log(allAnnounces);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
          console.log(err.message);
        });
    }, 2000);
  }, []);

  return (
    <section>
      <h1 className="text-2xl font-bold ml-16">All Announces</h1>

      {error && (
        <div className="text-center text-red-500 font-sans">
          {error.message}
        </div>
      )}
      {isLoading && (
        <div className="text-center font-sans">Veuillez patienter ...</div>
      )}
      {allAnnounces && <AllAnnounces annoucesList={allAnnounces} />}
    </section>
  );
}
