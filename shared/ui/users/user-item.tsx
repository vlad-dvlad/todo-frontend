'use client'

import React from 'react';
import { User } from '@/models/user';
import { getAgeColor } from './config';
import { format } from 'date-fns';
import { Mail, User as UserIcon, Calendar } from 'lucide-react';

interface UserItemProps {
    user: User;
}

export const UserItem: React.FC<UserItemProps> = ({ user }) => {
    return (
        <div className="bg-[color:var(--green-1)] rounded-lg shadow-md p-4 mb-3 hover:shadow-lg transition-shadow duration-200 border border-[color:var(--green-3)]">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[color:var(--green-3)] rounded-full flex items-center justify-center">
                        <UserIcon size={20} className="text-[color:var(--green-11)]" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-[color:var(--green-12)]">
                            {user.name}
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-[color:var(--green-11)]">
                            <Mail size={14} />
                            <span>{user.email}</span>
                        </div>
                    </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getAgeColor(user.age)}`}>
                    {user.age} years
                </span>
            </div>

            <div className="text-sm text-[color:var(--green-11)] space-y-1">
                <div className="flex justify-between">
                    <span className="font-medium flex items-center gap-1">
                        <Calendar size={14} />
                        Created:
                    </span>
                    <span>{user.createdAt && format(user.createdAt, 'dd MMM yyyy, HH:mm')}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Updated:</span>
                    <span>{user.updatedAt && format(user.updatedAt, 'dd MMM yyyy, HH:mm')}</span>
                </div>
            </div>

            <div className="mt-3 pt-3 border-t border-[color:var(--green-4)]">
                <div className="text-xs text-[color:var(--green-10)]">
                    ID: {user.id}
                </div>
            </div>
        </div>
    );
};
