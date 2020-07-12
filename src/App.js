import React from 'react';
import ReactDOM from 'react-dom'
import {
  Route,
  Switch,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom'
import { createRoutes } from './routes'
import './App.css';

// function App() {
//   return (
//     <>1</>
//     )
// }


const App = () => (
  createRoutes.map((route) => (
    <Route key={route.path} {...route}/>
  ))
)

export default App;
