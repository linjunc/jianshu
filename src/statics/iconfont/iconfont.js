/*
 * @Author: 林俊丞
 * @Date: 2021-09-12 15:57:46
 * @LastEditors: 林俊丞
 * @LastEditTime: 2021-09-13 11:46:08
 * @Description:
 */
import { createGlobalStyle } from "styled-components";
import icon1 from "./iconfont.woff2?t=1631504629215";
import icon2 from "./iconfont.woff?t=1631504629215";
import icon3 from "./iconfont.ttf?t=1631504629215";
export const IconfontStyle = createGlobalStyle`
@font-face {
  font-family: "iconfont"; /* Project id 2808565 */
  src: url(${icon1}) format('woff2'),
       url(${icon2}) format('woff'),
       url(${icon3}) format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-bi:before {
  content: "\e601";
}

.icon-fangdajing:before {
  content: "\e633";
}

.icon-Aa:before {
  content: "\e636";
}
`;
