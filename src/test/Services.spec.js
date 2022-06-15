import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "../components/organisms/Services";

test

  ('Se renderiza correctamente la seccion de Servicios', () => {

    const component = render(<BrowserRouter>
      <Routes>
        <Route path="/" element={<Services></Services>} />
      </Routes>
    </BrowserRouter>);
    component.getAllByText('Servicios')
  });