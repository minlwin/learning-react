import { COURSE_LEVELS } from "@/commons/model/course-model";
import { Edit, Save, Search } from "@mui/icons-material";
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, TextField } from "@mui/material";

export default function CourseEdit() {
    return (
        <Box width={400} sx={{padding: 4}}>
            <h3 className="flex items-center">
                <Edit sx={{mr : 1}} /> Edit
            </h3>

            <form className="mt-4">
                <TextField label="Name" fullWidth sx={{mb: 2}} variant="standard" />

                <FormControl fullWidth variant="standard" sx={{marginBottom : 2}} >
                    <InputLabel>Level</InputLabel>
                    <Select>
                        {COURSE_LEVELS.map(level => (
                           <MenuItem key={level} value={level}>{level}</MenuItem> 
                        ))}
                    </Select>
                </FormControl>

                <TextField label="Hours" type="number" fullWidth sx={{mb: 2}} variant="standard" />

                <TextField label="Description" multiline rows={3} fullWidth sx={{mb: 2}} variant="standard" />
    
                <FormGroup>
                    <FormControlLabel label="Active" control={<Checkbox />} sx={{mb : 3}} />
                </FormGroup>

                <Button variant="outlined" fullWidth size="large" startIcon={<Save />}>
                    Save
                </Button>
            </form>
        </Box>
    )
}