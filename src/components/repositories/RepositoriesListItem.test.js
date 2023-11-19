import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RepositoriesListItem from "./RepositoriesListItem";

function renderComponent() {
    const repository = {
        full_name: "facebook/react",
        language: "Javascript",
        description: "js library",
        owner: "facebook",
        name: "react",
        html_url: "https://github.com/facebook/react",
    };
    render(
        <MemoryRouter>
            <RepositoriesListItem repository={repository} />
        </MemoryRouter>
    );

    return { repository };
}

test("shows a link to the github homepage or this repository", async () => {
    const {
        repository: { html_url },
    } = renderComponent();

    await screen.findByRole("img", {
        name: "Javascript",
    });

    const link = screen.getByRole("link", {
        name: /github repository/i,
    });
    expect(link).toHaveAttribute("href", html_url);
});

test("shows a file icon with the appropriate icon", async () => {
    renderComponent();

    const icon = await screen.findByRole("img", {
        name: "Javascript",
    });

    expect(icon).toHaveClass("js-icon");
});
