import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../context'

export default class singleRoom extends Component {
    constructor(props) {
        super(props)

        this.state = {
            slug: this.props.match.params.slug
        }
    }

    static contextType = RoomContext
    render() {
        const { getRoom } = this.context
        const room = getRoom(this.state.slug)
        if(!room) {
            return (
                <div className="error">
                    <h3>no such room could found...</h3>
                    <Link to="/rooms" className="btn-primary">
                        Back to rooms
                    </Link>
                </div>
            )
        }
        
        return (
 
            <div>
                test singleRoom {room.name}
            </div>
        )
    }
}
