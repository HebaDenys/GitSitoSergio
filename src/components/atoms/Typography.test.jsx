import { render, screen } from '@testing-library/react';
import { vi, describe, test, expect } from 'vitest';
import Typography from './Typography';

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
}));

describe('Typography Component', () => {
  test('renders different variants correctly', () => {
    const { rerender } = render(
      <Typography variant="h1">Heading 1</Typography>
    );
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();

    rerender(<Typography variant="h2">Heading 2</Typography>);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();

    rerender(<Typography variant="p">Paragraph</Typography>);
    expect(screen.getByText('Paragraph')).toBeInTheDocument();
  });

  test('renders children correctly', () => {
    render(<Typography variant="p">Test content</Typography>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  test('applies custom className', () => {
    render(
      <Typography variant="h1" className="custom-class">
        Custom Heading
      </Typography>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveClass(
      'custom-class'
    );
  });

  test('renders without animation by default', () => {
    render(<Typography variant="p">No animation</Typography>);
    expect(screen.getByText('No animation')).toBeInTheDocument();
  });

  test('renders with animation when animate prop is true', () => {
    render(
      <Typography variant="h1" animate={true}>
        Animated Heading
      </Typography>
    );
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  test('passes other props to the underlying element', () => {
    render(
      <Typography variant="p" id="test-id" data-testid="typography">
        Test props
      </Typography>
    );
    const element = screen.getByTestId('typography');
    expect(element).toHaveAttribute('id', 'test-id');
  });

  test('has correct default variant', () => {
    render(<Typography>Default paragraph</Typography>);
    expect(screen.getByText('Default paragraph')).toBeInTheDocument();
  });
});
