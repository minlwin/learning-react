import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { ChevronRight } from "lucide-react"

export type AppTableColumn = {
    header: string
    fieldName: string
    className?: string
    type: 'Value' | {
        detailsUrl(id:any):string
    }
}

export type AppTableRow = Record<string, any>

export type AppTableModel = {
    columns: AppTableColumn[]
    rows: AppTableRow[]
}

export default function AppTableView({columns, rows} : {columns : AppTableColumn[], rows : AppTableRow []}) {       
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {columns.map((column, index) => (
                       <TableHead key={index} className={`${column.className} ${column.type !== 'Value' ? 'w-16' : ''}`}>{column.header}</TableHead> 
                    ))}
                </TableRow>
            </TableHeader>

            <TableBody>
                {rows.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                        {columns.map((column, cellIndex) => (
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
        const format = (value:any) => typeof value === 'number' ? value.toLocaleString() : value
        return <span>{format(rowData[fieldName])}</span>
    }

    return (
        <Link href={type.detailsUrl(rowData[fieldName])}>
            <ChevronRight size={16} />
        </Link>
    )
}