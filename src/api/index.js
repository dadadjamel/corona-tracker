import Axios from "axios";

const url = "https://covid19.mathdro.id/api"

export const fetchData = async (country)=>{
    try {
        var changableUrl = url

        if (country) {
            changableUrl = `${url}/countries/${country}`
            
        }
        const {data :{confirmed,deaths,lastUpdate,recovered} } = await Axios.get(changableUrl)

        return {confirmed,deaths,lastUpdate,recovered}
        
    } catch (error) {
        console.log(error)
        
    }
}

export const fetchdailyData = async ()=>{
    try {
        const {data} = await Axios.get(`${url}/daily`)

        // console.log(data)

        const modifiedData = data.map((dailydata) =>({
            
            confirmed : dailydata.confirmed.total,
            deaths : dailydata.deaths.total,
            date : dailydata.reportDate
        }))
        

        return modifiedData
        
        
    } catch (error) {
        console.log(error)
        
    }
}

export const countries = async () =>{
    try {
        const {data : {countries} } = await Axios.get(`${url}/countries`)

        return countries.map((country)=> country.name)
    } catch (error) {
        console.log(error);
        
        
    }
}