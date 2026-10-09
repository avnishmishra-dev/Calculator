# Calculator Ver 02

A simple calculator web application built with React and Vite. This project demonstrates how to build a functional calculator UI with state management, button-based interactions, and safe arithmetic evaluation using `mathjs`.

## Overview

This calculator supports basic arithmetic operations like addition, subtraction, multiplication, division, and percentage calculations. It includes input validation to prevent invalid expressions and shows a friendly error message when an invalid calculation is attempted.

## Features

- Basic arithmetic operations: `+`, `-`, `*`, `/`, `%`
- Number input with decimal support
- Clear (`C`) and reset (`RESET`) actions
- Backspace (`⌫`) for removing the last character
- Real-time expression evaluation on `=`
- Error handling for invalid expressions
- Responsive and clean UI using Bootstrap styling

## Tech Stack

- React
- Vite
- JavaScript
- Bootstrap
- mathjs

## Project Structure

```bash
src/
├── App.jsx
├── App.css
├── main.jsx
├── components/
│   ├── Buttons.jsx
│   └── Display.jsx
└── assets/
```

## Usage

- Click number buttons to enter values
- Use operator buttons to perform calculations
- Press `=` to evaluate the expression
- Use `C` to clear the current value
- Use `RESET` to reset the calculator display
- Use `⌫` to remove the last entry

## Notes

This project is a beginner-friendly React calculator app used to practice component design, state handling, event-driven UI, and arithmetic logic in JavaScript.
