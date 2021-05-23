import { render, screen } from "@testing-library/react";
import App from "./App";
import PersonContext from "./contexts/PersonContext";

const persons = [
  { id: 0, name: 'contextAPI 이용하기', age: 22},
  { id: 0, name: 'HO', age: 22},
  { id: 1, name: 'Mark', age: 33}
];

test("renders learn react link", () => {
  render(
    <PersonContext.Provider value={persons}>
      <App />
    </PersonContext.Provider>
    );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
