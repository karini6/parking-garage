import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import RouteDefs from './RouteDefs.tsx';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouteDefs />
  </StrictMode>
);
