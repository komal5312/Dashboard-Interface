import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Cluster_Regis() {
  const [ClusterCode, setClusterCode] = useState("");
  const [ClusterManager, setClusterManager] = useState("");
  const [clusterid, setClusterId] = useState("");
  const [AddVillages, setAddVillages] = useState("");
  const [District, setDistrict] = useState("");
  const [State, setState] = useState("");
  const [OfficeAddress, setOfficeAddress] = useState("");
  const [ContactDetails, setContactDetails] = useState("");
  const [ClusterLevelStat, setClusterLevelStat] = useState("");
  const [CustomerStat, setCustomerStat] = useState("");
  const [Sales, setSales] = useState("");
  const [Purchase, setPurchase] = useState("");
  const [Expenditure, setExpenditure] = useState("");
  const [HR_basic_details, setHR_basic_details] = useState("");
  const [Lead_Details, setLead_Details] = useState("");

  const mystyle2 = {
    color: "green",
    padding: "0px",
    marginTop: "0px",
    marginLeft: "490px",
  };

  const postData2 = () => {
    axios
      .post("http://localhost:8081/api/cluster/addcluster", {
        ClusterCode,
        ClusterManager,
        clusterid,
        AddVillages,
        District,
        State,
        OfficeAddress,
        ContactDetails,
        ClusterLevelStat,
        CustomerStat,
        Sales,
        Purchase,
        Expenditure,
        HR_basic_details,
        Lead_Details,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <span>
        <h1 style={mystyle2}>Register Cluster</h1>
      </span>

      <form class="row g-3">
        <div class="col-md-5">
          <label for="inputEmail4" class="form-label">
            ClusterCode
          </label>
          <input
            class="form-control"
            id="inputEmail4"
            placeholder=" ClusterCode"
            value={ClusterCode}
            onChange={(e) => setClusterCode(e.target.value)}
          />
        </div>

        <div class="col-md-5">
          <label for="inputPassword4" class="form-label">
            ClusterManager
          </label>
          <input
            class="form-control"
            id="inputPassword4"
            placeholder=" ClusterManager"
            value={ClusterManager}
            onChange={(e) => setClusterManager(e.target.value)}
          />
        </div>

        <div class="col-md-5">
          <label for="inputPassword4" class="form-label">
            ClusterId
          </label>
          <input
            class="form-control"
            id="inputPassword4"
            placeholder=" ClusterId"
            value={clusterid}
            onChange={(e) => setClusterId(e.target.value)}
          />
        </div>

        <div class="col-md-5">
          <label for="inputPassword4" class="form-label">
            AddVillages
          </label>
          <input
            class="form-control"
            id="inputPassword4"
            placeholder=" AddVillages"
            value={AddVillages}
            onChange={(e) => setAddVillages(e.target.value)}
          />
        </div>

        <div class="col-md-5">
          <label for="inputPassword4" class="form-label">
            District
          </label>
          <input
            class="form-control"
            id="inputPassword4"
            placeholder=" District"
            value={District}
            onChange={(e) => setDistrict(e.target.value)}
          />
        </div>

        <div class="col-md-5">
          <label for="inputAddress2" class="form-label">
            State
          </label>
          <input
            class="form-control"
            id="inputAddress2"
            placeholder=" State"
            value={State}
            onChange={(e) => setState(e.target.value)}
          />
        </div>

        <div class="col-md-5">
          <label for="inputAddress2" class="form-label">
            OfficeAddress
          </label>
          <input
            class="form-control"
            id="inputAddress2"
            placeholder="OfficeAddress"
            value={OfficeAddress}
            onChange={(e) => setOfficeAddress(e.target.value)}
          />
        </div>
        <div class="col-md-5">
          <label for="inputAddress2" class="form-label">
            ContactDetails
          </label>
          <input
            class="form-control"
            id="inputAddress2"
            placeholder="ContactDetails"
            value={ContactDetails}
            onChange={(e) => setContactDetails(e.target.value)}
          />
        </div>

        <div class="col-md-5">
          <label for="inputAddress2" class="form-label">
            ClusterLevelStat
          </label>
          <input
            class="form-control"
            id="inputAddress2"
            placeholder=" ClusterLevelStat"
            value={ClusterLevelStat}
            onChange={(e) => setClusterLevelStat(e.target.value)}
          />
        </div>

        <div class="col-md-5">
          <label for="inputAddress2" class="form-label">
            CustomerStat
          </label>
          <input
            class="form-control"
            id="inputAddress2"
            placeholder=" CustomerStat"
            value={CustomerStat}
            onChange={(e) => setCustomerStat(e.target.value)}
          />
        </div>

        <div class="col-md-5">
          <label for="inputAddress2" class="form-label">
            Sales
          </label>
          <input
            class="form-control"
            id="inputAddress2"
            placeholder=" Sales"
            value={Sales}
            onChange={(e) => setSales(e.target.value)}
          />
        </div>

        <div class="col-md-5">
          <label for="inputAddress2" class="form-label">
            Purchase
          </label>
          <input
            class="form-control"
            id="inputAddress2"
            placeholder="Purchase"
            value={Purchase}
            onChange={(e) => setPurchase(e.target.value)}
          />
        </div>

        <div class="col-md-5">
          <label for="inputAddress2" class="form-label">
            Expenditure
          </label>
          <input
            class="form-control"
            id="inputAddress2"
            placeholder="Expenditure"
            value={Expenditure}
            onChange={(e) => setExpenditure(e.target.value)}
          />
        </div>

        <div class="col-md-5">
          <label for="inputAddress2" class="form-label">
            HR-Basic-Details
          </label>
          <input
            class="form-control"
            id="inputAddress2"
            placeholder="  HR_basic_details"
            value={HR_basic_details}
            onChange={(e) => setHR_basic_details(e.target.value)}
          />
        </div>

        <div class="col-md-5">
          <label for="inputAddress2" class="form-label">
            Lead-Details
          </label>
          <input
            class="form-control"
            id="inputAddress2"
            placeholder="  Lead_Details  "
            value={Lead_Details}
            onChange={(e) => setLead_Details(e.target.value)}
          />
        </div>
        <div class="col-10">
          <button class="btn btn-primary" onClick={postData2}>
            Register
          </button>
        </div>
      </form>
    </>
  );
}

export default Cluster_Regis;

{
  /* <span>
        <h1 style={mystyle2}>Register Cluster</h1>
      </span>

      <div style={{ marginLeft: "500px" }}>
        <label > ClusterCode</label>
        <input
          placeholder=" ClusterCode"
          value={ ClusterCode}
          onChange={(e) => setClusterCode(e.target.value)}
        />

        <label> ClusterManager</label>
        <input
          placeholder=" ClusterManager"
          value={ ClusterManager}
          onChange={(e) => setClusterManager(e.target.value)}
        />


        <label> ClusterId</label>
        <input
          placeholder=" ClusterId"
          value={ clusterid}
          onChange={(e) => setClusterId(e.target.value)}
        />

        <label> AddVillages</label>
        <input
          placeholder=" AddVillages"
          value={ AddVillages}
          onChange={(e) => setAddVillages(e.target.value)}
        />

        <label> District</label>
        <input
          placeholder=" District"
          value={ District}
          onChange={(e) => setDistrict(e.target.value)}
        />

        <label> State</label>
        <input
          placeholder=" State"
          value={ State}
          onChange={(e) => setState(e.target.value)}
        />

        <label> OfficeAddress</label>
        <input
          placeholder="OfficeAddress"
          value={ OfficeAddress}
          onChange={(e) => setOfficeAddress(e.target.value)}
        />

         <label> ContactDetails</label>
        <input
          placeholder="ContactDetails"
          value={ ContactDetails}
          onChange={(e) => setContactDetails(e.target.value)}
        />

        <label> ClusterLevelStat</label>
        <input
          placeholder=" ClusterLevelStat"
          value={ ClusterLevelStat}
          onChange={(e) => setClusterLevelStat(e.target.value)}
        />

         <label> CustomerStat</label>
        <input
          placeholder=" CustomerStat"
          value={ CustomerStat}
          onChange={(e) => setCustomerStat(e.target.value)}
        />

       <label> Sales</label>
        <input
          placeholder=" Sales"
          value={  Sales}
          onChange={(e) => setSales(e.target.value)}
        />

       <label>Purchase</label>
        <input
          placeholder="Purchase"
          value={Purchase}
          onChange={(e) => setPurchase(e.target.value)}
        />

        <label>Expenditure</label>
        <input
          placeholder="Expenditure"
          value={Expenditure}
          onChange={(e) => setExpenditure(e.target.value)}
        />

        <label>  HR_basic_details</label>
        <input
          placeholder="  HR_basic_details"
          value={  HR_basic_details}
          onChange={(e) => setHR_basic_details(e.target.value)}
        />

         <label>  Lead_Details  </label>
        <input
          placeholder="  Lead_Details  "
          value={  Lead_Details  }
          onChange={(e) => setLead_Details  (e.target.value)}
        />
        
       
      </div>
    
       
       <button 
        style={{
          margin: "50px",
          display: "block",
          color:"bold",
          backgroundColor:"green",
          borderRadius:"7px",
          marginLeft:"720px",
          marginBottom:"20px",
          marginTop:"-1px"
        }}
        onClick={postData2}
        >
          Register Cluster
        </button>
       
        */
}
