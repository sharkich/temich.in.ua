export class Position {
    constructor (data = {}) {
        this.top = data.top || 64;
        this.left = data.left || 64;
    }
}

export class Melolontha {
    constructor (data = {}) {
        this.position = data.position ? new Position(data.position) : new Position({top: 128, left: 128});
        this.width = data.width || 64;
        this.height = data.height || 31;
        this.rotate = data.rotate || 14;

        this.element = document.createElement('div');
        this.element.classList.add('melolontha');
        this.draw();
        this.element.addEventListener('click', this.onClick.bind(this), false);
        document.body.appendChild(this.element);
    }

    draw() {
        this.element.style.width = this.width + 'px';
        this.element.style.height = this.height + 'px';
        this.element.style.top = this.position.top + 'px';
        this.element.style.left = this.position.left + 'px';
        this.element.style.transform = `rotate(${-this.rotate}deg)`;
    }

    move(length = 3) {
        let x, y;
        // if (this.rotate === 90) {
        //     y = length / 3;
        // } else if (this.rotate === 270) {
        //     y = - length / 3;
        // } else if (this.rotate === 0) {
        //     x = length / 3;
        // } else if (this.rotate === 180) {
        //     x = - length / 3;
        // } else {
        //     y = length * Math.cos(180-this.rotate);
        //     x = length * Math.sin(180+this.rotate);
        // }
        y = length * Math.cos(180-this.rotate);
        x = length * Math.sin(180+this.rotate);
        if (this.rotate <= 90) {
            y = length * Math.cos(180-this.rotate);
            x = length * Math.sin(180+this.rotate);
            this.position.top = this.position.top - y;
            this.position.left = this.position.left + x;
        } else if (this.rotate <= 180) {
            y = length * Math.cos(this.rotate);
            x = length * Math.sin(180+this.rotate);
            this.position.top = this.position.top + y;
            this.position.left = this.position.left + x;
        } else {
            y = length * Math.cos(180+this.rotate);
            x = length * Math.sin(180+this.rotate);
            this.position.top = this.position.top - y;
            this.position.left = this.position.left - x;
        }

        this.position.top = Math.round(this.position.top);
        this.position.left = Math.round(this.position.left);
    }

    onClick() {
        console.log('click', this);
        // document.querySelectorAll('body .title').forEach(this.changeNode.bind(this));
        // document.querySelectorAll('.content a').forEach(this.changeNode.bind(this));
        const el = document.querySelector('.card');
        console.log(el.innerText, el.childNodes);
        // document.querySelector('.card').forEach(this.changeNode.bind(this));
    }

    changeNode(node) {
        console.log(node);
        if (node.innerText && node.innerText.length) {
            console.log(node.innerText);
            node.innerText = this.randomString(node.innerText);
        }
    }

    randomString(string = '') {
        const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';

        return string
            .split('')
            .reduce((str, char) => {
                if (UPPERCASE.indexOf(char) !== -1) {
                    return str + UPPERCASE.charAt(Math.floor(Math.random() * UPPERCASE.length));
                } else if (LOWERCASE.indexOf(char) !== -1) {
                    return str + LOWERCASE.charAt(Math.floor(Math.random() * LOWERCASE.length));
                } else {
                    return str + char;
                }
            }, '');
    }
}