import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductCard from '../ProductCard';
import { Heart } from 'lucide-react';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('ProductCard', () => {
  const defaultProps = {
    icon: <Heart className="w-8 h-8" />,
    title: 'Life Insurance',
    description: 'Comprehensive life insurance coverage',
    index: 0,
  };

  it('renders product card with title and description', () => {
    render(
      <BrowserRouter>
        <ProductCard {...defaultProps} />
      </BrowserRouter>
    );

    expect(screen.getByText('Life Insurance')).toBeInTheDocument();
    expect(screen.getByText('Comprehensive life insurance coverage')).toBeInTheDocument();
  });

  it('navigates to product page on click', () => {
    render(
      <BrowserRouter>
        <ProductCard {...defaultProps} />
      </BrowserRouter>
    );

    const card = screen.getByText('Life Insurance').closest('div');
    if (card) {
      fireEvent.click(card);
      expect(mockNavigate).toHaveBeenCalledWith('/life-insurance');
    }
  });

  it('displays learn more link', () => {
    render(
      <BrowserRouter>
        <ProductCard {...defaultProps} />
      </BrowserRouter>
    );

    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });
});
