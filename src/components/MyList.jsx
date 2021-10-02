import React, {useState} from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import {Card, Row, Col, Input} from 'antd'

import { useGetCryptosQuery } from '../services/cryptoapi'
const MyList = () => {
    const {data: decredInfo, isFetching} = useGetCryptosQuery()
    const [decred, setDecred] = useState(decredInfo?.data?.id)

    console.log(decred)
    
    if(isFetching) return 'Thinking hard...'
    if(decredInfo?.data.id == 23) {
        return ( 
            <>
            <Card>worked</Card>
            </>
        );

    } else {
        console.error()
    }
}

export default MyList
