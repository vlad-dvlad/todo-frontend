'use client'

import { useGetUsers } from '@/api/user';
import React, { useState } from 'react';
import { UserItem } from './user-item';
import { User } from '@/models/user';
import { Pagination } from '../pagination';

export const UserList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const { data, isLoading } = useGetUsers({
        page: currentPage,
        limit: itemsPerPage,
    });

    const users = data?.items as User[];
    const totalItems = data?.total || 0;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!users || users.length === 0) {
        return (
            <div className="text-center py-8 text-gray-500">
                <p>Users not found</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="space-y-4 h-full">
                {users?.map((user: User) => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={totalItems}
                onPageChange={handlePageChange}
                showFirstLast={true}
                showPrevNext={true}
                showPageNumbers={true}
                maxPageNumbers={5}
                className="mt-6"
            />
        </div>
    );
}; 