export const formatTime = function (secs) {
  if(!secs) return '';

  var minutes = Math.floor(secs / 60) || 0;
  var seconds = (secs - minutes * 60) || 0;
  seconds = seconds.toFixed(2);
  seconds = (seconds < 10 ? '0' : '') + seconds;
  minutes = (minutes < 10 ? '0' : '') + minutes;

  return `[${minutes}:${seconds}]`;
}