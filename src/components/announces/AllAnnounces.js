import React from "react";
import Announce from "./Announce";

export default function AllAnnounces(props) {
  return (
    <div className="flex flex-col space-y-5">
      <div className="text-2xl font-bold mt-10">All Announces</div>
      <ul className="flex flex-col space-y-5 items-center">
        {props.annoucesList.map((announce) => {
          return (
            <Announce
              key={announce.id}
              id={announce.id}
              image={announce.image}
              title={announce.title}
              address={announce.address}
              description={announce.description}
              price={announce.price}
              gender={announce.gender}
              newsletters={announce.newsletters}
            />
          );
        })}
      </ul>
    </div>
  );
}
