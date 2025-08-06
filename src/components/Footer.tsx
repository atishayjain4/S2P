import React from 'react';

const Footer: React.FC = () => (
  <footer className="text-center text-gray-500 text-sm py-4 mt-8 border-t">
    &copy; {new Date().getFullYear()} Shell. All rights reserved.
  </footer>
);

export default Footer; 