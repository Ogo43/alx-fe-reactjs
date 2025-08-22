import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from './TodoList';

// eslint-disable-next-line no-undef
describe('TodoList Component', () => {
    // eslint-disable-next-line no-undef
    test('renders TodoList component', () => {
        render(<TodoList />);
        // eslint-disable-next-line no-undef
        expect(screen.getByPlaceholderText(/Add a new todo/i)).toBeInTheDocument();
        // eslint-disable-next-line no-undef
        expect(screen.getByText('Add')).toBeInTheDocument();
    });

    // eslint-disable-next-line no-undef
    test('adds a new todo when Add button is clicked', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText(/Add a new todo/i);
        const addButton = screen.getByText('Add');

        fireEvent.change(input, { target: { value: 'Learn Testing' } });
        fireEvent.click(addButton);

        // eslint-disable-next-line no-undef
        expect(screen.getByText('Learn Testing')).toBeInTheDocument();
    });

    // eslint-disable-next-line no-undef
    test('deletes a todo when Delete button is clicked', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText(/Add a new todo/i);
        const addButton = screen.getByText('Add');

        fireEvent.change(input, { target: { value: 'Learn Jest' } });
        fireEvent.click(addButton);

        fireEvent.click(screen.getByText('Delete'));

        // eslint-disable-next-line no-undef
        expect(screen.queryByText('Learn Jest')).not.toBeInTheDocument();
    });
});


