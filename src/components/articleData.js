export const articleData = {
  tag: 'article',
  className: 'article-container',
  children: [
    {
      tag: 'div',
      className: 'home-image-container',
      children: [
        {
          tag: 'picture',
          children: [
            {
              tag: 'source',
              attributes: {
                srcset: '/assets/images/image-web-3-desktop.jpg',
                media: '(min-width: 769px)',
              },
            },
            {
              tag: 'source',
              attributes: {
                srcset: '/assets/images/image-web-3-mobile.jpg',
                media: '(max-width: 768px)',
              },
            },
            {
              tag: 'img',
              className: 'home-image',
              attributes: {
                src: '/assets/images/image-web-3-desktop.jpg',
                alt: '',
              },
            },
          ],
        }
      ],
    },
    {
      tag: 'div',
      className: 'article-content',
      children: [
        {
          tag: 'div',
          className: 'article-title-container',
          children: [
            {
              tag: 'h1',
              textContent: 'The Bright Future of Web 3.0?',
            },
          ],
        },
        {
          tag: 'div',
          className: 'article-text',
          children: [
            {
              tag: 'p',
              textContent:
                'We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?',
            },
            {
              tag: 'div',
              className: 'btn-container',
              children: [
                {
                  tag: 'button',
                  id: 'read-more-btn',
                  textContent: 'Read more',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};