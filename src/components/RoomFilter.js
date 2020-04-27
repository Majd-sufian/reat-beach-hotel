import React from 'react'
import { useContext } from 'react' 
import { RoomContext } from '../context'
import Title from '../components/Title'
import RoomContainer from './RoomContainer'

export default function RoomFilter() {
    const context = useContext(RoomContainer)
    console.log(context)
    return (
        <div>
            Filter
        </div>
    )
}