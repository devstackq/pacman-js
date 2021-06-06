export default class {
    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        let wrapper = `
        <div class="mainPage">
        <div class='logo'>
            <img src='./statics/assets/logo.png' />
        </div>
        <div class='menu'>
            <img src='./statics/assets/pachead.png' />
            <div class='links'>
                <a href='/play'>Начать игру</a>
                <a href='/score'>Скала предков</a>
                <a href='/option'>Настройки</a>
                <a href='/about'>Об игре</a>
            </div>
        </div>
    </div>`
        return wrapper;
    }
}