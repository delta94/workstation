import React, { useEffect, useState } from 'react';

import Header from '../Header';
import TabsLayout from '../TabsLayout';

function Layout() {
  const [activeSection, setActiveSection] = useState();

  return (
    <>
      <Header onClick={setActiveSection} />
      <TabsLayout onClick={setActiveSection} />
      <div style={{ whiteSpace: 'pre' }}>
        The active thing
        <br />
        {JSON.stringify(activeSection, null, 2)}
      </div>
    </>
  );
}

export default Layout;
