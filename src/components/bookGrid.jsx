import React from 'react'
import {Book} from './book'

export const BookGrid = (props) => {
    return (
        <ol className="books-grid">
            {
                props.books && !!props.books.length &&
                props.books.map((book) =>
                    <li key={book.id}>
                        <Book book={book} updateBook={props.updateBook}/>
                    </li>
                )
            }
        </ol>

    )

};