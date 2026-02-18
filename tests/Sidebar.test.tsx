import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Sidebar } from '../components/Sidebar';

const versionNavMap = {
  v1: [
    { id: 'introduction', title: 'Introduction' },
    { id: 'configuration', title: 'Configuration' },
    { id: 'faq', title: 'FAQ' },
    { id: 'api-reference', title: 'API Reference' },
  ],
};

describe('Sidebar', () => {
  it('renders all navigation links', () => {
    render(<Sidebar versionNavMap={versionNavMap} />);
    expect(screen.getByTestId('sidebar-nav-link-introduction')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar-nav-link-configuration')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar-nav-link-faq')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar-nav-link-api-reference')).toBeInTheDocument();
  });
});
