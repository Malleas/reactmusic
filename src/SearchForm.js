import React from "react";

class SearchForm extends React.Component {

    state = {inputText: ""}

    handleChangeInput = (event) => {
        this.setState({inputText: event.target.value})
        console.log(event.target.value)
    }

    handleFormSubmit = (event) => {
        this.props.onSubmit(this.state.inputText)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <input onChange={this.handleChangeInput} type="text" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp" placeholder="Search for Album"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default SearchForm