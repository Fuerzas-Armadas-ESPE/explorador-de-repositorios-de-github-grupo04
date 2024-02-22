import { render, screen, waitFor } from "@testing-library/react";
import RepoList from "./components/RepoList"

test("muestra la lista de repositorios", async () => {
  render(<RepoList username="ejemplo" />);
  await waitFor(() => {
    expect(screen.getByText("Top 5 repositorios con más participación de ejemplo")).toBeInTheDocument();
    expect(screen.getByText("repo1 - Tamaño: 100")).toBeInTheDocument();
    expect(screen.getByText("repo2 - Tamaño: 90")).toBeInTheDocument();
    expect(screen.getByText("repo3 - Tamaño: 80")).toBeInTheDocument();
    expect(screen.getByText("repo4 - Tamaño: 70")).toBeInTheDocument();
    expect(screen.getByText("repo5 - Tamaño: 60")).toBeInTheDocument();
  });
});
