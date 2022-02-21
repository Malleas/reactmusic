import React from "react";
import Card from "./Card";
import './App.css'

class App extends React.Component {

    state = {albumList : [
            {
                "id": 0,
                "title": "10,000 Days",
                "description": "Some album stuff would usually go here to description the album.",
                "year": 2006,
                "imgUrl": "https://picsum.photos/100/100",
                "buttonText": "OK"
            },
            {
                "id": 1,
                "title": "Aenima",
                "description": "Only the greatest tool album ever.",
                "year": 1996,
                "imgUrl": "https://picsum.photos/100/100",
                "buttonText": "OK"
            },
            {
                "id": 2,
                "title": "Fear Inoculum",
                "description": "The newest album.",
                "year": 2019,
                "imgUrl": "https://picsum.photos/100/100",
                "buttonText": "OK"
            }
        ]}

    renderList = () => {
        return this.state.albumList.map(
            (album) => {
                return (<Card albumTitle={album.title} albumDescription={album.description} buttonText={album.buttonText} imgUrl={album.imgUrl}/>)
            }
        )
    }

    render() {
        return (
            <div className="container">
                {this.renderList()}
            </div>
        )
    }
}

export default App
