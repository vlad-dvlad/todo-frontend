'use client'

import React from 'react';
import { Task } from '@/models/task';
import { getStatusColor } from './config';
import { format } from 'date-fns';

interface TaskItemProps {
    task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
    return (
        <div className="bg-[color:var(--green-1)] rounded-lg shadow-md p-4 mb-3 hover:shadow-lg transition-shadow duration-200 border border-[color:var(--green-3)]">
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-[color:var(--green-12)] truncate">
                    {task.name}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                    {task.status}
                </span>
            </div>

            <div className="text-sm text-[color:var(--green-11)] space-y-1">
                <div className="flex justify-between">
                    <span className="font-medium">Created:</span>
                    <span>{task.createdAt && format(task.createdAt, 'dd MMM yyyy, HH:mm')}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Updated:</span>
                    <span>{task.updatedAt && format(task.updatedAt, 'dd MMM yyyy, HH:mm')}</span>
                </div>
            </div>

            <div className="mt-3 pt-3 border-t border-[color:var(--green-4)]">
                <div className="text-xs text-[color:var(--green-10)]">
                    ID: {task.id}
                </div>
            </div>
        </div>
    );
};

export default TaskItem;