
const Pagination = ({ isActive, numOfImagesPerPage, photos, paginate, currentPage, next, prev }) => {

    const numberOfPages = photos.length / numOfImagesPerPage;
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
        pageNumbers.push(i);
    }

    return (
            <div className='pagination'>
                <ul>
                    <p className={currentPage === 1 ? 'disable' : null} onClick={() => prev()} href='#'>&laquo;</p>
                    {pageNumbers.map(pageNumber => (
                        <a key={pageNumber} onClick={() => paginate(pageNumber)} href='!#'>
                        <li key={pageNumber} className={currentPage === pageNumber ? 'active' : null}> 
                                {pageNumber}
                        </li>
                        </a>
                    ))}
                    <p className={currentPage > numberOfPages ? 'disable' : null} onClick={() => next(numberOfPages)} href="#">&raquo;</p>
                </ul>
            </div>
    )
}

export default Pagination
