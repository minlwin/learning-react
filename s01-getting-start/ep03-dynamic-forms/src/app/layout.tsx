'use client'

import { Childern, MenuItem } from "@/lib/types";
import "./globals.css";
import { Card } from "flowbite-react";
import { FormResultProvider, useFormResult } from "@/lib/form-result.provider";
import { JsonViewr } from "@/components/json-viewer";

export default function Layout({children} : Childern) {
  return (
    <html>
      <body>
        <nav className="py-4 px-16 bg-teal-800 text-teal-200 flex items-center justify-between">
          <span className="text-2xl">Using Forms</span>

          <ul className="flex gap-4">
            {MENUS.map((item, index) => (
              <li key={index}>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <main className="py-4 px-16">
          <div className="flex justify-stretch gap-4">
            <FormResultProvider>
              <Card className="w-1/2">
                <div className="h-full">
                  { children }
                </div>
              </Card>
              <FormResult />
            </FormResultProvider>
          </div>
        </main>
      </body>
    </html>
  )
}

function FormResult() {
  const { result } = useFormResult()

  return (
    <Card className="flex-grow">
      <div className="h-full">
        <h3 className="text-2xl">Form Result</h3>
        <div className="mt-4">
          {result 
            ? <JsonViewr data={result} />
            : <Message />
          }
        </div>
      </div>
    </Card>
  )
}

function Message() {
  return (
    <p>There is no data. Plase enter form data!</p>
  )
}

const MENUS : MenuItem[] = [
  {name : 'Simple Form', url : '/simple'},
  {name : 'Nested Form', url : '/nested'},
  {name : 'Form Array', url : '/array'},
  {name : 'Dynamic Form', url : '/dynamic'},
]