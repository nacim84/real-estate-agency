import React from "react";

export default function Card(props) {
  return (
    <div className="max-w-2xl rounded overflow-hidden shadow-lg flex flex-col items-center space-y-5 pb-5">
      {props.children}
    </div>
  );
}
