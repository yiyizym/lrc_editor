import Hower from 'howler';
class Player {
  constructor(file) {
    this.rawFile = file;
    return new Promise((resolve) => {
      let reader = new FileReader();
      reader.addEventListener('load', () => {
        this.song = new Howl({
          src: reader.result,
          format: file.name.split('.').pop().toLowerCase()
        });
        resolve(this);
      })
      reader.readAsDataURL(file);
    })
  }

  play() {
    this.song.play();
  }
  pause() {
    this.song.pause();
  }

  seek(seconds){
    this.song.seek(seconds);
  }

  rewind(seconds){
    let currentTime = this.getPlayedSeconds();
    this.song.seek(Math.max(0, currentTime - Math.max(0, seconds)));
  }

  isPlaying() {
    return this.song.playing();
  }

  togglePlay() {
    if(this.isPlaying()){
      this.pause();
    } else {
      this.play();
    }
  }

  on(name, fn){
    this.song.on(name, fn);
  }

  destroy(){
    this.song.stop();
    this.song.unload();
  }

  getDuration() {
    return this.song.duration();
  }

  getPlayedSeconds() {
    return this.song.seek();
  }

  getPlayedPecentages() {
    return this.song.seek() / this.song.duration() * 100;
  }

  getSongName() {
    return this.rawFile.name.split('.')[0];
  }
}

export default Player;