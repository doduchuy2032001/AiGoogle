import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBoatAlt,
  cilMap,
  cilSettings,
  cilClipboard,
  cilContact,
  cilPeople,
  cilCarAlt,
  cilGift,
  cilHome
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Báo cáo',
    to: '/dashboard',
    icon: <CIcon icon={cilClipboard} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Đối tác',
    to: '/order',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Đơn hàng',
    to: '/shippingaddress',
    icon: <CIcon icon={cilBoatAlt} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavItem,
  //   name: 'Sản phẩm',
  //   to: '/googlemap',
  //   icon: <CIcon icon={cilGift} customClassName="nav-icon" />,
  // },
  {
    component: CNavItem,
    name: 'Phương tiện',
    to: '/vehicle',
    icon: <CIcon icon={cilCarAlt} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavItem,
  //   name: 'khách hàng',
  //   to: '/googlemap',
  //   icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
  // },
  {
    component: CNavItem,
    name: 'Tối ưu',
    to: '/setting',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Kho',
    to: '/googlemap',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Googlemap',
    to: '/googlemap',
    icon: <CIcon icon={cilMap} customClassName="nav-icon" />,
  }
];


export default _nav
