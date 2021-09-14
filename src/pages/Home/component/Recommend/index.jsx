import React, { PureComponent } from 'react';
import { RecommendWrapper, RecommendItem } from './style'
import { connect } from 'react-redux'
class Recommend extends PureComponent {
    render() {
        return (
            <RecommendWrapper>
                {
                    this.props.list.map(
                        item => <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommendItem>
                    )
                }
            </RecommendWrapper>
        );
    }
}

export default connect(
    state => ({
        list: state.getIn(['home', 'recommendList'])
    }),
    null
)(Recommend);