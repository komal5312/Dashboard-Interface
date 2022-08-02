import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Farmers_Lists() {
  const [data, setData] = useState([]);
  const [values, setValues] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/api/farmer/farmerdata").then((res) => {
      console.log(res);
      setData(res.data.getfarmer);
      setValues(res.data.getfarmer);
    });
  }, []);
  const handleFarmerView = () => {
    axios
      .get("http://localhost:8081/api/farmer/farmername")
      .then((res) => {
        console.log(res);
        setValues(res.data.getfarmername);
      });
  };

  const mystyle2 = {
    color: "dark-blue",
    padding: "0px",
    marginTop: "0px",
    marginLeft: "490px",
  };

  return (
    <>
      <span>
        <h1 style={mystyle2}> Farmers Lists</h1>
      </span>

      <table class="table table-bordered">
        <tbody>
          <tr>
            <th>FirstName</th>
            <th> LastName</th>
            <th> FarmerId</th>
            <th> OwnerType</th>
            <th> Address</th>
            <th> FarmingSeason</th>
            <th> CropType</th>
            <th> Crop_SubType</th>
            <th> plotArea</th>
            <th> Update/View</th>
          </tr>

          {data.map((item) => (
            <>
              <tr>
                <td>{item.FirstName}</td>
                <td>{item.LastName}</td>
                <td>{item.FarmerId}</td>
                <td>{item.OwnerType}</td>
                <td>{item.Address}</td>
                <td>{item.FarmingSeason}</td>
                <td>{item.CropType}</td>
                <td>{item.Crop_SubType}</td>
                <td>{item.plotArea}</td>
                <td>
                 <Link  to ='/admin/view'><button  className="btn btn-info" onClick={handleFarmerView}>View</button></Link>
                 <Link  to ='/admin/edit'><button  className="btn btn-outline-primary" onClick={handleFarmerView}>Edit</button></Link>
                 <Link  to ='/admin/delete'><button  className="btn btn-danger" onClick={handleFarmerView}>Delete</button></Link>
                 
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>

     
    </>
  );
}
                        
                      
                     
export default Farmers_Lists;

{
  /* <Link to={`/users/view/${user.id}`}><button>View</button></Link>
  <Link to={`/users/edit/${user.id}`}><button>Edit</button></Link>
  <Link to={`/users/edit/${user.id}`}><button>Delete</button></Link>
  
  
{
  /* <h3 style= {{color:'red'}}>Not Registered yet??</h3>
<Link to='/Farmers_regis'><button className="btn btn-primary" onClick={}>Register Now</button></Link> */
}

// const[ farmerId,setFarmerId]=useState()
// console.log(farmerId)

// const handleView = ()=>{
//   axios.get(`http://localhost:8081/api/Farmer/FarmerData`)
//   .then((res)=>{
//      console.log(res)
//      setValues(res.data)
//      setFarmerId(res.data.farmerdata)

//   })
// }
