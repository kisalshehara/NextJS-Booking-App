import { MegaMenu } from '@/components/Frontend/MegaMenu';
import React, { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}

export default Layout;
