import React from "react";
import Card from "./Card";

const App = () => {
    return(
        <div>
            <h1>Music I Like</h1>
            <Card
                albumTitle="10,000 Days"
                albumDescription="Some album stuff would usually go here to descript the album."
                imgUrl="https://picsum.photos/100/100"
                buttonText="OK"
            />
            <Card/>
            <Card/>
        </div>
    )
}