import { useState } from "react";
import Pagination from "./Pagination";

const Portfolio = ({ isActive, focusPortfolio }) => {
    const [numOfImagesPerPage] = useState(9);
    const [currentPage, setCurrentPage] = useState(1);

    
    const photos = ['photos/scarf.jpg','photos/rockstarforSM.jpg','photos/va.fb2.jpg', 'photos/babyforfb.jpg', 'photos/Ann1.jpg', 'photos/pregoforprint.jpg', 'photos/Vasnowfull.jpg', 'photos/tn2.jpg', 'photos/marie1.jpg', 'photos/turtle.jpg', 'photos/1.big.jpg', 'photos/3flowers.jpg', 'photos/babygirloff.jpg', 'photos/bradley4.jpg', 'photos/bradoff.jpg', 'photos/darker.jpg', 'photos/duck2.jpg', 'photos/Ju.jpg', 'photos/prego2forPrint.jpg', 'photos/sampleval.jpg', 'photos/sha.jpg', 'photos/sha5.jpg', 'photos/shaq8.jpg', 'photos/2.big.jpg', 'photos/3.big.jpg', 'photos/vaforfb.jpg', 'photos/stef.jpg', 'photos/va.fb4.jpg', 'photos/va.fb5.jpg', 'photos/wedgirls.jpg'];

    const indexOfLastPhoto = currentPage * numOfImagesPerPage;
    const indexOfFirtsPhoto = indexOfLastPhoto - numOfImagesPerPage;
    const page = photos.slice(indexOfFirtsPhoto, indexOfLastPhoto);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    const next = () => setCurrentPage(currentPage + 1);

    const prev = () => setCurrentPage(currentPage - 1);

    return (
        <div ref={focusPortfolio}>
            <div id='portfolio' className='main'>
                {page.map(picture => 
                <div key={picture} className='portfolio-images'>
                    <img src={picture} alt={picture} />
                </div>
                )}
            </div>
            <div className='pagination'>
            <Pagination
                    isActive={isActive} 
                    numOfImagesPerPage={numOfImagesPerPage} 
                    photos={photos} 
                    paginate={paginate} 
                    currentPage={currentPage}
                    next={next}
                    prev={prev}
                />
            </div>
        </div>
    )
}

export default Portfolio
