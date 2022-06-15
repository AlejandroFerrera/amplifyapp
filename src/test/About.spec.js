import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { About } from "../components/organisms/About";

test("Se renderiza correctamente la seccion de Servicios", () => {
  const aboutDescription = `Descripcion MasterBikes`;

  const component = render(
    <About
      title="Nosotros"
      description={aboutDescription}
      imgUrl="../images/holdingbike.jpg"
    />
  );
  component.getAllByText("Nosotros");
  component.getAllByText( `Descripcion MasterBikes`);
});
