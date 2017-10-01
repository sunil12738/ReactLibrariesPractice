import React from "react"
import { Route, IndexRoute, IndexRedirect, Redirect } from "react-router"
import IndexF from "./src/index.js"
import AboutMe from "./src/aboutme.js"

export default (
    <Route component={IndexF}>
        <IndexRoute component={IndexF} />
        <Route path="/" component={IndexF} />
        <Route path="index" component={IndexF} />
        <Route path="about" component={AboutMe} />
    </Route>
)
