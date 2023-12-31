import { FcSearch } from "react-icons/fc";
import { FcComboChart } from "react-icons/fc";
import { FcAddDatabase } from "react-icons/fc";
import { FcTodoList } from "react-icons/fc";
import { FcSettings } from "react-icons/fc";
export const cardList = [
  {
    key: "show_tasks",
    heading: "Show Tasks",
    url: "",
    icon:<FcTodoList size="34" />,
    color:"#008080",
    desc: "Show your important tasks with features of managing them",
},
{
    key: "show_charts",
    heading: "Show Charts",
    url: "",
    icon:<FcComboChart size="34" />,
    color:"#be60a4",
    desc: "Show graphically the details related to your task list and data",
},
{
    key: "add_tasks",
    heading: "Add New Task",
    url: "",
    icon:<FcAddDatabase size="34" />,
    color:"#00ced1",
    desc: "Add new tasks to your to do task details list by filling the form.",
},
{
    key: "search_tasks",
    heading: "Search Task",
    url: "",
    icon:<FcSearch size="34" />,
    color:"#ff7373",
    desc: "Search for a task from the list without even going through the entire list",
},
{
    key: "manage_tasks",
    heading: "Manage Tasks",
    url: "",
    icon:<FcSettings size="34" />,
    color:"#daa520",
    desc: "Manage your tasks like editing, deleting and getting the task list",
},
];
