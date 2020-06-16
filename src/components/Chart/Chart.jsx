import React, { useEffect, useState } from 'react';
import { fetchdailyData } from '../../api'
import { Line, Bar } from "react-chartjs-2"
import styles from "./Chart.module.css"

const Chart = ({ data, country }) => {
    const [dailydata, setdailydata] = useState([])

    useEffect(() => {
        const fetchdaily = async () => {
            setdailydata(await fetchdailyData())
        }


        fetchdaily()

    }, [])

    const linechart = (

        dailydata.length ?
            (<Line data={{
                labels: dailydata.map(({ date }) => date),
                datasets: [{
                    data: dailydata.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: "#3333ff",
                    fill: true
                }, {
                    data: dailydata.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: "red",
                    fill: true

                }]
            }}
            />) : null
    )
    

    const barChart = (
        data ? (
            <Bar
            data={{
                labels:['Infected','Recovered','Deaths','Still'],
                datasets:[{
                    label:'People',
                    backgroundColor:['red','green','black','grey'],
                    data:[data.confirmed.value , data.recovered.value , data.deaths.value ,data.confirmed.value - data.recovered.value - data.deaths.value ]
                }]

            }}
            options={{
                legend:{ display:false },
                title:{display:true , text :`current state in ${country}`}
            }}
            />
        ) : null
    )

    return (
        <div className={styles.container}>
            {country ? barChart : linechart}
            {/* {linechart} */}

        </div>
    );
}

export default Chart;