import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import {
    focusFlagAction,
    blurFlagAction,
    getList,
    mouseEnter,
    mouseLeave,
    changePage
} from "../../redux/action/focus";
// import { blurFlagAction } from '../../redux/action/blur'
// import { CSSTransition } from 'react-transition-group'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
} from "./style";
import { IconfontStyle } from "../../statics/iconfont/iconfont";

class Header extends PureComponent {
    getListArea = () => {
        const { page, totalPage, list, mouseIn, focused, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
        // immutable对象转化
        const newList = list.toJS()
        const pageList = []
        for (let i = (page - 1) * 10; i < page * 10; i++) {
            pageList.push(
                <SearchInfoItem key={nanoid()}>{newList[i]}</SearchInfoItem>
            )
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <i ref={icon => { this.spinIcon = icon }} className="iconfont spin">&#xebfe;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        {pageList}
                    </div>
                </SearchInfo>
            );
        } else {
            return null;
        }
    };
    render() {
        const { focused, handleInputFocus, handleInputBlur, list } = this.props;
        return (
            <Fragment>
                <IconfontStyle />
                <HeaderWrapper>
                    <Link to="/">
                        <Logo />
                    </Link>

                    <Nav>
                        <NavItem className="left">首页</NavItem>
                        <NavItem className="left">下载APP</NavItem>
                        <NavItem className="right">登陆</NavItem>
                        <NavItem className="right">
                            <i className="iconfont">&#xe636;</i>
                        </NavItem>
                        <SearchWrapper>
                            <NavSearch
                                className={focused ? "focused" : ""}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                            <i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>
                                &#xe633;
                            </i>
                            {this.getListArea()}
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Button className="writing">
                            <i className="iconfont">&#xe742;</i>写文章
                        </Button>
                        <Button className="reg">注册</Button>
                    </Addition>
                </HeaderWrapper>
            </Fragment>
        );
    }
}
// getIn(['focusBlur','focused'],)
const mapStateToProps = (state) => ({
    focused: state.get("header").get("focused"),
    list: state.get("header").get("list"),
    page: state.get('header').get('page'),
    totalPage: state.get('header').get('totalPage'),
    mouseIn: state.get('header').get('mouseIn'),
    // focused: true
});
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            (list.size === 0) && dispatch(getList())
            dispatch(focusFlagAction());
            // dispatch(getList());
        },
        handleInputBlur() {
            dispatch(blurFlagAction());
        },
        handleMouseEnter() {
            dispatch(mouseEnter())
        },
        handleMouseLeave() {
            dispatch(mouseLeave())
        },
        handleChangePage(page, totalPage, spin) {
            // console.log(page, totalPage,spin);
            let spinAngle = spin.style.transform.replace(/[^0-9]/ig, '')
            console.log(spinAngle);
            if (spinAngle) {
                spinAngle = parseInt(spinAngle, 10)
            } else {
                spinAngle = 0
            }

            spin.style.transform = 'rotate(' + (spinAngle + 360) + 'deg)'
            page < totalPage ? dispatch(changePage(page + 1)) : dispatch(changePage(2))
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
