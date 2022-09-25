import React from 'react';
import ProfilePic from '../../assets/bio-pic.jpeg';

function About() {

    return(
        <section className="container">
            <h2 class="top-title">About Me</h2>
            <hr></hr>
            <div>
                <img class="mb-5" id="avatar" src={ProfilePic} alt="Ian Zyvith" />

                <p>
                A quick learning and detail oriented individual who is looking to dive head first into the coding world. 
                </p>
                <p>
                A degree in Mechanical Engineering from Rutgers University.
                </p>
                <p>
                Years of academic and athletic experience leads to strong leadership and cooperative skills.
                </p>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </section>
    )
}

export default About;
