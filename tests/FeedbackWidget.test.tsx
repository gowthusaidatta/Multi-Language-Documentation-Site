import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FeedbackWidget } from '../components/FeedbackWidget';

describe('FeedbackWidget', () => {
  it('shows success message after submit', () => {
    render(<FeedbackWidget />);
    const input = screen.getByTestId('feedback-input');
    fireEvent.change(input, { target: { value: 'Great docs!' } });
    fireEvent.click(screen.getByTestId('feedback-submit'));
    expect(screen.getByTestId('feedback-success-message')).toBeInTheDocument();
  });
});
