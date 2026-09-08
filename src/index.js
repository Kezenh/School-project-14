import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./styles/app.css"
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Home from './pages/Home'
import EmployeeList from './pages/EmployeeList'
import Error from './pages/Error'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/employee-list" element={<EmployeeList />} />
        <Route path ="*" element={<Error />} />
      </Routes>
    </Router>
  </Provider>
)