const defaultFeature = {
  headline: "しあわせ果実でつくる、今月の一杯。",
  lead: "果肉入りシロップを割るだけ。炭酸、ミルク、お茶、ノンアルで楽しめるレシピ集。",
  featuredRecipeId: "ichigo-squash"
};

const recipes = [
  {
    id: "ichigo-squash",
    name: "いちごスカッシュ",
    category: "炭酸",
    ratio: "1:2",
    tags: ["まずはこれ", "さっぱり", "炭酸", "初夏"],
    copy: "果肉感と炭酸で、いちばん伝わりやすい定番の一杯。",
    ingredients: ["いちごシロップ 60ml", "炭酸水 120ml", "氷 適量", "レモン ひとかけ"],
    steps: ["グラスに氷を入れる", "シロップを注ぐ", "炭酸水をゆっくり加える", "軽く混ぜてレモンを添える"]
  },
  {
    id: "ichigo-juice",
    name: "いちごジュース",
    category: "水割り",
    ratio: "1:2",
    tags: ["やさしい", "水割り", "子ども", "定番"],
    copy: "水で割るだけ。試飲にも出しやすい、やさしい甘さのシンプルレシピ。",
    ingredients: ["いちごシロップ 60ml", "冷水 120ml", "氷 適量"],
    steps: ["グラスにシロップを入れる", "冷水を加える", "氷を入れてよく混ぜる"]
  },
  {
    id: "ichigo-milk",
    name: "いちごミルク",
    category: "ミルク",
    ratio: "1:2",
    tags: ["甘い", "ミルク", "デザート", "朝"],
    copy: "牛乳、豆乳、ヨーグルトで。果肉入りだからデザート感がしっかり出ます。",
    ingredients: ["いちごシロップ 50ml", "牛乳または豆乳 120ml", "氷 適量"],
    steps: ["グラスにシロップを入れる", "牛乳を注ぐ", "よく混ぜる", "濃厚にしたい時はヨーグルトを少し足す"]
  },
  {
    id: "ichigo-ginger",
    name: "いちごジンジャー",
    category: "炭酸",
    ratio: "1:2",
    tags: ["ジンジャー", "すっきり", "大人っぽい", "夕方"],
    copy: "ジンジャーエールで割ると、甘さの奥に少し辛みが出て大人っぽい味に。",
    ingredients: ["いちごシロップ 50ml", "ジンジャーエール 120ml", "氷 適量"],
    steps: ["氷を入れたグラスにシロップを注ぐ", "ジンジャーエールを加える", "泡をつぶさないように軽く混ぜる"]
  },
  {
    id: "strawberry-orange",
    name: "ストロベリーオレンジ",
    category: "ジュース",
    ratio: "1:2",
    tags: ["フルーティー", "オレンジ", "朝", "華やか"],
    copy: "オレンジの酸味で、いちごの甘さが明るくなる一杯。",
    ingredients: ["いちごシロップ 45ml", "オレンジジュース 120ml", "氷 適量"],
    steps: ["グラスに氷を入れる", "シロップを入れる", "オレンジジュースを注いで混ぜる"]
  },
  {
    id: "berry-coke-splash",
    name: "ベリーコークスプラッシュ",
    category: "炭酸",
    ratio: "1:3",
    tags: ["コーラ", "濃いめ", "パーティー", "夜"],
    copy: "コーラの香りにベリーを足して、イベント感のあるノンアルカクテルに。",
    ingredients: ["いちごシロップ 40ml", "コーラ 140ml", "氷 適量", "ライム 少し"],
    steps: ["氷を多めに入れる", "シロップを注ぐ", "コーラを加える", "ライムを搾って軽く混ぜる"]
  },
  {
    id: "strawberry-tea",
    name: "ストロベリーティー",
    category: "お茶",
    ratio: "1:3",
    tags: ["お茶", "無糖紅茶", "ウーロン茶", "食後"],
    copy: "無糖紅茶やウーロン茶で割ると、甘さ控えめの食後ドリンクに。",
    ingredients: ["いちごシロップ 45ml", "無糖紅茶またはウーロン茶 140ml", "氷 適量"],
    steps: ["グラスに氷を入れる", "シロップを注ぐ", "冷たいお茶で割る", "しっかり混ぜる"]
  },
  {
    id: "strawberry-tonic",
    name: "ストロベリートニック",
    category: "炭酸",
    ratio: "1:2",
    tags: ["トニック", "ほろ苦い", "大人っぽい", "夜"],
    copy: "トニックウォーターのほろ苦さで、甘すぎないノンアルドリンクに。",
    ingredients: ["いちごシロップ 50ml", "トニックウォーター 120ml", "氷 適量"],
    steps: ["グラスに氷とシロップを入れる", "トニックウォーターを注ぐ", "下から一度だけ混ぜる"]
  },
  {
    id: "strawberry-beer",
    name: "ストロベリービア",
    category: "ノンアル",
    ratio: "1:4",
    tags: ["ノンアルビール", "食事", "夜", "意外性"],
    copy: "ノンアルビールに少し足すだけ。苦みと果実感で食事にも合わせやすい味。",
    ingredients: ["いちごシロップ 30ml", "ノンアルビール 150ml", "冷やしたグラス"],
    steps: ["冷やしたグラスにシロップを入れる", "ノンアルビールをゆっくり注ぐ", "泡が落ち着いたら軽く混ぜる"]
  },
  {
    id: "strawberry-tomato",
    name: "ストロベリートマト",
    category: "ジュース",
    ratio: "1:3",
    tags: ["トマト", "朝", "健康感", "個性派"],
    copy: "トマトジュースに果実の甘みを足す、朝向けの変化球レシピ。",
    ingredients: ["いちごシロップ 35ml", "トマトジュース 130ml", "レモン汁 少し", "氷 適量"],
    steps: ["グラスに氷を入れる", "シロップとトマトジュースを注ぐ", "レモン汁を足して混ぜる"]
  }
];

const tagFilters = ["すべて", "炭酸", "ミルク", "お茶", "ノンアル", "朝", "夜", "さっぱり", "甘い"];

const els = {
  heroTitle: document.querySelector("h1"),
  heroLead: document.querySelector(".lead"),
  featuredName: document.querySelector("#featuredName"),
  featuredCopy: document.querySelector("#featuredCopy"),
  featuredTags: document.querySelector("#featuredTags"),
  openFeatured: document.querySelector("#openFeatured"),
  editFeature: document.querySelector("#editFeature"),
  installApp: document.querySelector("#installApp"),
  searchInput: document.querySelector("#searchInput"),
  filterRow: document.querySelector("#filterRow"),
  recipeList: document.querySelector("#recipeList"),
  resultCount: document.querySelector("#resultCount"),
  recipeDialog: document.querySelector("#recipeDialog"),
  closeDialog: document.querySelector("#closeDialog"),
  dialogCategory: document.querySelector("#dialogCategory"),
  dialogTitle: document.querySelector("#dialogTitle"),
  dialogCopy: document.querySelector("#dialogCopy"),
  dialogIngredients: document.querySelector("#dialogIngredients"),
  dialogSteps: document.querySelector("#dialogSteps"),
  favoriteButton: document.querySelector("#favoriteButton"),
  editDialog: document.querySelector("#editDialog"),
  editHeadline: document.querySelector("#editHeadline"),
  editLead: document.querySelector("#editLead"),
  editFeaturedRecipe: document.querySelector("#editFeaturedRecipe"),
  saveFeature: document.querySelector("#saveFeature"),
  resetFeature: document.querySelector("#resetFeature")
};

let activeTag = "すべて";
let selectedRecipe = null;
let deferredInstallPrompt = null;

const getFeature = () => {
  const saved = localStorage.getItem("syrup-feature");
  return saved ? { ...defaultFeature, ...JSON.parse(saved) } : defaultFeature;
};

const getFavorites = () => JSON.parse(localStorage.getItem("syrup-favorites") || "[]");

const setFavorites = (ids) => localStorage.setItem("syrup-favorites", JSON.stringify(ids));

function renderFeature() {
  const feature = getFeature();
  const recipe = recipes.find((item) => item.id === feature.featuredRecipeId) || recipes[0];

  els.heroTitle.textContent = feature.headline;
  els.heroLead.textContent = feature.lead;
  els.featuredName.textContent = recipe.name;
  els.featuredCopy.textContent = recipe.copy;
  els.featuredTags.innerHTML = "";
  recipe.tags.slice(0, 4).forEach((tag) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = tag;
    els.featuredTags.append(chip);
  });
  els.openFeatured.onclick = () => openRecipe(recipe);
}

function renderFilters() {
  els.filterRow.innerHTML = "";
  tagFilters.forEach((tag) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-chip${tag === activeTag ? " active" : ""}`;
    button.textContent = tag;
    button.onclick = () => {
      activeTag = tag;
      renderFilters();
      renderRecipes();
    };
    els.filterRow.append(button);
  });
}

function recipeMatches(recipe, query) {
  const haystack = [
    recipe.name,
    recipe.category,
    recipe.copy,
    recipe.ratio,
    ...recipe.tags,
    ...recipe.ingredients
  ].join(" ");
  return haystack.toLowerCase().includes(query.toLowerCase());
}

function renderRecipes() {
  const query = els.searchInput.value.trim();
  const favorites = getFavorites();
  const filtered = recipes.filter((recipe) => {
    const tagOk = activeTag === "すべて" || recipe.tags.includes(activeTag) || recipe.category === activeTag;
    const queryOk = !query || recipeMatches(recipe, query);
    return tagOk && queryOk;
  });

  els.resultCount.textContent = `${filtered.length}件`;
  els.recipeList.innerHTML = "";

  filtered.forEach((recipe) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "recipe-card";
    card.innerHTML = `
      <div>
        <h3>${favorites.includes(recipe.id) ? "★ " : ""}${recipe.name}</h3>
        <p>${recipe.copy}</p>
      </div>
      <span class="badge">${recipe.ratio}</span>
    `;
    card.onclick = () => openRecipe(recipe);
    els.recipeList.append(card);
  });
}

function openRecipe(recipe) {
  selectedRecipe = recipe;
  const favorites = getFavorites();
  els.dialogCategory.textContent = `${recipe.category} / ${recipe.ratio}`;
  els.dialogTitle.textContent = recipe.name;
  els.dialogCopy.textContent = recipe.copy;
  els.dialogIngredients.innerHTML = recipe.ingredients.map((item) => `<li>${item}</li>`).join("");
  els.dialogSteps.innerHTML = recipe.steps.map((item) => `<li>${item}</li>`).join("");
  els.favoriteButton.textContent = favorites.includes(recipe.id) ? "お気に入りから外す" : "お気に入りに追加";
  els.recipeDialog.showModal();
}

function renderEditForm() {
  const feature = getFeature();
  els.editHeadline.value = feature.headline;
  els.editLead.value = feature.lead;
  els.editFeaturedRecipe.innerHTML = recipes
    .map((recipe) => `<option value="${recipe.id}">${recipe.name}</option>`)
    .join("");
  els.editFeaturedRecipe.value = feature.featuredRecipeId;
}

els.searchInput.addEventListener("input", renderRecipes);

els.closeDialog.addEventListener("click", () => els.recipeDialog.close());

els.favoriteButton.addEventListener("click", () => {
  if (!selectedRecipe) return;
  const favorites = getFavorites();
  const next = favorites.includes(selectedRecipe.id)
    ? favorites.filter((id) => id !== selectedRecipe.id)
    : [...favorites, selectedRecipe.id];
  setFavorites(next);
  openRecipe(selectedRecipe);
  renderRecipes();
});

els.editFeature.addEventListener("click", () => {
  renderEditForm();
  els.editDialog.showModal();
});

els.saveFeature.addEventListener("click", () => {
  localStorage.setItem(
    "syrup-feature",
    JSON.stringify({
      headline: els.editHeadline.value.trim() || defaultFeature.headline,
      lead: els.editLead.value.trim() || defaultFeature.lead,
      featuredRecipeId: els.editFeaturedRecipe.value
    })
  );
  renderFeature();
});

els.resetFeature.addEventListener("click", () => {
  localStorage.removeItem("syrup-feature");
  renderEditForm();
  renderFeature();
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  els.installApp.hidden = false;
});

els.installApp.addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  els.installApp.hidden = true;
});

async function clearOfflineCache() {
  if ("serviceWorker" in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations();
    await Promise.all(registrations.map((registration) => registration.unregister()));
  }

  if ("caches" in window) {
    const keys = await caches.keys();
    await Promise.all(keys.map((key) => caches.delete(key)));
  }
}

window.addEventListener("load", () => {
  clearOfflineCache().catch(() => {});
});

renderFeature();
renderFilters();
renderRecipes();
