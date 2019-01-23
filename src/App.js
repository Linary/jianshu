import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store/index';

class App extends Component {
    render() {
        return (
            // provider里面所有的组件都能够使用store
            <Provider store={store}>
                <div>
                    <Header />
                    <BrowserRouter>
                        <div>
                            <Route path='/' exact component={Home}></Route>
                            <Route path='/detail' exact component={Detail}></Route>
                        </div>
                    </BrowserRouter>
                </div>
            </Provider>
        );
    }
}

export default App;
