import IndexF from './index.js';
import AboutMe from './aboutme.js';
import ReactImageGallery from "./component/React-image-gallery/ReactImageGallery.js"
import ReactScroll from "./component/ReactScroll/ReactScroll.js"
import ReactRedux from "./component/Redux-Store/Application.js"

const routes = [
  {
    path: "/",
    exact: true,
    component: IndexF
  },
  {
    path: "/about",
    exact: true,
    component: AboutMe
  },
  {
    path: "/image",
    exact: true,
    component: ReactImageGallery
  },
  {
    path: "/scroll",
    exact: true,
    component: ReactScroll
  },
  {
    path: "/redux",
    exact: true,
    component: ReactRedux
  },

];

export default routes;