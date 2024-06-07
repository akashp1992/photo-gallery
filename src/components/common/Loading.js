import React from 'react'

const Loading = () => {
    return (
        <div className="row w-100">
            <div className="col-md-12 col-sm-12">
                 <div className='d-flex flex-column align-items-center bg-white justify-content-center'>
                <div className="spinner-grow" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                </div>
            </div>
        </div>

    )
}

export default Loading
