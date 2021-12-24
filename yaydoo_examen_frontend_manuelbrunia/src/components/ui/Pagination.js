import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router';
import ReactPaginate from 'react-paginate';

export const Pagination = ({data}) => {
    const navigate = useNavigate();
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setPageCount(Math.ceil((data?.total || 0) / itemsPerPage));
    }, [data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.total;
        setItemOffset(newOffset);
        navigate(`?page=${event.selected + 1}`);
    };

    return (
        <nav className="navigation mt-2">
            <ReactPaginate
                className="pagination justify-content-center"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                nextClassName="page-item"
                previousLinkClassName="page-link"
                nextLinkClassName="page-link"
                activeClassName="active"
                breakLabel="..."
                nextLabel="Sig. >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< Ant."
                renderOnZeroPageCount={null}
            />
        </nav>
    )
}
