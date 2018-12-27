import React from 'react';
import Swiper from './swiper';
import axios from 'axios';

class Section extends React.Component{
    constructor(props){
        super(props)
        this.state={
            navs:[
                '找攻略', '看游记','问大人','结伴','酒店','旅行商城','机票','当地玩乐'
            ],
            data:[]
        }
    }
    componentDidMount(){
        axios.get('/list').then(data=>{
            this.setState({
                data:data.data
            })
        }).catch(err=>{
            console.log(err);
        })
    }
    render(){
        let {data}=this.state;
        return <section>
             <Swiper/>
             <nav>
                <ul>
                    {
                        this.state.navs.map((item,index)=>{
                            return <li key={index}>
                                <span></span>
                                <i>{item}</i>
                            </li>
                        })
                    }
                </ul>
             </nav>
             <h3>&gt;&nbsp; &nbsp;   推荐攻略&nbsp; &nbsp;    &lt;</h3>
            <div className="list">
             {
                data.map((item,index)=>{
                    return <div className="info" key={index}>
                                <h1>{item.title}</h1>
                                <dl>
                                    <dt>
                                        <img src={item.img} alt=""/>
                                    </dt>
                                    <dd><p>{item.summary} </p></dd>
                                </dl>
                            </div>
                }) 
             }
            </div>
                    
        </section>
    }
}
export default Section;