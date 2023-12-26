'use client'
import TaskList from "@/components/TaskComponents/TaskList";
import { Accordion, AccordionItem, Button, Link } from "@nextui-org/react";

export default function TaskPage() {
    return (
        <div className="mx-auto w-full justify-center">
            <div className="flex mt-5 mb-10 justify-between">
                <h1>任務列表</h1>
                <Button
                    color="primary"
                    href="/task/create"
                    as={Link}
                >創建任務</Button>
            </div>
            
            <TaskList />

        </div>
    )
}