import '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { loadEnvConfig } from '@next/env'

loadEnvConfig(__dirname, true, { info: () => null, error: console.error })
