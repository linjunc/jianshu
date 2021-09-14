import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem, } from './style'
class Topic extends PureComponent {
    render() {
        return (
            <TopicWrapper>
                {
                    this.props.topicList.map(
                        (item) => <TopicItem key={item.get('id')}>
                            <img className="topic-pic" src={item.get('imgUrl')} alt="" />
                            {item.get('title')}
                        </TopicItem>
                    )
                }
            </TopicWrapper>
        );
    }
}

export default connect(
    state => ({
        topicList: state.getIn(['home', 'topicList'])
    }),
    null
)(Topic);