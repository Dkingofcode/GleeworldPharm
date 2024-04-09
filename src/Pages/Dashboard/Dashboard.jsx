//import React from 'react';
import Header from '../../Components/header';
//import Sidebar from '../../Components/Sidebar';
import CashFlowicon from "../../assets/images/Cashflow.svg";
import revenue from '../../assets/images/newRevenue.svg';
import DownArrow from '../../assets/images/newArrowDown.svg';
import UpArrow from '../../assets/images/newArrowUp.svg';
import NairaIcon from "../../assets/images/naira.png";
import Consumers from '../../assets/images/Users.svg';
import User from '../../assets/images/User.svg';
import { useLocation } from 'react-router-dom';
import AgentIcon from '../../assets/images/Bank.svg';
import pharmacyIcon from '../../assets/images/Pharmarcystore.svg';
import './module.dashboard.css';
import { DashboardData } from '../TableData';
import CashComponent from '../../Components/DashboardComponent/CashComponent';
import StakeholderComponent from '../../Components/DashboardComponent/StakeholderComponent';
import { DashboardCashData } from '../../Components/ComponentsData';
import TableComponent from '../../Components/CommonTableComponent/TableComponent';
import { useEffect, useState } from 'react';

const Dashboard = () => {
   const [dashboardCount, setDashboardCount] = useState(null);
   const baseurl = 'staging.medfinder.com.ng';
   const dashboardurl = `${baseurl}/api/v1/admin/assets`;
  


  const {pathname} = useLocation();
  console.log(pathname);
   
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await fetch(dashboardurl);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setDashboardCount(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDashboardData();
  }, []);


  //  const DashboardCount = fetch(dashboardurl).then(res => res.json).then(result => result.data)
  //  .catch(err => {console.log(err)});



  return (
    <div>
       <Header  />

       <section className='categories'>
      <div className="cash">
        <CashComponent Data={DashboardCashData}/>
     

        

      </div>

     <div className="stakeholder">
     <StakeholderComponent
      color="#FDF6ED"
      topText={dashboardCount?.userCount || '-'}
      bottomText="Users"
      
      image={Consumers}
      />
    <StakeholderComponent
      color="#D6D6F6"
      topText={dashboardCount?.consumerCount || '-'}
      bottomText="Consumers"
      
      image={User}
      />
       <StakeholderComponent
      color="#E5F8ED"
      topText={dashboardCount?.agentCount || '-'}
      bottomText="Agents"
      image={AgentIcon}
      />
       <StakeholderComponent
      color="#FCEAEA"
      topText={dashboardCount?.userCount || '-'}
      bottomText="Pharmacies"
      
      image={pharmacyIcon}
      />
     </div>
       
       </section>



      <TableComponent
       pathname={pathname}
      topleftText="Frequently Purchased"
      showlast={true}
      placeholder="Search Products ..."
   Data={DashboardData}
   withImage={true}
        />
    </div>
  )
}

export default Dashboard;
