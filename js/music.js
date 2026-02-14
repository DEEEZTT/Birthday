const audio = document.getElementById("bg-music");

// set volume dan loop
audio.volume = 0.1;
audio.loop = true;

// ambil posisi terakhir
let savedTime = sessionStorage.getItem("musicTime");

if (savedTime) {
  audio.currentTime = savedTime;
}

// simpan posisi tiap detik
audio.addEventListener("timeupdate", () => {
  sessionStorage.setItem("musicTime", audio.currentTime);
});

// cek status playing
let musicPlaying = sessionStorage.getItem("musicPlaying");

function startMusic() {
  audio.play()
    .then(() => {
      sessionStorage.setItem("musicPlaying", "true");
    })
    .catch(err => console.log(err));
}

// jika belum pernah play
if (!musicPlaying) {

  document.addEventListener("click", startMusic, { once: true });

}
else {

  // tetap butuh trigger kecil supaya browser izinkan
  document.addEventListener("click", () => {
    audio.play();
  }, { once: true });

}