import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './SideBar.css';
export default function SideBar() {
  return (

<div className="sidebar">
<ul className="sidebar__list">
  <li className="sidebar__item">Home</li>
  <li className="sidebar__item">About</li>
  <li className="sidebar__item">Services</li>
  <li className="sidebar__item">Contact</li>
</ul>
</div>
  )
}
