import { observable } from 'mobx';

class Model {
    @observable player = null;
    @observable showEditor = false;
}

export default new Model();