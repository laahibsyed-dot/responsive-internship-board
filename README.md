# Responsive Internship Board

A beginner-friendly accessible internship listing interface built using only:

- HTML5
- CSS3
- Vanilla JavaScript

No frameworks or external libraries are used.

## Project Objective

The goal of this project is to practice:

- Semantic HTML
- Responsive CSS
- DOM rendering
- Search functionality
- Domain filtering
- Empty states
- Error states
- Keyboard accessibility
- Accessible form labels
- Responsive layouts

## Features

### Internship Listings

Internships are stored as reusable JavaScript objects and rendered dynamically into cards.

Each card contains:

- Internship title
- Company
- Location
- Domain
- Internship type
- Duration
- Description
- View internship button

### Search

Users can search internships by:

- Internship title
- Company
- Location
- Domain
- Description

### Domain Filter

Users can filter internships by domain.

Available domains include:

- Web Development
- Programming
- Data Science
- Design
- Artificial Intelligence
- Marketing

### Empty State

When no internship matches the search or selected domain, an accessible empty state is displayed.

### Error State

An error state is included to handle situations where internship data cannot be loaded.

### Accessibility

The project includes:

- Semantic HTML5 elements
- Proper heading hierarchy
- Labels connected to form controls
- Keyboard-friendly controls
- Visible focus indicators
- `aria-live` for changing result information
- `role="alert"` for errors
- Accessible application links
- Reduced-motion support

## Responsive Design

The interface was designed for:

### Mobile

Approximately 360px width.

Internship cards are displayed in one column.

### Tablet

Approximately 768px width.

Internship cards are displayed in two columns.

### Desktop

Large screens display three internship cards per row.

## Project Structure

```text
responsive-internship-board/
│
├── index.html
├── style.css
├── script.js
└── README.md