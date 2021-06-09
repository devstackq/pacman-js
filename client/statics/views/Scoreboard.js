export default class {
    constructor(params) {
        this.params = params;
    }
    setTitle(title) {
        document.title = title;
    }
    init() {
        console.log('sort and show score')
        fetch(`http://localhost:6969/score`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // showRank(data)
                console.log(data, 'res')
            });
    }

    async getHtml() {
        let wrapper = `
        <div id='table'>
        data
        </div>
        `
        return wrapper;
    }
}