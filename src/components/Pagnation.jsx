import { useState, useEffect } from 'react'

export default function Pagnation({page, setPage, limit, skip, total}) {

    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        setTotalPages(Math.ceil(total / limit))
    }, [total, limit])

    useEffect(() => {
        console.log(totalPages, total, limit)
    }, [totalPages, total, limit])

    const handlePrevious = () => {
        if(page > 1) {
            setPage(page - 1)
        }
    }
    const handleNext = () => {
        if(page < totalPages) {
            setPage(page + 1)
        }
    }

    return (
        <div className='pagnation-container'>
            <button disabled={page === 1} onClick={handlePrevious}>Previous</button>
            <span>{page}</span>
            <button disabled={page === totalPages} onClick={handleNext}>Next</button>
        </div>
    )
}