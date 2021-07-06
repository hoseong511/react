import React from 'react';
import image from '~/assets/icon.png';
import Form from '~/components/Form';
import Layout from '~/components/Layout';
function App() {
  return (
    <Layout>
      <div className="App">
        <header className="App-header">
          <p>
            Hello React!!!
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
            Learn React
          </a>
          <img src={image} alt='reuse' />
        </header>
      </div>
      <Form />
    </Layout>

  );
}

export default App;
