'use client'

import React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    onPageChange: (page: number) => void;
    showFirstLast?: boolean;
    showPrevNext?: boolean;
    showPageNumbers?: boolean;
    maxPageNumbers?: number;
    className?: string;
    disabled?: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    totalItems,
    onPageChange,
    showFirstLast = true,
    showPrevNext = true,
    showPageNumbers = true,
    maxPageNumbers = 5,
    className = '',
    disabled = false
}) => {
    const handlePageChange = (page: number) => {
        if (disabled || page < 1 || page > totalPages) return;
        onPageChange(page);
    };

    const getPageNumbers = () => {
        if (!showPageNumbers) return [];

        const pages: (number | string)[] = [];
        const halfMax = Math.floor(maxPageNumbers / 2);

        if (totalPages <= maxPageNumbers) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= halfMax + 1) {
                for (let i = 1; i <= maxPageNumbers - 1; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - halfMax) {
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - maxPageNumbers + 2; i <= totalPages; i++) {
                    pages.push(i);
                }
            } else {
                pages.push(1);
                pages.push('...');
                for (let i = currentPage - halfMax; i <= currentPage + halfMax; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            }
        }

        return pages;
    };

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;
    const hasItems = totalItems > 0;

    if (!hasItems) {
        return null;
    }

    return (
        <div className={`flex items-center justify-center gap-2 ${className}`}>
            {showFirstLast && (
                <button
                    onClick={() => handlePageChange(1)}
                    disabled={disabled || isFirstPage}
                    className={`p-2 rounded-md transition-colors ${isFirstPage || disabled
                        ? 'text-[color:var(--green-8)] cursor-not-allowed'
                        : 'text-[color:var(--green-11)] hover:bg-[color:var(--green-2)]'
                        }`}
                    aria-label="Go to first page"
                >
                    <ChevronsLeft size={16} />
                </button>
            )}

            {showPrevNext && (
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={disabled || isFirstPage}
                    className={`p-2 rounded-md transition-colors ${isFirstPage || disabled
                        ? 'text-[color:var(--green-8)] cursor-not-allowed'
                        : 'text-[color:var(--green-11)] hover:bg-[color:var(--green-2)]'
                        }`}
                    aria-label="Go to previous page"
                >
                    <ChevronLeft size={16} />
                </button>
            )}

            {showPageNumbers && (
                <div className="flex items-center gap-1">
                    {getPageNumbers().map((page, index) => (
                        <React.Fragment key={index}>
                            {page === '...' ? (
                                <span className="px-3 py-2 text-[color:var(--green-10)]">...</span>
                            ) : (
                                <button
                                    onClick={() => handlePageChange(page as number)}
                                    disabled={disabled}
                                    className={`px-3 py-2 rounded-md transition-colors ${page === currentPage
                                        ? 'bg-[color:var(--green-9)] text-[color:var(--green-contrast)]'
                                        : 'text-[color:var(--green-11)] hover:bg-[color:var(--green-2)]'
                                        } ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
                                >
                                    {page}
                                </button>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            )}
            {showPrevNext && (
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={disabled || isLastPage}
                    className={`p-2 rounded-md transition-colors ${isLastPage || disabled
                        ? 'text-[color:var(--green-8)] cursor-not-allowed'
                        : 'text-[color:var(--green-11)] hover:bg-[color:var(--green-2)]'
                        }`}
                    aria-label="Go to next page"
                >
                    <ChevronRight size={16} />
                </button>
            )}
            {showFirstLast && (
                <button
                    onClick={() => handlePageChange(totalPages)}
                    disabled={disabled || isLastPage}
                    className={`p-2 rounded-md transition-colors ${isLastPage || disabled
                        ? 'text-[color:var(--green-8)] cursor-not-allowed'
                        : 'text-[color:var(--green-11)] hover:bg-[color:var(--green-2)]'
                        }`}
                    aria-label="Go to last page"
                >
                    <ChevronsRight size={16} />
                </button>
            )}
        </div>
    );
};