import React, { useState } from "react";
import {Link } from 'react-router-dom'
import axios from 'axios'



function Plots_Regis() {
  


  const [FarmerName, setFarmerName] = useState("");
  const [Location, setLocation] = useState("");
  const [Village, setVillage] = useState("");
  const [District, setDistrict] = useState("");
  const [Latitude, setLatitude] = useState("");
  const [Long, setLong] = useState("");
  const [Area_of_Plot, setArea_of_Plot] = useState("");
  const [Perimeter_of_Plot, setPerimeter_of_Plot] = useState("");
  const [PlotShape, setPlotShape] = useState("");
  const [ SoilType, setSoilType] = useState("");
  const [Nutrient_Content_Analysis, setNutrient_Content_Analysis] = useState("");
  const [WaterSource, setWaterSource] = useState("");
  const [plotid, setplotid] = useState("");
 

  const postData1= () => {
    axios
      .post("http://localhost:8081/api/plot-details/addplot", {
        FarmerName,
        Location,
        Village,
        District,
        Latitude,
        Long,
        Area_of_Plot,
        Perimeter_of_Plot,
        PlotShape,
        SoilType,
        Nutrient_Content_Analysis,
        WaterSource,
        plotid
      })
      .then((res) => {
        console.log(res);
      });
  };

   

  const mystyle1 = {
    color: "green",
    padding: "0px",
    marginTop:"0px",
    marginLeft:"470px"
    
  
  };

  return (
    <>
<span>
        <h1 style={mystyle1}>Register Plot</h1>
      </span>
     
      <form class="row g-3">
  <div class="col-md-5">
    <label for="inputEmail4" class="form-label">FarmerName</label>
    <input  class="form-control" id="inputEmail4" placeholder="FarmerName"
          value={FarmerName}
          onChange={(e) => setFarmerName(e.target.value)}/>
      </div>  
  
  <div class="col-md-5">
    <label for="inputPassword4" class="form-label">Location</label>
    <input  class="form-control" id="inputPassword4"  placeholder="Location"
          value={Location}
          onChange={(e) => setLocation(e.target.value)}
    />
  </div>
    
  <div class="col-md-5">
    <label for="inputPassword4" class="form-label">Village</label>
    <input  class="form-control" id="inputPassword4"
   placeholder="Village"
   value={Village}
   onChange={(e) => setVillage(e.target.value)}
    />
  </div>

  <div class="col-md-5">
    <label for="inputPassword4" class="form-label">District</label>
    <input  class="form-control" id="inputPassword4"   placeholder=" District"
          value={ District}
          onChange={(e) => setDistrict(e.target.value)}
    />
  </div>
  
  <div class="col-md-5">
    <label for="inputPassword4" class="form-label">Latitude</label>
    <input  class="form-control" id="inputPassword4"   placeholder="Latitude"
  value={Latitude}
  onChange={(e) => setLatitude(e.target.value)}
    />
  </div>
 
    
  <div class="col-md-5">
    <label for="inputAddress2" class="form-label">Longitude</label>
    <input  class="form-control" id="inputAddress2"
    placeholder="Longitude"
    value={Long}
    onChange={(e) => setLong(e.target.value)}
    />
  </div>

  <div class="col-md-5">
    <label for="inputAddress2" class="form-label">Area-of-Plot</label>
    <input  class="form-control" id="inputAddress2"
   placeholder=" Area_of_Plot"
   value={ Area_of_Plot}
   onChange={(e) => setArea_of_Plot(e.target.value)}
    />
  </div>
  <div class="col-md-5">
    <label for="inputAddress2" class="form-label"> Perimeter-of-Plot</label>
    <input  class="form-control" id="inputAddress2"
       placeholder=" Perimeter_of_Plot"
       value={ Perimeter_of_Plot}
       onChange={(e) => setPerimeter_of_Plot(e.target.value)}
    />
  </div>

  <div class="col-md-5">
    <label for="inputAddress2" class="form-label">PlotShape</label>
    <input  class="form-control" id="inputAddress2"
     placeholder="PlotShape"
     value={PlotShape}
     onChange={(e) => setPlotShape(e.target.value)}
    />
  </div>

  <div class="col-md-5">
    <label for="inputAddress2" class="form-label">SoilType</label>
    <input  class="form-control" id="inputAddress2"
      placeholder="SoilType"
      value={SoilType}
      onChange={(e) => setSoilType(e.target.value)}
    />
  </div>

  <div class="col-md-5">
    <label for="inputAddress2" class="form-label">Nutrient-Content-Analysis</label>
    <input  class="form-control" id="inputAddress2"
     placeholder="Nutrient_Content_Analysis"
     value={Nutrient_Content_Analysis}
     onChange={(e) => setNutrient_Content_Analysis(e.target.value)}
    />
  </div>

  <div class="col-md-5">
    <label for="inputAddress2" class="form-label">WaterSource</label>
    <input  class="form-control" id="inputAddress2"
      placeholder="WaterSource"
      value={WaterSource}
      onChange={(e) => setWaterSource(e.target.value)}
    />
  </div>

  <div class="col-md-5">
    <label for="inputAddress2" class="form-label">plotid</label>
    <input  class="form-control" id="inputAddress2"
     placeholder="PlotId"
     value={plotid}
     onChange={(e) => setplotid(e.target.value)}
    />
  </div>
  <div class="col-10">
    <button  class="btn btn-primary" onClick={postData1}>Register</button>
  </div>
</form>
</>
  );
}
export default Plots_Regis;
    
     
     





























      {/* <span>
        <h1 style={mystyle1}>Register Plot</h1>
      </span>

      <div style={{ marginLeft: "500px" }}>
        <label >FarmerName</label>
        <input
          placeholder="First Name"
          value={FarmerName}
          onChange={(e) => setFarmerName(e.target.value)}
        />

        <label>Location</label>
        <input
          placeholder="Location"
          value={Location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <label>Village</label>
        <input
          placeholder="Village"
          value={Village}
          onChange={(e) => setVillage(e.target.value)}
        />

        <label> District</label>
        <input
          placeholder=" District"
          value={ District}
          onChange={(e) => setDistrict(e.target.value)}
        />

        <label>Latitude</label>
        <input
          placeholder="Latitude"
          value={Latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />

        <label> Longitude</label>
        <input
          placeholder="Longitude"
          value={Long}
          onChange={(e) => setLong(e.target.value)}
        />

        <label> Area_of_Plot</label>
        <input
          placeholder=" Area_of_Plot"
          value={ Area_of_Plot}
          onChange={(e) => setArea_of_Plot(e.target.value)}
        />

       <label> Perimeter_of_Plot</label>
        <input
          placeholder=" Perimeter_of_Plot"
          value={ Perimeter_of_Plot}
          onChange={(e) => setPerimeter_of_Plot(e.target.value)}
        />

       <label>PlotShape</label>
        <input
          placeholder="PlotShape"
          value={PlotShape}
          onChange={(e) => setPlotShape(e.target.value)}
        />

        <label>SoilType</label>
        <input
          placeholder="SoilType"
          value={SoilType}
          onChange={(e) => setSoilType(e.target.value)}
        />

        <label>Nutrient_Content_Analysis</label>
        <input
          placeholder="Nutrient_Content_Analysis"
          value={Nutrient_Content_Analysis}
          onChange={(e) => setNutrient_Content_Analysis(e.target.value)}
        />

         <label>WaterSource</label>
        <input
          placeholder="WaterSource"
          value={WaterSource}
          onChange={(e) => setWaterSource(e.target.value)}
        />


          <label>PlotId</label>
        <input
          placeholder="PlotId"
          value={plotid}
          onChange={(e) => setplotid(e.target.value)}
        />
       
      </div>
       <button 
         style={{
          margin: "50px",
          display: "block",
          color:"bold",
          backgroundColor:"green",
          borderRadius:"7px",
          marginLeft:"560px",
          marginBottom:"20px",
          marginTop:"-1px"
        }}
        onClick={postData1}
       >
          Register Plot
        </button> */}
  
       
       





      
   
       
     

     
     
     
     
     
     
     
     
     
     
     
     
     
     
