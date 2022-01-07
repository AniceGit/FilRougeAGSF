import React from "react";
import TagOutlined from '@ant-design/icons';
import QuestionOutlined  from '@ant-design/icons';
import InfoCircleOutlined  from '@ant-design/icons';
import UserOutlined  from '@ant-design/icons';
import '../styles/SidebarStyle.css';
import '../styles/Header.css';


export const SidebarData = [
    {
        title: "Tags",
        icon: <TagOutlined />,
        link:"/Main"

},
{
    title: "Questions",
    icon: <QuestionOutlined />,
    link:"/Question"

},
{
    title: "Profil",
    icon: <UserOutlined />,
    link:"/Profil"
  

},
{
    title: "About",
    icon: <InfoCircleOutlined />,
    link:"/About"

}
]

