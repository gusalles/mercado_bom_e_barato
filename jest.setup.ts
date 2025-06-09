import '@testing-library/jest-dom';

import 'next-router-mock/jest';

import { cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();
});
