import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {actionCreators} from './store';
import {
    DetailWrapper,
    Header,
    Content
} from './style';

class Detail extends PureComponent {

    render() {
        const {title, content} = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                {/*防止转义*/}
                <Content dangerouslySetInnerHTML={{__html: content}} />
            </DetailWrapper>
        )
    }

    componentDidMount() {
        // 提取出?id=1的1
        const params = this.props.location.search;
        const id = params.substr(params.indexOf('='));
        this.props.getDetail(id);
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content']),
});

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        const action = actionCreators.getDetail(id);
        dispatch(action);
    }
});

export default connect(mapState, mapDispatch)(withRouter(Detail));