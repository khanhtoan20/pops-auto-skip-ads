const config = {
   POPS_VIDEO_IMA_COUNTDOWN_DIV: 'pops-video_ima-countdown-div',
   POPS_VIDEO_IMA_AD_CONTAINER: 'pops-video_ima-ad-container',
   POPS_VIDEO_HTML5_API: 'pops-video_html5_api',
   VJS_POPS_BOTTOM_RIGHT: 'vjs-pops-bottom-right',
   VJS_CONTROL_BAR: 'vjs-control-bar',
   VJS_HIDDEN: 'vjs-hidden'
}

const main = function(event) {
   const vjs_pops_bottom_right         = document.getElementsByClassName(config.VJS_POPS_BOTTOM_RIGHT)[0];
   const vjs_control_bar               = document.getElementsByClassName(config.VJS_CONTROL_BAR)[0];
   const pops_video_ima_countdown_div  = document.getElementById(config.POPS_VIDEO_IMA_COUNTDOWN_DIV);
   const pops_video_ima_ad_container   = document.getElementById(config.POPS_VIDEO_IMA_AD_CONTAINER);
   const video                         = document.getElementById(config.POPS_VIDEO_HTML5_API);

   const skipAds = function(mutations) {
      video.play();
      vjs_pops_bottom_right.remove();
      vjs_control_bar.classList.remove(config.VJS_HIDDEN);
      pops_video_ima_countdown_div.remove();
      pops_video_ima_ad_container.remove();
   }

   const observer = new MutationObserver(skipAds);
   observer.observe(pops_video_ima_ad_container, {childList: true, subtree: true});
}

window.addEventListener('load', main);