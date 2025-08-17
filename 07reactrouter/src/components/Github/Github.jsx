import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Prajalgoel')
    //         .then((response) => response.json())
    //         .then((response) => {
    //             console.log(response);
    //             setData(response)

    //         })
    // }, [])

    return (
        <div className='max-w-[90vw] flex flex-col items-center p-4 bg-red-600 mx-auto my-2 rounded-lg text-2xl font-bold text-white '>
            <div>Github followers : {data.followers}</div>
            <img src={data.avatar_url} width="200px" alt="" />
        </div>
    )
}

export default Github

// this will make more optimised and will fetch data even when hovered on github
export const githubDataLoader = async () => {
    const response = await fetch('https://api.github.com/users/Prajalgoel')
    return response.json()
}