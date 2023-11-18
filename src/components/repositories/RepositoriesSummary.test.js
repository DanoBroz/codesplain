import { render, screen } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

test("displays primary language of the repository", () => {
    const repository = {
        stargazers_count: 5,
        forks: 30,
        language: "Javascript",
        open_issues: 1,
    };

    render(<RepositoriesSummary repository={repository} />);

    const language = screen.getByText("Javascript");

    expect(language).toBeInTheDocument();
});
