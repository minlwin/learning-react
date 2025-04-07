import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function CourseList() {
    return (
        <TableContainer component={Paper} sx={{marginTop : 3}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Level</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Created At</TableCell>
                        <TableCell>Updated At</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>

                </TableBody>
            </Table>

        </TableContainer>
    )
}