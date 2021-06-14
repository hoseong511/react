import React from 'react';
export default function Layout({ children }) {
  return (
    <div className="app">
      <header>
        헤더입니다
      </header>
      <main>{children}</main>
      <footer>
        풋터입니다.
      </footer>
    </div>
  )
};