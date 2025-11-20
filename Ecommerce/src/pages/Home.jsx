import { useState, useEffect } from "react"

export default function Home()
{
    return(
        <>
        <div className="flex flex-col items-center"> {/*Div for the whole page*/}
            <div className="flex justify-center">
                <div className=" border border-orange-300 w-[95%] rounded-lg">
                    <h1>Big thing</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas molestias corporis sunt sequi numquam provident eaque quos, itaque deleniti iusto. Magnam voluptatum sunt nobis accusantium. Incidunt facilis laboriosam minus culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, similique commodi laudantium et aperiam itaque obcaecati perspiciatis architecto nulla sed nam animi, tempore illum, exercitationem molestiae autem ipsum cumque. Ipsum?</p>
                </div>
            </div>
        </div>
        </>
    )
}