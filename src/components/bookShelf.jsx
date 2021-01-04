import React, {Component} from 'react'
import BookGrid from "./bookGrid";

export default class BookShelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books">
                    <BookGrid books={this.props.books}/>
                </div>
            </div>
        )
    }
}