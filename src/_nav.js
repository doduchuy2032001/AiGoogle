import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDrop,
  cilSpeedometer,
  cilBoatAlt,
  cilMap,
  cilSettings
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Settings',
    to: '/settings',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Order',
    to: '/order',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'ShippingAddress',
    to: '/shippingaddress',
    icon: <CIcon icon={cilBoatAlt} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'GoogleMap',
    to: '/googlemap',
    icon: <CIcon icon={cilMap} customClassName="nav-icon" />,
  }
];


export default _nav
