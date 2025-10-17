/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PagesGallery from '../pages/PagesGallery';

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </QueryClientProvider>
);

describe('PagesGallery', () => {
  it('renders the gallery title', () => {
    render(<PagesGallery />, { wrapper });
    expect(screen.getByText('Pages Gallery')).toBeInTheDocument();
  });

  it('renders all page links', () => {
    render(<PagesGallery />, { wrapper });
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Life Insurance')).toBeInTheDocument();
    expect(screen.getByText('Retirement Planning')).toBeInTheDocument();
  });

  it('displays page descriptions', () => {
    render(<PagesGallery />, { wrapper });
    expect(screen.getByText('Main landing page')).toBeInTheDocument();
    expect(screen.getByText('Protect Your Loved Ones')).toBeInTheDocument();
  });
});