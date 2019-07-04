let { taglist } = require('./fb.json'); //with path

// console.log(taglist);
var Downloader = require('filedownloader');

const fbvid = require('fbvideos');

let video = 1;

taglist.forEach(tag => {
  // console.log(typeof tag);
  fbvid.high(tag).then(vid => {
    if (vid.url) {
      console.log('Downloading: ', tag);
      new Downloader({
        url: vid.url,
        saveas: `videos/video-${video++}.mp4`
      }).on('end', function() {
        console.log('Finished: ', tag);
      });
    }
    // => { url: 'https://video.fpat1-1.fna.fbcdn.net/...mp4?934&OE=2kf2lf4g' }
  });
});
