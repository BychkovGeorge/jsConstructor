import image from './assets/pink.jpg';
import {Block, ColumnsBlock, ImageBlock, TextBlock, TitleBlock} from "./classes/blocks";

export const model = [
    new TitleBlock('Конструктор сайтов на чистом JS', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem',
        }
    }),
    new TextBlock('Ниже расположены колонки с дополнительной информацией', {
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            'text-align': 'center',
        }
    }),
    new ColumnsBlock([
        'В колонке может быть такой текст',
        'Или например такой',
        'А ешё вот такой',
        'Ну в общем я думаю суть вы уловили :)',
    ], {
        styles: {
            color: '#ff0099',
            'text-align': 'center',
            'font-weight': 1000,
            'margin-top': '1.5rem',
            'margin-bottom': '1.5rem',
        }
    }),
    new TextBlock('А ещё ниже расположена какая-то фотография...', {
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            'text-align': 'center',
        }
    }),
    new ImageBlock(image, {
        styles: {
            'justify-content': 'center',
            'margin-top': '1.5rem',
        },
        imageStyles: {
            width: '500px',
            height: 'auto',
        },
    }),
];