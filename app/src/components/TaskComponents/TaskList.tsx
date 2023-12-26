'use client'
import { Accordion, AccordionItem, Link } from "@nextui-org/react";
import { Pagination } from "@nextui-org/react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Task } from "@prisma/client";

export default function TaskList() {
    const [page, setPage] = useState(1);
    const itemPerPage = 10;
    const [tasks, setTasks] = useState<Task[]>([]);

    // axios request to get tasks
    const fetchTasks = async () => {
        const res = await axios.get('/api/task');
        const tasks = res.data;
        console.log(tasks);
        return tasks;
    }

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks();
            setTasks(tasksFromServer);
        }
        getTasks();
    }, []);


    return (
        <>
            <div>
                
                {tasks.slice((page - 1) * itemPerPage, page * itemPerPage).map((task) => (
                    <div className="flex p-4 mx-auto my-2 border rounded items-center min-h-16 h-auto">
                        <div className="flex-auto p-2 w-full">
                            <div className="w-max">
                                <h3>{task.name}</h3>
                            </div>
                            <div className="w-full m-2 text-gray-600">
                                {task.fullDescription}
                            </div>
                        </div>
                        <div className="mr-4 flex flex-auto w-16 h-10 items-center justify-center rounded border">
                            <Link href={`/task/${task.id}`}>開始</Link>
                        </div>
                    </div>
                ))}
                <div className="flex my-10 justify-center align-center w-full">

                <Pagination
                    showControls
                    total={Math.ceil(tasks.length / itemPerPage)}
                    page={page}
                    onChange={(page) => setPage(page)}

                />
                </div>
            </div>
        </>
    )
}
