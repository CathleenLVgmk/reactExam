import React from 'react';
let img=require('../common/img/logo2.png');
class Header extends React.Component{
    render(){
        return <header>
            <img src={img} alt=""/>
            <form>
                <input type="text" placeholder="搜索目的地/攻略/游击" />
                <i className="icon iconfont icon-fangdajing"></i>
            </form>
            <span>登录</span>
        </header>
    }
}
export default Header;