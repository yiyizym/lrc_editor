import { observable, computed } from 'mobx';

class Model {
  @observable player = null;
  @observable playing = false;
  @observable showEditor = false;
  @observable rawLyrics = [{
    time: '',
    lyrics: '请先上传歌曲'
  }, {
    time: '',
    lyrics: '然后上传歌词'
  }, {
    time: '',
    lyrics: '播放歌曲后，点击"打 TAG"打上时间点'
  }, {
    time: '',
    lyrics: '如果打时间点出错，可以点击"回退"回退歌曲 2 秒及修改位于这段时间内的时间点'
  }];

  @observable indexToBeTagged = 0;

  @computed get lrcContentLink(){
    return 'data:text/plain;charset=utf-8,' + encodeURIComponent(elHtml)
  }
}

export default new Model();