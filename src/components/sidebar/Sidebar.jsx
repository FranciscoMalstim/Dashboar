import React from 'react'
import "./sidebar.css"
import {LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,} from '@material-ui/icons'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashborad</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem active">
                <LineStyle className='sidebarIcon'/>
                Home
              </li>
              <li className="sidebarListItem">
                <Timeline className='sidebarIcon'/>
                Analytics
              </li>
              <li className="sidebarListItem">
                <TrendingUp className='sidebarIcon'/>
                Sales
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Menu rápido</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <PermIdentity className='sidebarIcon'/>
                Users
              </li>
              <li className="sidebarListItem">
                <Storefront className='sidebarIcon'/>
                Products
              </li>
              <li className="sidebarListItem">
                <AttachMoney className='sidebarIcon'/>
                Transactions
              </li>
              <li className="sidebarListItem">
                <BarChart className='sidebarIcon'/>
                Reports
              </li>
            </ul>
          </div><div className="sidebarMenu">
            <h3 className="sidebarTitle">Notificações</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <MailOutline className='sidebarIcon'/>
                Email
              </li>
              <li className="sidebarListItem">
                <DynamicFeed className='sidebarIcon'/>
                Feedback
              </li>
              <li className="sidebarListItem">
                <ChatBubbleOutline className='sidebarIcon'/>
                Mensagens
              </li>
            </ul>
          </div><div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <WorkOutline className='sidebarIcon'/>
                Administrar
              </li>
              <li className="sidebarListItem">
                <Timeline className='sidebarIcon'/>
                Análise
              </li>
              <li className="sidebarListItem">
                <Report className='sidebarIcon'/>
                Relatórios
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}
