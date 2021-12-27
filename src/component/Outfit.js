import React from 'react'

export default function Outfit({dataset,fun}) {
    console.log(dataset)
    return (
        <div className='result'>
            <h2>Employee Feedback result</h2>
            <div className='boxi'>
             
             {dataset.map(item => (
                 <h5 key={item.id}>Name : {item.name} | Department : {item.department} | Rating : {item.rating}</h5>
             ))}
            </div><button onClick={() => fun(true)}>Go back</button>
        </div>
           
                
    )
}
