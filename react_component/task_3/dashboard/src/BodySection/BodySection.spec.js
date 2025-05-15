import React from 'react';
import { render } from '@testing-library/react';
import BodySection from './BodySection';

test('renders a heading with the title prop', () => {
  const { getByText } = render(<BodySection title="Test Title" />);
  expect(getByText('Test Title')).toBeInTheDocument();
});

test('renders children correctly', () => {
  const { getByText } = render(
    <BodySection title="Title"><p>Child content</p></BodySection>
  );
  expect(getByText('Child content')).toBeInTheDocument();
});
