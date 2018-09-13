import { observable, computed } from 'mobx';

class Model {
  @observable player = null;
  @observable songLoaded = false;
  @observable playing = false;
  @observable showEditor = false;
  @observable indexToBeTagged = 0;
  @observable rawLyrics = [{
    time: '',
    lyrics: '请先"上传歌曲"'
  }, {
    time: '',
    lyrics: '然后"上传歌词"'
  }, {
    time: '',
    lyrics: '"播放"歌曲后，点击"打 TAG"打上时间点。'
  }, {
    time: '',
    lyrics: '如果打时间点出错，可以点击"回退(2 秒)"回退歌曲 2 秒及修改位于这段时间内的时间点。'
  }, {
    time: '',
    lyrics: '打好时间标签后，点击歌词可以跳转到歌曲对应的时间位置'
  }, {
    time: '',
    lyrics: '制作带翻译的歌词时。翻译跟原文在同一行，与原文用空格隔开，跟在原文后面。'
  }, {
    time: '',
    lyrics: '制作完成后，可"导出歌词"，文件名是歌曲名，文件格式是 lrc 。'
  }];
}

export default new Model();