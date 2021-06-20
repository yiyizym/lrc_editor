import { makeAutoObservable } from 'mobx';
class Model {

  constructor() {
    makeAutoObservable(this)
  }

  player = null;
  songLoaded = false;
  playing = false;
  showEditor = false;
  indexToBeTagged = 0;
  
  showHint = false;
  hint = '';

  rawLyrics = [{
    time: '',
    lyrics: '请先点击"上传歌曲"'
  }, {
    time: '',
    lyrics: '然后点击"粘贴歌词"，把歌词粘贴到弹出框'
  }, {
    time: '',
    lyrics: '"播放"歌曲后，点击"打 TAG"可在红色底（选中状态）一栏打上时间点。'
  }, {
    time: '',
    lyrics: '如果打时间点出错，可以点击"回退(2 秒)"回退歌曲 2 秒及修改位于这段时间内的时间点。'
  }, {
    time: '',
    lyrics: '打好时间标签后，点击 时间一栏 可以跳转到歌曲对应的时间之前 1 秒的位置'
  }, {
    time: '',
    lyrics: '制作带翻译的歌词时。翻译跟原文在同一行，与原文用空格隔开，跟在原文后面。'
  }, {
    time: '',
    lyrics: '将鼠标移到每一行歌词上，点击歌词开头的「🖍」就可以编辑该行歌词，编辑好记得再次点击「✓」确认修改，否则不会生效。'
  }, {
    time: '',
    lyrics: '制作完成后，可"导出歌词"，文件名是歌曲名，文件格式是 lrc 。'
  }];
}

export default new Model();