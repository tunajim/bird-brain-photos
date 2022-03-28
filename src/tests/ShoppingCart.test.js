import { getByTestId, getByText } from "@testing-library/react";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ShoppingCart from "../ShoppingCart";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders", () => {
    act(() => {
        render(<ShoppingCart />, container);
    });
    expect(container.textContent).toBe("Shopping Cart");
    getByText(container, "Shopping Cart");
});

