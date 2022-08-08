import { useEffect, useState } from "react";

const Table = ({ id, name, gender, origin, data }) => {
  //   const edit = (id, name) => {
  //     setId(id);
  //     setName(name);
  //   };

  //   const addnew = () => {
  //     setId("");
  //     setName("");
  //   };

  // const deleteCar = (id) => {
  //   fetch(
  //     "https://dnu6pnhy07.execute-api.ap-southeast-1.amazonaws.com/final/animals" +
  //       id,
  //     {
  //       method: "delete",
  //     }
  //   ).then((res) => {
  //     console.log(res);
  //     const newdata = data.filter((item) => {
  //       return item.id != id;
  //     });
  //     setData(newdata);
  //   });
  // };

  return (
    <>
      <table>
        <thead>
          <tr>
            <td> ID</td>
            <td> Name</td>
            <td> Gender</td>
            <td> Place</td>
            <td> Action</td>
          </tr>
        </thead>
        {data.map((animal, index) => {
          return (
            <tbody key={index}>
              <tr>
                {" "}
                <td>{animal.id}</td>
                <td>{animal.name}</td>
                <td>{animal.gender}</td>
                <td>{animal.origin}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default Table;
