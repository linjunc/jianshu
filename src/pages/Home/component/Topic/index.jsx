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
const mapStateToProps = state => ({
    topicList: state.get('home').get('topicList')
})
const mapDispatchToProps = dispatch => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Topic);