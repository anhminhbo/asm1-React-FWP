import { useState, useEffect } from "react";
import Table from "./Table";

const Form = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [origin, setOrigin] = useState("");
  const [data, setData] = useState([]);

  const handleCheckBoxChange = (e) => {
    setGender(e.target.checked);
  };

  const handleOriginChange = (e) => {
    setOrigin(e.target.value);
  };

  const load = () => {
    fetch(
      "https://dnu6pnhy07.execute-api.ap-southeast-1.amazonaws.com/final/animals"
    )
      .then((res) => res.json())
      .then((json) => setData(json.Items));
  };
  console.log(data);

  useEffect(() => {
    load();
  }, []);
  const handleSave = () => {
    fetch(
      "https://dnu6pnhy07.execute-api.ap-southeast-1.amazonaws.com/final/animals",
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, name, gender, origin }),
      }
    ).then((res) => {
      console.log(res);
      load();
    });
  };

  const deleteCar = (id) => {
    fetch(
      "https://dnu6pnhy07.execute-api.ap-southeast-1.amazonaws.com/final/animals" +
        id,
      {
        method: "delete",
      }
    ).then((res) => {
      console.log(res);
      const newdata = data.filter((item) => {
        return item.id != id;
      });
      setData(newdata);
    });
  };
  return (
    <>
      {" "}
      <form>
        <label>
          Enter your id:
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          onChange={handleCheckBoxChange}
        />
        <label htmlFor="male">Male</label>
        <input type="radio" id="female" name="gender" value="female" />
        <label htmlFor="female">Female</label>

        <select id="origins" onChange={handleOriginChange}>
          <option value="vietnam">Vietnam</option>
          <option value="africa">Africa</option>
          <option value="asia">Asia</option>
          <option value="america">America</option>
        </select>

        <button onClick={handleSave}>Save</button>
        <button>Add new</button>
      </form>
      <h2>List of Animals</h2>
      <Table id={id} name={name} gender={gender} origin={origin} data={data} />
    </>
  );
};

export default Form;
