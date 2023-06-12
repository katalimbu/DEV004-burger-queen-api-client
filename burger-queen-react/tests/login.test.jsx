import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('something truthy and falsy', () => {
    it('true to be true', () => {
    expect(true).toBe(true);
    });

    it('false to be false', () => {
    expect(false).toBe(false);
    });
});

import Login from '../src/components/Login/Login'

describe('Login', () => {
  it('renders headline', () => {
    render(<Login title="Login"/>);

    screen.debug();

    // check if App components renders headline
  });
});

