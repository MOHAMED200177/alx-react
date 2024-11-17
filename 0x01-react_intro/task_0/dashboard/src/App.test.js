import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component Tests', () => {
    it('renders without crashing', () => {
        render(<App />);
    });

    it('renders a div with the class App-header', () => {
        render(<App />);
        const headerDiv = screen.getByRole('banner');
        expect(headerDiv).toHaveClass('App-header');
    });

    it('renders a div with the class App-body', () => {
        render(<App />);
        const bodyDiv = screen.getByText(/Login to access the full dashboard/i);
        expect(bodyDiv).toBeInTheDocument();
    });

    it('renders a div with the class App-footer', () => {
        render(<App />);
        const footerDiv = screen.getByText(/Copyright 2020 - holberton School/i);
        expect(footerDiv).toBeInTheDocument();
    });
});