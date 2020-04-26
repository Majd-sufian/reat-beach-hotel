import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer, FaBreadSlice } from 'react-icons/fa'
import Title from '../components/Title'


export default class Services extends Component {
    state={
        services: [
            {
                icon:<FaCocktail/>,
                title:'free Cocktails',
                info: 'This guy is great for the practical side of things regarding React, and Vishwas at Codevolution is excellent for the fundamental'
            }, 
            {
                icon:<FaHiking/>,
                title:'Endless Hiking',
                info: 'This guy is great for the practical side of things regarding React, and Vishwas at Codevolution is excellent for the fundamental'
            },
            {
                icon:<FaShuttleVan/>,
                title:'Free Shuttle',
                info: 'This guy is great for the practical side of things regarding React, and Vishwas at Codevolution is excellent for the fundamental'
            },
            {
                icon:<FaBreadSlice/>,
                title:'Strongest Beer ',
                info: 'This guy is great for the practical side of things regarding React, and Vishwas at Codevolution is excellent for the fundamental'
            }
        ]
    }


    render() {
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
