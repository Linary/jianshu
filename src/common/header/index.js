import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group'
import {actionCreators} from './store';
import {Link} from 'react-router-dom';
import {
    Addition,
    Button,
    HeaderWrapper,
    Logo,
    Navi,
    NaviItem,
    NaviSearch,
    SearchInfo,
    SearchInfoItem,
    SearchInfoList,
    SearchInfoSwitch,
    SearchInfoTitle,
    SearchWrapper
} from "./style";

class Header extends Component {

    getListArea() {
        const {focused, list, page, totalPage, mouseIn, handleMouseEnter,
               handleMouseLeave, handleChangePage} = this.props;
        const newList = list.toJS();
        const pageList = [];
        if (newList.length) {
            for (let i = (page - 1) * 5; i < page * 5; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                );
            }
        }
        
        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            );
        } else {
            return null;
        }
    };

    render() {
        const {focused, handleInputFocus, handleInputBlur, list} = this.props;
        return (
            // 一个带样式的div
            <HeaderWrapper>
                <Link to='/'>
                    <Logo/>
                </Link>
                <Navi>
                    <NaviItem className='left active'>首页</NaviItem>
                    <NaviItem className='left'>下载App</NaviItem>
                    <NaviItem className='right'>登陆</NaviItem>
                    <NaviItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NaviItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NaviSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            >
                            </NaviSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe614;</i>
                        {this.getListArea()}
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
    }
}

// 子组件使用父组件中provider中传过来的数据的方法接收的store的数据
const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn'])
    }
};

// 要修改数据时调用的dipatch方法写到里面，也就是指store.dispatch()方法
const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            if (list.size === 0) {
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spinIcon) {
            let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spinIcon.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }
        }
    }
};

export default connect(mapStateToProps, mapDispathToProps)(Header);
