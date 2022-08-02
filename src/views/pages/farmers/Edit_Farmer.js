import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const Edit_Farmer = () => {
  const { FarmerId } = useParams();
  console.log(FarmerId);

  const [data, setData] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [OwnerType, setOwnerType] = useState("");
  const [Address, setAddress] = useState("");
  const [FarmingSeason, setFarmingSeason] = useState("");
  const [CropType, setCropType] = useState("");
  const [Crop_SubType, setCrop_SubType] = useState("");

  useEffect(() => {
    console.log("Use Effect..");
    axios
      .get(`http://localhost:8081/api/farmer/farmername/${FarmerId}`)
      .then((res) => {
        console.log(res);
        setData(res.data.getfarmername);
      });
  }, []);

  const Update = () => {
    axios
      .put(`http://localhost:8081/api/farmer/updatefarmers/${FarmerId}`, {
        FirstName,
        LastName,
        OwnerType,
        Address,
        FarmingSeason,
        CropType,
        Crop_SubType,
        FarmerId,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <div style={{ marginLeft: "500px" }}>
        <label>First Name</label>
        <input
          placeholder="First Name"
          value={FirstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label>Last Name</label>
        <input
          placeholder="Last Name"
          value={LastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label>Owner Type</label>
        <input
          placeholder="OwnerType"
          value={OwnerType}
          onChange={(e) => setOwnerType(e.target.value)}
        />

        <label>Address</label>
        <input
          placeholder="Address"
          value={Address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label>Farming Season</label>
        <input
          placeholder="Farming Season"
          value={FarmingSeason}
          onChange={(e) => setFarmingSeason(e.target.value)}
        />

        <label> Crop Type</label>
        <input
          placeholder="Crop Type"
          value={CropType}
          onChange={(e) => setCropType(e.target.value)}
        />

        <label>Sub-Crop-Type</label>
        <input
          placeholder="Sub-Crop-Type"
          value={Crop_SubType}
          onChange={(e) => setCrop_SubType(e.target.value)}
        />

        <button
          style={{
            display: "block",
            color: "bold",
            backgroundColor: "green",
            borderRadius: "7px",
            marginLeft: "50px",
          }}
          onClick={Update}
        >
          Update
        </button>
      </div>
    </>
  );
};

export default Edit_Farmer;

{
  /* <Route exact path="users/view/:FarmerId" component={View_Farmer}/>
<Route exact path="/users/edit/:FarmerId" component={Edit_Farmer}/>
<Route exact path="users/delete/:FarmerId" component={Delete_Farmer}/> */
}
