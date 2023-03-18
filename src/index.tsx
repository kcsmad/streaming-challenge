import React from 'react';
import ReactDOM from 'react-dom/client';

import routing from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(routing);
