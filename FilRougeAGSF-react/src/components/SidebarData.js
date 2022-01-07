import React from "react";
import LocalOfferIcon from '@mui/material/Icon';
import QuestionAnswerIcon from '@mui/material/Icon';
import InfoIcon from '@mui/material/Icon';
import '../styles/SidebarStyle.css';
import '../styles/Header.css';


export const SidebarData = [
    {
        title: "Tags",
        icon: <LocalOfferIcon />,
        link:"/Main"

},
{
    title: "Questions",
    icon: < QuestionAnswerIcon />,
    link:"/Question"

},
{
    title: "About",
    icon: <InfoIcon/>,
    link:"/About"

},
{
    title: "Profil",
    icon: <InfoIcon/>,
    link:"/Profil"

}
]

