import React, { useState, useEffect } from 'react'

function useCurrencyInfo(currency) {
  const[data,setData] = useState({})
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((res)=>res.json()) // mostly the api returns data in string format, we have to convert it
    // into jsonified format.
    .then((res)=>setData(res.currency)) // the result we are getting from the above then is gonna 
    // passed down to this then and use it too.
  }, [currency])

  return data
}

export default useCurrencyInfo