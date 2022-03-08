import React from "react";
import Card from "./Card";

class AlbumList extends React.Component {

    handleSelectOne = (albumId) => {
        console.log("Selected ID: ", albumId)
        this.props.onClick(albumId)
    }

    handleEditAlbum = (albumId) => {
        console.log("The albumID to edit is: ", albumId)
        this.props.onEditAlbum(albumId)
    }

    render() {
        const albums =  this.props.albumList.map(
            (album) => {
                return (<Card
                    key={album.id}
                    albumId={album.id}
                    albumTitle={album.title}
                    albumDescription={album.description}
                    buttonText="Details"
                    imgUrl={album.image_name}
                    onClick={this.handleSelectOne}
                    editAlbum={this.handleEditAlbum}
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