import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import List from './List'
const DataList = () => {
    const[data,setData]=useState([]);
    const[isLoading,setIsLoading]=useState(true);
    useEffect(()=>{
    setTimeout(() => {
        setData(["Aradhana","XYZ","ABC"]);
        setIsLoading(false);
    }, 5000);
    })

    if(!isLoading)
    return < List items={data}/>
return (
    <>
        <Loader/>
    </>
  )
}

export default DataList