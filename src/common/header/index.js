import React from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group'
import {actionCreators} from './store';
import {
    Addition,
    Button,
    HeaderWrapper,
    Logo,
    Navi,
    NaviItem,
    NaviSearch,
    SearchWrapper
} from "./style";

const Header = (props) => {
    return (
        // 一个带样式的div
        <HeaderWrapper>
            <Logo/>
            <Navi>
                <NaviItem className='left active'>首页</NaviItem>
                <NaviItem className='left'>下载App</NaviItem>
                <NaviItem className='right'>登陆</NaviItem>
                <NaviItem className='right'>
                    <i className="iconfont">&#xe636;</i>
                </NaviItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NaviSearch
                            className={props.focused ? 'focused' : ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        >
                        </NaviSearch>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
                </SearchWrapper>
            </Navi>
            <Addition>
                <Button className='write'>
                    <i className="iconfont">&#xe601;</i>
                    写文章
                </Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
    )
};

// 子组件使用父组件中provider中传过来的数据的方法接收的store的数据
const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    }
};
// 要修改数据时调用的dipatch方法写到里面，也就是指store.dispatch()方法
const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
};

export default connect(mapStateToProps, mapDispathToProps)(Header);