import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';
import { expect, test, describe } from 'vitest';
import * as matchers from 'jest-extended';
expect.extend(matchers);

const TestingComponent = () => {
    return <TodoList />;
};

describe('TestingComponent', () => {
    // This test ensures TestingComponent renders TodoList
    test('renders TestingComponent', () => {
        render(<TestingComponent />);
        expect(screen.getByPlaceholderText(/Add a new todo/i)).toBeInTheDocument();
        expect(screen.getByText('Add')).toBeInTheDocument();
    });

    test('adds a new todo when Add button is clicked', () => {
        render(<TestingComponent />);
        const input = screen.getByPlaceholderText(/Add a new todo/i);
        const addButton = screen.getByText('Add');

        fireEvent.change(input, { target: { value: 'Learn Testing' } });
        fireEvent.click(addButton);

        expect(screen.getByText('Learn Testing')).toBeInTheDocument();
    });

    test('deletes a todo when Delete button is clicked', () => {
        render(<TestingComponent />);
        const input = screen.getByPlaceholderText(/Add a new todo/i);
        const addButton = screen.getByText('Add');

        fireEvent.change(input, { target: { value: 'Learn Jest' } });
        fireEvent.click(addButton);

        fireEvent.click(screen.getByText('Delete'));

        expect(screen.queryByText('Learn Jest')).not.toBeInTheDocument();
    });
});

export default TestingComponent;