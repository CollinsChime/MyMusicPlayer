const songs = [
  "08 Young Jeezy Ti-I Got Money.mp3",
  "audio.mp3",
  "14-ludacris-two_miles_an_hour.mp3",
  "Birdman-Priceless-feat-Lil39-Wayne(mp3hamster.net).mp3",
  "Blackeyed Susan - None Of It Matters.mp3",
  "Candy (Clean Extended).mp3",
  "classisal gucci.mp3",
  "IcePrinc-Oleku.mp3",
  "Korn__Shoots_And_Ladders.mp3",
  "preview.mp3",
  "snoop dogg pres doggys angels frontline - [MP3JUICES.COM].mp3",
  "Snoop-Dogg-So-Heavy-On-My-Mind-Feat-Big-Chan-amp-Kokane(mp3hamster.net).mp3",
  "T.I.- Rubber Band Man (mp3soup.com).mp3",
  "three six mafia ridin' spinners - [MP3JUICES.COM].mp3",
  "tumblr_mc4gr1STVV1qaohsgo1.mp3",
  "Wiz_Khalifa_ft_Chevy_Woods_-_Taylor_Gang_.mp3",
  "Nicole Wray ft. Dame Dash - The Dream Factory (Lollipop)-1.mp3",
  "tumblr_mfzmc5bCDE1qjonawo1.mp3",
  "Ice-Prince-N-Word-(Remix)-",
]

const createSongList = () => {
  const list = document.createElement('ol')

  for (let i = 0; i < songs.length; i++) {
    const item = document.createElement('li')
    item.appendChild(document.createTextNode(songs[i]))

    list.appendChild(item)

  }
  return list
}

document.getElementById('songList').appendChild(createSongList())

songList.onclick = (e) => {
  const clickedItem = e.target
  const source = document.getElementById('source')
  source.src = 'songs/' + clickedItem.innerText

  document.getElementById('currentlyPlayingSong').innerText = "Currently Playing: "
  document.getElementById('currentSong').innerText = clickedItem.innerText

  player.load()
  player.play()
}

const playAudio = () => {
  if (player.readyState) {
    player.play()
  }
}

const pauseAudio = () => {
  player.pause()
}

const slider = document.getElementById('volumeSlider')

slider.oninput = (e) => {
  const volume = e.target.value
  player.volume = volume
}

const updateProgress = () => {
  if(player.currentTime > 0) {
    const progressBar = document.getElementById('progress')
    progressBar.value = (player.currentTime / player.duration) * 100
    }

}
