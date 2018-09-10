import { observable } from 'mobx';

class Model {
    @observable player = null;
}

export default new Model();