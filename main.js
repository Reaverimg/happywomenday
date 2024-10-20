onload = () => {
  document.body.classList.remove("container");
};

document.addEventListener("DOMContentLoaded", function () {
  var audioElement = document.getElementById("myAudio");

  //   // Bắt đầu phát từ giây thứ 10
  //   audioElement.currentTime = 8;

  // Bắt đầu phát từ giây 61 (1 phút 01 giây)
  audioElement.currentTime = 61;

  // Chơi bài nhạc
  audioElement.play();
});
