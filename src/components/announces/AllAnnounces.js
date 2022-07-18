import React from "react";
import Announce from "./Announce";

export default function AllAnnounces(props) {
  return (
    <div>
      <ul className="flex flex-col space-y-5 items-center my-20">
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
