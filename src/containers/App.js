import React from 'react';
import {connect} from 'react-redux';

import VendingMachine from '../components/vendingMachine/VendingMachine.jsx';

function App() {
   return <VendingMachine/>
}

export default connect()(App);