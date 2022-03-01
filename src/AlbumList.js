import React from "react";
import Card from "./Card";

class AlbumList extends React.Component {

    handleSelectOne = (albumId) => {
        console.log("Selected ID: ", albumId)
        this.props.onClick(albumId)
    }

    render() {
        const albums =  this.props.albumList.map(
            (album) => {
                return (<Card
                    key={album.id}
                    albumId={album.id}
                    albumTitle={album.title}
                    albumDescription={album.description}
                    buttonText="Ok"
                    imgUrl={album.image_name}
                    onClick={this.handleSelectOne}
                />)
            })
        return(
            <div className="container">
                {albums}
            </div>
        )
    }
}
export default AlbumList