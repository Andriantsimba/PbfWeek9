import React from 'react';
import ReactDOM from 'react-dom';
import BlogPost from './Container/Blogpost'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './bootstrap.min.css';

ReactDOM.render(
    <BlogPost />,
  document.getElementById('content')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
