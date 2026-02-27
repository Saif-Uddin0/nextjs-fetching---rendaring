"use client"
import React from 'react';

const ReviewSkeleton = () => {
    return (
        <div className="bg-white shadow-md rounded-xl p-5 animate-pulse">
            
            {/* User Info */}
            <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gray-300"></div>
                <div className="flex-1">
                    <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                </div>
            </div>

            {/* Rating */}
            <div className="h-4 bg-gray-300 rounded w-24 mb-4"></div>

            {/* Review Text */}
            <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
            </div>

            {/* Footer */}
            <div className="mt-4 h-3 bg-gray-200 rounded w-1/4"></div>
        </div>
    );
};

export default ReviewSkeleton;