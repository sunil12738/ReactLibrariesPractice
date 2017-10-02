// var path = require('path')
// var Express = require('express')
// var React = require('react')
// var { createStore } = require('redux')
// var { Provider } = require('react-redux')
// var counterApp = require('./component/Redux-Store/reducer.js')
// var Index = require('./index.js')

// const app = Express()
// const port = 3000

// //Serve static files
// app.use('/static', Express.static('static'))

// // This is fired every time the server side receives a request
// app.use(handleRender)

// // We are going to fill these out in the sections to follow
// function handleRender(req, res) {
//   // Create a new Redux store instance
//   const store = createStore(counterApp)

//   // Render the component to a string
//   const html = renderToString(
//     <Provider store={store}>
//     	<Index/>
//     </Provider>
//   )

//   // Grab the initial state from our Redux store
//   const preloadedState = store.getState()

//   // Send the rendered page back to the client
//   res.send(renderFullPage(html, preloadedState))
// }

// function renderFullPage(html, preloadedState) {
// 	return `
// 	    <!doctype html>
// 	    <html>
// 	      <head>
// 	        <title>Redux Universal Example</title>
// 	      </head>
// 	      <body>
// 	        <div id="root">${html}</div>
// 	        <script>
// 	          // WARNING: See the following for security issues around embedding JSON in HTML:
// 	          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
// 	          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
// 	        </script>
// 	        <script src="/static/bundle.js"></script>
// 	      </body>
// 	    </html>
// 	    `
// }

// app.listen(port)

var Express = require('express')
var React = require('react')
var x = require('react-dom/server')
var renderToString = x.renderToString
var App = require('../App.js')

const app = Express()

app.use(express.static("public"))

app.get("*", (req, res) => {
	res.send(`
	    <!doctype html>
	    <html>
	      <head>
	        <title>Redux Universal Example</title>
	      </head>
	      <body>
	        <div id="root">${renderToString(<App/>)}</div>
	        <script>
	          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
	        </script>
	        <script src="/static/bundle.js"></script>
	      </body>
	    </html>
	`)
})

app.listen(3001, () => {
	console.log("Server is running")
})