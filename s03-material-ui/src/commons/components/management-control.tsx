import { Add, FilterListAlt, Refresh } from "@mui/icons-material";
import { Button, ButtonGroup } from "@mui/material";

export default function ManagementControl({onFilter, onReload, onAddNew} : {
    onFilter? : VoidFunction, 
    onReload? : VoidFunction, 
    onAddNew? : VoidFunction
}) {
    return (
        <ButtonGroup>
            <Button onClick={onReload} startIcon={<Refresh />}>Reload</Button>
            {onFilter && 
                <Button onClick={onFilter} startIcon={<FilterListAlt />}>
                    Conditions
                </Button>
            }
            
            {onAddNew && 
                <Button onClick={onAddNew} startIcon={<Add />}>
                    Add New
                </Button>
            }
        </ButtonGroup>
    )
}