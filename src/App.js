import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Login from './pages/login';
import Detail from './pages/detail/loadable';
import Write from './pages/write';
import store from './store/index';

class App extends Component {
    render() {
        return (
            // provider里面所有的组件都能够使用store
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path='/' exact component={Home} />
                        <Route path='/login' exact component={Login} />
                        <Route path='/detail' exact component={Detail} />
                        <Route path='/write' exact component={Write} />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
