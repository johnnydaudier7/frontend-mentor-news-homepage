import cardImage1 from '../../assets/images/image-retro-pcs.jpg'
import cardImage2 from '../../assets/images/image-top-laptops.jpg'
import cardImage3 from '../../assets/images/image-gaming-growth.jpg'


export const cardsData = {
    tag: 'div',
    id: 'cards-container',
    className: 'cards-box',
    children: [
      {
        tag: 'div',
        className: 'card',
        children: [
          {
            tag: 'div',
            className: 'card-image-container',
            children: [
              {
                tag: 'img',
                attributes: {
                  src: cardImage1,
                  alt: "",
                },
              },
            ],
          },
          {
            tag: 'div',
            className: 'card-content',
            children: [
              {
                tag: 'p',
                className: 'card-number',
                textContent: '01',
              },
              {
                tag: 'a',
                className: 'card-content-title',
                attributes: { href: '#' },
                children: [
                  {
                    tag: 'h3',
                    textContent: 'Reviving Retro PCs',
                  },
                ],
              },
              {
                tag: 'p',
                className: 'card-text',
                textContent: 'What happens when old PCs are given modern upgrades?',
              },
            ],
          },
        ],
      },
      {
        tag: 'div',
        className: 'card',
        children: [
          {
            tag: 'div',
            className: 'card-image-container',
            children: [
              {
                tag: 'img',
                attributes: {
                  src: cardImage2,
                  alt: '',
                },
              },
            ],
          },
          {
            tag: 'div',
            className: 'card-content',
            children: [
              {
                tag: 'p',
                className: 'card-number',
                textContent: '02',
              },
              {
                tag: 'a',
                className: 'card-content-title',
                attributes: { href: '#' },
                children: [
                  {
                    tag: 'h3',
                    textContent: 'Top 10 Laptops of 2022',
                  },
                ],
              },
              {
                tag: 'p',
                className: 'card-text',
                textContent: 'Our best picks for various needs and budgets.',
              },
            ],
          },
        ],
      },
      {
        tag: 'div',
        className: 'card',
        children: [
          {
            tag: 'div',
            className: 'card-image-container',
            children: [
              {
                tag: 'img',
                attributes: {
                  src: cardImage3,
                  alt: '',
                },
              },
            ],
          },
          {
            tag: 'div',
            className: 'card-content',
            children: [
              {
                tag: 'p',
                className: 'card-number',
                textContent: '03',
              },
              {
                tag: 'a',
                className: 'card-content-title',
                attributes: { href: '#' },
                children: [
                  {
                    tag: 'h3',
                    textContent: 'The Growth of Gaming',
                  },
                ],
              },
              {
                tag: 'p',
                className: 'card-text',
                textContent: 'How the pandemic has sparked fresh opportunities.',
              },
            ],
          },
        ],
      },
    ],
  };