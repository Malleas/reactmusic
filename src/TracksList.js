import React from "react";
import TrackTitle from "./TrackTitle";

class TracksList extends React.Component{

    state = {tracks: []}

    handleSelectedTrack = (trackId) => {
        console.log("Selected Track ID: ", trackId)
        this.props.onClick(trackId)
    }



    render() {
        const tracks = this.props.tracks.map(
            (track) => {
                return (
                    <TrackTitle
                        key={track.id}
                        trackId={track.id}
                        trackTitle={track.title}
                        onClick={this.handleSelectedTrack}
                        />
                )
            }
        )
        return (
            <div className="container">
                {tracks}
            </div>
        );
    }
}
export default TracksList