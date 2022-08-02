import React, { useState } from "react";
import  "./Farmer.css"
import { Link } from "react-router-dom";
import axios from "axios";





function Farmers_Regis() {
 

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [OwnerType, setOwnerType] = useState("");
  const [Address, setAddress] = useState("");
  const [FarmingSeason, setFarmingSeason] = useState("");
  const [CropType, setCropType] = useState("");
  const [Crop_SubType, setCrop_SubType] = useState("");
  const [FarmerId, setFarmerId] = useState("");
  const [plotArea, setplotArea] = useState("");
 

  const postData = () => {
    axios
      .post("http://localhost:8081/api/farmer/addfarmers", {
        FirstName,
        LastName,
        OwnerType,
        Address,
        FarmingSeason,
        CropType,
        Crop_SubType,
        FarmerId,
        plotArea
      })
      .then((res) => {
        console.log(res);
      });
  };

  const mystyle = {
    color: "orange",
    padding: "0px",
   
    marginTop: "0px",
    marginLeft:"470px"

  };


  return (
   <>
   <span>
        <h1 style={mystyle}>Register Farmer</h1>
      </span>
     
      <form class="row g-3">
  <div class="col-md-5">
    <label for="inputEmail4" class="form-label">First Name</label>
    <input  class="form-control" id="inputEmail4" placeholder="First Name"
     value={FirstName} onChange={(e) => setFirstName(e.target.value)}/>
      </div>  
  
  <div class="col-md-5">
    <label for="inputPassword4" class="form-label">LastName</label>
    <input  class="form-control" id="inputPassword4" placeholder="LastName"
     value={LastName}  onChange={(e) => setLastName(e.target.value)}
    />
  </div>
    
  <div class="col-md-5">
    <label for="inputPassword4" class="form-label">FarmerId</label>
    <input  class="form-control" id="inputPassword4"
     placeholder="Farmer Id"  value={FarmerId}
     onChange={(e) => setFarmerId(e.target.value)}
    />
  </div>

  <div class="col-md-5">
    <label for="inputPassword4" class="form-label">OwnerType</label>
    <input  class="form-control" id="inputPassword4" placeholder="OwnerType"
    value={OwnerType} onChange={(e) => setOwnerType(e.target.value)}
    />
  </div>
  <div class="col-5">
  <label for="exampleFormControlTextarea1" class="form-label">Address</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
   placeholder="Address"
   value={Address}
   onChange={(e) => setAddress(e.target.value)}
  ></textarea>
  </div>
    
  <div class="col-md-5">
    <label for="inputAddress2" class="form-label">Farming Season</label>
    <input  class="form-control" id="inputAddress2"
    placeholder="Farming Season"
    value={FarmingSeason}
    onChange={(e) => setFarmingSeason(e.target.value)}
    />
  </div>

  <div class="col-md-5">
    <label for="inputAddress2" class="form-label">Crop Type</label>
    <input  class="form-control" id="inputAddress2"
    placeholder="Crop Type"
    value={CropType}
    onChange={(e) => setCropType(e.target.value)}
    />
  </div>
  <div class="col-md-5">
    <label for="inputAddress2" class="form-label">Sub Crop-Type</label>
    <input  class="form-control" id="inputAddress2"
      placeholder="Sub-Crop-Type"
      value={Crop_SubType}
      onChange={(e) => setCrop_SubType(e.target.value)}
    />
  </div>

  <div class="col-md-5">
    <label for="inputAddress2" class="form-label">Plot Area</label>
    <input  class="form-control" id="inputAddress2"
      placeholder="Plot Area"
      value={plotArea}
      onChange={(e) => setplotArea(e.target.value)}
    />
  </div>
  <div class="col-10">
    <button  class="btn btn-primary" onClick={postData}>Register</button>
  </div>
</form>
  

    
  
  
  
 
 
      

    







     
{/* 
      <div style={{ marginLeft: "500px" }}>
        <label >First Name</label>
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

       <label>Farmer Id</label>
        <input
          placeholder="Farmer Id"
          value={FarmerId}
          onChange={(e) => setFarmerId(e.target.value)}
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
            onClick={postData}
          >
            Register Farmer
          </button>
      </div> */}
   </>
  )
}
            
export default Farmers_Regis
              
       
   
   
   
   
   
