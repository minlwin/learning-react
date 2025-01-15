import { Checkbox, FileInput, Label, TextInput } from "flowbite-react";

export default function Page() {
  return (
    <>
      <h1 className="text-2xl">Using Flowbite UI</h1>

      <div className="flex gap-4 my-4 items-center">
        <TextInput placeholder="Enter Name" />
        <FileInput />

        <div className="flex gap-2">
          <Checkbox id="check" />
          <Label htmlFor="check">
            Check Box
          </Label>
        </div>
      </div>
    </>
  
  )
}