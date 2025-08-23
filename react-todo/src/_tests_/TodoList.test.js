import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';
import { expect, test } from 'vitest';
import * as matchers from 'jest-extended';
expect.extend(matchers);

// Test: Component renders correctly
test('renders TodoList component', () => {
    render(<TodoList />);
    // Check for input and button
    expect(screen.getByPlaceholderText(/Add a new todo/i)).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument();
});

// Test: Adds a new todo
test('adds a new todo when Add button is clicked', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const addButton = screen.getByText('Add');

    // Simulate typing and clicking
    fireEvent.change(input, { target: { value: 'Learn Testing' } });
    fireEvent.click(addButton);

    // Assert that new todo is in the list
    expect(screen.getByText('Learn Testing')).toBeInTheDocument();
});

// Test: Deletes a todo
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
    expect(screen.queryByText('Learn Jest')).not.toBeInTheDocument();
});

