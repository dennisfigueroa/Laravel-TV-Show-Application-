import React from 'react'

function navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{height:"5rem", padding:"1rem 1.5rem"}}>
            <a class="navbar-brand" href="#" style={{fontSize: "1.5rem"}} >TV Show Application</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" d   ata-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav" style={{justifyContent:"flex-end"}}>
                
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#" style={{marginRight: "100px", fontSize:"1.4rem"}}>Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" style={{marginRight: "100px", fontSize:"1.4rem"}}>Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" style={{marginRight: "100px", fontSize:"1.4rem"}}>Register</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default navbar
