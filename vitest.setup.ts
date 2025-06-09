import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';

beforeAll(() => {
  vi.mock('next/router', () => require('next-router-mock'));
});

afterEach(() => {
  cleanup();
});
