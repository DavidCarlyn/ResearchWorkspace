import React from 'react';
import axios from 'axios';

import './AddPaper.css';

class AddPaper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title : '',
            authors : '',
            publisher : '',
            pages : '',
            year : 2000
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event);
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name] : value
        });
    }

    handleSubmit(event) {
        const data = this.state;
        axios.post('http://localhost:3005/post_paper', {
            test : "test"
        })
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="AddPaper">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Paper Title:
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                    </label>
                    <label>
                        Authors:
                        <input type="text" name="authors" value={this.state.authors} onChange={this.handleChange} />
                    </label>
                    <label>
                        Publisher:
                        <input type="text" name="publisher" value={this.state.publisher} onChange={this.handleChange} />
                    </label>
                    <label>
                        Pages:
                        <input type="text" name="pages" value={this.state.pages} onChange={this.handleChange} />
                    </label>
                    <label>
                        Year Published:
                        <input type="number" name="year" value={this.state.year} onChange={this.handleChange} />
                    </label>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )

    }
}

export default AddPaper;