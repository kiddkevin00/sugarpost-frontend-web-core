import { clientRoutes as routes } from './routes';
import { render } from 'react-dom';
import Promise from 'promise-polyfill';
import 'whatwg-fetch';


if (!window.Promise) {
  window.Promise = Promise;
}

render(routes, window.document.getElementById('react-main-container'));
