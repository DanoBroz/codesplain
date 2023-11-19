import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RepositoriesListItem from "./RepositoriesListItem";
import { async } from "validate.js";

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
}

test("shows a link to the github homepage or this repository", async () => {
    renderComponent();

    await screen.findByRole("img", {
        name: "Javascript",
    });
});
