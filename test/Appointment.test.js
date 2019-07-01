import React from "react";
import ReactDom from "react-dom";
import { Appointment } from "../src/Appointment";

describe("Appointment", () => {
  it("renders the customer first name", () => {
    const customer = { firstName: "Ashely" };
    const container = document.createElement("div");
    ReactDom.render(<Appointment customer={customer} />, container);

    expect(container.textContent).toMatch("Ashely");
  });

  it("renders the another customer first name", () => {
    const customer = { firstName: "Jordan" };
    const container = document.createElement("div");
    ReactDom.render(<Appointment customer={customer} />, container);

    expect(container.textContent).toMatch("Jordan");
  });
});
