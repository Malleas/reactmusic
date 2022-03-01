import React from "react";
import './App.css'
import dataSource from "./dataSource";
import SearchForm from "./SearchForm";
import AlbumList from "./AlbumList";
import Navbar from "./Navbar";
import NewAlbum from "./NewAlbum";
import {Router, Route, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";
import OneAlbum from "./OneAlbum"

const history = createBrowserHistory();

class App extends React.Component {

    state = {albumList : [], searchPhrase : "", currentlySelectedAlbumId : 3}

    updateSingleAlbum = (id) => {
        console.log("updateSingleAlbum = ", id)
        var indexNumber = 0
        for (var i = 0; i < this.state.albumList.length; i++){
            if(this.state.albumList[i].id === id){
                indexNumber = i
            }
            this.setState({currentlySelectedAlbumnId: indexNumber})
            history.push('/show/' + indexNumber)
            console.log("state", this.state)
        }
    }

    componentDidMount() {
        this.loadAlbums()
    }

    loadAlbums = async () => {
        const response = await dataSource.get('/albums')
        this.setState({albumList : response.data})
    }

    updateSearchResults = async (phrase) => {
        console.log("phrase = ", phrase)
        this.setState({searchPhrase:phrase})
        const response = await dataSource.get('/albums/search/description/' + phrase)
        console.log(response)
        this.setState({albumList: response.data})
    }

    render() {
        return (
            <Router history={history}>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" render={() => {
                            return (
                                <div>
                                    <SearchForm onSubmit={this.updateSearchResults}/>
                                    <AlbumList albumList={this.state.albumList} onClick={this.updateSingleAlbum}/>
                                </div>
                            )
                        }}/>
                        <Route exact path="/new" component={NewAlbum}/>
                        <Route exact path="/show/:albumId" render={ () =>
                            <OneAlbum album={this.state.albumList[this.state.currentlySelectedAlbumId]}/>}/>
                    </Switch>
                </div>
            </Router>

        )
    }
}

export default App
