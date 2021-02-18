import React from 'react'

function NameList() {
    const person=[
        {
            id:1,
            name:'upender',
            skills:'reactjs'
        },
        {
            id:2,
            name:'Teja',
            skills:'Angular'
        },
        {
            id:1,
            name:'Jhon',
            skills:'Vue',
            age:34
        }
    ]
const NamesList=person.map((person,key)=> <h1>  I am  {person.name}.My have skill in {person.skills},
{person.age}</h1>)
    return (
        <div>
            {
             NamesList

            }
        </div>
    )
}

export default NameList
