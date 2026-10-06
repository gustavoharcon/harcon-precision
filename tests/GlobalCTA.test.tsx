import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GlobalCTA } from '@/components/GlobalCTA';

describe('GlobalCTA Component', () => {
  it('renders the required heading and copy from project specification', () => {
    render(<GlobalCTA />);

    expect(screen.getByText('Ready to Start Your Next Precision Project?')).toBeInTheDocument();
    expect(
      screen.getByText(/backed by our advanced MIETrak Pro estimating system/i)
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /request a quote/i })).toHaveAttribute('href', '/quote');
  });
});
