import { render, screen } from "@testing-library/react";
import App from "../../src/App";
import React from "react";

describe('Test App', () => {
    it('Components is render', async () => {
        render(<App />);

        const header = await screen.findByRole("heading", {
            name: "Vite + React"
        });

        expect(header).toBeInTheDocument();
    });
});