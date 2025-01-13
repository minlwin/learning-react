import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { ChevronRight } from "lucide-react"

export default function AppTableView({model}:{model: AppTableModel}) {       
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {model.columns.map(column => (
                       <TableHead className={`${column.className} ${column.type !== 'Value' ? 'w-16' : ''}`}>{column.header}</TableHead> 
                    ))}
                </TableRow>
            </TableHeader>

            <TableBody>
                {model.rows.map(row => (
                    <TableRow>
                        {model.columns.map(column => (
                            <TableCell className={column.className}>
                                {getCellValue(column.fieldName, column.type, row)}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

function getCellValue(fieldName:string, type: ColumnType, rowData:{[key:string]:any}) {
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

export type AppTableModel = {
    columns: AppTableColumn[]
    rows: {[key:string]:any}[]
}

export type AppTableColumn = {
    header: string
    fieldName: string
    className?: string
    type: ColumnType
}

export type ColumnType = 'Value' | LinkType

export type LinkType = {
    detailsUrl(id:any):string
}
