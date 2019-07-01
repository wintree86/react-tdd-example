import React from "react";
import ReactDom from "react-dom";
import { Appointment } from "../src/Appointment";

let container;
let customer;
let render;
describe("Appointment", () => {
  beforeEach(() => {
    container = document.createElement("div");
    render = component => ReactDom.render(component, container);
  });
  it("renders the customer first name", () => {
    customer = { firstName: "Ashely" };
    render(<Appointment customer={customer} />);

    expect(container.textContent).toMatch("Ashely");
  });

  it("renders the another customer first name", () => {
    customer = { firstName: "Jordan" };
    render(<Appointment customer={customer} />);

    expect(container.textContent).toMatch("Jordan");
  });
});
