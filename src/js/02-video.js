
import Player from "@vimeo/player"
import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe");
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time'

const currentTime = function(data){
localStorage.setItem(STORAGE_KEY, data.seconds)
}
player.on("timeupdate", throttle(currentTime, 1000))

player.setCurrentTime(localStorage.getItem(STORAGE_KEY))
.then(function(seconds){})
.catch(function(error){
switch (error.name) {
    case 'TypeError':
        
        break;

    default:
        break;
}})
 
