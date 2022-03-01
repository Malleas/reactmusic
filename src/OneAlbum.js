import React from "react";

class OneAlbum extends React.Component{
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
                                    <li>Show the album tracks here</li>
                                    <li>Show the album tracks here</li>
                                    <li>Show the album tracks here</li>
                                </div>
                                <a href="#" className="btn btn-primary">Edit</a>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-9">
                        <div className="card">
                            <p>Show the lyrics of the selected track here</p>
                        </div>
                        <div className="card">
                            <p>Show the Youtube video of the selected track here</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default OneAlbum