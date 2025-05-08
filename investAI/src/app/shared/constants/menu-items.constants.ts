import { MenuItem } from "../models/menu-item.model";
import { RoutesEnum } from "../enums/routes.enum";


export const MENU_ITEMS: MenuItem[] = [
  {
    title: 'Calculation',
    icon: 'bi bi-calculator',
    link: RoutesEnum.FRAME
  },
  {
    title: 'Frame Management',
    icon: 'bi bi-app',
    link: RoutesEnum.MANAGEMENT
  }, 
  {
    title: 'Settings',
    icon: 'bi bi-gear',
    link: RoutesEnum.SETTINGS
  }
  /*{
    title: 'MENU.SIDENAV.USERS',
    icon: 'bi bi-people',
    link: RoutesEnum.USERS,
    permission: ROLE_VISIBILITY.USERS
      
  },
  {
    title: 'MENU.SIDENAV.APP',
    icon: 'bi bi-file-earmark-ruled',
    content: RoutesEnum.PATENTS,
    permission: ROLE_VISIBILITY.PATENTS,
    subMenu:[
      {
        title: 'MENU.SIDENAV.SEP_PATENTS',
        link: RoutesEnum.PATENTS + "/" + RoutesEnum.SEP,
        permission: ROLE_VISIBILITY.PATENTS
      },
      {
        title: 'MENU.SIDENAV.ETSI_TECHNOLOGY',
        link: RoutesEnum.PATENTS + "/" + RoutesEnum.ETSI,
        permission: ROLE_VISIBILITY.PATENTS
      },
      {
        title: 'MENU.SIDENAV.MPEG',
        link: RoutesEnum.PATENTS + "/" + RoutesEnum.MPEG,
        permission: ROLE_VISIBILITY.PATENTS
      }, 
      {
        title: 'MENU.SIDENAV.DVB',
        link: RoutesEnum.PATENTS + "/" + RoutesEnum.DVB,
        permission: ROLE_VISIBILITY.PATENTS
      }, 
      {
        title: 'MENU.SIDENAV.NEWSLETTER.TITLE',
        permission: ROLE_VISIBILITY.PATENTS,
        icon: 'bi bi-newspaper',
        subMenu: [
          {
            title: 'MENU.SIDENAV.NEWSLETTER.ROADMAPS',
            link: RoutesEnum.NEWSLETTER + "/" + RoutesEnum.SDO_ROADMAPS,
            permission: ROLE_VISIBILITY.PATENTS
          }, 
          {
            title: 'MENU.SIDENAV.NEWSLETTER.REPORTS',
            link: RoutesEnum.NEWSLETTER + "/" + RoutesEnum.SDO_MEETINGS,
            permission: ROLE_VISIBILITY.PATENTS
          }
        ]
      }, 
      {
        title: 'MENU.SIDENAV.MAGAZINE',
        link: RoutesEnum.MAGAZINE,
        permission: ROLE_VISIBILITY.PATENTS
      }
    ]
  },
  {
    title: 'MENU.SIDENAV.DOCUMENTATION',
    link: RoutesEnum.DOCUMENTATION,
    icon: 'bi bi-file-earmark-text',
    permission: ROLE_VISIBILITY.DOCUMENTATION,
    subMenu: [
      {
        title: 'DOCUMENTATION.USER_GUIDES',
        link: RoutesEnum.DOCUMENTATION + "/" + RoutesEnum.USER_GUIDES,
        icon: 'bi bi-book',
        permission: ROLE_VISIBILITY.DOCUMENTATION
      },
      {
        title: 'DOCUMENTATION.ARCHITECTURE.TITLE',
        link: RoutesEnum.DOCUMENTATION + "/" + RoutesEnum.ARCHITECTURE,
        icon: 'bi bi-diagram-3',
        permission: ROLE_VISIBILITY.DOCUMENTATION,
        subMenu: [
          {
            title: 'DOCUMENTATION.ARCHITECTURE.WEB_APP',
            link: RoutesEnum.DOCUMENTATION + "/" + RoutesEnum.ARCHITECTURE + "/" + RoutesEnum.WEB_APP,
            permission: ROLE_VISIBILITY.DOCUMENTATION
          }, 
          {
            title: 'DOCUMENTATION.ARCHITECTURE.CORE_APP',
            link: RoutesEnum.DOCUMENTATION + "/" + RoutesEnum.ARCHITECTURE + "/" + RoutesEnum.CORE_APP,
            permission: ROLE_VISIBILITY.DOCUMENTATION
          }
        ]
      }, 
      {
        title: 'DOCUMENTATION.DATABASE',
        link: RoutesEnum.DOCUMENTATION + "/" + RoutesEnum.DATABASE,
        icon: 'bi bi-database-gear',
        permission: ROLE_VISIBILITY.DOCUMENTATION
      },
      {
        title: 'DOCUMENTATION.REST_API',
        link: RoutesEnum.DOCUMENTATION + "/" + RoutesEnum.REST_API,
        icon: 'bi bi-code-square',
        permission: ROLE_VISIBILITY.DOCUMENTATION
      },
      {
        title: 'DOCUMENTATION.CODE_DOCUMENTATION.TITLE',
        link: RoutesEnum.DOCUMENTATION + "/" + RoutesEnum.CODE_DOCUMENTATION,
        icon: 'bi bi-journal-code',
        permission: ROLE_VISIBILITY.DOCUMENTATION,
        subMenu: [
          {
            title: 'DOCUMENTATION.CODE_DOCUMENTATION.WEB_APP',
            link: RoutesEnum.DOCUMENTATION + "/" + RoutesEnum.CODE_DOCUMENTATION + "/" + RoutesEnum.WEB_APP,
            permission: ROLE_VISIBILITY.DOCUMENTATION
          }, 
          {
            title: 'DOCUMENTATION.CODE_DOCUMENTATION.CORE_APP',
            link: RoutesEnum.DOCUMENTATION + "/" + RoutesEnum.CODE_DOCUMENTATION + "/" + RoutesEnum.CORE_APP,
            permission: ROLE_VISIBILITY.DOCUMENTATION
          }
        ]
      }
      ]
  }*/

];
