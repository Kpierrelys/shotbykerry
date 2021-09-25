
const Pagination = ({ numOfImagesPerPage, photos, paginate, currentPage, next, prev }) => {


    const numberOfPages = photos.length / numOfImagesPerPage;
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
        pageNumbers.push(i);
    }

    return (
            <div className='pagination'>
                <ul>
                    <p className={currentPage === 1 ? 'disable' : null} onClick={() => prev()}>&laquo;</p>
                    {pageNumbers.map(pageNumber => (
                        <li onClick={() => paginate(pageNumber)} key={pageNumber} className={currentPage === pageNumber ? 'active' : null}> 
                                {pageNumber}
                        </li>
                    ))}
                    <p className={currentPage > numberOfPages ? 'disable' : null} onClick={() => next(numberOfPages)}>&raquo;</p>
                </ul>
            </div>
    )
}

export default Pagination