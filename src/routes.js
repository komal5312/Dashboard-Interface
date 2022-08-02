import DeviceManagment from "views/pages/device-managment/Device-Managment.js";
import Farmers_Regis from "views/pages/farmers/Farmers_Regis";
import Farmers_Lists from "views/pages/farmers/Farmers_Lists"
import Clusters_Lists from "views/pages/clusters/Clusters-Lists"
import Clusters_Regis from "views/pages/clusters/Cluters_Regis"
import Plots_Regis from "views/pages/plots/Plots_Regis"
import Plots_List from "views/pages/plots/Plots_List"
import View_Farmer from "views/pages/farmers/View_Farmer"
import Edit_Farmer from "views/pages/farmers/Edit_Farmer";
import Delete_Farmer from "views/pages/farmers/Delete_Farmer";


const routes = [
  
  {
    collapse: true,
    name: "Machine",
    icon: "ni ni-shop text-primary",
    state: "DeviceManagementCollapse",
    views: [        
      {
        path: "/device-management",
        name: "Machine History",
        miniName: "b",
        component: DeviceManagment,
        layout: "/admin"
      },
    ]
  },
  {
    collapse: true,
    name: "  Farmers",
    icon: "ni ni-shop text-primary",
    state: "DeviceManagementCollapse",
    views: [        
      {
        path: "/farmers-regis",
        name: " Register Farmers ",
        miniName: "b",
        component: Farmers_Regis,
        layout: "/admin"
      },
      {
        path: "/farmers-lists",
        name: "  Farmers List ",
        miniName: "b",
        component: Farmers_Lists,
        layout: "/admin"
      },
      {
        path: "/view",
        miniName: "b",
        component: View_Farmer,
        layout: "/admin"
      },
     
      {
        path: "/edit",
        miniName: "b",
        component: Edit_Farmer,
        layout: "/admin"
      },
      {
        path: "/delete",
        miniName: "b",
        component: Delete_Farmer,
        layout: "/admin"
      },
    ]
  },
        
        


  {
    collapse: true,
    name: " Plots",
    icon: "ni ni-shop text-primary",
    state: "DeviceManagementCollapse",
    views: [        
      {
        path: "/plots-regis",
        name: " Register Plot ",
        miniName: "b",
        component: Plots_Regis,
        layout: "/admin"
      },
      {
        path: "/plots-lists",
        name: "  Plots Lists ",
        miniName: "b",
        component: Plots_List,
        layout: "/admin"
      },
    ]
  },

  {
    collapse: true,
    name: "Clusters",
    icon: "ni ni-shop text-primary",
    state: "DeviceManagementCollapse",
    views: [        
      {
        path: "/clusters-regis",
        name: "Register Clusters",
        miniName: "b",
        component:Clusters_Regis,
        layout: "/admin"
      },
      {
        path: "/clusters-lists",
        name: " Clusters Lists",
        miniName: "b",
        component: Clusters_Lists,
        layout: "/admin"
      },
    ]
  },
  
 
  
];

export default routes;
