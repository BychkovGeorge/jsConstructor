export function row(content, styles = '') {
    return `<div class="row" style="${styles}">${content}</div>`;
}

export function col(content, styles={}) {
    return `<div class="col-sm" style="${styles}">${content}</div>`;
}

export function css(styles = {}) {
    if (typeof styles === 'string') {
        return styles;
    }
    return Object.keys(styles).map(key => `${key}: ${styles[key]}`).join(';')
}

export function block(type) {
    return `
        <form name="${type}">
            <h5>${type}</h5>
            <div class="form-group mb-2">
                <input class="form-control form-control-sm" name="value" placeholder="value">
            </div>
            <div class="form-group mb-2">
                <input class="form-control form-control-sm" name="styles" placeholder="styles">
            </div>
            <button type="submit" class="btn btn-primary btn-sm">Добавить</button>      
        </form>
        <hr />
    `
}