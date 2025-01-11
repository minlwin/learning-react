import { AlarmClockCheck, BookAIcon, GraduationCap, Group, NotebookPen, Users, Users2, Users2Icon, UsersRound } from "lucide-react";
import { MenuModel } from "./types";

export const dailyWorks:MenuModel[] = [
    {
      name: "Registrations",
      icon: <NotebookPen />,
      url: "/"
    },
    {
      name: "Attendances",
      icon: <AlarmClockCheck />,
      url: "/"
    },
    {
      name: "Certificates",
      icon: <GraduationCap />,
      url: "/"
    },
  ]

  export const masterData:MenuModel[] = [
    {
      name: "Courses",
      icon: <BookAIcon />,
      url: "/"
    },
    {
      name: "Classes",
      icon: <Group />,
      url: "/"
    },
    {
      name: "Students",
      icon: <UsersRound />,
      url: "/"
    },
    {
      name: "Staffs",
      icon: <Users />,
      url: "/"
    },
  ]  