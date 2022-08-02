import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Clusters_lists() {
  const [clusterdata, setClusterData] = useState([]);
 

  useEffect(() => {
    axios.get(`http://localhost:8081/api/cluster/clusterdata`).then((res) => {
      console.log(res);
      setClusterData(res.data.getcluster);
    });
  }, []);

  const mystyle2 = {
    color: "dark-blue",
    padding: "0px",
    marginTop: "0px",
    marginLeft: "490px",
  };

  return (
    <>
      <span>
        <h1 style={mystyle2}> Clusters Lists</h1>
      </span>

      <table class="table table-bordered">
        <tbody>
          <tr>
            <th>ClusterCode</th>
            <th> ClusterManager</th>
            <th> Clusterid</th>
            <th> AddVillages</th>
            <th> District</th>
            <th>State</th>
            <th> OfficeAddress</th>
            <th> ContactDetails</th>
            <th> CustomerStat</th>
            <th> Sales</th>
            <th> Purchase</th>
            <th> Expenditure</th>
            <th> HR_basic_details</th>
            <th> Lead_Details</th>
           
          </tr>
          

          {clusterdata.map((item) => (
            <tr>
              <td>{item.ClusterCode}</td>
              <td>{item.ClusterManager}</td>
              <td>{item.Clusterid}</td>
              <td>{item.AddVillages}</td>
              <td>{item.District}</td>
              <td>{item.State}</td>
              <td>{item.OfficeAddress}</td>
              <td>{item.ContactDetails}</td>
              <td>{item.CustomerStat}</td>
              <td>{item.Sales}</td>
              <td>{item.Purchase}</td>
              <td>{item.Expenditure}</td>
              <td>{item.HR_basic_details}</td>
              <td>{item.Lead_Details}</td>
              <td>
                    <Link className="btn btn-Primary"><button className="btn btn-info" > View</button></Link>
                    <Link><button className="btn btn-outline-primary"> Edit</button></Link>
                    <Link><button className="btn btn-danger"> Delete</button></Link>
              </td>

            </tr>
          ))}
        </tbody>
      </table>

    </>
  );
}
export default Clusters_lists;
                    
            

 



              
                   



