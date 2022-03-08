import React from "react";
import TracksList from "./TracksList";
import TrackLyrics from "./TrackLyrics";
import TrackVideo from "./TrackVideo";

class OneAlbum extends React.Component{

    state = {currentlySelectedTrackId: 0}

    handleSingleTrack = (id) => {
        console.log("Track Selected: ", id)
        this.setState({currentlySelectedTrackId:id})
    }

    render() {
        console.log("Props for Onealbum", this.props)
        return(
            <div className="container">
                <h2>Album Details for {this.props.album.title}</h2>
                <div className="row">
                    <div className="col col-sm-3">
                        <div className="card">
                            <img src={this.props.album.image_name} className="card-img-top" alt={this.props.album.title}/>
                            <div className="cart-body">
                                <h5 className="card-title">{this.props.album.title}</h5>
                                <p className="card-text">{this.props.album.description}</p>
                                <div className="list-group">
                                    <span><TracksList tracks={this.props.album.tracks}  onClick={this.handleSingleTrack}/></span>
                                </div>
                                <a href="#" className="btn btn-primary">Edit</a>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-9">
                        <div className="card">
                            <p><TrackLyrics lyrics={this.props.album.tracks[this.state.currentlySelectedTrackId].lyrics}/></p>
                        </div>
                        <div className="card">
                            <p><TrackVideo url={this.props.album.tracks[this.state.currentlySelectedTrackId].videoUrl}/></p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default OneAlbum