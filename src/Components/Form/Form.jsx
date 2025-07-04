import React from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f63d1ec0-3b08-44b5-99a2-bb42d7c21a1c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      const pickupDate = object.date; // from the form
      navigate("/success", { state: { pickupDate } });
    } else {
      console.error("Submission failed:", res.message);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <form onSubmit={onSubmit} className="mb-10">
      <h1 className="text-center font-bold text-3xl mt-5">Order Now</h1>
      <div className="mx-5 sm:w-2/4 bg-deepPurple rounded-lg sm:m-auto py-8 mt-3 grid gap-4 p-4">
        <div className="grid gap-4 sm:flex sm:justify-between px-4">
          <input type="text" required name="name" placeholder="First-name" className="border py-2 px-3 ml-0 sm:ml-3 rounded-md w-64" />
          <input type="text" required name="lastname" placeholder="Last-name" className="border ml-0 sm:ml-3 py-2 px-3 mr-3 rounded-md w-64" />
        </div>
        <input type="text" required name="Adress" placeholder="Adresss" className="form" />
        <input type="number" required name="phone" placeholder="Phone number" className="form" />
        <input type="email" required name="email" placeholder="Email" className="form" />
        <input type="date" required name="date" placeholder="Preferred pickup date" onFocus={(e) => (e.target.type = 'date')}onBlur={(e) => {if (!e.target.value) e.target.type = 'text';}} className="form" />
        <textarea name="message" placeholder="Special instruction" className="form"></textarea>\
        <div className="flex justify-between ml-4 mr-9 sm:mx-7">
          <button type="submit" className="border w-28 sm:w-48 text-white py-2 px-3 rounded-md">Order Now</button>
          <button onClick={() => navigate('/', { state: { scrollTo: 'order' } })} className="border w-28 sm:w-48 text-white py-2 px-3 rounded-md">Head back</button>
        </div>
      </div>
    </form>
  );
}

export default Form;