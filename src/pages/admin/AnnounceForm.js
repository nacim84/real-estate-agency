import { React, useState } from "react";

export default function AnnounceForm() {
  const url = "http://localhost:4000/announces";
  const [dataForm, setDataForm] = useState({
    title: "",
    image: "",
    address: "",
    description: "",
    price: 0,
    gender: "H",
    newsletters: false,
  });

  const formHandler = (event) => {
    event.preventDefault();

    const myHeaders = new Headers();
    const myInit = {
      method: "POST",
      headers: myHeaders,
      mode: "cors",
      cache: "default",
    };
    const myRequest = new Request(dataForm, myInit);

    fetch(url, myRequest)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const onChangeHandler = (event) => {
    event.preventDefault();
    const elementTarget = event.target;
    const name = elementTarget.name;
    const type = elementTarget.type;
    const value = elementTarget.value;
    const checked = elementTarget.checked;

    setDataForm({
      ...dataForm,
      [name]: type !== "checkbox" ? value : checked,
    });

    console.log(dataForm);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-2xl font-sans font-bold my-4">Announce Form</h1>
      <form
        onSubmit={formHandler}
        className="flex flex-col space-y-4 bg-slate-400 max-w-md w-1/2 px-2 py-4 shadow-md rounded-md"
      >
        <div className="flex flex-col space-y-4">
          <div id="title" className="flex flex-col space-y-2">
            <label htmlFor="title">Title</label>
            <input
              className="rounded-sm px-2 py-1"
              type="text"
              name="title"
              onChange={onChangeHandler}
            />
          </div>
          <div id="image" className="flex flex-col space-y-2">
            <label htmlFor="image">Url Image</label>
            <input
              className="rounded-sm px-2 py-1"
              type="text"
              name="image"
              onChange={onChangeHandler}
            />
          </div>
          <div id="address" className="flex flex-col space-y-2">
            <label htmlFor="address">Address</label>
            <input
              className="rounded-sm px-2 py-1"
              type="text"
              name="address"
              onChange={onChangeHandler}
            />
          </div>
          <div id="description" className="flex flex-col space-y-2">
            <label htmlFor="description">Description</label>
            <textarea
              className="rounded-sm px-2 py-1"
              type="text"
              name="description"
              onChange={onChangeHandler}
            />
          </div>
          <div id="price" className="flex flex-col space-y-2">
            <label htmlFor="price">Price</label>
            <input
              className="rounded-sm px-2 py-1"
              type="number"
              name="price"
              onChange={onChangeHandler}
            />
          </div>

          <div id="gender" className="flex flex-col space-y-2">
            <label htmlFor="gender">Gender</label>
            <select name="gender" onChange={onChangeHandler}>
              <option value="H">Homme</option>
              <option value="F">Femme</option>
            </select>
          </div>
          <div
            id="newsletters"
            className="flex flex-row space-x-2 items-center"
          >
            <label htmlFor="newsletters">Accept Newsletters ?</label>
            <input
              name="newsletters"
              type="checkbox"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <button
          type="Submit"
          className="bg-green-500 px-3 py-2 rounded-md shadow-lg hover:bg-gree-700 focus:border-green-700 focus:border-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
