import React from 'react'

export const Menu = (props) => (
    <select value={props.selectedValue ? props.selectedValue : "none"}
            onChange={(event) => props.onChange(event.target.value)}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
    </select>
);
