import React from "react";

class Card extends React.Component{

    handleOnClick = (event) => {
        console.log("id clicked: ", this.props.albumId)
        this.props.onClick(this.props.albumId)
    }

    handleAlbumEdit = () => {
        this.props.editAlbum(this.props.albumId)
    }

    render() {
        return (
            <div className="card" style={{width: '12rem'}}>
                <img src={this.props.imgUrl} className="card-img-top" alt={this.props.albumTitle}/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.albumTitle}</h5>
                    <p className="card-text">{this.props.albumDescription}</p>
                    <button onClick={this.handleOnClick} className="btn btn-primary">{this.props.buttonText}</button>
                    <button onClick={this.handleAlbumEdit} className="btn btn-success">Edit</button>
                </div>
            </div>
        )
    }
}

export default Card;