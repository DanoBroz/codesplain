import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { createServer } from "../../test/server";
import AuthButtons from "./AuthButtons";

describe("when user is not signed in", () => {
    createServer([
        {
            path: "/api/user",
            res: () => {
                return { user: null };
            },
        },
    ]);

    test("when user is not signed in, sign in and sign up are visible", async () => {
        console.log("test 1");
    });
    test("when user is not signed in, sign out is not visisble", async () => {
        console.log("test 2");
    });
});

describe("When user is signed in", () => {
    createServer([
        {
            path: "/api/user",
            res: () => {
                return { user: { id: 3, email: "asdf@asdf.com" } };
            },
        },
    ]);

    test("when user is signed in, sign in and sign up are not visible", async () => {
        console.log("test 3");
    });
    test("when user is signed in, sign out is visible", async () => {
        console.log("test 4");
    });
});
