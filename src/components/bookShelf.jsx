import React from 'react'
import {BookGrid} from "./bookGrid";

export const BookShelf = (props) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelfTitle}</h2>
            <div className="bookshelf-books">
                <BookGrid books={props.books} updateBook={props.updateBook}/>
            </div>
        </div>
    )

};