import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { year: new Date().getFullYear() };
    }
    render() {
        return(
            <footer>
                <ul className="site-links">
                    <li>
                        &copy; {this.state.year} CoderJourney
                    </li>
                </ul>
            </footer>
        );
    }
}

export default Footer;
