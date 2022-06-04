import React from "react";
import { Presentation } from "../organisms/Presentation";
import Services from "../organisms/Services";
import { About } from "../organisms/About";


const aboutDescription = `La fábrica de bicicletas "San Diego" se dedica desde hace 30 años a la fabricación de
                     diversos tipos de bicicletas y triciclos. Está ubicada en el barrio San Diego y es reconocida 
                     como una de las más antiguas del sector.`;


export function Home() {
    return (
        <>
            <Presentation />
            <About
                title="Nosotros"
                description={aboutDescription}
                imgUrl='../images/holdingbike.jpg'
            />
            <Services/>
        </>
    )
}