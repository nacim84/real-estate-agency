import React from "react";
import AllAnnounces from "../components/announces/AllAnnounces";

export default function Home() {
  const DUMMY_DATA = [
    {
      id: 1,
      title: "Announce name",
      image: "/images/announce-1.jpg",
      address: "Address of announce",
      description: "Description of announce",
      price: 100000,
    },
    {
      id: 2,
      title: "Announce name",
      image: "/images/announce-2.jpg",
      address: "Address of announce",
      description: "Description of announce",
      price: 100000,
    },
    {
      id: 3,
      title: "Announce name",
      image: "/images/announce-3.jpg",
      address: "Address of announce",
      description: "Description of announce",
      price: 100000,
    },
    {
      id: 4,
      title: "Announce name",
      image: "/images/announce-4.jpg",
      address: "Address of announce",
      description: "Description of announce",
      price: 100000,
    },
    {
      id: 5,
      title: "Announce name",
      image: "/images/announce-5.jpg",
      address: "Address of announce",
      description: "Description of announce",
      price: 100000,
    },
    {
      id: 6,
      title: "Announce name",
      image: "/images/announce-6.jpg",
      address: "Address of announce",
      description: "Description of announce",
      price: 100000,
    },
    {
      id: 7,
      title: "Announce name",
      image: "/images/announce-7.jpg",
      address: "Address of announce",
      description: "Description of announce",
      price: 100000,
    },
    {
      id: 8,
      title: "Announce name",
      image: "/images/announce-8.jpg",
      address: "Address of announce",
      description: "Description of announce",
      price: 100000,
    },
    {
      id: 9,
      title: "Announce name",
      image: "/images/announce-9.jpg",
      address: "Address of announce",
      description: "Description of announce",
      price: 100000,
    },
    {
      id: 10,
      title: "Announce name",
      image: "/images/announce-10.jpg",
      address: "Address of announce",
      description: "Description of announce",
      price: 100000,
    },
  ];
  return (
    <section>
      <h1 className="text-2xl font-bold ml-16">All Announces</h1>
      <AllAnnounces annoucesList={DUMMY_DATA} />
    </section>
  );
}
