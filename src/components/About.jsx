import React from 'react';
import '../css/about.css';

export default function About() {
    return (
        <div id= "AboutPage">
            <div className = "about-header">
                <h1>About</h1>
                <div class="dash"></div>
                
            </div>
            <div className="about-content">
                <div className="info-title cn-1">
                    <h2><em>P</em>roject</h2>
                </div>
                <div className="info-card cn-2">
                    <p>Myplayees is a Music Player web app. It has Lofi study music. Lofi is a type of song or music that elevates the Listener to calm and concentrate while Studying. Myplayees has Full of Lofi beats and songs to make a listener concentrate on their work. </p>
                </div>
                <div className="info-card cn-3">
                    <p> I am a Software developer with solid experience in building Web-apps. I specialize in Java, Javascript, and Python. My expertise is Spring boot, Node.js, Django, and React.js.</p>
                </div>
                <div className="info-title cn-4">
                    <h2><em>A</em>bout Me</h2>
                </div>
            </div>
            
        </div>
    )
}
