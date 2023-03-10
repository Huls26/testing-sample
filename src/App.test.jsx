import { render, screen } from "@testing-library/react"
import App from "./App"


describe("test Sample", () => {
    it("test app heading", () => {
        render(<App />)
        const headingElement = screen.getByRole('heading', { name: /vite \+ react/i })
        expect(headingElement).toBeInTheDocument();
    })
})