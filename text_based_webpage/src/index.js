import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './Containers/App';
 //load the app component to the 'root' element in the html index file
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
