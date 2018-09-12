import { observable } from 'mobx';

class Model {
  @observable player = null;
  @observable playing = false;
  @observable showEditor = false;
  @observable rawLyrics = [{
    time: '',
    lyrics: 'here write your lyrics'
  }, {
    time: '',
    lyrics: 'here write your lyrics'
  }, {
    time: '',
    lyrics: 'here write your lyrics'
  }];

  @observable indexToBeTagged = 0;
}

export default new Model();