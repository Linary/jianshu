import React, {PureComponent} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {LoginWrapper, LoginBox, Input, Button} from './style';
import {actionCreators} from './store';

class Login extends PureComponent {
    render() {
        const {loginStatus} = this.props;
        if (!loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' innerRef={(input) => {this.account = input}} />
                        <Input placeholder='密码' type='password' innerRef={(input) => {this.password = input}} />
                        <Button onClick={() => this.props.login(this.account, this.password)}>登陆</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to='/' />
        }
    }
}

// state 和 dispatch 里面变量和方法名不能重复
const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
    login(accountElem, passwordElem) {
        dispatch(actionCreators.login(accountElem, passwordElem))
    }
});

export default connect(mapState, mapDispatch)(Login);