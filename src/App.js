import React from 'react';
import './styles/App.scss';
import ActivityList from "./components/ActivityList.js";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
  return (
      <Provider store={store}>
        <ActivityList/>
      </Provider>
  );
}

export default App;