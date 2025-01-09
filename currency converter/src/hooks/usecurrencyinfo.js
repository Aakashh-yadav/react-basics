import{ useState,useEffect } from "react";
function useSurrencyinfo(currency)
{   const[data,setdata]=useState({})
    useEffect(()=>{
        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_KkmM3ak32v2mliu6GV2CQnatLQ4x9nIfbf0oSj9k&currencies=EUR%2CUSD%2CCAD&base_currency=${currency}`).then((res)=>res.json()).then((res)=>setdata(res[currency]))
    },[currency])
    console.log(data);
    return data;
    
}
export default usecurrencyinfo;