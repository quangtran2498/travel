import { useState } from "react";
import Axios from "axios";

function FormData() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [name, setName] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [age, setAge] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [country, setCountry] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [position, setPosition] = useState("");

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create-new-user", {
      qwe: name,
      asd: age,
      zxc: country,
      plm: position,
    });
  };

  return (
    <div className="">
      <div className="information">
        <label>Name:</label>
        <input
          type="text"
          name="qwe"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Age:</label>
        <input
          type="number"
          name="asd"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Country:</label>
        <input
          name="zxc"
          type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />
        <label>Position:</label>
        <input
          name="plm"
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        />

        <button onClick={addEmployee}>add user</button>
      </div>
    </div>
  );
}

export default FormData;
