/*
 * @Author: 林俊丞
 * @Date: 2021-09-13 13:25:53
 * @LastEditors: 林俊丞
 * @LastEditTime: 2021-09-14 15:51:50
 * @Description: 文章列表
 */
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom';
import { ListItem, ListInfo, LoadMore } from './style'
import { getMoreList } from '../../../../redux/action/home'
class List extends PureComponent {
    render() {
        const { list, getMoreList, page } = this.props
        return (
            <Fragment>
                {
                    list.map(
                        item =>
                            <Link to={"/detail/" + item.get('id')} key={nanoid()}>
                                <ListItem >
                                    {/* 头图 */}
                                    <img className="pic" src={item.get('imgUrl')} alt="" />
                                    {/* 左侧内容区 */}
                                    <ListInfo>
                                        <h3 className="title">{item.get('title')}</h3>
                                        <p className="desc">{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                    )
                }
                <LoadMore onClick={() => {
                    getMoreList(page)
                }}>更多文章</LoadMore>
            </Fragment>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    getMoreList(page) {
        dispatch(getMoreList(page))
    }
})
export default connect(
    state => ({
        list: state.getIn(['home', 'articleList']),
        page: state.getIn(['home', 'articlePage'])
    }),
    mapDispatchToProps
)(List);