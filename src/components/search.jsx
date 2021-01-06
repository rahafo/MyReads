import React, {Component} from 'react'
import {BookGrid} from "./bookGrid";
import {Link} from 'react-router-dom'
import {search, update} from '../BooksAPI'

export default class Search extends Component {

    state = {
        searchTerm: "",
        books: []
    };

    onSearchChange = (searchTerm) => {
        this.setState({searchTerm}, () => this.searchForBook())
    };

    searchForBook = () => {
        search(this.state.searchTerm).then((res) => this.setState({books: res}))
    };

    updateBook = (book, shelf) => {
        update(book, shelf)
    };

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="./">
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.searchTerm} onChange={(event) => this.onSearchChange(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <BookGrid
                        books={this.state.books}
                        updateBook={this.updateBook}
                    />
                </div>
            </div>
        )
    }
}