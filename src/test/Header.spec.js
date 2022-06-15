import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/organisms/Header";
import { Authenticator } from "@aws-amplify/ui-react";

test("Se renderiza correctamente la seccion de Servicios", () => {
  const component = render(
    <Authenticator.Provider>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Authenticator.Provider>
  );
  component.getAllByText("Inicio");
  component.getAllByText("Nosotros");
  component.getAllByText("Servicios");
  component.getAllByText("Contáctanos");
  component.getAllByText("Iniciar Sesión");
});
