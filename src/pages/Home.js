import { React } from "react";
import AllAnnounces from "../components/announces/AllAnnounces";
import useFetch from "../components/hooks/useFetch";

export default function Home() {
  const allAnnouncesUri = "http://localhost:4000/announces";

  const {
    dataInput: allAnnounces,
    isLoading,
    error,
  } = useFetch(allAnnouncesUri);

  return (
    <section className="my-10 py-10">
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
