import React from "react";
import { Presentation } from "../organisms/Presentation";
import Services from "../organisms/Services";
import { About } from "../organisms/About";
import { Footer } from "../organisms/Footer";


const aboutDescription = `“MasterBikes” nace bajo la premisa de un sueño alcanzado por la gran fábrica de bicicletas “San Diego” del antiguo barrio de Santiago de Chile. 
Gracias a ustedes hemos comprendido la inclusión de “Masterbikes”, como nueva visión de servicio. Seguiremos dando todo lo mejor para que ustedes sigan creyendo en nosotros y nuestros servicios. 							`;


export function Home() {
    return (
        <>
            <Presentation />
            <About
                title="Nosotros"
                description={aboutDescription}
                imgUrl='../images/holdingbike.jpg'
            />
            <Services />
            <Footer />
        </>
    )
}