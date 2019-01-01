import React, { Component } from 'react';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from "./state";
import './App.css';
import Main from "./layouts/Main/Main.js"

class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <div className="App">
            <Main />
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
