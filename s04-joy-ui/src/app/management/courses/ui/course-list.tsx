import { Table } from "@mui/joy";

export default function CourseList() {
    return (
        <Table variant="outlined" stripe="even">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Level</th>
                    <th>Hours</th>
                    <th>Deleted</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>1</td>
                    <td>Java Basic</td>
                    <td>Foundation</td>
                    <td>120</td>
                    <td></td>
                    <td>2025-03-31 10:00</td>
                    <td>2025-03-31 10:00</td>
                </tr>
            </tbody>
        </Table>    
    )
}