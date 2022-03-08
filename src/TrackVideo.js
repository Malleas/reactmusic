import React from "react";

class TrackVideo extends React.Component {
    render() {
        return (
            <div>
                <a href={this.props.url}>Youtube Video Link</a>
            </div>
        );
    }
}
export default TrackVideo