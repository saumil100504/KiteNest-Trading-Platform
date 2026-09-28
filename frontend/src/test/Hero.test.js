import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../LandingPage/home/Hero";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Home Hero");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "/images/homeHero.png");
  });

  test("renders signup button", () => {
    render(<Hero />);
    const signupBtn = screen.getByRole("button", { name: "Signup Now" });
    expect(signupBtn).toBeInTheDocument();
    expect(signupBtn).toHaveClass("btn-primary");
  });
});