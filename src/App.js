import React, { useState } from 'react'
import Breadcrumb from './Breadcrumb'
import './App.css'

function App() {
  const [activePath, setActivePath] = useState('one/two/three')

  const onBreadcrumbClick = path => {
    console.log('on breadcrumb click', path)
    setActivePath(path)
  }

  const DUMMY_BREADCRUMBS = ['one', 'two', 'three', 'four']
    .map(label => ({ label, onClick: onBreadcrumbClick }))

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>BREADCRUMB DEMO</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Breadcrumb
          activePath={activePath}
          crumbs={DUMMY_BREADCRUMBS} />
      </div>
    </div>
  );
}

export default App;
