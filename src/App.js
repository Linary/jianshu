import React, {Component} from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import store from './store/index';

class App extends Component {
    render() {
        return (
            // provider里面所有的组件都能够使用store
            <Provider store={store}>
                <Header />
            </Provider>
        );
    }
}

export default App;
