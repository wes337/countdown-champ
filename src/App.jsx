import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: '',
            newDeadline: ''
        }
    }

    componentWillMount() {
        const d = new Date();
        const year = d.getFullYear();
        this.setState({
            deadline: `December 25, ${year}`
        })
    }

    changeDeadline() {
        this.setState({deadline: this.state.newDeadline});
    }

    render() {
        return(
            <div className="App">
                <div className="App-title">
                    Countdown to {this.state.deadline}
                </div>
                    <Clock 
                        deadline={this.state.deadline}
                    />
                <Form inline className="form">
                    <FormControl
                        className="Deadline-input"
                        placeholder='new date'
                        onChange={event => this.setState({newDeadline: event.target.value})}
                    />
                    <Button className="btn btn-primary Submit-button" onClick={() => this.changeDeadline()}>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default App;
