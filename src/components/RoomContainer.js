import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { RoomConsumer } from '../context'
import Loading from './Loading'


export default function RoomContainer() {
    return (
        <RoomConsumer>
            {
                (value) => {
                    console.log(value)
                    const { loading, sortedRooms, rooms} = value
                    if (loading){
                        return <Loading />
                    }

                    return (
                        <div>
                            Rooms List    
                            <RoomFilter rooms={rooms}/>
                            <RoomList rooms={sortedRooms}/>        
                        </div>
                    )
                }
            }
        </RoomConsumer>

    )
}