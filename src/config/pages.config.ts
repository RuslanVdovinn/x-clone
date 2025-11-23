export const PAGES = {
    HOME: '/',
    EXPORE: 'explore',
    PROFILE_FALE: '/profile-fake',
    SHOP: '/shop',
    SSG: '/shop/ssg',
    ISR: '/shop/isr',
    PROFILE: (username: string) => `/u/${username}`
}