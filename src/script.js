const navbarItems = [
  {
    title: null,
    items: {
      Home: "home-4-fill",
      Shorts: "svelte-line",
    }
  },

  {
    title: "Subscriptions",
    items: {
      camman18: {
        type: "image",
        src: "https://yt3.ggpht.com/uCvGBEz07x5ShLo8goWv2T_e9nUu0CBFIpoK95RjKkYw5tx0K2BB6ixKKnEbuDsZfEvfq6PJb5w=s88-c-k-c0x00ffffff-no-rj"
      }
    }
  },

  {
    title: "You",
    items: {
      History: "history-line",
      Playlists: "play-list-2-line",
      "Watch later": "time-line",
      "Liked videos": "thumb-up-line",
      "Your videos": "movie-line",
      Downloads: "download-line",
    }
  },

  {
    title: "Explore",
    items: {
      Shopping: "shopping-bag-line",
      Music: "music-line",
      Movies: "film-line",
    }
  }
];


// ! Side NAV BAR ! //

const sidebar = document.querySelector("nav.sidebar");

navbarItems.forEach((section, index) => {
  const sectionDiv = document.createElement("div");
  sectionDiv.className = "p-3";

  // Section title
  if (section.title) {
    const headerBtn = document.createElement("button");
    headerBtn.className =
      "flex items-center gap-2 px-4 py-1.5 rounded-xl hover:bg-gray-300 w-full cursor-pointer";

    headerBtn.innerHTML = `
      <span class="text-base font-medium">${section.title}</span>
      <i class="ri-arrow-right-s-line text-lg"></i>
    `;

    sectionDiv.appendChild(headerBtn);
  }

  // Section items
  Object.entries(section.items).forEach(([label, value]) => {
    const btn = document.createElement("button");
    btn.className =
      "flex items-center gap-6 px-4 py-1.5 rounded-xl hover:bg-gray-300 w-full cursor-pointer";

    // Icon-based item
    if (typeof value === "string") {
      btn.innerHTML = `
        <i class="ri-${value} text-2xl"></i>
        <span class="text-sm">${label}</span>
      `;
    }

    // Image-based item (subscriptions)
    if (typeof value === "object" && value.type === "image") {
      btn.innerHTML = `
        <img src="${value.src}" class="h-6 rounded-full" />
        <span class="text-sm">${label}</span>
      `;
    }

    sectionDiv.appendChild(btn);
  });

  sidebar.appendChild(sectionDiv);

  // Divider (except last section)
  if (index !== navbarItems.length - 1) {
    const hr = document.createElement("hr");
    hr.className = "text-gray-300";
    sidebar.appendChild(hr);
  }
});



// ! Tags ! //

const tags = ["All", "Music", "Gaming", "Mixes", "Gaming Computers", "Music Arrangements", "Orchestra", "Indian Classical Music", "C418", "Music notes", "Minecraft Java Bedrock Edition"];
const tag_holder = document.querySelector(".tags");
let currentTag = tags[0];

tags.forEach((tag) => {
  const new_tag = document.createElement("button");
  new_tag.textContent = tag;
  new_tag.className = "tag bg-gray-300 text-sm whitespace-nowrap text-black data-[active=true]:bg-black data-[active=true]:text-white font-medium cursor-pointer px-3 py-1 rounded-lg";
  tag_holder.appendChild(new_tag);

  new_tag.addEventListener(("click"), () => {
    document.querySelectorAll(".tags .tag").forEach(btn => btn.dataset.active = "false")
    new_tag.dataset.active = "true";
    currentTag = new_tag.textContent;
  })
})

document.querySelectorAll(".tags .tag")[0].dataset.active = "true";



// ! Feed Generation ! //

const video = {
  type : "video",
  title : "Building the most INSANE Gaming PC 2026! [ft. ASUS Matrix]",
  channel : "GeekaWhat",
  verified : true,
  views : "13k",
  time : "18 hours",
  duration: "18:25",
  logo : "https://yt3.ggpht.com/Ek9RVVbKa2QCL7ayzGf9_rhCb73dvtpopaZymMZAdCq3qtuHuzucAgFwziThlUUhowgKHLyX7Q=s68-c-k-c0x00ffffff-no-rj",
  thumbnail: "https://i.ytimg.com/vi/KiBgWRG_SEk/hq720.jpg"
}

const playlist = {
  type : "playlist",
  title : "Building the most INSANE Gaming PC 2026! [ft. ASUS Matrix]",
  channel : "GeekaWhat",
  verified : true,
  thumbnail: "https://i.ytimg.com/vi/KiBgWRG_SEk/hq720.jpg"
}

function returnBodyStringFromObject(obj) {
  let result = "";
  if (obj.type == "video") {
    result = `
      <div class="video cursor-pointer py-3 rounded-2xl">
        <div class="thumbnail relative mb-2">
            <img class="mb-2 rounded-xl block w-full" src="${obj.thumbnail}" alt="">
            <p class="duration absolute bottom-2 right-2 text-sm font-bold text-white bg-black opacity-60 py-0.5 px-1 rounded-sm">${obj.duration}</p>
        </div>
        <div class="vid-info flex gap-3">
            <img class="w-9 h-9 rounded-full" src="${obj.logo}" alt="">
            <div class="text flex-1">
                <h4 class="font-medium">${obj.title}</h4>
                <p class="text-gray-500 hover:text-gray-700 inline-block text-sm">${obj.channel} ${obj.verified ? '<i class="ri-checkbox-circle-fill"></i>' : ""}</p>
                <p class="text-gray-500 text-sm">${obj.views} views &bull; ${obj.time} ago</p>
            </div>
            <a href="#"><i class="ri-more-2-line text-xl font-bold"></i></a>
        </div>
      </div>
    `
  } else if (obj.type == "playlist") {
    result = `
      <div class="playlist cursor-pointer py-3  rounded-2xl">
        <div class="thumbnail relative mb-2">
            <img class="mb-2 rounded-xl block w-full border-t-3 border-white" src="${obj.thumbnail}" alt="">
            <p class="duration absolute bottom-2 right-2 text-sm font-bold text-white bg-black opacity-60 py-0.5 px-1 rounded-sm"><i class="ri-bar-chart-fill"></i> Mix</p>
            <div class="bg-orange-300 w-11/12 absolute -z-1 left-1/2 -translate-x-1/2 -top-1 rounded-lg h-10"></div>
        </div>
        <div class="vid-info flex gap-3">
            <div class="text flex-1">
                <h4 class="font-medium">${obj.title}</h4>
                <p class="text-gray-500 text-sm">${obj.channel}</p>
            </div>
            <a href="#"><i class="ri-more-2-line text-xl font-bold"></i></a>
        </div>
      </div>
    `
  }


  return result;
}

const feed_container = document.querySelector(".feed");
feed_container.innerHTML += returnBodyStringFromObject(playlist);