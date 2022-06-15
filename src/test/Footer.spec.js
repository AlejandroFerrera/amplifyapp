import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "../components/organisms/Footer";

test

  ('Se renderiza correctamente el Footer', () => {

    const component = render(<BrowserRouter>
      <Routes>
        <Route path="/" element={<Footer></Footer>} />
      </Routes>
    </BrowserRouter>);
    component.getAllByText('Contacto:')
    component.getAllByText('Tel: +5622123456')
    component.getAllByText('Email: masterbikes_contacto@gmail.com')
    component.getAllByText('Encuentranos en:')
    component.getAllByText('San Diego 550, Santiago, Región Metropolitana')
  });