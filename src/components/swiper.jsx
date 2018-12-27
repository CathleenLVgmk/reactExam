import React from 'react';
import "../../node_modules/swiper/dist/css/swiper.min.css";
import Swipe from '../../node_modules/swiper/dist/js/swiper.min'
class Swiper extends React.Component{
    constructor(props){
        super(props)
        this.state={
            img: [require('../common/img/1.jpg'),require('../common/img/2.jpg'),require('../common/img/3.jpg'),require('../common/img/4.jpg'),require('../common/img/5.jpg')]
        }
    }
    render(){
        return <div className="swiper-container">
            <div className="swiper-wrapper">
                {
                    this.state.img.map((item,index)=>{
                        return <div className="swiper-slide" key={index}><img src={item} alt=""/></div>
                    })
                }
            </div>
        </div>
    }
    componentDidMount(){
        new Swipe('.swiper-container')
    }
}
export default Swiper;