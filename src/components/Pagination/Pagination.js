import React from 'react';

const Pagination = (props) => {
    const { pagination, onPageChange } = props

    const { _page, _limit, _totalRows } = pagination

    const totalPage = Math.ceil(_totalRows / _limit)

    const handlePageChange = (newPage) => {
        onPageChange(newPage)
    }

    return (
        <div>
            <button disabled={_page <= 1}
                onClick={() => handlePageChange(_page - 1)}
            >
                prev
            </button>
            <button disabled={_page >= 5}
                onClick={() => handlePageChange(_page + 1)}
            >
                next
            </button>
        </div>
    );
};

export default Pagination;