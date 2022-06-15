import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Presentation } from "../components/organisms/Presentation";

test

  (' Presentation se renderiza correctamente', () => {

    const component = render(<BrowserRouter>
      <Routes>
        <Route path="/" element={<Presentation></Presentation>} />
      </Routes>
    </BrowserRouter>);
    component.getAllByText('Tú bicicleta es nuestra prioridad')
    component.getAllByText('Arriendos, reparaciones, accesorios y más...')
  });