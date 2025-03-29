import { Typography } from "@mui/material";
import { MenuItemModel } from "./side-menu";

export default function PageTitle({menu} : {menu:MenuItemModel}) {
    return (
        <div className="flex">
            <div className="me-2">
                {menu.icon}
            </div>
            <Typography variant="h6">
                {menu.name}
            </Typography>
        </div>
    )
}