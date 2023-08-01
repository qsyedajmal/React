import React from 'react'
import './GridComponent.css';

export default function GridComponent() {
  return (
    <div className='container'>
       
       <div className="tbl">
             

       <div className="row">
            <div className="col bottom"></div>
            <div className="col"></div>
            <div className="col bottom"></div>
        </div>

        <div className="row">
            <div className="col top"></div>
            <div className="col"></div>
            <div className="col top"></div>
        </div>

        <div className="row">
            <div className="col bottom"></div>
            <div className="col"></div>
            <div className="col bottom"></div>
        </div>

        <div className="row">
            <div className="col top"></div>
            <div className="col"></div>
            <div className="col top"></div>
        </div>

        <div className="row">
            <div className="col"></div>
            <div className="col"></div>
            <div className="col col-4"></div>
            <div className="col"></div>
            <div className="col"></div>
        </div>

       </div>
        
    </div>
  )
}
