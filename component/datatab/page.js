

import React from "react";
import Link from "next/link";
// import Table from "./table";
export default function Datatable(props) {

    const finalset = props.final;
    const searchval = props.search;

    console.log("hiii")

    return (
        <div>
            <p>hello</p>
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
    )

    // return
    // (
    //     <div class="flex flex-col ">
    //         <p className="">
    //             hi
    //         </p>
    //         {/* 
    //     </div>
    // )
}