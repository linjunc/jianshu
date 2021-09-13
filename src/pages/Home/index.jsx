import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Topic from './component/Topic'
import List from './component/List'
import Recommend from './component/Recommend'
import Writer from './component/Writer'
import { changeHomeData, changeScrollTopShow } from '../../redux/action/home'
import { HomeWrapper, HomeRight, HomeLeft, BackTop } from './style'
class Home extends PureComponent {
    handleScrollTop() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="https://ljcimg.oss-cn-beijing.aliyuncs.com/img/banner.jpg" alt="banner图" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer></Writer>
                </HomeRight>
                {
                    this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
                }
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData()
        this.bindEvents()
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)

    }
    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}
const mapDispatchToProps = dispatch => ({
    changeHomeData() {
        dispatch(changeHomeData())
    },
    changeScrollTopShow() {
        document.documentElement.scrollTop > 100 ? dispatch(changeScrollTopShow(true)) : dispatch(changeScrollTopShow(false))
    }
})
export default connect(state => ({ showScroll: state.getIn(['home', 'showScroll']) }), mapDispatchToProps)(Home)
