'use client'

import React from 'react';
import { useGetTasks } from '../api/task';

const Ui = () => {
    const { data: tasksData } = useGetTasks()
    console.log(tasksData);
    return (
        <div>

        </div>
    );
};

export default Ui;