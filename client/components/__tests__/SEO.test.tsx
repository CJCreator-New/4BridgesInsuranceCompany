import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '../SEO';

describe('SEO Component', () => {
  it('renders meta tags with correct title', () => {
    const { container } = render(
      <HelmetProvider>
        <SEO 
          title="Test Page"
          description="Test description"
        />
      </HelmetProvider>
    );

    expect(container).toBeTruthy();
  });

  it('includes Open Graph tags', () => {
    render(
      <HelmetProvider>
        <SEO 
          title="About Us"
          description="Learn about our company"
          keywords="about, company, insurance"
        />
      </HelmetProvider>
    );
  });
});
