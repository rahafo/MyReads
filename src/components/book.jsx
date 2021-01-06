import React from 'react'
import {Menu} from './menu'

export const Book = (props) => {
    const updateBook = (shelf) => {
        props.updateBook(props.book, shelf)
    };

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${props.book.imageLinks? props.book.imageLinks.thumbnail:''}`
                }}/>
                <div className="book-shelf-changer">
                    <Menu selectedValue={props.book.shelf} onChange={updateBook}/>
                </div>
            </div>
            <div className="book-title">{props.book.title}</div>
            <div className="book-authors">{props.book.authors}</div>
        </div>
    )
};

