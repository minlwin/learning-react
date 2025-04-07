import { COURSE_LEVELS } from "@/commons/model/course-model";
import { FilterAltOutlined, Search } from "@mui/icons-material";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

export function CourseFilter() {
    return (
        <Box width={400} sx={{padding: 4}}>
            <h3 className="flex items-center"><FilterAltOutlined sx={{marginRight : 1}} /> Filter</h3>

            <form className="mt-4">
                <FormControl fullWidth variant="standard" sx={{marginBottom : 2}}  >
                    <InputLabel>Level</InputLabel>
                    <Select>
                        {COURSE_LEVELS.map(level => (
                           <MenuItem key={level} value={level}>{level}</MenuItem> 
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth variant="standard" sx={{marginBottom : 2}}>
                    <InputLabel>Status</InputLabel>
                    <Select>
                        <MenuItem value={"-1"}>Search All</MenuItem>
                        <MenuItem value={"false"}>Active</MenuItem>
                        <MenuItem value={"true"}>Deleted</MenuItem>
                    </Select>
                </FormControl>
                <Box sx={{display : "flex", mb: 2}}>
                    <TextField label="Hour From" type="number" variant="standard" sx={{flex : 1}} />
                    <Box sx={{mr : 2}} />
                    <TextField label="Hour To" type="number" variant="standard" sx={{flex : 1}} />
                </Box>
                <TextField label="Keyword" variant="standard" fullWidth sx={{marginBottom : 3}}/>
                <Button startIcon={<Search />} variant="outlined" fullWidth size="large">
                    Search
                </Button>
            </form>
        </Box>
    )
}