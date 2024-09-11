import React, { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
    <h2>Frontend only Layout</h2>
      {children}
    </div>
  );
}

export default Layout;
