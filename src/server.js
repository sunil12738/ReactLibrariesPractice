import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../App.js";
import {Provider} from 'react-redux';
import reducer from "./component/Redux-Store/reducer.js";
import { createStore } from 'redux';


import ReactDOM from 'react-dom';
// import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { StaticRouter, Route } from "react-router-dom"

import IndexF from './index.js';
import AboutMe from './aboutme.js';
import ReactImageGallery from "./component/React-image-gallery/ReactImageGallery.js"
import ReactScroll from "./component/ReactScroll/ReactScroll.js"
import ReactRedux from "./component/Redux-Store/Application.js"

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  // Create a new Redux store instance
  const store = createStore(reducer)
  const preloadedState = store.getState()
  const context = {}
  // Render the component to a string
  const html = renderToString(
  	<Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  )
  res.send(`
      <!DOCTYPE html>
      <head>
        <title>Universal Reacl</title>
        <link rel="stylesheet" href="/css/main.css">
        <script src="/bundle.js" defer></script>
      </head>

      <body>
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
      </body>
    </html>
  `);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening");
});
