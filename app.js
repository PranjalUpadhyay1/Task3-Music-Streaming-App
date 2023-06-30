const music = new Audio('songs/1.mp3');

const songs =[
    {
        id: 1,
        songName: `On and On <br>
        <div class="subtitle">Cartoon</div>`,
        poster: 'albumarts/1.jpg'
    },
    {
        id: 2,
        songName: `Dreamer <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: 'albumarts/2.jpg'
    },
    {
        id: 3,
        songName: `Just getting Started <br>
        <div class="subtitle">Jim Yosef</div>`,
        poster: 'albumarts/1.jpg'
    },
    {
        id: 4,
        songName: `Heavyweight <br>
        <div class="subtitle">Red Moon</div>`,
        poster: 'albumarts/4.jpg'
    },
    {
        id: 5,
        songName: `Mortals <br>
        <div class="subtitle">Warriyo</div>`,
        poster: 'albumarts/5.jpg'
    },
    {
        id: 6,
        songName: `Spend it All <br>
        <div class="subtitle">Guy Arthur</div>`,
        poster: 'albumarts/6.jpg'
    },
    {
        id: 7,
        songName: `Dangerous <br>
        <div class="subtitle">Volt Vision</div>`,
        poster: 'albumarts/7.jpg'
    },
    {
        id: 8,
        songName: `Oni<br>
        <div class="subtitle">Kage</div>`,
        poster: 'albumarts/8.jpg'
    },
    {
        id: 9,
        songName: `Too Far <br>
        <div class="subtitle">joenghyeon</div>`,
        poster: 'albumarts/9.jpg'
    },
    {
        id: 10,
        songName: `Walk Away <br>
        <div class="subtitle">Toxic Joy & SRY</div>`,
        poster: 'albumarts/10.jpg'
    },
    {
        id: 11,
        songName: `Get Out Here<br>
        <div class="subtitle">Wiguez, Josh Levoid & Maryqueen</div>`,
        poster: 'albumarts/11.jpg'
    },
    {
        id: 12,
        songName: `Overcome<br>
        <div class="subtitle">Outlandr</div>`,
        poster: 'albumarts/12.jpg'
    },
    {
        id: 13,
        songName: `Daydream<br>
        <div class="subtitle">Cream Blade & Romi</div>`,
        poster: 'albumarts/13.jpg'
    },
    {
        id: 14,
        songName: `Moments<br>
        <div class="subtitle">Lost Identities</div>`,
        poster: 'albumarts/14.jpg'
    },
    {
        id: 15,
        songName: `Desperate<br>
        <div class="subtitle">NEFFEX</div>`,
        poster: 'albumarts/15.jpg'
    },
    {
        id: 16,
        songName: `Lachrymose<br>
        <div class="subtitle">Maze & Trinist</div>`,
        poster: 'albumarts/4.jpg'
    },
    {
        id: 17,
        songName: `On and On <br>
        <div class="subtitle">Cartoon</div>`,
        poster: 'albumarts/1.jpg'
    }
]

Array.from(document.getElementsByClassName("songItem")).forEach((e, i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName

})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <=0 ){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')
    }
    else{
        music.pause();
        wave.classList.remove('active1')
        masterPlay.classList.add('bi-play-fill')
        masterPlay.classList.remove('bi-pause-fill')
    }
});

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill')
        el.classList.remove('bi-pause-circle-fill')

    })
}
const makeAllBackground = ()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = `rgb(105, 105, 105, 0)`;

    })
}

let index = 0;
let albumArt = document.getElementById('albumArt');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName("playListPlay")).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index = el.target.id;

        if(index==17) {
            music.src = 'songs/1.mp3'
            albumArt.src = 'albumarts/1.jpg'
        }
        else{
            music.src = `songs/${index}.mp3`
            albumArt.src = `albumarts/${index}.jpg`
        }
        music.play();
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')
        

        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
            albumArt = poster;
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, 1)"
        makeAllPlays();
        el.target.classList.add('bi-pause-cirlce-fill');
        el.target.classList.remove('bi-play-circle-fill');
        wave.classList.add('active1');
    });
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    
    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur % 60);
    if(sec1<10) sec1 = `0${sec1}`;
    

    currentEnd.innerText = `${min1}:${sec1}`;
    
    let min2 = Math.floor(music_curr/60)
    let sec2 = Math.floor(music_curr % 60)
    if(sec2<10) sec2 = `0${sec2}`;
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr/music_dur)*100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value *music.duration /100
})

let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
let vol_dot = document.getElementsByClassName("vol_dot");

vol.addEventListener('change', ()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value>0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill'); 
    }
    if (vol.value>50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill'); 
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
})


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index--;
    if(index<1){
        index = Array.from(document.getElementsByClassName('songItem')).lenght;
    }
    music.src = `songs/${index}.mp3`
        albumArt.src = `albumarts/${index}.jpg`
        music.play();
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')
        

        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
            albumArt = poster;
        })
})
next.addEventListener('click', ()=>{
    index++;
    if(index > Array.from(document.getElementsByClassName('songItem')).lenght){
        index =1;
    }
    music.src = `songs/${index}.mp3`
        albumArt.src = `albumarts/${index}.jpg`
        music.play();
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')
        

        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
            albumArt = poster;
        })
})

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft +=330;
})

pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -=330;
})
let pop_artist_left = document.getElementById('pop_song_left');
let pop_artist_right = document.getElementById('pop_song_right');
let pop_artist = document.getElementsByClassName('pop_artist')[0];

pop_artist_right.addEventListener('click', ()=>{
    pop_artist.scrollLeft +=330;
})

pop_artist_left.addEventListener('click', ()=>{
    pop_artist.scrollLeft -=330;
})
