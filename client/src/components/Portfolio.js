import { useState } from "react";
import Pagination from "./Pagination";

const Portfolio = ({ isActive, focusPortfolio }) => {
    const [numOfImagesPerPage] = useState(9);
    const [currentPage, setCurrentPage] = useState(1);

    
    const photos = ['images/scarf.jpg','images/rockstarforSM.jpg','images/va.fb2.jpg', 'images/babyforfb.jpg', 'images/Ann1.png', 'images/pregoforprint.jpg', 'images/Vasnowfull.jpg', 'images/tn2.jpg', 'images/marie1.jpg', 'images/turtle.jpg', 'images/1.big.jpg', 'images/3flowers.png', 'images/babygirloff.jpg', 'images/bradley4.jpg', 'images/bradoff.jpg', 'images/darker.jpg', 'images/duck2.jpg', 'images/Ju.jpg', 'images/prego2forPrint.jpg', 'images/sampleval.jpg', 'images/sha.jpg', 'images/sha5.jpg', 'images/shaq8.jpg', 'images/2.big.jpg', 'images/3.big.jpg', 'images/vaforfb.jpg', 'images/stef.jpg', 'images/va.fb4.jpg', 'images/va.fb5.jpg', 'images/wedgirls.jpg'];

    const indexOfLastPhoto = currentPage * numOfImagesPerPage;
    const indexOfFirtsPhoto = indexOfLastPhoto - numOfImagesPerPage;
    const page = photos.slice(indexOfFirtsPhoto, indexOfLastPhoto);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    const next = () => setCurrentPage(currentPage + 1);

    const prev = () => setCurrentPage(currentPage - 1);


    const pictures = [];
    for (let i = 0; i < page.length; i++) {
        pictures.push(page[i]);
    };

    return (
        <div ref={focusPortfolio}>
            <div id='portfolio' className='main'>
                {pictures.map(picture => 
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
