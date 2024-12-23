export const navData = {
  tag: 'nav',
  id: 'top-navbar',
  className: 'navbar',
  children: [
    {
      tag: 'div',
      id: 'overlay',
      className: 'overlay'
    },
    {
      tag: 'a',
      attributes: { href: '/' },
      className: 'logo',
      children: [
        {
          tag: 'img',
          attributes: {
            src: '/assets/images/logo.svg',
            alt: 'News homepage logo',
          },
          className: 'logo-link',
        },
      ],
    },
    {
      tag: 'ul',
      id: 'nav-list',
      className: 'nav-items',
      children: [        
        {
          tag: 'li',
          children: [
            {
              tag: 'a',
              attributes: { href: '#home' },
              textContent: 'Home',
            },
          ],
        },
        {
          tag: 'li',
          children: [
            {
              tag: 'a',
              attributes: { href: '#new' },
              textContent: 'New',
            },
          ],
        },
        {
          tag: 'li',
          children: [
            {
              tag: 'a',
              attributes: { href: '#popular' },
              textContent: 'Popular',
            },
          ],
        },
        {
          tag: 'li',
          children: [
            {
              tag: 'a',
              attributes: { href: '#trending' },
              textContent: 'Trending',
            },
          ],
        },
        {
          tag: 'li',
          children: [
            {
              tag: 'a',
              attributes: { href: '#categories' },
              textContent: 'Categories',
            },
          ],
        },
        
      ],
    },
    {
      tag: 'a',
      id: 'toggleIcon',
      className: 'icon',
      children: [
        {
          tag: 'img',
          attributes: {
            src: '/assets/images/icon-menu.svg',
            alt: 'Menu',
          },
          className: 'burger-icon',
        },
      ],
    },
    {
      tag: 'a',
      id: 'closeNavIcon',
      className: 'icon',
      children: [
        {
          tag: 'img',
          attributes: {
            src: '/assets/images/icon-menu-close.svg',
            alt: 'Close menu',
          },
          className: 'close-menu-icon',
        },
      ],
    },
  ],
};