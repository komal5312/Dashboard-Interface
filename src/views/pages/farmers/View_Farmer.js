import React , {useState,useEffect} from 'react'
import axios from "axios";

function View_Farmer() {

  const [values, setValues] = useState([]);

  
  useEffect(() => {
    axios.get("http://localhost:8081/api/farmer/farmerdata").then((res) => {
      console.log(res);
      setValues(res.data.getfarmer);
    });
  }, []);



  return (
    <>
    {values.map((user) => {
      return (
        <>
          <div className="container-fluid">
            <div className="row">
              <div className="col-5 mt-5">
                <div className="card" style={{ width: "100%" }}>
                  <div className="card-body">
                   
                    <p>FirstName:-------- {user.FirstName}</p>
                    <p>LastName:----------------- {user.LastName}</p>
                    <p>OwnerType:----------------- {user.OwnerType}</p>
                    <p>Address:----------------- {user.Address}</p>
                    <p>
                      FarmingSeason:----------------- {user.FarmingSeason}
                    </p>
                    <p>CropType:----------------- {user.CropType}</p>
                    <p>Crop_SubType:----------------- {user.Crop_SubType}</p>
                    <p>PlotArea:----------------- {user.plotArea}</p>
                    <button className="btn btn-info">View Plot</button>
                    <button className="btn btn-outline-primary"> Edit Plot</button>
                      
                     
                    
                    <button className="btn btn-danger">Delete Plot</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </>
      );
    })}
</>


  )
}

export default View_Farmer