import React from "react";

class Card extends React.Component{

    handleOnClick = () => {
        console.log("id clicked: ", this.props.albumId)
        this.props.onClick(this.props.albumId)
    }

    render() {
        return (
            <div className="card" style={{width: '12rem'}}>
                <img src={this.props.imgUrl} className="card-img-top" alt="Image Name"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.albumTitle}</h5>
                    <p className="card-text">{this.props.albumDescription}</p>
                    <a href="#" onClick={this.handleOnClick} className="btn btn-primary">{this.props.buttonText}</a>
                </div>
            </div>
        )
    }
}

export default Card;