export const formatTime = function (secs) {
  if(!secs) return '';

  var minutes = Math.floor(secs / 60) || 0;
  var seconds = (secs - minutes * 60) || 0;
  seconds = seconds.toFixed(2);
  seconds = (seconds < 10 ? '0' : '') + seconds;
  minutes = (minutes < 10 ? '0' : '') + minutes;

  return `[${minutes}:${seconds}]`;
}

export const parseTime = function(str){
  let matches;
  if(str && (matches = str.match(/(\d{2}):(\d{2}\.\d+)/))){
    let minutes = parseInt(matches[1],10);
    let seconds = parseFloat(matches[2],10);
    return minutes * 60 + seconds;
  } else {
    return 0;
  }
}