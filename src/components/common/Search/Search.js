import React from 'react'

const Search = ({ search, onSearch }) => {
    const handleSearch = (e) => {
        onSearch(e.target.value)
    }
    return (
        <div>
            <input
                type='text'
                value={search}
                onChange={handleSearch}
                placeholder='enter to search image'
            />
        </div>
    )
}

export default Search
