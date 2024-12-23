export const asideData = {
    tag: 'aside',
    className: 'aside-container',
    children: [
      {
        tag: 'h2',
        className: 'aside-container-title',
        textContent: 'New',
      },
      {
        tag: 'div',
        className: 'aside-content',
        children: [
          {
            tag: 'div',
            className: 'aside-item',
            children: [
              {
                tag: 'a',
                className: 'aside-item-title',
                attributes: { href: '#' },
                children: [
                  {
                    tag: 'h3',
                    textContent: 'Hydrogen VS Electric Cars',
                  },
                ],
              },
              {
                tag: 'p',
                className: 'aside-item-text',
                textContent: 'Will hydrogen-fueled cars ever catch up to EVs?',
              },
            ],
          },
          {
            tag: 'div',
            className: 'aside-item',
            children: [
              {
                tag: 'a',
                className: 'aside-item-title',
                attributes: { href: '#' },
                children: [
                  {
                    tag: 'h3',
                    textContent: 'The Downsides of AI Artistry',
                  },
                ],
              },
              {
                tag: 'p',
                className: 'aside-item-text',
                textContent: 'What are the possible adverse effects of on-demand AI image generation?',
              },
            ],
          },
          {
            tag: 'div',
            className: 'aside-item',
            children: [
              {
                tag: 'a',
                className: 'aside-item-title',
                attributes: { href: '#' },
                children: [
                  {
                    tag: 'h3',
                    textContent: 'Is VC Funding Drying Up?',
                  },
                ],
              },
              {
                tag: 'p',
                className: 'aside-item-text',
                textContent: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
              },
            ],
          },
        ],
      },
    ],
  };