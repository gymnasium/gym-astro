export const CMS_URL = import.meta.env.DEV ? 'http://localhost:4000' : 'https://data.gym.soy'
export const FEED_URL = `${CMS_URL}/feeds/complete.json`
export const DATA = await fetch(FEED_URL).then((response) => response.json());
export const BIOS = await DATA.items.bios;
export const CONFIG = await DATA.items.config;
export const META = await DATA.items.config.meta;
export const NAVIGATION = await DATA.items.config.navigation;
export const NAV_MAIN = await DATA.items.config.navigation.main;
export const NAV_FOOTER = await DATA.items.config.navigation.footer;
export const LMS_URL = await CONFIG.lms_url
export const ASTRO_URL = await CONFIG.astro_url
export const ELEVENTY_URL = await CONFIG.eleventy_url
export const BLOG_FEED = await CONFIG.feeds.blog
