import { useState, useEffect } from "react";

export const usePaginate = (totalProducts) => {
    const [currentPage, setCurrentPage] = useState(1)
    const productsPerPage = 9
    const totalPages = Math.ceil(totalProducts?.length / 9)
    const lastIndex = currentPage * productsPerPage
    const firstIndex = lastIndex - productsPerPage
    return { firstIndex, lastIndex, currentPage, totalPages, setCurrentPage }
}

export const usePaginatePerPage = (currentPage, totalPages, setCurrentPage)  => {
    const [paginates, setPaginates] = useState([])
    const previous = currentPage > 1 ? currentPage - 1 : null;
    const next = totalPages > currentPage ?  currentPage + 1 : null;

    useEffect(() => {
        setPaginates([previous, currentPage ,next])
        if (currentPage > totalPages) setCurrentPage(totalPages)
        if (totalPages === 0) return
        else if (currentPage === 0) setCurrentPage(1)
    },[currentPage, totalPages, setCurrentPage, previous, next])

    return { paginates }
}