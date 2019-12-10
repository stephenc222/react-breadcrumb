import React from 'react';
import Breadcrumb from './Breadcrumb'
import './App.css';

const DUMMY_BREADCRUMBS = [
  { label: 'one', onClick: (path) => console.warn('PATH:', { path }) },
  { label: 'two', onClick: (path) => console.warn('PATH:', { path }) },
  { label: 'three', onClick: (path) => console.warn('PATH:', { path }) },
  { label: 'four', onClick: (path) => console.warn('PATH:', { path }) }
]

const DUMMY_ACTIVE_PATH = 'one/two'

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
      <h1>BREADCRUMB DEMO</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Breadcrumb activePath={DUMMY_ACTIVE_PATH} crumbs={DUMMY_BREADCRUMBS} />
      </div>
    </div>
  );
}

export default App;
