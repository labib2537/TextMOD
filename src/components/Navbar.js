import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Navbar(props) {


    return (
    <>
    <nav class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div class="container-fluid">
    <Link class="navbar-brand" to="/">{props.title}</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.homeMenu}</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">{props.aboutMenu}</Link>
        </li>
      </ul>
      <button type='button' className={`btn btn-${props.btnColor} mt-2 rounded`} onClick={props.toggleMode}>{props.btnIcon}</button>

        </div>
    </div>
    </nav>
    </>
  )
}
