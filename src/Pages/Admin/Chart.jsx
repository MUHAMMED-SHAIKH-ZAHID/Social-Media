import React from 'react';
import{ useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useDispatch, useSelector } from 'react-redux';
import { dashbordData } from '../../Redux/features/AdminSlice';

const Chart = () => {
    const dispatch=useDispatch()
    const verified = useSelector(state=>state.admin.emailVerified)
    const emaiverified =verified.filter(f => f.email_verified === true).length
    const emaiNotverified =verified.filter(f => f.email_verified === false).length
    useEffect(()=>{
        dispatch(dashbordData())
    },[])
  return (
    <div>Email Chart
         <div className='flex'>
       

          <PieChart
            animation
            animate='true'
            animationDuration={1000}
            animationEasing="ease-out"
            center={[50, 20]}
            data={[
              {
                color: "blue",
                title: `Email Verified ${emaiverified}`,
                value: emaiverified
              },
              {
                color: "gray",
                title: `Email Not varified ${emaiNotverified}`,
                value:emaiNotverified
              },
            ]}
            labelPosition={10}
            lengthAngle={360}
            lineWidth={50}
            paddingAngle={2}
            radius={20}
            startAngle={0}
            viewBoxSize={[100, 40]}
          />
          
        </div>
      
    </div>
  )
}

export default Chart