const defaultFeature = {
  headline: "シロップでつくる、今月の一杯。",
  lead: "10種類のシロップから、朝食、ランチ、夜のノンアルまで使い方を探せるレシピ集。",
  featuredRecipeId: "ichigo-squash"
};

const products = [
  {
    id: "ichigo",
    name: "しあわせ果実 七福神プレミアムシロップ いちご",
    displayName: "いちご",
    image: "./assets/products/ichigo.png",
    ratio: "1:2",
    family: "premium",
    taste: ["甘酸っぱい", "果肉感", "華やか"],
    months: ["5月", "6月", "春", "初夏"],
    scenes: ["居酒屋", "レストラン", "イタリアン", "バーベキュー", "野外", "朝食", "カフェ", "ランチ", "ホテル", "ノンアル", "デザート"],
    tags: ["居酒屋", "レストラン", "イタリアン", "バーベキュー", "野外", "朝", "夜", "さっぱり", "甘い", "炭酸", "ミルク", "紅茶", "飲むヨーグルト", "ノンアル", "トニックウォーター"],
    note: "開封後要冷蔵、2〜3ヶ月目安",
    color: "#e64155"
  },
  {
    id: "yuzu",
    name: "しあわせ果実 七福神プレミアムシロップ ゆず",
    displayName: "ゆず",
    image: "./assets/products/yuzu.png",
    ratio: "1:2",
    family: "premium",
    taste: ["甘酸っぱい", "果肉感", "華やか", "ゆずピール", "やすらぎ"],
    months: ["秋", "冬"],
    scenes: ["居酒屋", "レストラン", "イタリアン", "バーベキュー", "野外", "朝食", "カフェ", "ランチ", "ホテル", "ノンアル", "デザート", "寒い季節", "お湯割り", "ホット"],
    tags: ["居酒屋", "レストラン", "イタリアン", "バーベキュー", "野外", "朝", "夜", "さっぱり", "炭酸", "紅茶", "飲むヨーグルト", "ノンアル", "トニックウォーター", "寒い季節", "お湯割り", "ホット"],
    note: "開封後要冷蔵、2〜3ヶ月目安",
    color: "#e6a916"
  },
  {
    id: "mango",
    name: "しあわせ果実 七福神プレミアムシロップ まんごー",
    displayName: "まんごー",
    image: "./assets/products/mango.png",
    ratio: "1:2",
    family: "premium",
    taste: ["まろやかな甘さ", "果肉感", "濃厚", "トロピカル"],
    months: ["初夏", "夏"],
    scenes: ["居酒屋", "レストラン", "イタリアン", "バーベキュー", "野外", "朝食", "カフェ", "ランチ", "ホテル", "ノンアル", "デザート"],
    tags: ["居酒屋", "レストラン", "イタリアン", "バーベキュー", "野外", "朝", "夜", "さっぱり", "甘い", "炭酸", "ミルク", "紅茶", "飲むヨーグルト", "ノンアル", "トニックウォーター"],
    note: "開封後要冷蔵、2〜3ヶ月目安",
    color: "#e58a1f"
  },
  {
    id: "budou",
    name: "しあわせ果実 七福神プレミアムシロップ ぶどう",
    displayName: "ぶどう",
    image: "./assets/products/budou.png",
    ratio: "1:2",
    family: "premium",
    taste: ["甘酸っぱい", "果肉感", "華やか"],
    months: ["5月", "6月", "春", "初夏"],
    scenes: ["居酒屋", "レストラン", "イタリアン", "バーベキュー", "野外", "朝食", "カフェ", "ランチ", "ホテル", "ノンアル", "デザート"],
    tags: ["居酒屋", "レストラン", "イタリアン", "バーベキュー", "野外", "朝", "夜", "爽快", "甘い", "炭酸", "紅茶", "飲むヨーグルト", "ノンアル", "トニックウォーター"],
    note: "開封後要冷蔵、2〜3ヶ月目安",
    color: "#8d2d67"
  },
  {
    id: "momo",
    name: "しあわせ果実 七福神プレミアムシロップ もも",
    displayName: "もも",
    image: "./assets/products/momo.png",
    ratio: "1:2",
    family: "premium",
    taste: ["やさしい甘さ", "果肉感", "まろやか"],
    months: ["通年", "春", "初夏"],
    scenes: ["居酒屋", "レストラン", "イタリアン", "バーベキュー", "野外", "朝食", "カフェ", "ランチ", "ホテル", "ノンアル", "デザート"],
    tags: ["居酒屋", "レストラン", "イタリアン", "バーベキュー", "野外", "朝", "夜", "さっぱり", "甘い", "炭酸", "ミルク", "紅茶", "ウーロン茶", "飲むヨーグルト", "ノンアル", "トニックウォーター"],
    note: "開封後要冷蔵、2〜3ヶ月目安",
    color: "#eda7a3"
  },
  {
    id: "pine",
    name: "しあわせ果実 七福神プレミアムシロップ ぱいん",
    displayName: "ぱいん",
    image: "./assets/products/pine.png",
    ratio: "1:2",
    family: "premium",
    taste: ["甘酸っぱい", "果肉感", "華やか", "トロピカル", "果肉ザクザク"],
    months: ["初夏", "夏"],
    scenes: ["居酒屋", "レストラン", "イタリアン", "バーベキュー", "野外", "朝食", "カフェ", "ランチ", "ホテル", "ノンアル", "デザート"],
    tags: ["居酒屋", "レストラン", "イタリアン", "バーベキュー", "野外", "朝", "夜", "さっぱり", "甘い", "炭酸", "紅茶", "飲むヨーグルト", "ノンアル", "トニックウォーター"],
    note: "開封後要冷蔵、2〜3ヶ月目安",
    color: "#d99520"
  },
  {
    id: "mikan",
    name: "しあわせ果実 七福神プレミアムシロップ みかん",
    displayName: "みかん",
    image: "./assets/products/mikan.png",
    ratio: "1:2",
    family: "premium",
    taste: ["甘酸っぱい", "果肉感", "明るい柑橘感"],
    months: ["5月", "6月", "春", "初夏"],
    scenes: ["居酒屋", "レストラン", "イタリアン", "バーベキュー", "野外", "朝食", "カフェ", "ランチ", "ホテル", "ノンアル", "デザート"],
    tags: ["居酒屋", "レストラン", "イタリアン", "バーベキュー", "野外", "朝", "夜", "さっぱり", "甘い", "炭酸", "紅茶", "飲むヨーグルト", "ノンアル", "寒い季節", "お湯割り", "ホット", "トニックウォーター"],
    note: "開封後要冷蔵、2〜3ヶ月目安",
    color: "#ef9b18"
  },
  {
    id: "lemon",
    name: "しあわせ果実 七福神プレミアムシロップ れもん",
    displayName: "れもん",
    image: "./assets/products/lemon.png",
    ratio: "1:2",
    family: "premium",
    taste: ["甘酸っぱい", "果肉感", "ほんのりビター"],
    months: ["通年"],
    scenes: ["居酒屋", "レストラン", "イタリアン", "バーベキュー", "野外", "朝食", "カフェ", "ランチ", "ホテル", "ノンアル", "デザート"],
    tags: ["居酒屋", "レストラン", "イタリアン", "バーベキュー", "野外", "朝", "夜", "さっぱり", "甘い", "炭酸", "はちみつ", "紅茶", "飲むヨーグルト", "ノンアル", "寒い季節", "お湯割り", "ホット", "トニックウォーター"],
    note: "開封後要冷蔵、2〜3ヶ月目安",
    color: "#e9c739"
  },
  {
    id: "ume",
    name: "しあわせ果実 七福神プレミアムシロップ うめ",
    displayName: "うめ",
    image: "./assets/products/ume.png",
    ratio: "1:2",
    family: "premium",
    taste: ["甘酸っぱい", "果肉感", "爽快"],
    months: ["通年", "秋", "冬", "春", "初夏"],
    scenes: ["居酒屋", "レストラン", "イタリアン", "バーベキュー", "野外", "朝食", "カフェ", "ランチ", "ホテル", "ノンアル", "デザート"],
    tags: ["居酒屋", "レストラン", "イタリアン", "バーベキュー", "野外", "朝", "夜", "さっぱり", "甘い", "炭酸", "ミルク", "紅茶", "飲むヨーグルト", "ノンアル", "寒い季節", "お湯割り", "ホット", "トニックウォーター"],
    note: "開封後要冷蔵、2〜3ヶ月目安",
    color: "#b88a2c"
  },
  {
    id: "non-lemon",
    name: "しあわせ果実 のんある鬼レモンサワーの素",
    displayName: "のんある鬼レモン",
    image: "./assets/products/non-lemon.png",
    ratio: "1:4",
    family: "dry",
    taste: ["酸っぱい", "ドライ", "果肉感", "生搾りレモン"],
    months: ["通年", "夏"],
    scenes: ["居酒屋", "レストラン", "イタリアン", "バーベキュー", "野外", "ゴルフ場", "朝食", "ランチ", "カフェ", "ホテル", "ノンアル", "デザート"],
    tags: ["居酒屋", "レストラン", "イタリアン", "バーベキュー", "野外", "ゴルフ場", "朝", "夜", "ドライ", "酸味", "苦味", "炭酸", "ノンアル", "トニックウォーター", "紅茶"],
    note: "開封後要冷蔵、2〜3ヶ月目安",
    color: "#2b8a94"
  }
];

const recipeTemplates = [
  {
    id: "squash",
    suffix: "スカッシュ",
    category: "炭酸",
    mixer: "炭酸水",
    tags: ["炭酸", "さっぱり", "ノンアル", "昼", "夜"],
    copy: (product) => `${product.displayName}の果肉感を、炭酸で軽やかに見せる定番の一杯。`,
    ingredients: (product) => [`${product.displayName}  ${product.ratio === "1:4" ? "30ml" : "60ml"}`, `${product.ratio === "1:4" ? "炭酸水 120ml" : "炭酸水 120ml"}`, "氷 適量"],
    steps: ["グラスに氷を入れる", "シロップを注ぐ", "炭酸水をゆっくり加える", "泡をつぶさないように軽く混ぜる"]
  },
  {
    id: "milk",
    suffix: "ミルク",
    category: "ミルク",
    mixer: "牛乳",
    tags: ["ミルク", "甘い", "朝", "ホテル", "デザート"],
    requireTag: "ミルク",
    copy: (product) => `${product.displayName}の甘さをミルクでまろやかに。朝食やデザート提案に使いやすい一杯。`,
    ingredients: (product) => [`${product.displayName} 50ml`, "牛乳または豆乳 120ml", "氷 適量"],
    steps: ["グラスにシロップを入れる", "牛乳を注ぐ", "よく混ぜる", "濃厚にしたい時はヨーグルトを少し足す"]
  },
  {
    id: "tea",
    suffix: "ティー",
    category: "お茶",
    mixer: "紅茶",
    tags: ["紅茶", "お茶", "朝", "ランチ", "食後"],
    requireAnyTag: ["紅茶", "ウーロン茶"],
    copy: (product) => `無糖紅茶やお茶で割ると、${product.displayName}の香りが引き立つ食後ドリンクに。`,
    ingredients: (product) => [`${product.displayName} 45ml`, "無糖紅茶またはウーロン茶 140ml", "氷 適量"],
    steps: ["グラスに氷を入れる", "シロップを注ぐ", "冷たいお茶で割る", "しっかり混ぜる"]
  },
  {
    id: "yogurt",
    suffix: "ヨーグルト",
    category: "ヨーグルト",
    mixer: "飲むヨーグルト",
    tags: ["飲むヨーグルト", "朝", "ホテル", "デザート"],
    requireTag: "飲むヨーグルト",
    copy: (product) => `飲むヨーグルトに${product.displayName}を足して、朝食ビュッフェにも出しやすい果実ドリンクに。`,
    ingredients: (product) => [`${product.displayName} 45ml`, "飲むヨーグルト 130ml", "氷 適量"],
    steps: ["グラスにシロップを入れる", "飲むヨーグルトを注ぐ", "よく混ぜる", "果肉が見えるように仕上げる"]
  },
  {
    id: "tonic",
    suffix: "トニック",
    category: "炭酸",
    mixer: "トニックウォーター",
    tags: ["トニックウォーター", "夜", "ノンアル", "ほろ苦い"],
    requireTag: "トニックウォーター",
    copy: (product) => `トニックウォーターのほろ苦さで、${product.displayName}を甘すぎないノンアルに。`,
    ingredients: (product) => [`${product.displayName} 50ml`, "トニックウォーター 120ml", "氷 適量"],
    steps: ["グラスに氷とシロップを入れる", "トニックウォーターを注ぐ", "下から一度だけ混ぜる"]
  },
  {
    id: "hot",
    suffix: "ホット",
    category: "ホット",
    mixer: "お湯",
    tags: ["ホット", "お湯割り", "寒い季節", "夜"],
    requireAnyTag: ["ホット", "お湯割り"],
    copy: (product) => `寒い季節に、${product.displayName}の果肉感をお湯割りでやさしく楽しむ一杯。`,
    ingredients: (product) => [`${product.displayName} 50ml`, "お湯 130ml", "はちみつ 少し"],
    steps: ["耐熱カップにシロップを入れる", "お湯を注ぐ", "好みではちみつを足す", "よく混ぜて香りを立たせる"]
  }
];

const customRecipes = [
  {
    productId: "non-lemon",
    id: "sour",
    name: "のんある鬼レモンサワー",
    category: "炭酸",
    ratio: "1:4",
    tags: ["ドライ", "酸味", "苦味", "炭酸", "居酒屋", "夜", "ノンアル"],
    copy: "甘くないノンアル提案の主役。居酒屋や食事シーンに出しやすい一杯。",
    ingredients: ["のんある鬼レモン 30ml", "炭酸水 120ml", "氷 適量"],
    steps: ["グラスに氷を入れる", "のんある鬼レモンを注ぐ", "炭酸水を加える", "軽く混ぜる"]
  }
];

function shouldUseTemplate(product, template) {
  if (template.requireTag) return product.tags.includes(template.requireTag);
  if (template.requireAnyTag) return template.requireAnyTag.some((tag) => product.tags.includes(tag));
  return true;
}

function makeRecipe(product, template) {
  return {
    id: `${product.id}-${template.id}`,
    productId: product.id,
    product,
    name: `${product.displayName}${template.suffix}`,
    category: template.category,
    ratio: product.ratio,
    tags: [...new Set([...template.tags, ...product.scenes.slice(0, 4), ...product.taste.slice(0, 2)])],
    copy: template.copy(product),
    ingredients: template.ingredients(product),
    steps: template.steps
  };
}

const recipes = [
  ...products.flatMap((product) => recipeTemplates.filter((template) => shouldUseTemplate(product, template)).map((template) => makeRecipe(product, template))),
  ...customRecipes.map((recipe) => {
    const product = products.find((item) => item.id === recipe.productId);
    return { ...recipe, product };
  })
];

const tagFilters = ["すべて", "朝", "夜", "ホテル", "居酒屋", "炭酸", "ミルク", "紅茶", "飲むヨーグルト", "トニックウォーター", "ホット", "ドライ"];

const els = {
  heroTitle: document.querySelector("h1"),
  heroLead: document.querySelector(".lead"),
  heroProductImage: document.querySelector("#heroProductImage"),
  heroProductName: document.querySelector("#heroProductName"),
  heroRatio: document.querySelector("#heroRatio"),
  featuredName: document.querySelector("#featuredName"),
  featuredCopy: document.querySelector("#featuredCopy"),
  featuredTags: document.querySelector("#featuredTags"),
  openFeatured: document.querySelector("#openFeatured"),
  editFeature: document.querySelector("#editFeature"),
  installApp: document.querySelector("#installApp"),
  searchInput: document.querySelector("#searchInput"),
  productRow: document.querySelector("#productRow"),
  filterRow: document.querySelector("#filterRow"),
  recipeList: document.querySelector("#recipeList"),
  resultCount: document.querySelector("#resultCount"),
  recipeDialog: document.querySelector("#recipeDialog"),
  closeDialog: document.querySelector("#closeDialog"),
  dialogProductImage: document.querySelector("#dialogProductImage"),
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
let activeProduct = "all";
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
  els.heroProductImage.src = recipe.product.image;
  els.heroProductImage.alt = recipe.product.name;
  els.heroProductName.textContent = recipe.product.displayName;
  els.heroRatio.textContent = recipe.ratio;
  document.documentElement.style.setProperty("--berry", recipe.product.color);
  els.featuredName.textContent = recipe.name;
  els.featuredCopy.textContent = recipe.copy;
  els.featuredTags.innerHTML = "";
  recipe.tags.slice(0, 5).forEach((tag) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = tag;
    els.featuredTags.append(chip);
  });
  els.openFeatured.onclick = () => openRecipe(recipe);
}

function renderProducts() {
  const options = [{ id: "all", displayName: "すべて", image: null }, ...products];
  els.productRow.innerHTML = "";
  options.forEach((product) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `product-chip${product.id === activeProduct ? " active" : ""}`;
    button.innerHTML = product.image
      ? `<img src="${product.image}" alt="" /><span>${product.displayName}</span>`
      : `<span>${product.displayName}</span>`;
    button.onclick = () => {
      activeProduct = product.id;
      renderProducts();
      renderRecipes();
    };
    els.productRow.append(button);
  });
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
    recipe.product.name,
    recipe.product.displayName,
    recipe.product.note,
    ...recipe.product.taste,
    ...recipe.product.months,
    ...recipe.product.scenes,
    ...recipe.product.tags,
    ...recipe.tags,
    ...recipe.ingredients
  ].join(" ");
  return haystack.toLowerCase().includes(query.toLowerCase());
}

function renderRecipes() {
  const query = els.searchInput.value.trim();
  const favorites = getFavorites();
  const filtered = recipes.filter((recipe) => {
    const productOk = activeProduct === "all" || recipe.productId === activeProduct;
    const tagOk =
      activeTag === "すべて" ||
      recipe.tags.includes(activeTag) ||
      recipe.product.tags.includes(activeTag) ||
      recipe.product.scenes.includes(activeTag) ||
      recipe.category === activeTag;
    const queryOk = !query || recipeMatches(recipe, query);
    return productOk && tagOk && queryOk;
  });

  els.resultCount.textContent = `${filtered.length}件`;
  els.recipeList.innerHTML = "";

  filtered.forEach((recipe) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "recipe-card";
    card.innerHTML = `
      <img src="${recipe.product.image}" alt="${recipe.product.name}" />
      <div>
        <span class="recipe-product">${recipe.product.displayName}</span>
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
  els.dialogProductImage.src = recipe.product.image;
  els.dialogProductImage.alt = recipe.product.name;
  els.dialogCategory.textContent = `${recipe.product.displayName} / ${recipe.category} / ${recipe.ratio}`;
  els.dialogTitle.textContent = recipe.name;
  els.dialogCopy.textContent = `${recipe.copy} ${recipe.product.note}`;
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
    .map((recipe) => `<option value="${recipe.id}">${recipe.product.displayName} - ${recipe.name}</option>`)
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
renderProducts();
renderFilters();
renderRecipes();
