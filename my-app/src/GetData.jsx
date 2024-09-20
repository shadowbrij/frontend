import React, { useEffect } from "react";
import { useState } from "react";

function GetData() {
  // using state management, manage
  const [data,setData] = useState({});
  // error, loading and success states
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);

  async function fetchData() {
    // complete the code here
    try{
       const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
       const data =  await response.json();      
       return data;
    }
    catch(error){
      console.log(error);
      setLoading(false);
      setError(true);
    }
    
  }

  // call the fetch data function when the
  // page loads
  useEffect(()=>{
    fetchData()
    .then((data)=>{
        setLoading(false);
        setData(data);
    })
  },[])
  // Here is the basic data boilerplate
  return (
    loading ? <h2>Loading data...</h2> :
    error ? <h2>Error fetching data</h2> :
    <>
      {/* do not edit the code below this line */}
      <h2>Name: {data.name}</h2>
      <h2>Email: {data.email}</h2>
      <h2>Username: {data.username}</h2>
    </>
  );
}

export default GetData;
