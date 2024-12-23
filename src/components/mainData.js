import { articleData } from "./articleData";
import { asideData } from "./asideData";
import { cardsData } from "./cardsData";

export const mainData = {
        tag: 'main',
        className: 'main-container',
        children: [
            {
                tag: 'div',
                className: 'news-container',
                children: [
                    articleData,
                    asideData
                ]
            },            
            cardsData
        ]
    }