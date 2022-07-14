/* eslint-disable prettier/prettier */
import { ReactElement } from 'react'
import { faBeer, faBirthdayCake, faCircleQuestion, faHistory, faHome, faPeopleGroup, faQuestion, faV, faVolleyball } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSoccerBall } from '@fortawesome/free-regular-svg-icons'


const headerNavLinks = [
  { icon: <FontAwesomeIcon  className="text-amber-400 hover:text-red-600 p-0 mr-3 w-10 h-10 inline" icon={faHome}/>,href: '/', title: 'Home' },
  //{ href: '/block', title: 'Blog' },
  { icon: <FontAwesomeIcon  className="text-amber-400 hover:text-red-600 p-0 mr-3 w-10 h-10 inline" icon={faHistory}/>,href: '/geschichte', title: 'Geschichte' },
  { icon: <FontAwesomeIcon  className="text-amber-400 hover:text-red-600 p-0 mr-3 w-10 h-10 inline" icon={faPeopleGroup}/>,href: '/team', title: 'Team' },
  { icon: <FontAwesomeIcon  className="text-amber-400 hover:text-red-600 p-0 mr-3 w-10 h-10 inline"icon={faBeer}/>, href: '/drinks', title: 'Drinks' },
  //{ href: '/tags', title: 'Tags' },
  {icon: <FontAwesomeIcon  className="text-amber-400 hover:text-red-600 p-0 mr-3 w-10 h-10 inline"icon={faVolleyball}/>, href: '/sportarena', title: 'Sportarena' },
  //{ href: '/about', title: 'About' },
  {icon: <FontAwesomeIcon className="text-amber-400 hover:text-red-600 p-0 mr-3 w-10 h-10 inline" icon={faBirthdayCake}/>, href: '/events', title: 'Events' },
  {icon: <FontAwesomeIcon  className="text-amber-400 hover:text-red-600 p-0 mr-3 w-10 h-10 inline"icon={faCircleQuestion}/>, href: '/kontakt', title: 'Wohin?' },
]

export default headerNavLinks
