import React, { Component } from 'react';

class EmailForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
              <h3>Stay up to date with the sweetest news!</h3>
              <form style={{borderRadius:'20px',}}>
                <input placeholder="email address" />
                <button/>
              </form>
            </div>
        );
    }
}

export default EmailForm;
