import { useEffect, useState } from "react"

const useFetch = (url) =>{
    const [weather,setWeather] = useState(null)

   useEffect(()=>{
    fetch(url).then((res)=>{
        res.json().then(result=>{
            setWeather(result)
        })
    })
   },(url))
  return weather
}

export default useFetch