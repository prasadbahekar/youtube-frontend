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

const feed = [
  {
    type : "video",
    title : "Building the most INSANE Gaming PC 2026! [ft. ASUS Matrix]",
    channel : "GeekaWhat",
    verified : true,
    views : "13k",
    time : "18 hours",
    duration: "18:25",
    logo : "https://yt3.ggpht.com/Ek9RVVbKa2QCL7ayzGf9_rhCb73dvtpopaZymMZAdCq3qtuHuzucAgFwziThlUUhowgKHLyX7Q=s68-c-k-c0x00ffffff-no-rj",
    thumbnail: "https://i.ytimg.com/vi/KiBgWRG_SEk/hq720.jpg"
  },
  {
    type : "playlist",
    title : "Mix - Hindi Film Music",
    channel : "Shashwat Sachdev, Madhubanti Bagchi",
    verified : true,
    thumbnail: "https://i.ytimg.com/vi/8qCVXCFREkQ/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYciBUKD0wDw==&rs=AOn4CLAoAYsy6kS0jE-KtTFymkIcillCzQ"
  },
  {
    type : "video",
    title : "I Created Minecraft's Greatest Civilization",
    channel : "Wemmbu",
    verified : true,
    views : "9.5M",
    time : "1 year",
    duration: "3:31:10",
    logo : "https://yt3.ggpht.com/Ek9RVVbKa2QCL7ayzGf9_rhCb73dvtpopaZymMZAdCq3qtuHuzucAgFwziThlUUhowgKHLyX7Q=s68-c-k-c0x00ffffff-no-rj",
    thumbnail: "https://i.ytimg.com/vi/wbTIN42an0o/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCLMUBOPDBnUZdF80toxnDey29zaQhttps://yt3.ggpht.com/HOwC6zZhVGf3ratIY9C4GHcNaRH88EfLlli5fDIp7vMF_6FFOoKrPR0OYtGohwIqdEjo4wAW=s68-c-k-c0x00ffffff-no-rj"
  },
  {
    type : "video",
    title : "Building the most INSANE Gaming PC 2026! [ft. ASUS Matrix]",
    channel : "GeekaWhat",
    verified : true,
    views : "13k",
    time : "18 hours",
    duration: "18:25",
    logo : "https://yt3.ggpht.com/Ek9RVVbKa2QCL7ayzGf9_rhCb73dvtpopaZymMZAdCq3qtuHuzucAgFwziThlUUhowgKHLyX7Q=s68-c-k-c0x00ffffff-no-rj",
    thumbnail: "https://i.ytimg.com/vi/KiBgWRG_SEk/hq720.jpg"
  },
  {
    type : "playlist",
    title : "Mix - Pranking with Fake Sourav Joshi",
    channel : "GeekaWhat",
    verified : true,
    thumbnail: "https://i.ytimg.com/vi/oXgMlZyJUvU/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAQqS4UlcC5R51JW7CxCl0XPVG13w"
  },
  {
    type : "video",
    title : "I Created Minecraft's Greatest Civilization",
    channel : "Wemmbu",
    verified : true,
    views : "9.5M",
    time : "1 year",
    duration: "3:31:10",
    logo : "https://yt3.ggpht.com/Ek9RVVbKa2QCL7ayzGf9_rhCb73dvtpopaZymMZAdCq3qtuHuzucAgFwziThlUUhowgKHLyX7Q=s68-c-k-c0x00ffffff-no-rj",
    thumbnail: "https://i.ytimg.com/vi/wbTIN42an0o/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCLMUBOPDBnUZdF80toxnDey29zaQhttps://yt3.ggpht.com/HOwC6zZhVGf3ratIY9C4GHcNaRH88EfLlli5fDIp7vMF_6FFOoKrPR0OYtGohwIqdEjo4wAW=s68-c-k-c0x00ffffff-no-rj"
  },
];

const shorts = [
  {
    type : "short",
    title : "The real rarest Biome in Minecraft",
    views : "2.1M",
    thumbnail: "https://i.ytimg.com/vi/12UgiwOo28k/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLDTKe1StrHTdXhhgIbBxEbfrZHYaw"
  },
  {
    type : "short",
    title : "How often do PC Gamers ACTUALLY ...",
    views : "1.5M",
    thumbnail: "https://i.ytimg.com/vi/oHt2GZZ21XQ/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLBMPtLDpfNX_qU41g5i6dyNNxrq_g"
  },
  {
    type : "short",
    title : "Did Keycaps change Anything?",
    views : "1.5M",
    thumbnail: "https://i.ytimg.com/vi/_8x6hcEliYU/hq720.jpg?sqp=-oaymwEoCJUDENAFSFryq4qpAxoIARUAAIhC0AEB2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLCjhgfg_XmRyEFJbQCgHLxmxQpsgQ"
  },
  {
    type : "short",
    title : "How i-frames work in Minecraft",
    views : "1.4M",
    thumbnail: "https://i.ytimg.com/vi/FdleuWmKlNc/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLCY2y7X-bgSyqAMFBEn79tv7Ocruw"
  },
  {
    type : "short",
    title : "The TRUTH about Fifine AM8 XLR",
    views : "209k",
    thumbnail: "https://i.ytimg.com/vi/1CJX5TH1sFk/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLAkF3Xpt2KZiv8JonqlHbPmwYB_ww"
  }
]

function returnBodyStringFromObject(obj) {
  let result = "";
  if (obj.type == "video") {
    result = `
      <div class="video cursor-pointer py-3 rounded-2xl">
        <div class="thumbnail relative mb-4">
            <img class="mb-2 rounded-xl block w-full" src="${obj.thumbnail}" alt="">
            <p class="duration absolute bottom-2 right-2 text-xs font-bold text-white bg-black opacity-60 py-0.5 px-1 rounded-sm">${obj.duration}</p>
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
            <p class="duration absolute bottom-2 right-2 text-xs font-bold text-white bg-black opacity-60 py-0.5 px-1 rounded-sm"><i class="font-normal ri-bar-chart-fill"></i> Mix</p>
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
  } else if (obj.type == "short") {
    result = `
      <div class="short cursor-pointer py-3 rounded-xl">
          <div class="thumbnail relative mb-2 aspect-8/12 overflow-hidden">
              <img class="mb-2 rounded-lg block w-full h-full object-cover object-[50%_50%]" src="${obj.thumbnail}" alt="">
          </div>
          <div class="vid-info flex gap-3">
              <div class="text flex-1">
                  <h4 class="font-medium">${obj.title}</h4>
                  <p class="text-gray-500 text-sm">${obj.views} views</p>
              </div>
              <a href="#"><i class="ri-more-2-line text-xl font-bold"></i></a>
          </div>
      </div>
    `
  }


  return result;
}

const feed_container = document.querySelector(".feed");

let index = 1;
feed.forEach(
  (content) => {
    if (index == 4) {
      const shorts_container = document.createElement("div");
      shorts_container.className = "shorts grid col-span-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4";
      const shorts_title = document.createElement("h1");
      shorts_title.innerHTML = '<i class="ri-youtube-fill text-red-500 text-2xl"></i> Shorts';
      shorts_title.className = "col-span-full text-xl font-bold my-2";
      shorts_container.appendChild(shorts_title);
      for (let i = 0; i < 5; i++) {
        const short = shorts[i];
        console.log(short.type);
        shorts_container.innerHTML += returnBodyStringFromObject(short);
      }
      feed_container.appendChild(shorts_container);
    }

    feed_container.innerHTML += returnBodyStringFromObject(content);
    index+=1;
  }
)