import React, {Component} from 'react'
import BookShelf from './bookShelf'
import {Link} from "react-router-dom";

export default class BookLists extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search" >  <button>Add a book</button> </Link>
                </div>
            </div>
        )
    }
}