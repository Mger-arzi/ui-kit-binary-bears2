import { useState } from 'react'
import type {Meta} from "@storybook/react-vite";
import { Pagination } from './pagination';

export default {
    title: 'Components/Pagination',
    component: Pagination,
} as Meta<typeof Pagination>

export const Default = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)

    return (
        <Pagination
            totalItems={100}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            defaultValue={'10'}
            options={[
                { value: '10', name: '10' },
                { value: '20', name: '20' },
                { value: '30', name: '30' },
                { value: '50', name: '50' },
                { value: '100', name: '100' },
            ]}
            onPageChange={setCurrentPage}
            onItemsPerPageChange={setItemsPerPage}
        />
    )
}

export const DefaultWithTwoPages = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(1)

    return (
        <Pagination
            totalItems={2}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            defaultValue={'10'}
            options={[
                { value: '10', name: '10' },
                { value: '20', name: '20' },
                { value: '30', name: '30' },
                { value: '50', name: '50' },
                { value: '100', name: '100' },
            ]}
            onPageChange={setCurrentPage}
            onItemsPerPageChange={setItemsPerPage}
        />
    )
}
