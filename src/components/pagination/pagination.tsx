import React from 'react'
import s from './pagination.module.scss'
import { Select, type Options } from '../select'
import { clsx } from 'clsx'
import {usePagination} from "./usePagination";
import ArrowIosBack from "../../assets/icons/components/ArrowIosBack";
import MoreHorizontal from "../../assets/icons/components/MoreHorizontal";
import ArrowIosForward from "../../assets/icons/components/ArrowIosForward";

type PaginationProps = {
    totalItems: number
    itemsPerPage: number
    currentPage: number
    defaultValue: string
    options: Options[]
    onPageChange: (page: number) => void
    onItemsPerPageChange: (itemsPerPage: number) => void
}

export const Pagination = ({
                                        totalItems,
                                        itemsPerPage,
                                        currentPage,
                                        defaultValue,
                                        options,
                                        onPageChange,
                                        onItemsPerPageChange,
                                    }: PaginationProps) => {
    const { isFocused, totalPages, getPageNumbers, handlePageChange, handleItemsPerPageChange } =
        usePagination({
            totalItems,
            itemsPerPage,
            currentPage,
            onPageChange,
            onItemsPerPageChange,
        })
    return (
        <div className={s.paginationContainer}>
            <div className={clsx(s.pagination, isFocused && s.focus)}>
                <button
                    className={clsx(s.arrowButton ,currentPage === 1 ? s.disabled : '')}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <ArrowIosBack className={s.arrow}/>
                </button>

                {getPageNumbers().map((page, index) => (
                    <React.Fragment key={`${page}-${index}`}>
                        {page === '...' ? (
                            <span className={s.paginationEllipsis}>
                     <MoreHorizontal className={s.paginationEllipsis}/>
              </span>
                        ) : (
                            <button
                                className={clsx(s.paginationButton, page === currentPage ? s.active : '')}
                                onClick={() => handlePageChange(page as number)}
                                aria-current={page === currentPage ? 'page' : undefined}
                            >
                                {page}
                            </button>
                        )}
                    </React.Fragment>
                ))}
                <button
                    className={clsx(s.arrowButton, currentPage === totalPages ? s.disabled : '')}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    {/*<Icon name={'arrow-forwards'} className={s.arrow} />*/}
                    <ArrowIosForward className={s.arrow}/>
                </button>
                <p>Show</p>
                <Select
                    defaultValue={defaultValue}
                    onValueChange={e => handleItemsPerPageChange(e)}
                    options={options}
                />
                <p>on page</p>
            </div>
        </div>
    )
}
