import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications Component Tests', () => {
    it('renders without crashing', () => {
        render(<Notifications />);
    });

    it('renders three list items', () => {
        render(<Notifications />);
        const listItems = screen.getAllByRole('listitem');
        expect(listItems.length).toBe(3);
    });

    it('renders the text "Here is the list of notifications"', () => {
        render(<Notifications />);
        const paragraph = screen.getByText(/Here is the list of notifications/i);
        expect(paragraph).toBeInTheDocument();
    });
});