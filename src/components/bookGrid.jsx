import React, {Component} from 'react'
import {Book} from './book'

export default class BookGrid extends Component {
    render() {
        return (
            <ol className="books-grid">
                {
                    this.props.books.map((book)=>
                        <li>
                            <Book book={book} key={book.title}/>
                        </li>
                        )
                }
            </ol>

        )
    }
}