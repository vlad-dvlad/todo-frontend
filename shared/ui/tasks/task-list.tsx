'use client'

import { useGetTasks } from '@/api/task';
import React, { useState } from 'react';
import TaskItem from './task-item';
import { Task } from '@/models/task';
import { Pagination } from '../pagination';

export const TaskList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const { data, isLoading } = useGetTasks({
        page: currentPage,
        limit: itemsPerPage,
    });

    const tasks = data?.items;
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

    if (!tasks || tasks.length === 0) {
        return (
            <div className="text-center py-8 text-gray-500">
                <p>Task not found</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="space-y-4 h-full">
                {tasks?.map((task: Task) => (
                    <TaskItem key={task.id} task={task} />
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
