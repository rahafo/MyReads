import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookLists from './components/bookLists'
import Search from "./components/search";
import  {Route} from 'react-router-dom'
class BooksApp extends Component {

  render() {
    return (
        <div className="app">
          <Route path='/' exact render={() => {
            return <BookLists />
          }} />

          <Route path='/search' exact render={() => {
            return <Search />
          }} />

        </div>
    )
  }
}

export default BooksApp
