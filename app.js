// 全域查找表
const itemMasterList = new Map();

// 防止無限迴圈的旗標
let isUpdatingProgrammatically = false;

// 獲取所有 HTML 元素
const searchBox = document.getElementById('searchBox');
const queryTypeSelect = document.getElementById('queryTypeSelect');
const shopsSection = document.getElementById('shopsSection');
const tasksSection = document.getElementById('tasksSection');
const lootSection = document.getElementById('lootSection');

const shopSelect = document.getElementById('shopSelect');
const shopItemSelect = document.getElementById('shopItemSelect');
const taskSelect = document.getElementById('taskSelect');
const taskItemSelect = document.getElementById('taskItemSelect');
const lootItemSelect = document.getElementById('lootItemSelect');
const detailsContainer = document.getElementById('detailsContainer');

// [輔助] 建立敘述區塊的 HTML
function createDescriptionHtml(item, highlightTerm = "") {
    if (!item) return '';
    let html = '';
    
    const nameZh = highlight(item.name_zh || '', highlightTerm);
    const nameEn = highlight(item.name_en || '', highlightTerm);
    const descZh = highlight(item.desc_zh || '', highlightTerm);
    const descEn = highlight(item.desc_en || '', highlightTerm);

    html += `<h3>${nameZh}</h3>`;
    html += `<p class="sub-name">${nameEn}</p>`;
    
    if (item.category_zh || item.category_en) {
        html += `<div class="category-rarity">
                   <p>${item.category_zh || ''}</p>
                   <p>${item.category_en || ''}</p>
                 </div>`;
    }
    if (item.desc_zh) {
        html += `<div class="description-text">${descZh}</div>`;
    }
    if (item.desc_en) {
        html += `<div class="description-text">${descEn}</div>`;
    }
    return html;
}

// [輔助] 建立獎勵區塊的 HTML
function createRewardHtml(rewardId, highlightTerm = "") {
    if (!rewardId) return '';
    const rewardItem = itemMasterList.get(rewardId);
    if (!rewardItem) {
         return `<div class="reward-description">
                    <strong>獎品資料遺失 (ID: ${rewardId})</strong>
                 </div>`;
    }

    return `<div class="reward-description">
                <strong>獎品「${highlight(rewardItem.name_zh, highlightTerm)}」詳情：</strong>
                ${createDescriptionHtml(rewardItem, highlightTerm)}
              </div>`;
}

// [輔助] 搜尋高亮文字
function highlight(text, term) {
    if (!term) return text;
    try {
        const safeText = String(text || '');
        const regex = new RegExp(`(${escapeRegExp(term)})`, 'gi');
        return safeText.replace(regex, '<span class="highlight">$1</span>');
    } catch (e) {
        console.warn("Highlight regex error:", e);
        return text;
    }
}

// [輔助] 脫敏正則表達式特殊字元
function escapeRegExp(string) {
    return String(string || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// [輔助] 重置「子選單」(Sub-menus)
function resetSubMenus() {
    shopsSection.style.display = 'none';
    tasksSection.style.display = 'none';
    lootSection.style.display = 'none';
    detailsContainer.style.display = 'none';
    
    shopSelect.value = '';
    shopItemSelect.innerHTML = '<option value="">— 請先選擇商店 —</option>';
    shopItemSelect.disabled = true;
    taskSelect.value = '';
    taskItemSelect.innerHTML = '<option value="">— 請先選擇任務類別 —</option>';
    taskItemSelect.disabled = true;
    lootItemSelect.value = '';
}

/**
 * [核心] 應用程式主體
 */
function startApp(database, descriptions) {
    
    // --- [ 1. 初始化 ] ---
    function initializeApp() {
        // 1.1 建立物品總表速查 Map
        for (const item of descriptions) {
            if (item && item.id) { 
                itemMasterList.set(item.id, item);
            } else {
                console.warn("發現無效的物品項目 (缺少 id):", item);
            }
        }

        // 1.2 載入商店選單
        for (const categoryId in database.shops.categories) {
            shopSelect.appendChild(new Option(database.shops.categories[categoryId], categoryId));
        }

        // 1.3 載入任務選單
        for (const categoryId in database.tasks.categories) {
            taskSelect.appendChild(new Option(database.tasks.categories[categoryId], categoryId));
        }

        // 1.4 動態計算並載入 "Loot" 物品
        const classifiedItemIds = new Set();
        for (const shopId in database.shops.items) {
            for (const itemLink of database.shops.items[shopId]) {
                if (itemLink && itemLink.item_id) classifiedItemIds.add(itemLink.item_id);
            }
        }
        for (const taskId in database.tasks.items) {
            for (const task of database.tasks.items[taskId]) {
                if (task && task.reward_id) classifiedItemIds.add(task.reward_id);
            }
        }
        
        const lootItems = [];
        for (const item of descriptions) {
            if (item && item.id && !classifiedItemIds.has(item.id)) {
                lootItems.push(item);
            }
        }

        lootItems.sort((a, b) => a.name_zh.localeCompare(b.name_zh, 'zh-Hant'));
        lootItems.forEach(item => {
            lootItemSelect.appendChild(new Option(item.name_zh, item.id));
        });
        
        if (lootItems.length === 0) {
             lootItemSelect.innerHTML = '<option value="">— 無 Loot 物品 —</option>';
             lootItemSelect.disabled = true;
        }
    }

    // --- [ 2. 事件監聽 ] ---

    // [搜尋框] 監聽
    searchBox.addEventListener('input', (e) => {
        if (isUpdatingProgrammatically) return;

        const query = e.target.value.trim();

        if (query === "") {
            detailsContainer.style.display = 'none';
            return;
        }
        
        isUpdatingProgrammatically = true;
        queryTypeSelect.value = ''; 
        isUpdatingProgrammatically = false;
        
        resetSubMenus();
        
        const lowerCaseQuery = query.toLowerCase();

        const results = [];
        for (const item of allDescriptions) { 
            if (item && item.name_zh && item.name_en &&
                (item.name_zh.toLowerCase().includes(lowerCaseQuery) || 
                 item.name_en.toLowerCase().includes(lowerCaseQuery)))
            {
                results.push(item);
            }
        }

        if (results.length > 0) {
            const firstResult = results[0];
            let html = createDescriptionHtml(firstResult, query);
            
            let foundInShop = false;
            for (const shopId in database.shops.items) {
                const itemLink = database.shops.items[shopId].find(i => i.item_id === firstResult.id);
                if (itemLink) {
                    const shopName = database.shops.categories[shopId] || shopId;
                    html += `<hr style="border:0; border-top:1px dashed #ccc; margin: 1rem 0;">`;
                    html += `<p><strong><em>可於 [${shopName}] 購買</em></strong></p>`;
                    html += `<p><strong>庫存：</strong> <span>${itemLink.stock || 'N/A'}</span></p>`;
                    html += `<p><strong>花費：</strong> <span>${itemLink.cost || 'N/A'}</span></p>`;
                    if (itemLink.buyback_price) {
                        html += `<p><strong>收購價：</strong> <span>${itemLink.buyback_price}</span></p>`;
                    }
                    foundInShop = true;
                    break; 
                }
            }
            
            detailsContainer.innerHTML = html;
            detailsContainer.style.display = 'block';

        } else {
            detailsContainer.innerHTML = '<p>找不到符合條件的物品。</p>';
            detailsContainer.style.display = 'block';
        }
    });

    // [主選單] 監聽
    queryTypeSelect.addEventListener('change', () => {
        if (isUpdatingProgrammatically) return;
        const selectedType = queryTypeSelect.value;
        
        isUpdatingProgrammatically = true;
        searchBox.value = ''; 
        isUpdatingProgrammatically = false;

        resetSubMenus();

        if (selectedType === 'shops') shopsSection.style.display = 'block';
        else if (selectedType === 'tasks') tasksSection.style.display = 'block';
        else if (selectedType === 'loot') lootSection.style.display = 'block';
    });

    // [商店] 選單監聽
    shopSelect.addEventListener('change', () => {
        const selectedShopId = shopSelect.value;
        shopItemSelect.innerHTML = '<option value="">— 請選擇物品 —</option>';
        detailsContainer.style.display = 'none';
        shopItemSelect.disabled = true;

        if (selectedShopId) {
            const itemLinks = database.shops.items[selectedShopId] || [];
            if (itemLinks.length > 0) {
                const fullItems = itemLinks.map(link => ({
                    linkData: link,
                    itemData: itemMasterList.get(link.item_id)
                })).filter(i => i.itemData); 

                fullItems.sort((a, b) => a.itemData.name_zh.localeCompare(b.itemData.name_zh, 'zh-Hant'));

                fullItems.forEach(wrappedItem => {
                    shopItemSelect.appendChild(new Option(wrappedItem.itemData.name_zh, wrappedItem.linkData.item_id));
                });
                shopItemSelect.disabled = false;
            } else {
                shopItemSelect.innerHTML = '<option value="">— 此商店無存貨 —</option>';
            }
        }
    });

    // [商店] 物品監聽
    shopItemSelect.addEventListener('change', () => {
        const selectedItemId = shopItemSelect.value;
        if (!selectedItemId) {
            detailsContainer.style.display = 'none'; return;
        }
        const item = itemMasterList.get(selectedItemId);
        if (!item) {
            detailsContainer.innerHTML = '<p>錯誤：找不到該物品的詳細資料。</p>';
            detailsContainer.style.display = 'block';
            return;
        }
        const itemLink = (database.shops.items[shopSelect.value] || []).find(i => i.item_id === selectedItemId);
        if (!itemLink) {
            detailsContainer.innerHTML = '<p>錯誤：找不到該物品的商店資料。</p>';
            detailsContainer.style.display = 'block';
            return;
        } 

        let html = `<h3>${item.name_zh}</h3>`;
        html += `<p class="sub-name">${item.name_en || ''}</p>`;
        html += `<p><strong>庫存：</strong> <span>${itemLink.stock || 'N/A'}</span></p>`;
        html += `<p><strong>花費：</strong> <span>${itemLink.cost || 'N/A'}</span></p>`;
        if (itemLink.buyback_price) {
            html += `<p><strong>收購價：</strong> <span>${itemLink.buyback_price}</span></p>`;
        }
        html += createDescriptionHtml(item);
        detailsContainer.innerHTML = html;
        detailsContainer.style.display = 'block';
    });

    // [任務] 選單監聽
    taskSelect.addEventListener('change', () => {
        const selectedTaskId = taskSelect.value;
        taskItemSelect.innerHTML = '<option value="">— 請選擇任務 —</option>';
        detailsContainer.style.display = 'none';
        taskItemSelect.disabled = true;

        if (selectedTaskId) {
            const tasks = database.tasks.items[selectedTaskId] || [];
            if (tasks.length > 0) {
                tasks.sort((a, b) => a.name_zh.localeCompare(b.name_zh, 'zh-Hant'));
                tasks.forEach(task => {
                    taskItemSelect.appendChild(new Option(task.name_zh, task.id));
                });
                taskItemSelect.disabled = false;
            } else {
                taskItemSelect.innerHTML = '<option value="">— 此類別無任務 —</option>';
            }
        }
    });

    // [任務] 項目監聽
    taskItemSelect.addEventListener('change', () => {
        const selectedTaskId = taskItemSelect.value;
        if (!selectedTaskId) {
            detailsContainer.style.display = 'none'; return;
        }
        const task = (database.tasks.items[taskSelect.value] || []).find(t => t.id === selectedTaskId);
        if (!task) {
            detailsContainer.innerHTML = '<p>錯誤：找不到該任務的資料。</p>';
            detailsContainer.style.display = 'block';
            return;
        }

        let html = `<h3>${task.name_zh}</h3>`;
        html += `<p class="sub-name">${task.name_en || ''}</p>`;
        if (task.reward_str) html += `<p><strong>賞金：</strong> <span>${task.reward_str}</span></p>`;
        if (task.cost_str) html += `<p><strong>花費：</strong> <span>${task.cost_str}</span></p>`;
        if (task.reward_id) {
            const rewardItem = itemMasterList.get(task.reward_id);
            if (rewardItem) {
                 html += `<p><strong>獎品：</strong> <span>${rewardItem.name_zh}</span></p>`;
            }
        }
        if (task.desc_zh) html += `<div class="description-text">${task.desc_zh}</div>`;
        if (task.desc_en) html += `<div class="description-text">${task.desc_en}</div>`;
        html += createRewardHtml(task.reward_id);
        detailsContainer.innerHTML = html;
        detailsContainer.style.display = 'block';
    });

    // [Loot] 物品監聽
    lootItemSelect.addEventListener('change', () => {
        const selectedItemId = lootItemSelect.value;
        if (!selectedItemId) {
            detailsContainer.style.display = 'none'; return;
        }
        const item = itemMasterList.get(selectedItemId);
        if (!item) {
            detailsContainer.innerHTML = '<p>錯誤：找不到該物品的詳細資料。</p>';
            detailsContainer.style.display = 'block';
            return;
        }

        let html = `<h3>${item.name_zh}</h3>`;
        html += `<p class="sub-name">${item.name_en || ''}</p>`;
        html += createDescriptionHtml(item);
        detailsContainer.innerHTML = html;
        detailsContainer.style.display = 'block';
    });

    // --- [ 啟動 ] ---
    try {
        // 檢查全域變數是否存在
        if (typeof allDatabase === 'undefined' || typeof allDescriptions === 'undefined') {
            throw new Error("database.js 或 descriptions.js 檔案遺失或載入失敗。請檢查script標籤。");
        }
        
        initializeApp();
        
        console.log("應用程式已成功啟動 (同步模式)。");
    } catch (error) {
        console.error("啟動應用程式時發生錯誤:", error);
         document.querySelector('.container').innerHTML = `<h1>資料載入失敗</h1>
            <p>請檢查 <b>database.js</b> 和 <b>descriptions.js</b> 檔案是否存在於 index.html 旁邊。</p>
            <p><b>錯誤訊息:</b> ${error.message}</p>
            <p><b>提示:</b> 這很可能是因為您的 .js 檔案內容不是有效的 JavaScript (例如結尾有多餘的 '}' )。</p>`;
    }
}

// 立即執行，因為 <script> 標籤在 <body> 底部
startApp(allDatabase, allDescriptions);
</script>
