import { PAGES } from "@/config/pages.config"

export interface IMenuItem {
    href: string
    name: string
}

export const MENU : IMenuItem[] = [
    {
        href: PAGES.HOME,
        name: 'Home'
    },
    {
        href: PAGES.EXPORE,
        name: 'Explore'
    },
    {
        href: PAGES.PROFILE_FALE,
        name: 'Profile'
    },
    {
        href: PAGES.SHOP,
        name: 'Shop'
    }
]