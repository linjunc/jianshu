/*
 * @Author: 林俊丞
 * @Date: 2021-09-13 12:42:28
 * @LastEditors: 林俊丞
 * @LastEditTime: 2021-09-14 15:57:29
 * @Description: 
 */
import React, { PureComponent } from 'react';
import { WriterWrapper, WriterInfoTitle, WriterInfoSwitch, WriterItem, WriterInfo, WriterAdd } from './style'
import { connect } from 'react-redux'
class Writer extends PureComponent {
    render() {
        return (
            <WriterWrapper>
                <WriterInfoTitle>推荐作者
                    <WriterInfoSwitch>
                        <i ref={icon => { this.spinIcon = icon }} className="iconfont spin">&#xebfe;</i>
                        换一批
                    </WriterInfoSwitch>
                </WriterInfoTitle>
                {
                    this.props.writerList.map(
                        item =>
                            <WriterItem key={item.get('id')}>
                                <img className="writer_pic" src={item.get('imgUrl')} alt="" />
                                <WriterInfo>
                                    <h3>{item.get('name')}</h3>
                                    <p>{item.get('desc')}</p>
                                </WriterInfo>
                                <WriterAdd>+关注</WriterAdd>
                            </WriterItem>
                    )
                }
            </WriterWrapper>
        );
    }
}

export default connect(
    state => ({
        writerList: state.getIn(['home', 'writerList'])
    }), null
)(Writer);