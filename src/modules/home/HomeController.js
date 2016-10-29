export default class HomeController {
    constructor($state, stateHolder, $location) {
        stateHolder.clearAll();
        stateHolder.setTitle($state.current.title);
        stateHolder.setDescription('sdsdf');
        stateHolder.setUrl($state.current.url);
    }
}
