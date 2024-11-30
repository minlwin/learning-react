"use client"

import PageTitle from "@/components/page-title";
import { useState } from "react";

export default function UsingState() {

    const [count, setCount] = useState(0)

    function countUp() {
        setCount(count + 1)
    }

    function countDown() {
        setCount(count - 1)
    }

    return (
        <article>
            <PageTitle title="Using State Demo" />

            <div className="w-1/5 text-center py-12">
                <h1 className="text-6xl mb-4">{count}</h1>
                <button className="outline-btn w-full mb-2" onClick={countUp}>Count Up</button>
                <button className="outline-btn w-full" onClick={countDown}>Count Down</button>
            </div>
        </article>
    )
}