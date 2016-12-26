import routes from './routes';
import ReactDOM from 'react-dom';
import Promise from 'promise-polyfill';
import 'whatwg-fetch';

if (!window.Promise) {
  window.Promise = Promise;
}

ReactDOM.render(routes, window.document.getElementById('react-main-container'));
