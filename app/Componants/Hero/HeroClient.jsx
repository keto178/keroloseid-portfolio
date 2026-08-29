'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function HeroClient() {
    const Router = useRouter();
    function ViewMyWork(){
        Router.push('/Projects')
    }
    function WorkTogether(){
        Router.push('/')
    }
    return (
    <div className='continer-btn'>
        <button onClick={ViewMyWork} >View My Work <span aria-hidden="true">→</span></button>
        <button onClick={WorkTogether} >Lets Work Together</button>
    </div>
    )
}
