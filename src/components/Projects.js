import React, { Component } from 'react';

class Projects extends Component {

  render() {
    return (

      <div>

        <section className="nav-main-option slide-down-panel" id="projects">

          <div className="main-option-content">

            <header>Projects</header>

            <h3>A Sample of My Recent Work</h3>

            <div className="wrapper">

              <div className="masonry">

                <a href="https://www.thatHQ.com" target="_blank" rel="noopener noreferrer">

                  <div className="item">
                    <h5 className="title">thatHQ</h5>
                    <p className="description">Personalized syllabus of business book recommendations based on my favorite 60 business books.</p>
                    <h6 className="tech-stack">Tech Stack:</h6>
                    <a className="stack-item" href="http://rubyonrails.org/" target="_blank" rel="noopener noreferrer">Ruby</a>
                    <a className="stack-item" href="https://jquery.com/" target="_blank" rel="noopener noreferrer">JQuery</a>
                  </div>

                </a>

                <a href="http://www.ComedyHere.com/Montreal" target="_blank" rel="noopener noreferrer">

                  <div className="item">
                    <h5 className="title">ComedyHere</h5>
                    <p className="description">Geocoded directory for recurring and limited engagement local comedy shows.</p>
                    <h6 className="tech-stack">Tech Stack:</h6>
                    <a className="stack-item" href="http://rubyonrails.org/" target="_blank" rel="noopener noreferrer">Ruby</a>
                    <a className="stack-item" href="https://jquery.com/" target="_blank" rel="noopener noreferrer">JQuery</a>
                    <a className="stack-item" href="https://developers.google.com/maps/" target="_blank" rel="noopener noreferrer">Google Maps API</a>
                  </div>

                </a>

                <a href="https://www.Servmanity.com" target="_blank" rel="noopener noreferrer">

                  <div className="item">
                    <h5 className="title">Servmanity</h5>
                    <p className="description">On-demand home services marketplace. The application matches customers with service providers in real-time based on location, availability, service category, and price.</p>
                    <h6 className="tech-stack">Tech Stack:</h6>
                    <a className="stack-item" href="http://rubyonrails.org/" target="_blank" rel="noopener noreferrer">Ruby</a>
                    <a className="stack-item" href="https://jquery.com/" target="_blank" rel="noopener noreferrer">JQuery</a>
                    <a className="stack-item" href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">PostgreSQL</a>
                    <a className="stack-item" href="https://stripe.com/docs/api" target="_blank" rel="noopener noreferrer">Stripe API</a>
                  </div>

                </a>

                <a href="https://github.com/randolrs/react_redux_scoreboard" target="_blank" rel="noopener noreferrer">

                  <div className="item">
                    <h5 className="title">Scoreboard Interface Concept</h5>
                    <p className="description">An mockup of a generic game scoreboard.</p>
                    <h6 className="tech-stack">Tech Stack:</h6>

                  </div>

                </a>

                <a href="http://www.ArtYam.com" target="_blank" rel="noopener noreferrer">

                  <div className="item">
                    <h5 className="title">ArtYam</h5>
                    <p className="description">Subscription software-as-a-service eCommerce platform for fine arts galleries and artists. The application features content-rich, responsive, eCommerce-enabled web pages that can be accessed by via short, human-readable URLs.</p>
                    <h6 className="tech-stack">Tech Stack:</h6>

                  </div>

                </a>

                <a href="https://www.thatHQ.com" target="_blank" rel="noopener noreferrer">

                  <div className="item">
                    <h5 className="title">thatHQ</h5>
                    <p className="description">Personalized syllabus of business book recommendations based on my favorite 60 business books.</p>
                    <h6 className="tech-stack">Tech Stack:</h6>
                    <a className="stack-item" href="http://rubyonrails.org/" target="_blank" rel="noopener noreferrer">Ruby</a>
                    <a className="stack-item" href="https://jquery.com/" target="_blank" rel="noopener noreferrer">JQuery</a>
                  </div>

                </a>

              </div>

            </div>

            <br/>

            <h5 className="centered">If you want to get in touch with me, <a className="action-button reveal-slide-down" data-slide-down-panel-id="contact">Contact Me</a></h5>

            </div>

          </section>

      </div>
    );
  }
}

export default Projects;
