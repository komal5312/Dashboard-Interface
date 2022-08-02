import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Plots_List() {

  const [plotdata, setPlotData] = useState([]);
  const [carddata, setCardData] = useState([]);



  useEffect(() => {
    axios.get(`http://localhost:8081/api/plot-details/plotdata`)
    .then((res) => {
      console.log(res);
      setPlotData(res.data.getplot);
      setCardData(res.data.getplot);
    });
  }, []);

    const mystyle2 = {
        color: "blue",
        padding: "0px",
        fontFamily: "Cursive",
        marginTop: "0px",
        marginLeft:"490px"
      };

      const[value,setValue] = useState("")

      const handlePlotView = ()=>{
        axios.get("http://localhost:8081/api/Farmer/FarmerData/${farmerName}")
        .then((res)=>{
           console.log(res)
           setValue(res.data.data[0])
        })
      }
    


  return (
    <>
     <span>
        <h1 style={mystyle2}>Plot Lists</h1>
      </span>
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th>FarmerName</th>
            <th> Location</th>
            <th> Village</th>
            <th> District</th>
            <th> Latitude</th>
            <th> Long</th>
            <th> Area_of_Plot</th>
            <th> Perimeter_of_Plot</th>
            <th> PlotShape</th>
            <th> SoilType</th>
            <th> WaterSource</th>
            <th> plotid</th>
          </tr>

          {plotdata.map((item) => (
            <tr>
              <td>{item.FarmerName}</td>
              <td>{item.Location}</td>
              <td>{item.Village}</td>
              <td>{item.District}</td>
              <td>{item.Latitude}</td>
              <td>{item.Long}</td>
              <td>{item.Area_of_Plot}</td>
              <td>{item.Perimeter_of_Plot}</td>
              <td>{item.PlotShape}</td>
              <td>{item.SoilType}</td>
              <td>{item.WaterSource}</td>
              <td>{item.plotid}</td>
              <td>
                    <Link className="btn btn-Primary"><button className="btn btn-info"
                     onClick={handlePlotView}
                    > View</button></Link>
                    <Link><button className="btn btn-outline-primary"> Edit</button></Link>
                    <Link><button className="btn btn-danger"> Delete</button></Link>

              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {carddata.map((user) => {
        return (
          <>
        
            <div className="container-fluid">
              <div className="row">
                <div className="col-5 mt-5">
                  <div className="card" style={{ width: "100%" }}>
                    <div className="card-body">
                      <p>{user._id}</p>
                      <p>FarmerName:-------- {user.FarmerName}</p>
                      <p>Location:----------------- {user.Location}</p>
                      <p>Village:----------------- {user.Village}</p>
                      <p>District:----------------- {user.District}</p>
                      <p>
                      Latitude:----------------- {user.Latitude}
                      </p>
                      <p>Long:----------------- {user.Long}</p>
                      <p>Area_of_Plot:----------------- {user.Area_of_Plot}</p>
                      <p>Perimeter_of_Plot:----------------- {user.Perimeter_of_Plot}</p>
                      <p>PlotShape:----------------- {user.PlotShape}</p>
                      <p>SoilType:----------------- {user.SoilType}</p>
                      <p>WaterSource:----------------- {user.WaterSource}</p>
                      <p>plotid:----------------- {user.plotid}</p>
                      <button className="btn btn-info">View Plot</button>
                      <button className="btn btn-outline-primary">Edit Plot</button>
                      <button className="btn btn-danger">Delete Plot</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                      
                      
          
            ;
          </>
        );
      })}

</>


  )
}

export default Plots_List