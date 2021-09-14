import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { DetailWrapper, Header, Content } from './style'
import { getDetail } from '../../redux/action/detail'
class Detail extends PureComponent {
    render() {
        const { articleTitle, articleContent } = this.props
        return (
            <DetailWrapper>
                <Header>{articleTitle}</Header>
                <Content dangerouslySetInnerHTML={{ __html: articleContent }} />
            </DetailWrapper>
        )
    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id)
    }
}
export default connect(
    state => ({
        articleTitle: state.getIn(['detail', 'title']),
        articleContent: state.getIn(['detail', 'content'])
    }),
    {
        getDetail: (id) => getDetail(id)
    }
)(Detail)
