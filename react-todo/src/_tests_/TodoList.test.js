import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';
import { expect, test } from 'vitest';
import * as matchers from 'jest-extended';
expect.extend(matchers);

test('Checks for the implementation of the testing component', () => {
    render(<TodoList />);
    expect(screen.getByPlaceholderText(/Add a new todo/i)).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument();
});

test('adds a new todo when Add button is clicked', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const addButton = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'Learn Testing' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Learn Testing')).toBeInTheDocument();
});

test('toggles a todo when clicked', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const addButton = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'Learn React' } });
    fireEvent.click(addButton);

    const todoItem = screen.getByText('Learn React');
    fireEvent.click(todoItem);

    expect(todoItem).toHaveClass('completed'); // Make sure you add this class in the component
});

test('deletes a todo when Delete button is clicked', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const addButton = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'Learn Jest' } });
    fireEvent.click(addButton);

    fireEvent.click(screen.getByText('Delete'));

    expect(screen.queryByText('Learn Jest')).not.toBeInTheDocument();
});