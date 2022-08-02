import React from 'react';

import {Pagination} from "react-bootstrap";

export default function MyPagination({total, current, onChangePage, firstPage, lastPage}) {

    let items = [];

    items.push(<Pagination.First key={'first'} onClick={firstPage}>FirstPage</Pagination.First>)

    if (current > 1) {
        items.push(<Pagination.Prev key={'prev'} onClick={() => onChangePage(current - 1)}/>)
    }


    for (let page = 1; page < total; page++) {
        items.push(<Pagination.Item key={page} data-page={page} active={page === current}
                                    onClick={() => onChangePage(page)}>
            {page}
        </Pagination.Item>)
    }

    if (current < 500) {
        items.push(<Pagination.Next key='next' onClick={() => onChangePage(current + 1)}/>)
    }

    items.push(<Pagination.Last key={'last'} onClick={lastPage}>LastPage</Pagination.Last>)

    return (
        <Pagination>{items}</Pagination>
    )
}

