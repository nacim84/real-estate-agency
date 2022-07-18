import React, { useEffect, useState } from "react";
import AllAnnounces from "../components/announces/AllAnnounces";

export default function Home() {
  const [announcesData, setAnnouncesData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/announces")
      .then((res) => res.json())
      .then((data) => setAnnouncesData(data));
  }, []);

  return (
    <section>
      <h1 className="text-2xl font-bold ml-16">All Announces</h1>
      {announcesData && <AllAnnounces annoucesList={announcesData} />}
    </section>
  );
}
