import React from 'react';
import './Services.css'

function Services() {
    const style = {
        width: '400px',
        height: '400px'
    };
    return (
        <div className="container">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="img_avatar.png" alt="Avatar" style={style} />
                    </div>
                    <div class="flip-card-back">
                        <h1>John Doe</h1>
                        <p>Architect & Engineer</p>
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="img_avatar.png" alt="Avatar" style={style} />
                    </div>
                    <div class="flip-card-back">
                        <h1>John Doe</h1>
                        <p>Architect & Engineer</p>
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="img_avatar.png" alt="Avatar" style={style} />
                    </div>
                    <div class="flip-card-back">
                        <h1>John Doe</h1>
                        <p>Architect & Engineer</p>
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="img_avatar.png" alt="Avatar" style={style} />
                    </div>
                    <div class="flip-card-back">
                        <h1>John Doe</h1>
                        <p>Architect & Engineer</p>
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
