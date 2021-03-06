import React from "react";
import FormInput from "./FormInput";
import axios from "axios";
import FormTextArea from "./FormTextArea";

class NewAlbum extends React.Component {

    state = {
        title: "Title",
        artist: "Some Singer",
        description: "Best album is only album",
        year: 2009,
        image: "https://picsum.photos/250/250",
        tracks: []
    }

    updateTitle = (t) => {
        this.setState({title: t})
        console.log("State of form: ", this.state)
    }

    updateArtist = (t) => {
        this.setState({artist: t})
        console.log("State of form: ", this.state)
    }
    updateYear = (t) => {
        this.setState({year: t})
        console.log("State of form: ", this.state)
    }
    updateDescription = (t) => {
        this.setState({description: t})
        console.log("State of form: ", this.state)
    }

    saveAlbum = async (album) => {
        axios.post('http://localhost:3100/albums', album)
            .then(results => {
                console.log(results)
                console.log(results.data)
            })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        console.log("Form Submit = ", this.state)
        this.saveAlbum(this.state)
    }



    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <h1>Create a New Album</h1>
                        <FormInput id="albumTitle" title="Album Title" placeholder="Enter Title" onChange={this.updateTitle}/>
                        <FormInput id="albumArtist" title="Album Artist" placeholder="Enter Artist Name" onChange={this.updateArtist} />
                        <FormTextArea id="albumDescription" title="Album Description" placeholder="Describe the album" onChange={this.updateDescription} />
                        <FormInput id="albumYear" title="Year" placeholder="Year Produced" onChange={this.updateYear}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="reset" className="btn btn-light">Cancel</button>
                </form>
            </div>
        )
    }
}
export default NewAlbum