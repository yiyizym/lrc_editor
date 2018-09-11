import { observable } from 'mobx';

class Model {
  @observable player = null;
  @observable playing = false;
  @observable showEditor = false;
  @observable rawLyrics = [{
    time: '00:01:96',
    lyrics: 'here write your lyrics'
  }, {
    time: '00:02:96',
    lyrics: 'here write your lyrics'
  }, {
    time: '',
    lyrics: 'here write your lyrics'
  }]
}

export default new Model();