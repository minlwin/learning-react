'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { use, useEffect } from "react";

export default function Page({params} : {params: Promise<{id:number}>}) {
    const {id} = use(params)

    useEffect(() => {
        console.log(`Course ID is ${id}`)
    }, [id])

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Course Details</CardTitle>
                </CardHeader>

                <CardContent>
                    
                </CardContent>
            </Card>
        </>

        
    )
}