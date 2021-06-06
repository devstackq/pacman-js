export default class {
    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        document.title = title;
    }
    init() {
        console.log('sort and show score')
    }

    async getHtml() {
        let wrapper = `
        <div id='table'>
        //inner data from json, sorted players
        </div>
        `
        return wrapper;
    }
}