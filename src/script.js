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
