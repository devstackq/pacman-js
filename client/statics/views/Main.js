export default class {
    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        document.title = title;
    }
    init() {
        console.log("main page")
    }

    async getHtml() {
        let wrapper = `
        <div class="mainPage">
      
            <img src='./statics/assets/logo.png' />
            <img src='./statics/assets/pachead.png' />
            <div class='links'>
                <a href='/play'>Начать игру</a>
                <a href='/score'>Скала предков</a>
                <a href='/option'>Настройки</a>
                <a href='/about'>Об игре</a>
        </div>
    </div>`
        return wrapper;
    }
}