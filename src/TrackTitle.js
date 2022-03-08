import React from "react";

class TrackTitle extends React.Component{

    handleOnClick = (event) => {
        console.log("From the trackTitle id: ", this.props.trackId)
        this.props.onClick(this.props.trackId)
    }

    render() {
        return (
            <div className="track-container">
                <button onClick={this.handleOnClick} className="btn btn-primary">{this.props.trackTitle}</button>
            </div>
        );
    }
}
export default TrackTitle