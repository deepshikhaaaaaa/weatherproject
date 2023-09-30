'use client'

import React from "react";
import Link from "next/link";
import Datatable from "./datatab/page";
import { useState, useEffect } from "react";
export default function Main() {















    const length = 41; // Change the length as needed
    const myarr = new Array(length).fill(0);

    const weatherParameters = [
        ["Temperature (2 m)", "temperature_2m"],
        ["Relative Humidity (2 m)", "relativehumidity_2m"],
        ["Dewpoint (2 m)", "dewpoint_2m"],
        ["Apparent Temperature", "apparent_temperature"],
        ["Precipitation Probability", "precipitation_probability"],
        ["Precipitation (rain + showers + snow)", "precipitation"],
        ["Rain", "rain"],
        ["Showers", "showers"],
        ["Snowfall", "snowfall"],
        ["Snow Depth", "snow_depth"],
        ["Weathercode", "weathercode"],
        ["Sealevel Pressure", "pressure_msl"],
        ["Surface Pressure", "surface_pressure"],
        ["Cloudcover Total", "cloudcover"],
        ["Cloudcover Low", "cloudcover_low"],
        ["Cloudcover Mid", "cloudcover_mid"],
        ["Cloudcover High", "cloudcover_high"],
        ["Visibility", "visibility"],
        ["Evapotranspiration", "evapotranspiration"],
        ["Reference Evapotranspiration (ET₀)", "et0_fao_evapotranspiration"],
        ["Vapor Pressure Deficit", "vapor_pressure_deficit"],
        ["Wind Speed (10 m)", "windspeed_10m"],
        ["Wind Speed (80 m)", "windspeed_80m"],
        ["Wind Speed (120 m)", "windspeed_120m"],
        ["Wind Speed (180 m)", "windspeed_180m"],
        ["Wind Direction (10 m)", "winddirection_10m"],
        ["Wind Direction (80 m)", "winddirection_80m"],
        ["Wind Direction (120 m)", "winddirection_120m"],
        ["Wind Direction (180 m)", "winddirection_180m"],
        ["Wind Gusts (10 m)", "windgusts_10m"],
        ["Temperature (80 m)", "temperature_80m"],
        ["Temperature (120 m)", "temperature_120m"],
        ["Temperature (180 m)", "temperature_180m"],
        ["Soil Temperature (0 cm)", "soil_temperature_0cm"],
        ["Soil Temperature (6 cm)", "soil_temperature_6cm"],
        ["Soil Temperature (18 cm)", "soil_temperature_18cm"],
        ["Soil Temperature (54 cm)", "soil_temperature_54cm"],
        ["Soil Moisture (0-1 cm)", "soil_moisture_0_1cm"],
        ["Soil Moisture (1-3 cm)", "soil_moisture_1_3cm"],
        ["Soil Moisture (3-9 cm)", "soil_moisture_3_9cm"],
        ["Soil Moisture (9-27 cm)", "soil_moisture_9_27cm"],
        ["Soil Moisture (27-81 cm)", "soil_moisture_27_81cm"]
    ];

    //   console.log(weatherParameters);


    function Checkbox(props) {
        return (
            <div class='flex flex-row hover:bg-gray-50 hover:text-black hover:text-[17px] p-1  sm:w-[220px] w-[170px] border-solid border-[1px] border-gray-400 h-[50px]  rounded-[5px]  items-center'>
                <input type="checkbox"
                    class='
            appearance-none h-5 w-5 bg-gray-200 rounded-full 
            checked:bg-gray-700 checked:scale-75
            transition-all duration-200 peer'
                    onClick={() => {
                        if (myarr[props.id] == 0)
                            myarr[props.id] = 1;
                        else
                            myarr[props.id] = 0;
                        console.log(myarr)
                    }}
                // checked={props.stat}
                />
                <div class='h-5 w-5 absolute rounded-full pointer-events-none
        peer-checked:border-gray-700 peer-checked:border-2'>
                </div>
                <label for='cb1' class='flex flex-col justify-center px-2 peer-checked:text-gray-700  sm:w-[180px] w-[100px]  text-ellipsis select-none truncate'>{props.data}</label>
            </div>
        )
    }
    const [search, setsearch] = useState("")
    const [searchval, setsearchval] = useState({})
    const [loading, setloading] = useState(false)
    const [done, setDone] = useState(false)
    var [finalset, setFinal] = useState([['Time Stamp', "time"]]);
    const [long, setlong] = useState();
    const [lat, setlat] = useState();
    const [verify, setverify] = useState(false);

    // finalset.push()
var longi ,lati;

    // var alert = "";
    // var dummy;
    const fetchapi = (e) => {
        // setFinal([]);
        e.preventDefault();

        if (lati >= -180 && lati <= 180 && longi >= -180 && longi <= 180) {
            setloading(true);
            setverify(false)
            // setsearch(e.target.value);
            var dummyurl = "";
            for (var i = 0; i < 41; i++) {
                if (myarr[i] == 1 && i != 40) {
                    dummyurl += weatherParameters[i][1] + ',';
                    finalset.push(weatherParameters[i]);
                }
                else if (myarr[i] == 1 && i == 40) {
                    dummyurl += weatherParameters[i][1];
                    finalset.push(weatherParameters[i]);
                }

                setFinal(finalset.filter(function (item, i, ar) { return ar.indexOf(item) === i; }))
            }
            console.log(dummyurl);
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${lati}&longitude=${longi}&hourly=` + dummyurl
            console.log(url);


            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    setsearchval(data)
                    console.log(searchval)
                    setloading(false)
                    setDone(true)
                    console.log(finalset)
                    // finalset.sort();
                    const uniqueArray = [...new Set(finalset.map(JSON.stringify))].map(JSON.parse);
                    console.log(uniqueArray)
                    setFinal(uniqueArray)
                })
        }
        else {
            setverify(true)
        }

    }
    // const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=" + dummyurl
    // console.log(url);


    // fetch(url)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setsearchval(data)
    //         console.log(searchval)
    //         setloading(false)
    //         setDone(true)
    //         console.log(finalset)
    //         // finalset.sort();
    //         const uniqueArray = [...new Set(finalset.map(JSON.stringify))].map(JSON.parse);
    //         console.log(uniqueArray)
    //         setFinal(uniqueArray)
    //     })

const alert =(verify)? (
    <div>
        <p className="text-[20px] font-semibold mt-[20px] text-red-500">
            Enter correct longitude and latitude
        </p>
    </div>
):"";

const settinglong=(e)=>{

longi=e.target.value
}
const settinglat=(e)=>{

lati=e.target.value
    
}

    return (
        <div className="flex flex-col justify-center items-center ">
            {alert}
            <div className="sm:mt-[40px] border-solid border-[2px] border-gray-500 sm:w-[500px] w-[300px] h-[200px] sm:h-[120px] justify-center items-center flex flex-col self-center mb-[40px]">
                <p className="sm:text-[20px] font-semibold mb-[20px]">Enter Longitude and Latitude</p>
                <div className="sm:flex gap-[20px]">
                    <input type="text" onChange={(e) => {e.preventDefault(); settinglong(e) }} placeholder="Latitude" className="block mb-2 bg-gray-100 p-2 rounded-lg border-2 border-gray-500 shadow-md focus:outline-none focus:border-gray-600" />
                    <input type="text" onChange={(e) => {e.preventDefault(); settinglat(e) }} placeholder="Longitude" className="block mb-2 bg-gray-100 p-2 rounded-lg border-2 border-gray-500 shadow-md focus:outline-none focus:border-gray-600" />
                </div>
            </div>
            {
                (!done) ? <div className="grid grid-cols-2 sm:grid-cols-6  gap-2">
                    {
                        weatherParameters.map((e, i) => {
                            console.log(e)
                            return (
                                <Checkbox data={e[0]} id={i} stat={myarr[i]}></Checkbox>
                            )
                        })
                    }
                </div> : ""

            }
            

            
            {
                (loading) ? "Loading" : ""

            }
            <button onClick={fetchapi} className="w-[90px] p-2 mt-[20px] border-solid border-gray-600 border-[2px] rounded-[6px] hover:bg-black hover:text-white ">call api</button>
            


            {(done) ? (
                <div>
                    <div className="overflow-hidden">
                        {/* <p>hello</p> */}
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div class="overflow-hidden">
                                    <table class="min-w-full  text-center text-sm font-light">
                                        <thead
                                            class="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                                            <tr>
                                                {

                                                    finalset.map((e, i) => {
                                                        finalset.filter(function (item, i, ar) { return ar.indexOf(item) === i; })
                                                        // console.log(e)
                                                        return <th scope="col" class=" px-6 py-4">{e[0]}</th>
                                                    })}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                [...Array(50)].map((k, j) => {
                                                    return (
                                                        <tr class="border-b dark:border-neutral-500">
                                                            {finalset.map((e, i) => {
                                                                const kl = searchval.hourly;
                                                                console.log(e[1])
                                                                const h = e[1];
                                                                console.log(j)

                                                                return <td class="whitespace-nowrap  px-6 py-4 font-medium">{kl[e[1]][j]}</td>
                                                            })}
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : ""}



        </div>
    )


}
