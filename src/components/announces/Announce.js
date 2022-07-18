import React from "react";
import Card from "../ui/Card";

export default function Announce(props) {
  return (
    <li>
      <Card>
        <div>
          <img className="w-full" src={props.image} alt={props.title} />
        </div>
        <div className="flex flex-col items-center">
          <span className="text-lg font-sans font-semibold">{props.title}</span>
          <address className="text-base font-sans italic">
            {props.address}
          </address>
          <p>{props.description}</p>
        </div>
        <div>
          <span>{props.price} Euros</span>
        </div>
        <div>
          <button className="bg-pink-500 px-3 py-2 rounded-md shadow-lg hover:bg-pink-700 focus:border-pink-700 focus:border-2">
            To Favorite
          </button>
        </div>
      </Card>
    </li>
  );
}
