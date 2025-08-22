import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from './TodoList'; // Adjust the path if needed

// Test: Component renders correctly
// eslint-disable-next-line no-undef
test('renders TodoList component', () => {
    render(<TodoList />);
    // Check for input and button
    // eslint-disable-next-line no-undef
    expect(screen.getByPlaceholderText(/Add a new todo/i)).toBeInTheDocument();
    // eslint-disable-next-line no-undef
    expect(screen.getByText('Add')).toBeInTheDocument();
});

// Test: Adds a new todo
// eslint-disable-next-line no-undef
test('adds a new todo when Add button is clicked', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const addButton = screen.getByText('Add');

    // Simulate typing and clicking
    fireEvent.change(input, { target: { value: 'Learn Testing' } });
    fireEvent.click(addButton);

    // Assert that new todo is in the list
    // eslint-disable-next-line no-undef
    expect(screen.getByText('Learn Testing')).toBeInTheDocument();
});

// Test: Deletes a todo
// eslint-disable-next-line no-undef
test('deletes a todo when Delete button is clicked', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const addButton = screen.getByText('Add');

    // Add a todo
    fireEvent.change(input, { target: { value: 'Learn Jest' } });
    fireEvent.click(addButton);

    // Click delete button
    fireEvent.click(screen.getByText('Delete'));

    // Assert the todo is removed
    // eslint-disable-next-line no-undef
    expect(screen.queryByText('Learn Jest')).not.toBeInTheDocument();
});


