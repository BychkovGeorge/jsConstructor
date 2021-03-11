import {col, css, row} from "../utils";

export class Block {
    constructor(value, options) {
        this.value = value;
        this.options = options;
    }

    toHtml() {
        throw new Error('Метод toHtml не реализован');
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const {tag = 'h1', styles} = this.options;
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const styles = this.options.styles;
        return row(col(`<p>${this.value}</p>`, css(styles)));
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const styles = this.options.styles;
        const html = this.value.map(el => col(el, css(styles))).join('');
        return row(html);
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const {styles, imageStyles} = this.options;
        return row(`<img src="${this.value}" style="${css(imageStyles)}" />`, css(styles));
    }
}