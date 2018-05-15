import React from 'react';
import { render } from 'react-dom';

import Main from './pages/Main';

import './styles/general.scss';

const App = () => <Main />;

render(<App />, document.getElementById('app'));
