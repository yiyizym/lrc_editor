import Hower from 'howler';
class Player {
    constructor(file){
        this.rawFile = file;
        return new Promise((resolve)=> {
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

    play(){
        this.song.play();
    }
    pause(){
        this.song.pause();
    }

    isPlaying(){
        return this.song.playing();
    }

    getSongName(){
        return this.rawFile.name;
    }
}

export default Player;