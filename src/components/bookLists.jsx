import React, {Component} from 'react'
import BookShelf from './bookShelf'
import {Link} from "react-router-dom";
import {getAll} from '../BooksAPI'

const SHELFS = [{title:'Currently Reading', code:'currentlyReading'},{title:'Want to Read', code:'wantToRead'}, {title:'Read', code:'read'}];

export default class BookLists extends Component {

    state = {
        booksList: {currentlyReading:[],wantToRead:[], read:[]}
    }

    componentDidMount() {
        getAll().then((response)=> {
          let currentlyReading = response.filter((book)=> book.shelf === 'currentlyReading')
          let wantToRead = response.filter((book)=> book.shelf === 'wantToRead')
          let read = response.filter((book)=> book.shelf === 'read')
            this.setState({
                booksList: {
                    currentlyReading: currentlyReading,
                    wantToRead: wantToRead,
                    read: read
                }
            })
        })
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {SHELFS.map((shelf)=> <BookShelf key={shelf.title} shelfTitle = {shelf.title} books={this.state.booksList[shelf.code]}/>)}
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search" >  <button>Add a book</button> </Link>
                </div>
            </div>
        )
    }
}