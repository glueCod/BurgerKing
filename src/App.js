import React, { Component } from 'react';

import Checkout from './containers/Checkout/Checkout';
import Layout from './hoc/Layouts/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
          <Checkout/>
        </Layout>
      </div>
    );
  }
}

export default App;
