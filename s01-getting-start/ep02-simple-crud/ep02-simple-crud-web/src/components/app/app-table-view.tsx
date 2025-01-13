import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { ChevronRight } from "lucide-react"

export type AppTableModel = {
    columns: {
        header: string
        fieldName: string
        className?: string
        type: 'Value' | {
            detailsUrl(id:any):string
        }
    }[]
    rows: {[key:string]:any}[]
}

export default function AppTableView({model}:{model: AppTableModel}) {       
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {model.columns.map((column, index) => (
                       <TableHead key={index} className={`${column.className} ${column.type !== 'Value' ? 'w-16' : ''}`}>{column.header}</TableHead> 
                    ))}
                </TableRow>
            </TableHeader>

            <TableBody>
                {model.rows.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                        {model.columns.map((column, cellIndex) => (
                            <TableCell key={cellIndex} className={column.className}>
                                {getCellValue(column.fieldName, column.type, row)}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

function getCellValue(fieldName:string, type: 'Value' | {detailsUrl(id:any):string}, rowData:{[key:string]:any}) {
    if(type === 'Value') {
        const getValue = (value:any) => typeof value === 'number' ? value.toLocaleString() : value
        return (
            <span>{getValue(rowData[fieldName])}</span>
        )
    }

    return (
        <Link href={type.detailsUrl(rowData[fieldName])}>
            <ChevronRight size={16} />
        </Link>
    )
}