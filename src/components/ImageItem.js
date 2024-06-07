import React, { useEffect, useState } from 'react'
import { getImagesData } from '../utils/API'
import "./image-item.scss"
import CustomModal from './common/CustomModal'
import { IoCloseCircleSharp } from "react-icons/io5";
import Search from './common/Search/Search';
import Loading from './common/Loading';

const ImageItem = () => {
    const [photoData, setPhotoData] = useState([])
    //OPEN THE MODAL WHEN USER CLICK ON PHOTO
    const [isOpen, setIsOpen] = useState(false)
    const [modalData, setModalData] = useState(null)
    const [searchParam, setSearchParam] = useState("office")
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const handleSearchParam = (searchParam) => {
        setSearchParam(searchParam)
        setCurrentPage(1)
    }
    //HERE IS THE CALL API
    useEffect(() => {
        const fetchImageData = async (query, page) => {
            setLoading(true);
            try {
                const data = await getImagesData(query, page);
                setPhotoData(data);
            } catch (error) {
                console.error("Error fetching images: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchImageData(searchParam, currentPage);
    }, [searchParam, currentPage]);

    return (
        <div className='container-fluid'>
            <Search search={searchParam} onSearch={handleSearchParam} />
            <div className='image-container'>

                {
                    loading ?
                        <Loading />
                        :
                        photoData?.length > 0 ?
                            photoData?.map((imageItem, i) => (
                                <div key={imageItem?.id}>
                                    <img src={imageItem?.url} onClick={() => { setIsOpen(true); setModalData(imageItem) }} alt="" />
                                </div>
                            ))
                            :
                            <div>
                                <h1>There is no photos</h1>
                            </div>
                }
            </div>
            <CustomModal setIsOpen={setIsOpen} isOpen={isOpen}
                modalBody={
                    <div className='modal-body-container'>
                        <div className='close-icon' onClick={() => setIsOpen(false)}>
                            <IoCloseCircleSharp />
                        </div>
                        <div className='modal-content-container'>
                            <img src={modalData?.url} />
                            <div className='modal-content'>
                                <div className='row'>
                                    <div className='col'>
                                        <h1>Photo Grapher</h1>
                                    </div>
                                    <div className='col'>
                                        <p>{modalData?.photographer}</p>
                                    </div>
                                </div>
                                {
                                    modalData?.description &&
                                    <div className='row'>
                                        <div className='col'>
                                            <h1>Description</h1>
                                        </div>
                                        <div className='col'>
                                            <p>{modalData?.description}</p>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                }

            />
        </div>
    )
}

export default ImageItem
