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
        link:"/themes"

},
{
    title: "Questions",
    icon: < QuestionAnswerIcon />,
    link:"/"

},
{
    title: "About",
    icon: <InfoIcon/>,
    link:"/about"

},
{
    title: "Profil",
    icon: <InfoIcon/>,
    link:"/Profil"

}
]

