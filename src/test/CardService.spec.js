import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import arrendar from "../images/arrendar.png";
import ServiceCard from '../components/molecules/CardService';
import { BrowserRouter, Routes, Route } from "react-router-dom";

test

  ('El card presenta la informacion recibida', () => {
    const dato = {
      image:
        arrendar,
      cardTitle: "Arriendo",
      description: "Solicita arriendos de las mejores bicicletas de MasterBikes a precios insuperables.",
      textLink: "Arrendar",
      routeLink: "protected1",
    }

    const component = render(<BrowserRouter>
      <Routes>
        <Route path="/" element={<ServiceCard
          image={dato.image}
          cardTitle={dato.cardTitle}
          description={dato.description}
          textLink={dato.textLink}
          routeLink={dato.routeLink}/>} />
      </Routes>
    </BrowserRouter>);
    component.getAllByText(dato.cardTitle)
    component.getAllByText(dato.description)
    component.getAllByText(dato.textLink)
  });