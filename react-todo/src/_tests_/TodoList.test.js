import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  it('renders input and add button', () => {
    render(<TodoList />);
    expect(screen.getByPlaceholderText(/Add a new todo/i)).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument();
  });

  it('adds a new todo when Add button is clicked', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const addButton = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'Learn Testing' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Learn Testing')).toBeInTheDocument();
  });

  it('deletes a todo when Delete button is clicked', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const addButton = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'Learn Jest' } });
    fireEvent.click(addButton);

    fireEvent.click(screen.getByText('Delete'));

    expect(screen.queryByText('Learn Jest')).not.toBeInTheDocument();
  });
});
