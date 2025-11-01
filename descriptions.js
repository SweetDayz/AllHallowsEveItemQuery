const allDescriptions = [
  {
    "id": "深淵護符 ABYSSAL AMULET",
    "name_zh": "深淵護符",
    "name_en": "ABYSSAL AMULET",
    "category_zh": "奇物（護身符），獨特",
    "category_en": "Wondrous Item (Amulet), Unique",
    "desc_zh": "這條護符觸手冰涼。它由一條啞光黑色金屬鏈製成，中心懸掛著一塊看似黑色縞瑪瑙的碎片。護符本身會輕輕彎曲周圍的光線，幾乎像是在吸收光線。即使在這裡，它也是一件黑暗物品。大多數人在僅僅一兩個小時後就會發瘋。佩戴此物品時，你會完全失明，沒有任何視覺。作為視覺的交換，你獲得了感知周圍細微震動的能力。你獲得 200 英尺的震顫感知，並且可以攻擊任何你能聽到/感知到的生物而無劣勢。",
    "desc_en": "This amulet is ice cold to the touch. It appears to be made out of a jet black metal chain with a matte black onyx looking shard hanging from its centre. The amulet itself gently bends any light surrounding it, almost as if it is absorbing it. This is a dark item even here. Most go mad after just an hour or two. While wearing this item, you are completely blind, you have no sense of sight whatsoever. In return for your vision you gain the ability to sense the subtle vibrations all around you. You gain 200 feet of Tremorsense and can attack any creature you can hear/sense without disadvantage."
  },
  {
    "id": "亞當的蘋果 ADAM’S APPLE",
    "name_zh": "亞當的蘋果",
    "name_en": "ADAM’S APPLE",
    "category_zh": "奇物（法術法器），獨特",
    "category_en": "Wondrous Item (Spell Focus), Unique",
    "desc_zh": "這物品絕對不是一個真正的蘋果。它實際上是亞當過大的喉嚨軟骨，形狀略似蘋果。它大約有一個大拳頭大小，由腐爛的骨頭和變黑的肉製成，早已過了保存期限。它散發出惡臭的魔法氣味。此物品可以調適，並可作為+1魔法源用於施法。此外，在滿月下每月一次，調適的生物可以施展 6 環「創造不死生物」法術，無需消耗法術位或材料成分（除了所需的屍體）。",
    "desc_en": "This item is definitely not an actual apple. It is in fact Adam’s oversized throat cartilage that vaguely resembles the shape of an apple. It is about the size of a large fist and is made of rotten bone and blackened flesh that is well past its use by date. It lets of the pungent stench of foul magic. This item can be attuned to and used as a +1 magic source for spellcasting. Additionally once per month under the full moon, the attuned creature may cast Create Undead as a 6th level spell without expending a spell slot or materials (aside from the required corpses)."
  },
  {
    "id": "阿嘉莎的婚戒 AGATHA’S WEDDING RINGS",
    "name_zh": "阿嘉莎的婚戒",
    "name_en": "AGATHA’S WEDDING RINGS",
    "category_zh": "奇物（戒指），獨特  Wondrous Item (Rings), Unique",
    "category_en": "",
    "desc_zh": "一對簡單但漂亮的銀戒指，上面雕刻著精靈圖案。任何接觸其中一枚戒指的生物都能感覺到其中散發出的貪婪飢餓感。此物品算作兩個獨立的魔法物品。當兩個生物分別調適了兩枚戒指中的一枚時，任一生物受到的傷害將由兩個生物平均分攤（向上取整）。",
    "desc_en": "A pair of simple but pretty silver rings engraved with elvish patterns. Any creature whom touches one of the rings can feel a ravenous hunger emanating from within. This item counts as two separate magical items. When two creatures are attuned to one of the two rings each, damage received by either creature is divided equally (rounded up) amongst the two creatures."
  },
  {
    "id": "亞里斯泰爾的掘墓鏟 ALISTAIR’S GRAVE DIGGER",
    "name_zh": "亞里斯泰爾的掘墓鏟",
    "name_en": "ALISTAIR’S GRAVE DIGGER",
    "category_zh": "奇物（工具），獨特  Wondrous Item (Tool), Unique",
    "category_en": "",
    "desc_zh": "這是一把大鏟子，或者也許是一把大鍬。無論如何，它是一把簡單的超大尺寸鐵鏟，配有 6 英尺長的柄，上面包裹著看似鞣製過的人皮。這把特殊的掘墓鏟是魔法物品。每當這把鏟子被用作動作來移動泥土時，它會魔法般地挖出一個恰好 6 英尺深、3 英尺寬、6 英尺長的洞。挖出的泥土將會被堆積成一個相同尺寸、形狀完美的土方，放置在洞周圍使用者選擇的任何位置。這箱泥土會保持其形狀和所有特性。這把鏟子不僅能挖掘泥土。嘗試將這把鏟子推入任何固體材料，例如金屬、石頭、磚塊、泥土或其他材料如沙子或礫石。如果使用不一致的材料，例如乾沙，土箱會立即散開。它簡直就是挖出一個形狀完美的墓穴。這不是很整齊嗎？",
    "desc_en": "A large shovel, or perhaps it is a large spade. Either way it is a simple oversized iron shovel with a 6 foot handle that is wrapped with what appears to be tanned skin. This particular grave digger is magical. Whenever this shovel is used as an action to move earth it will magically move exactly a 6 feet deep hole that is 3 feet wide and 6 feet long. The earth will be deposited into a perfectly shaped box of the same measurements anywhere the user chooses around the hole. The box of earth retains its shape and all properties. This shovel is capable of digging more than just dirt. Attempting to push this shovel into any sold material, such as metal, stone, brick, earth or other materials such as sand or gravel. If an inconsistent material such as dry sand is used, the box will fall apart immediately. It quite literally digs a perfectly shaped grave. Isn’t that neat."
  },
  {
    "id": "亞里斯泰爾的塵土罐 ALISTAIR’S JAR OF DIRT",
    "name_zh": "亞里斯泰爾的塵土罐",
    "name_en": "ALISTAIR’S JAR OF DIRT",
    "category_zh": "奇物，獨特   Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "這個巨大的骯髒玻璃罐大約 1 英尺高，近半滿裝著一些看起來潮濕的泥土。可惜聽不到塵土罐傳來任何跳動聲。這個魔法塵土罐有一個簡單的金屬蓋子，可以旋開。打開罐子並從一個敞開的墓穴中抓一把泥土放入罐內，會魔法般地將那個墓穴與罐子連結起來。任何時候，玩家可以從罐中灑出一些泥土到一個敞開的墓穴中。躺在這個敞開的墓穴裡將允許該生物立即從那個墓穴傳送到任何曾將其泥土放入罐中的墓穴。自然，大多數墓穴將不再是敞開的墓穴，因此當該生物出現在他們選擇的目標墓穴時，會出現一個臨時的敞開墓穴，讓他們在墓穴重新閉合前逃出。此傳送能力每天只能使用一次。塵土罐可以容納無盡的泥土，並記住所有與其連結的墓穴。",
    "desc_en": "This large dirty glass jar is about 1 foot tall and is nearly half full of some damp looking earth. Sadly no thumping can be heard from the jar of dirt. This magical jar of dirt has a simple metal lid that can be unscrewed. Opening the jar and placing a fistful of dirt into the jar from an open grave magically links that grave to the jar. At any time a player may sprinkle some dirt from the jar into an open grave. Laying down in the open grave will allow the creature to instantly teleport from that open grave to any grave that has had its dirt placed inside the jar. Naturally most graves will be no longer open graves, as such when the creature appears at the intended grave of their choice, a temporary open grave will appear, allowing them to escape the grave before it closes back over. The teleportation can only be used once per day. The dirt jar can hold an endless amount of dirt and remembers all graves it is connected to."
  },
  {
    "id": "亞里斯泰爾的墓碑 ALISTAIR’S TOMBSTONE",
    "name_zh": "亞里斯泰爾的墓碑",
    "name_en": "ALISTAIR’S TOMBSTONE",
    "category_zh": "護甲（盾牌），獨特 Armor (Shield), Unique",
    "category_en": "",
    "desc_zh": "亞里斯泰爾的墓碑看起來不怎麼樣。它是一塊略大於常規盾牌的破舊墓碑。墓碑的底部基座似乎早已碎裂。一些生鏽的鏈條纏繞在石頭中央，並用背面以皮革製成的臨時握把鎖定，使得這塊墓碑可以像盾牌一樣攜帶。風化石頭的前表面僅粗糙地雕刻著名字「亞里斯泰爾」和字母「R.I.P.」。這塊墓碑可以被用作重型盾牌，為持用者的 AC 提供+3 加值。持用或攜帶它會使潛行檢定處於劣勢，並使你的移動速度減少 5 英尺。此外，持用者可以在其回合中消耗一個動作，用亞里斯泰爾的墓碑推撞 5 英尺範圍內的一個敵人。持用者和該生物必須進行力量檢定以決定誰贏得推撞。如果該生物贏了，什麼都不會發生。如果墓碑的持用者贏了，目標生物會被向後推開 10 英尺，並受到 1D10 黯蝕傷害，因為陰影般的爪手從石頭的裂縫中冒出，在該生物被推開時抓撓其身體。",
    "desc_en": "Alistair’s tombstone doesn’t really look like much. It is a decrepit tombstone slightly larger than a regular shield. The bottom base of the tombstone appears to have crumbled long ago. Some rusted chains have been wrapped around the centre of the stone and locked in place with a makeshift handle on the back made of leather allowing the tombstone to be carried just like a shield. The front face of the crumbling stone features only the name Alistair and the letters R.I.P. carved roughly into it. The tombstone can be used as a heavy shield that provides a +3 bonus to the wielders AC. Wielding it or carrying it provides a disadvantage to stealth checks and reduces your movement speed by 5 feet. Additionally the wielder may expend an action on their turn to shove an enemy within 5 feet range with Alistair’s Tombstone. The wielder and creature must make a Strength Roll to determine who wins the shove. If the creature wins, nothing happens. If the wielder of the tombstone wins, the target creature is shoved back 10 feet and is dealt 1D10 Necrotic damage as shadowy clawed hands emerge from the cracks in the stone, scratching at the creatures body as it is pushed away."
  },
  {
    "id": "亞里斯泰爾之甕 ALISTAIR’S URN",
    "name_zh": "亞里斯泰爾之甕",
    "name_en": "ALISTAIR’S URN",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "一個簡單的金屬甕，形狀像一個小花瓶，配有匹配的蓋子。金屬因年代久遠而失去光澤，觸感冰冷。打開甕會讓你的鼻孔充滿淡淡的泥土花香。甕裡裝著幾把細膩的灰色粉末，很可能是高品質的骨灰。將粉末從亞里斯泰爾之甕灑在一具屍體上，會導致整具屍體悶燒並慢慢分解成細膩的灰色粉末，不留下任何其他東西。任何穿戴的裝備也會化為塵埃。來自屍體的殘留粉末可用於重新裝滿甕。任何從甕中取出的粉末將在 1 分鐘內失去其特性。",
    "desc_en": "A simple metal urn shaped like a small vase complete with a matching lid. The metal is tarnished from age and is cold to the touch. Opening the urn fills your nostrils with the subtle smell of earthy flowers. The urn holds several handfuls of a fine grey powder, most likely high quality ashes. Sprinkling the powder from Alistair’s Urn on a corpse will cause the entire corpse to smoulder and slowly disintegrate into a fine grey powder leaving nothing else behind. Any worn equipment is also turned to dust. The residue powder from a corpse may be used to refill the urn. Any powder removed from the urn will lose its properties within 1 minute."
  },
  {
    "id": "阿納巨蟒的熱感眼 ANACONDA’S THERMAL EYE",
    "name_zh": "阿納巨蟒的熱感眼",
    "name_en": "ANACONDA’S THERMAL EYE",
    "category_zh": "奇物，獨特 Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "透過這個濕潤但未腐爛的蛇眼眼球如同觀察鏡般窺視，可以看到生物或溫暖物體散發出的熱量光暈。物體越熱，光暈越亮。光暈可以穿透玻璃或最多 10 英尺的灌木叢、2 英尺的木頭或 1 英尺的石頭。光暈的輪廓不是很清晰，因此例如你無法分辨門另一邊的中型生物是什麼，只知道它是中型體型，依此類推。",
    "desc_en": "While peering through this soggy non-decaying serpents eyeball like a looking glass one can see heat auras emanating from creatures or warm objects. The hotter the object the brighter the aura. The auras emanate through glass or up to 10 feet of shrubbery, 2 feet of wood or 1 foot of stone. The auras are not very defined so for example you cannot tell what the medium sized creature on the other side of the door is, only that it is medium in size and so forth."
  },
  {
    "id": "防腐血清 ANTI-DECAY SERUM",
    "name_zh": "防腐血清",
    "name_en": "ANTI-DECAY SERUM",
    "category_zh": "普通物品，稀有Normal Item, Rare",
    "category_en": "",
    "desc_zh": "這個帶有紅色蠟封的小透明玻璃瓶內含一種黏稠的金色油狀液體，聞起來像腐爛的魚。將此油塗抹在新鮮屍體上會防止其腐爛，延長屍體被復活或轉生的時間。一瓶的劑量足以讓一具屍體在腐敗前多保存 3 天。可以重新塗抹油來延長此過程。",
    "desc_en": "This small clear vial with a red wax seal contains a viscous golden oil that smells like rotten fish. Applying this oil to a fresh corpse will prevent it from decaying, prolonging the time that the body has to be revived or reincarnated. One vial contains enough for one body to last an additional 3 days before decaying. The oil may be reapplied to extend the process."
  },
  {
    "id": "阿斯特洛斯的背叛 ASTEROTH’S BETRAYAL",
    "name_zh": "阿斯特洛斯的背叛",
    "name_en": "ASTEROTH’S BETRAYAL",
    "category_zh": "軍用武器（巨劍），獨特",
    "category_en": "Martial Weapon (Great Sword), Unique",
    "desc_zh": "一把精心鍛造的銀色巨劍，密封在華麗的黑色皮革劍鞘內。這是曾經由大惡魔阿斯特洛斯攜帶上戰場的刀刃。當揮舞此武器時，如果該生物在敵方上一輪行動中受到傷害，則該回合用此劍進行的任何攻擊都將具有優勢，因為刀刃會像殺死其原主的那次背叛一樣尋求復仇。",
    "desc_en": "A finely forged silver great sword sealed within an ornate black leather scabbard. This is the blade once carried into battle by the arch demon Asteroth. When wielding this weapon if the creature was dealt damage during the enemy’s last activation then any attacks made with this sword for that turn will be made with advantage as the blade seeks its revenge for the betrayal just like the one that killed its original master."
  },
  {
    "id": "自動護目鏡 AUTOMATED GOGGLES",
    "name_zh": "自動護目鏡",
    "name_en": "AUTOMATED GOGGLES",
    "category_zh": "奇物，獨特 Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "它本應類似某種高科技護目鏡。但實際上，它更像是一副眼鏡，連接著另外十幾副其他眼鏡。這些青銅鏡框的眼鏡配有多種不同顏色的鏡片，每個鏡片都連接到一個小型槓桿機構，允許佩戴者切換正在使用的鏡片，並將其他鏡片安全地收存起來，無需調適。可以隨時以自由動作更換鏡片，以引發以下效果之一：\n\t黃色鏡片：允許使用者完美地看到一英里外的物體，如同它們只在 50 英尺外。\n\t藍色鏡片：允許使用者看到受隱形或乙太化效果影響的物品或生物。\n\t綠色鏡片：允許使用者在完全無光源的黑暗中完美視物。\n\t紅色鏡片：允許使用者看到 30 英尺內活體生物的微弱輪廓，穿透實體牆壁和障礙物。\n\t橙色鏡片：允許使用者查看鎖和陷阱的內部結構，在開鎖或解除陷阱時提供+2 加值。\n\t紫色鏡片：允許使用者直接觀看極熱或極亮的物體而不致失明。\n\t透明鏡片：是完全正常的閱讀眼鏡，適用於遠視。",
    "desc_en": "It is supposed to resemble some form of high tech goggles. But in actual fact it’s more like a pair of glasses, attached to a dozen other pairs of glasses. These bronze framed spectacles have a multitude of different colored lenses each attached to a small lever mechanism that allows the wearer to change which lenses are being looked through and which are safely stored out of the way no attunement required. The lenses may be changed at any time as a free action to invoke one of the following effects.\n-\tYellow Lenses allow the user to see perfectly up to one mile away as if it were only 50 feet away.\n-\tBlue Lenses allow the user to items or creatures under the effects of invisibility or etherealness.\n-\tGreen Lenses allow the user to see perfectly in the dark even if there is no light source. - Red Lenses allow the user to see faint outlines of living creatures within 30 feet, through solid walls and obstacles.\n-\tOrange Lenses allow the user to see inside the intricacies of locks and traps, providing a +2 bonus to picking the lock or disarming the trap.\n-\tPurple Lenses allow the user to directly look at intensely hot or bright objects without going blind.\n-\tClear Lenses are perfectly normal reading glasses for the long sighted."
  },
  {
    "id": "記憶之袋 BAG OF MEMORIES",
    "name_zh": "記憶之袋",
    "name_en": "BAG OF MEMORIES",
    "category_zh": "奇物，獨特 Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "這個柔軟的細緻棕色小皮袋，由一條簡單的紅色繫繩牢牢封閉。此袋是魔法物品，除非使用者已與其調適，否則拒絕被打開。一旦擁有者與袋調適，他們可以花費 20 分鐘進行儀式以執行以下一項：\n玩家可以從一個自願或無意識的生物複製任何記憶。記憶可以是隨機的，或者使用者可以在該生物的記憶中搜尋特定的記憶。此袋可以容納任意數量的記憶。\n玩家可以從一個自願或無意識的生物永久移除任何記憶。每次儀式只能移除一個記憶。是的，你最終可以讓一個生物完全忘記一切。\n玩家可以將袋中的一個記憶植入一個自願或無意識的生物。該記憶不會覆蓋現有記憶，但該生物完全相信那是他們的記憶。\n玩家和任何自願的參與者可以查看和體驗存儲在記憶之袋中的任何記憶。",
    "desc_en": "The small brown fine leather bag is soft to the touch and is held closed firmly by a simple red cord. The bag is magical and will refuse to be opened unless the user is attuned to it. Once an owner has attuned to the bag they may spend 20 minutes performing a ritual to perform one of the following: - The player may copy any memory from a willing or unconscious creature. The memory can be random or the user can search through the creature’s memories for a specific one. The bag can hold any number of memories. - The player may permanently remove any memory from a willing or unconscious creature. Only one memory may be removed per ritual. And yes you can eventually cause a creature to completely forget everything. - The player may implant a memory from the bag into a willing or unconscious creature. The memory does not overwrite an existing one, but the creature completely believes that is their memory. - The player and any willing participants may view and experience any memory stored in the bag of memories."
  },
  {
    "id": "蝙蝠鏢 BATIKANS",
    "name_zh": "蝙蝠鏢",
    "name_en": "BATIKANS",
    "category_zh": "軍用武器（投擲武器），非普通物品",
    "category_en": "Martial Weapon (Thrown), Uncommon Item",
    "desc_zh": "這些小型手裡劍狀的武器由高品質的深色金屬製成，並被磨利成蝙蝠展翅的形狀。它被視為有效射程 30 英尺的遠程武器。成功命中時將造成 1D4 穿刺傷害，外加 1D2 火焰傷害。",
    "desc_en": "These small shuriken like weapons are made from a high quality dark metal and have been honed, and sharpened into the shape of a bat with its wings spread wide. It is considered a ranged weapon with an effective range of 30 ft. It will inflict 1D4 Piercing Damage, plus an additional 1D2 Fire Damage on a successful hit."
  },
  {
    "id": "蝙蝠肉乾 BAT JERKY",
    "name_zh": "蝙蝠肉乾",
    "name_en": "BAT JERKY",
    "category_zh": "普通物品（消耗品），常見",
    "category_en": "Normal Item (Consumable), Common",
    "desc_zh": "這種當地美食在棲息於萬聖域領域的低階恐怖存在和惡魔中相當受歡迎。每個小蠟紙包裝內含相當於半日口糧的黑色皮革般肉乾，形似小翅膀。嚐起來就像鹹味雞肉，且沒有任何營養價值。",
    "desc_en": "This local delicacy is quite popular amongst the lesser horrors and demons that inhabit the Hallow realm. Each small wax paper packet contains half a day’s rations worth of a black leathery jerky that resembles a small wing. Tastes just like salty chicken and has no nutritional value."
  },
  {
    "id": "空白墓碑 BLANK TOMBSTONE",
    "name_zh": "空白墓碑",
    "name_en": "BLANK TOMBSTONE",
    "category_zh": "普通物品（工具），非普通",
    "category_en": "Normal Item (Utility), Uncommon",
    "desc_zh": "此物品包含一塊標準 1 英尺大小、圓頂的墓碑，由單塊灰色石頭雕刻而成。當被持握時，持握它的生物可以說出一個名字和一個日期，隨後它們會魔法般地雕刻在石頭上。這是一次性物品。墓碑大約能持續 100 年，之後會損壞到無法修復。",
    "desc_en": "This item consists of a standard 1 foot sized rounded top tombstone carved from a single piece of grey stone. When held, the creature holding it may speak a name and a date which will then magically carve themselves into the stone. This is a single use item. The tombstone lasts about 100 years before degrading beyond repair."
  },
  {
    "id": "滴血餅乾 BLEEDING BISCUIT",
    "name_zh": "滴血餅乾",
    "name_en": "BLEEDING BISCUIT",
    "category_zh": "普通物品（消耗品），常見",
    "category_en": "Normal Item (Consumable), Common",
    "desc_zh": "這些新鮮烘焙的餅乾在肉眼看來似乎很正常，但當咬下一口時，它們會開始滲出濃稠的血紅色液體，彷彿在流血。據說內部是由熬煮過的血酒製成。完全吃完一塊滴血餅乾後，你將立即恢復 1 點生命值。",
    "desc_en": "These freshly baked biscuits are seemingly normal to the naked eye, but when a bite is taken they begin to ooze a thick blood red liquid as if it was bleeding. Supposedly the inside is made from cooked down Blood Wine. After completely eating a Bleeding Biscuit you will immediately regain 1 Hit point."
  },
  {
    "id": "血咒 BLOOD CURSE",
    "name_zh": "血咒",
    "name_en": "BLOOD CURSE",
    "category_zh": "附魔物品，稀有Enchantment Item, Rare",
    "category_en": "",
    "desc_zh": "一張破舊的卷軸，用一條亮紅色的繩子綁著。這是一次性附魔，可用於附魔一把近戰或遠程武器。用此詛咒附魔武器會使其散發出微弱的魔法痕跡並發出微弱的紅光。用受此詛咒附魔的物品造成傷害時，命中會額外造成 1D4 火焰傷害，而當時持有此武器的生物會失去相同數值的生命值。這些武器不需要調適。",
    "desc_en": "A tattered scroll bound with a bright red cord. This is a single use enchantment that can be used to enchant one melee or ranged weapon. Enchanting a weapon with this curse causes it to emanate faint traces of magic and give off a slight red glow. Dealing damage with an item enchanted by this curse deals an extra 1D4 Fire Damage on a hit and the creature holding this weapon at the time loses that same amount of hit points. These weapons do not require attuning."
  },
  {
    "id": "導血針 BLOOD SHUNT",
    "name_zh": "導血針",
    "name_en": "BLOOD SHUNT",
    "category_zh": "簡易武器（匕首），獨特",
    "category_en": "Simple Weapon (Dagger), Unique",
    "desc_zh": "一根細長的銀色金屬管，一端磨成鋸齒狀尖端，因過度使用而佈滿細小刮痕。導血針曾被奧瑞莎用來通過將其插入主要動脈，慢慢將受害者體內的每一滴血液抽乾。這個危險的工具可以被用作魔法武器，操作方式類似普通匕首，但具有附加效果：如果它對活體生物造成傷害，該生物將陷入流血狀態。在流血生物每回合開始時，它會因失血而受到額外的 1D2 傷害。此效果最多可疊加 5 次。",
    "desc_en": "A thin silver metal tube edged into a serrated tip at one end is covered in small scratches from overuse. The blood shunt was once used to Orisa to slowly drain her victims of every last drop of their blood by inserting it into a major artery. This dangerous tool can be used as a magical weapon that operates like a regular dagger with the added effect that if it deals damage to a living creature, the creature will be inflicted with a bleeding effect. At the beginning of each of the bleeding creature’s turns it is dealt an additional 1D2 damage as it bleeds out. This effect can stack 5 times."
  },
  {
    "id": "血酒瓶 BLOOD FLASK",
    "name_zh": "血酒瓶",
    "name_en": "BLOOD FLASK",
    "category_zh": "普通物品（消耗品），非普通",
    "category_en": "Normal Item (Consumable), Uncommon",
    "desc_zh": "當你打開這個凹陷的金屬瓶蓋時，一股濃烈的麝香氣味瀰漫在空氣中。濃稠的紅色液體在容器內旋轉。這是你需要時才喝的飲品，而非出於選擇。這是一種蒸餾版的血酒，同樣由樹妖樹僕的血液製成。它是 O 型血，所以不會讓你生病，並且是更好的緊急輸血用品。飲用此消耗品後，你將立即恢復 2D6 生命值（類似治療藥水，但更邪惡）。",
    "desc_en": "A strong musky aroma fills the air as you flip the clasp on this dented metal flask. A thick red liquid swirls inside the container. This is something you drink when you need, not out of choice. It is a distilled version of blood wine also made from the blood of a Jubokko tree. It’s Type-O so it won’t make you sick and makes an even better emergency blood transfusion. Upon drinking this consumable item you will immediately regain 2D6 hit points (like a health potion but evil)."
  },
  {
    "id": "血酒 BLOOD WINE",
    "name_zh": "血酒",
    "name_en": "BLOOD WINE",
    "category_zh": "普通物品（消耗品），常見",
    "category_en": "Normal Item (Consumable), Common",
    "desc_zh": "當你拔開這個小瓶的軟木塞時，一股甜美的麝香氣味瀰漫在空氣中。這是一種由未知生物血液製成的優質紅酒。非常適合冰鎮後與最上等的肉類一同享用。它總是 O 型血，所以不會讓你生病，並且是良好的緊急輸血用品。飲用此消耗品後，恢復 1D6 生命值（類似治療藥水）。",
    "desc_en": "A sweet musky aroma fills the air as you uncork this small bottle. It is a fine red wine made from the blood of unknown creatures. It is perfect for serving in a chilled glass alongside the finest of meats. It’s always Type-O so it won’t make you sick and makes for a good emergency blood transfusion. Upon drinking this consumable item regain 1D6 Hit Points (similar to a health potion)."
  },
  {
    "id": "搖頭娃娃 - 綜合款 BOBBLEHEAD - ASSORTED",
    "name_zh": "搖頭娃娃 - 綜合款",
    "name_en": "BOBBLEHEAD - ASSORTED",
    "category_zh": "普通物品（收藏品），常見",
    "category_en": "Normal Item (Collectible), Common",
    "desc_zh": "萬聖域境內有各式各樣的搖頭娃娃。這些是所有年輕哥布林和食屍鬼中流行的收藏品。每個搖頭娃娃都是萬聖域內受歡迎的生物或角色的三維卡通印象。搖頭娃娃有一個通過彈簧連接到身體上的超大頭部，使得頭部會搖晃。每個搖頭娃娃大約 3 英寸高，不附帶盒子。有各種各樣的搖頭娃娃可供收藏。有些比其他的更難找到且更有價值。有趣的是，每個搖頭娃娃都有一個齒輪形狀的底座，以防止它倒下。去看看搖頭娃娃收藏家吧。",
    "desc_en": "There is a wide variety of Bobbleheads within the Hallow. These are a popular collectible among all young goblins and ghouls. Each Bobblehead is a 3D cartoon impression of a popular creature or character from within the Hallow. The Bobbleheads have an oversized head attached to the body via a spring so that the head wobbles. Each Bobblehead is about 3 inches high and does not come with a box. There are a wide variety of Bobbleheads to collect. Some are far harder to find and more valuable than others. Fun fact each Bobblehead has a cog shaped base so that it doesn’t fall over. Check out the Bobblehead Collector."
  },
  {
    "id": "搖頭娃娃靈魂分離器 BOBBLEHEAD SOUL SEPARATOR",
    "name_zh": "搖頭娃娃靈魂分離器",
    "name_en": "BOBBLEHEAD SOUL SEPARATOR",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "這是一件不應存在的物品。它的本質對現實本身來說就是一種危險。但不知何故，搖頭娃娃收藏家得到了這件被存在所禁止的物品。在未經訓練的人眼中，這個由眾多小齒輪和青銅齒輪緊密纏繞的黃銅小圓圈看起來不過是一個壞掉的時鐘。似乎沒有電池或機制能使這個發條裝置運轉。旋轉任何齒輪似乎都沒有任何作用。在上側正中央，有一根小桿從下方的齒輪中向上突出。看起來像是裝置上缺了一個齒輪。搖頭娃娃有一個齒輪形狀的底座。可以將搖頭娃娃插入突出的桿子上，並會卡入定位。一旦搖頭娃娃卡入定位，齒輪就會開始轉動。中心的搖頭娃娃形象開始緩慢轉動，發出越來越快的咔嗒聲。在大約十秒的不祥咔嗒聲後，搖頭娃娃向外爆炸，在星界位面的結構中撕裂出一個洞。周圍的風呼嘯著被吸入洞外的真空。一個黑暗的身影在傳送門邊緣抓撓，將自己從虛空的掌控中拉出來。它絕對成功了。一旦該生物通過，傳送門便開始坍縮，只留下地上的靈魂分離器和在你面前的這個身影。該身影是無論用哪種搖頭娃娃啟動裝置所召喚出的版本。它擁有與正常情況下相同的屬性塊，並且絕對充滿敵意。它擁有通常情況下可以接觸到的所有記憶、個性和裝備。你剛剛撕裂了現實並召喚了一個活的搖頭娃娃，恭喜你。該裝置只能在滿月之夜使用一次。裝置在召喚過程中不會被摧毀，只要每次都是不同的滿月，就可以在多次召喚中使用。",
    "desc_en": "This is an item that should not exist. Its very nature is a danger to reality itself. But somehow the Bobblehead Collector came into the possession of this item forbidden by existence. To the untrained eye, this small metal circle of brass clockwork cogs and bronze gears looks nothing more than a broken clock. There appears to be no battery or mechanism to make the clockwork device move. Rotating any of the gears or cogs doesn’t seem to do anything. On the topside in the very centre is a small rod protruding up from the lower gears. It looks as if there is a gear missing from the device. Bobbleheads have a cog shaped base. The Bobblehead can be inserted over the protruding rod and will click into place. As soon as the Bobblehead clicks into place the cogs and gears start turning. The Bobblehead figure in the centre begins to turn slow, making clicking noises that grow increasingly faster as it continues to turn. After around ten seconds of ominous clicking the Bobblehead explodes outwards, ripping a hole in the very fabric of the astral plane. The wind around the portal howls as it is sucked into the vacuum beyond. A dark figure claws at the edges of the portal, pulling itself from the clutches of the void. It most definitely succeeds. As soon as the creature is through, the portal begins to collapse, leaving nothing behind but the Soul Separator lying on the ground, and the figure before you. The figure is a summoned version of whatever Bobblehead is used to activate the device. It has the same stat blocks as it normally does and his most definitely hostile. It has all memories, personality and equipment that it normally would have access to. You just ripped a hole in reality and summoned a living version of the Bobblehead congratulations. The device can only be used once on the evening of a full moon. The device is not destroyed during the summoning and can be used during multiple summoning’s as long as it is a different full moon each time."
  },
  {
    "id": "骨刃 BONE BLADE",
    "name_zh": "骨刃",
    "name_en": "BONE BLADE",
    "category_zh": "附魔物品，稀有 Enchantment Item, Rare",
    "category_en": "",
    "desc_zh": "一張破舊的卷軸，用一條蒼白色的繩子綁著。這是一次性附魔，可用於附魔一個觸及範圍內自願的單一生物。將此附魔用於生物是極度痛苦的，目標生物在附魔過程中將失去 5D6 生命值。如果過程成功，該生物現在能夠消耗一個動作並犧牲 10 點生命值，從其手腕皮膚下突出一個由自身部分骨骼製成的短刃。此刀刃被視為短劍，使用完畢後可以收回。如果刀刃破損或遺失，該生物的身體需要 24 小時才能創造一個新的。",
    "desc_en": "A tattered scroll bound with a pale white cord. This is a single use enchantment that can be used to enchant a single willing creature within touch. Using this enchantment on a creature is extremely painful and the target creature will lose 5D6 Hit Points over the course of the enchantment process. If the process is successful the creature is now able to expend an action and sacrifice 10 Hit Points to protrude a short blade crafted using some of their own bones from beneath their wrist skin. This blade is treated as a short sword and can be replaced back after finished being used. If the blade is broken or lost it will take 24 hours for the creature’s body to create a new one."
  },
  {
    "id": "骨鏢 BONE DARTS",
    "name_zh": "骨鏢",
    "name_en": "BONE DARTS",
    "category_zh": "軍用武器（投擲武器），非普通物品",
    "category_en": "Martial Weapon (Thrown), Uncommon Item",
    "desc_zh": "這些小型粗製的碎片狀武器由當時手邊隨便什麼骨頭製成，並被磨利到針尖般鋒利。它被視為射程 30 英尺的遠程武器。成功命中時將造成 1D4 穿刺傷害，外加 1D2 黯蝕傷害。",
    "desc_en": "These small roughhewn shard like weapons are made from whatever random bones were laying around at the time and have been sharpened to a needle fine tip. It is considered a ranged weapon with a range of 30 ft. It will inflict 1D4 Piercing Damage, plus an additional 1D2 Necrotic Damage on a successful hit."
  },
  {
    "id": "骨製煙花 BONEWORK",
    "name_zh": "骨製煙花",
    "name_en": "BONEWORK",
    "category_zh": "普通物品（新奇物品），非普通",
    "category_en": "Normal Item (Novelty), Uncommon",
    "desc_zh": "每個骨製煙花都是對傳統煙花的恐怖空心詮釋。實際物品本身由一根漂白的骨頭製成，經過粗略的削尖和掏空。尖頭骨內填滿不自然的成分，並用一根粗引信密封。點燃引信後，它會閃爍 6 秒，然後發射出去。骨頭將朝著它被投擲的方向飛行 100 英尺，然後伴隨著一聲巨響爆炸，形成一陣短暫卻有些漂亮的悶燒灰燼展示。如果骨製煙花擊中相當堅固的物體，它會立即引爆。任何在它爆炸時 5 英尺內的物體將受到 1 點火焰傷害。當骨製煙花爆炸時，根據下表擲骰決定爆炸灰燼的圖案和顏色。\n1d6\t顏色\t另一個1d6\t圖案\n1\t紅色\t1\t散射\n2\t橙色\t2\t星形\n3\t黃色\t3\t骷髏\n4\t綠色\t4\t南瓜\n5\t藍色\t5\t蝙蝠\n6\t紫色\t6\t漩渦",
    "desc_en": "Each Boneworks is a grizzly hallowed interpretation of a traditional firework. The actual item itself is made from an old bleached bone that has been crudely sharpened and hollowed out. The pointy bone is filled with unnatural ingredients and sealed off with a thick fuse. A lit fuse it will sparkle for 6 seconds before shooting off. The bone will travel 100 feet in whichever direction it was ravelling before exploding with a loud bang in a somewhat pretty yet short display of smouldering ashes. If a bonework hits a reasonably solid object it will detonate immediately. Anything within 5 feet of it\nwhen it explodes will take 1 point of fire damage. When the Bonework explodes, roll on the below tables for the pattern and colour of the exploded ashes."
  },
  {
    "id": "牛革鞭 BOVINE BULLWHIP",
    "name_zh": "牛革鞭",
    "name_en": "BOVINE BULLWHIP",
    "category_zh": "軍用武器（鞭），稀有Martial Weapon (Whip), Rare",
    "category_en": "",
    "desc_zh": "來自當地萬聖墓鎮工廠的最優質皮革長條被纏繞、扭曲並編織成一條 9 英尺長的鞭子，末端帶有一個小環狀鞭梢，揮舞時會發出響亮的劈啪聲。這條牛革鞭被視為具有靈巧與長武特性軍用武器。成功命中時造成 1D6 揮砍傷害。這把武器毫無隱蔽性可言。此外，持用者每天一次可以召喚一頭牛（見 VG p.207）。這頭牛會服從鞭子持用者發出的任何簡單口頭命令，例如移動或攻擊，並在 1 小時後消失。",
    "desc_en": "Long strands of the finest leather sourced from local Hallowgrave factories is wound, twisted and braided into a long 9 foot whip complete with a small looped cracker at the end that creates a loud crack when whipped around. This bullwhip is considered to be a martial weapon with the finesse and reach attribute. It inflicts 1D6 slashing damage on successful hits. There is nothing stealthy about this weapon. Additionally once per day the user may summon a Cow (VG p.207). The cow will obey any simple verbal commands issued by the wielder of the whip such as move or attack and will disappear after 1 hour."
  },
  {
    "id": "硫磺鐵棍 BRIMSTONE BAR",
    "name_zh": "硫磺鐵棍",
    "name_en": "BRIMSTONE BAR",
    "category_zh": "簡易武器（長棍），獨特",
    "category_en": "Simple Weapon (Quarterstaff), Unique",
    "desc_zh": "一根看似沉悶的 5 英尺長鐵棍，由單塊看起來像不斷冷卻的熔岩材料製成。偶爾會有發紅光的裂縫沿其長度開啟和閉合。鐵棍觸感總是溫暖，並帶有淡淡的硫磺味。硫磺鐵棍被視為免疫火焰傷害，並且是一把 versatile 武器，單手造成 1D6 鈍擊傷害，雙手造成 1D8 鈍擊傷害。鐵棍含有 5 發充能，不會自動恢復。充能只能通過將鐵棍放置在篝火或更高溫度的熱源中來恢復。每在熱源中放置一小時，鐵棍將恢復 1 發充能。進行攻擊時，使用者可以選擇消耗任意數量的充能。如果攻擊成功，鐵棍將對每個以此方式消耗的充能額外造成 1D6 火焰傷害。如果攻擊失敗，充能仍會被消耗。",
    "desc_en": "A seemingly dull 5 foot bar made from a single piece of what constantly looks like cooling lava. Occasionally red glowing cracks upon and close along its length. The bar is always warm to the touch and smells faintly of sulphur. The brimstone bar is considered immune to fire damage and is a versatile weapon, dealing 1D6 Bludgeoning damage with one hand or 1D8 with two hands. The bar contains 5 charges which do not replenish automatically. Charges can only be replenished by laying the bar in heat source of a bonfire or hotter. For each hour it lays within the heat source, the bar will regain 1 charge. When making an attack the user may choose to expend any number of charges. If the attack is successful the bar will inflict an additional 1D6 Fire damage for each charge expended this way. If the attack fails the charges are still used."
  },
  {
    "id": "牛環 BULL RING",
    "name_zh": "牛環",
    "name_en": "BULL RING",
    "category_zh": "奇物，稀有Wondrous Item, Rare",
    "category_en": "",
    "desc_zh": "這個巨大的褪色金環不是戴在手指或類似附肢上的。相反，它可以作為鼻環或耳環佩戴，並仍能獲得其增益。佩戴此物品時，你會長出一對很酷的、暗紅色的星界牛頭人角。除了是半透明的，這些角看起來和感覺都很自然。此外，你現在可以用你的角進行徒手打擊。如果命中成功，你可以造成 1D8 穿刺傷害加上你的力量調整值，而不是正常的徒手打擊鈍擊傷害。",
    "desc_en": "This large tarnished gold ring is not worn on a finger or similar appendage. Instead it may be worn as a either nose ring or ear ring and still gain its boon. While wearing this item you sprout a cool pair of dull red astral Minotaur horns. Aside from being semitransparent, the horns seemingly look and feel natural. Additionally you may now make unarmed strikes with your horns. If the hit is successful you may deal 1D8 Piercing damage plus your Strength modifier instead of the normal unarmed strike bludgeoning damage."
  },
  {
    "id": "屠夫的刀 BUTCHER’S KNIFE",
    "name_zh": "屠夫的刀",
    "name_en": "BUTCHER’S KNIFE",
    "category_zh": "簡易武器（匕首），獨特",
    "category_en": "Simple Weapon (Dagger), Unique",
    "desc_zh": "屠夫的刀是一把簡單的結實刀刃，壓入木製刀柄中。儘管有明顯的磨損，刀刃仍然鋒利無比，可以像切紙一樣輕易切開肉體。屠夫的刀在手中感覺很重；這是一件用來撕裂肉體和劈開骨頭的工具。這個目的的重量會嚇到一些人，但也會驅使另一些人前進。這把武器應被視為一把 +5 匕首。",
    "desc_en": "The butcher’s knife is a simple stout blade pressed into a wooden handle. The blade despite its obvious wear and tear is razor sharp and can easily cut through flesh as though it were paper. The Butcher’s knife\nfeels heavy in one’s hand; this is a tool for rending flesh and cracking through bones. The weight of this purpose will frighten some but drive others forward. This weapon should be treated as a +5 Dagger."
  },
  {
    "id": "糖果玉米片 CANDY CORN PIECES",
    "name_zh": "糖果玉米片",
    "name_en": "CANDY CORN PIECES",
    "category_zh": "貨幣（錢幣），常見Currency (Money), Common",
    "category_en": "",
    "desc_zh": "黃金應該被使用而不是浪費，白銀應該被鎖在地球最深處。這個奇異領域的當地貨幣是色彩鮮豔、味道甜美的糖果玉米片。由 100% 真糖製成，這些小點心可以在陰森廣場的商人骷髏頓那裡換取各種物品（或用作賄賂）。",
    "desc_en": "Gold should be used not squandered away and silver should be locked away on the deepest bowels of the earth. The local currency of this strange realm is the brightly coloured and sweet tasting Candy Corn Piece. Made from 100% real sugar these little delights can be traded for an assortment of items (or bribes) fro, Skelton the merchant in the spooky square."
  },
  {
    "id": "雕刻工具 CARVING TOOLS",
    "name_zh": "雕刻工具",
    "name_en": "CARVING TOOLS",
    "category_zh": "普通物品（工具），常見Normal Item (Tool), Common",
    "category_en": "",
    "desc_zh": "一套小型質樸的勺子和刀子，非常適合在所有東西上雕刻各種毛骨悚然的臉孔。擲一顆 D20 來決定這張臉有多恐怖（20 是恐怖至極的好）。",
    "desc_en": "A small set of rustic scoops and knives perfect for sculpting all manner of creepy faces into things. Roll a D20 to determine how creepy the face is (20 is terrifyingly good)."
  },
  {
    "id": "大釜水 CAULDRON WATER",
    "name_zh": "大釜水",
    "name_en": "CAULDRON WATER",
    "category_zh": "普通物品（消耗品），常見",
    "category_en": "Normal Item (Consumable), Common",
    "desc_zh": "這小瓶渾濁的棕色液體看起來相當噁心，裡面漂浮著小塊雜質。喝下這種液體味道絕對令人作嘔，並會讓你肚子痛。接下來的一小時，你剛喝進胃裡的液體會讓你口鼻不斷冒出霧氣。它像一小片潮濕的霧氣一樣在你周圍翻滾。這完全無害。",
    "desc_en": "This small glass bottle of murk brown liquid looks rather disgusting and has small chunks floating amidst it. Drinking this liquid tastes absolutely foul and leaves you with a bad tummy ache. For the next hour you have an unending flow of mist escaping from your mouth and nose from the liquid you just drank in your stomach. It billows around you like a small damp fog. It is completely harmless."
  },
  {
    "id": "折磨鎖鏈 CHAINS OF TORMENT",
    "name_zh": "折磨鎖鏈",
    "name_en": "CHAINS OF TORMENT",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "這副生鏽的黑色鎖鏈約 6 英尺長，散發著對痛苦的黑暗渴望。這是一件來自恐怖與酷刑黑暗時代遺留的物品。此物品用於束縛或綑綁生物和野獸。鎖鏈由一種無法破壞的材料製成，其鏈節無法分離。一旦這些鎖鏈被戴上，任何試圖篡改或掙脫其懷抱的行為都會導致鎖鏈慢慢收緊，將其受害者壓向死亡。只有將鎖鏈戴在生物身上的人才能安全地移除它們。",
    "desc_en": "The chains of torment consist of a rusty black set of chain about 6 feet long and emanate a dark longing for pain. This is an item left over from a dark age of terror and torture. This item is used to restrain or tie up creatures and beasts. The chain is made from an unbreakable material and its links cannot be separated. Once these chains have been placed on, any attempt to tamper or free oneself from their embrace will cause the chain to slowly tighten crushing its victim towards death. Only the one whom placed the chains on a creature can remove them safely."
  },
  {
    "id": "鏈提燈 CHAIN-O-LANTERN",
    "name_zh": "鏈提燈",
    "name_en": "CHAIN-O-LANTERN",
    "category_zh": "奇物，稀有 Wondrous Item, Rare",
    "category_en": "",
    "desc_zh": "一個中等大小的黑色鑄鐵南瓜燈，懸掛在一條短鏈上。轉動側面的小旋鈕會打開尖牙下顎，露出裡面一盞小型的排列整齊的燈光。提燈以溫暖的橙色光芒照亮周圍區域（15 英尺）。使你能看穿隱形，有時還能瞥見未被察覺的事物。",
    "desc_en": "A medium Sized black cast iron jack-o-lantern swinging from a short chain. Turning the small knob on the side will open the sharp toothed jaw revealing a small arrange light inside. The lantern illuminates the immediate area (15ft) in a warm orange glow. Allows you to see through invisibility and sometimes catch glimpses of the unseen."
  },
  {
    "id": "奇美拉詛咒 CHIMERA CURSE",
    "name_zh": "奇美拉詛咒",
    "name_en": "CHIMERA CURSE",
    "category_zh": "附魔物品，稀有Enchantment Item, Rare",
    "category_en": "",
    "desc_zh": "一張破舊的卷軸，用一條亮黃色的繩子綁著。這是一次性附魔，可用於附魔一把近戰或遠程武器。用此詛咒附魔武器會使其散發出微弱的魔法痕跡並發出微弱的黃光。用受此詛咒附魔的物品造成傷害時，命中會額外造成 1D4 力場傷害，而當時持有此武器的生物會失去相同數值的生命值。這些武器不需要調適。",
    "desc_en": "A tattered scroll bound with a bright yellow cord. This is a single use enchantment that can be used to enchant one melee or ranged weapon. Enchanting a weapon with this curse causes it to emanate faint traces of magic and give off a slight yellow glow. Dealing damage with an item enchanted by this curse deals an extra 1D4 Force Damage on a hit and the creature holding this weapon at the time loses that same amount of hit points. These weapons do not require attuning."
  },
  {
    "id": "密文齒輪 CIPHERS",
    "name_zh": "密文齒輪",
    "name_en": "CIPHERS",
    "category_zh": "奇物，獨特 (6)Wondrous Item, Unique (6)",
    "category_en": "",
    "desc_zh": "這是一把奇怪的鑰匙。它是一個中等大小、沉重的齒輪，其冷灰色金屬主體周圍恰好有 26 個齒。每個齒面上都印有一個字母。必須收集這些密文齒輪才能打開返回凡人領域的傳送門。",
    "desc_en": "This is an odd key. It is a medium sized heavy Cog with exactly 26 teeth surrounding its cold grey metallic body. Each tooth face has a single letter imprinted into it. These ciphers must be collected in order to open the gateway back to the mortal realms."
  },
  {
    "id": "發條箭 CLOCKWORK ARROWS",
    "name_zh": "發條箭",
    "name_en": "CLOCKWORK ARROWS",
    "category_zh": "武器（箭），非普通Weapon (Arrow), Uncommon",
    "category_en": "",
    "desc_zh": "這些輕質木箭經過改裝，在箭頭正下方加入了一個彈簧加載的機械裝置。使用發條箭成功命中目標時，發條裝置會啟動，將箭頭更深地彈入目標體內，造成進一步傷害。使用發條箭擲傷害時，除了常規傷害外，額外擲 1D4 穿刺傷害。與傳統箭矢不同，拔出目標體內的發條箭需要通過 DC10 的力量檢定。當發條箭從目標身上移除時，機械裝置會損壞，使箭矢變得無用且無法修復。",
    "desc_en": "These lightweight wooden arrows have been modified to incorporate a spring loaded mechanism located just below the arrow head. On a successful hit with a Clockwork Arrow the clockwork mechanism activates, springing the arrow head deeper into the target causing further damage. When rolling for damage with a Clockwork arrow roll an additional 1D4 Piercing Damage in addition to the regular damage. Unlike traditional arrows, Clockwork Arrows require a DC10 Strength check to pull out of the target. When a Clockwork Arrow is removed from a target, the mechanism breaks leaving the arrow useless and unrepairable."
  },
  {
    "id": "發條盾 CLOCKWORK SHIELD",
    "name_zh": "發條盾",
    "name_en": "CLOCKWORK SHIELD",
    "category_zh": "護甲（盾牌），非普通Armor (Shield), Uncommon",
    "category_en": "",
    "desc_zh": "這面設計複雜的盾牌，在外行人看來就像一堆齒輪和齒輪亂七八糟地撞在一起，形成一面粗糙的金屬盾牌，大小與常規鳶形盾相當，但重得多。儘管外觀如此，發條盾完全能像常規盾牌一樣運作，為持用者的 AC 提供 +2 加值。此外，發條盾的持用者可以在其回合中消耗一個附贈動作來啟動盾牌的機械裝置。啟動機械裝置後，齒輪開始緩慢轉動，發出嘎吱聲。將啟動的盾牌底部朝下猛擊地面，盾牌會迅速展開成一個大型金屬路障。展開的路障可以作為另一個附贈動作重新折疊起來。展開時，盾牌足夠大，足以讓一個中型生物完全躲在其後，獲得全身掩護。盾牌本身現在具有 18 AC 和 30 生命值。一個完美的便攜式路障，適用於所有遭遇戰和圍城戰。佩戴或攜帶時，此盾牌會使所有潛行檢定處於劣勢。",
    "desc_en": "This intricately designed shield, appears to the untrained eye as a bulky mass of cogs and gears bashed together to form a crude metal shield about the size of a regular kite shield but much heavier. Despite its appearance the clockwork shield fully works as a regular shield providing a +2 to its wielders AC. In addition the wielder of the clockwork shield may expend a bonus action on their turn to activate the shields mechanism. Upon activating the mechanism the cogs and gears begin to creak as they turn slowly. Slamming the activated shield into the ground point first, the shield rapidly unfolds out into a large metal barricade. The unfolded barricade can be folded back up as another bonus action. While unfolded the shield is large enough for up to one medium creature to completely hide behind with full cover. The shield itself now has an AC of 18 and 30 Hit Points. A perfect portable barricade for all encounters and sieges. The shield imposes disadvantages on all stealth checks while being worn or carried."
  },
  {
    "id": "小丑錘 CLOWN HAMMER",
    "name_zh": "小丑錘",
    "name_en": "CLOWN HAMMER",
    "category_zh": "簡易武器（棍棒），非普通",
    "category_en": "Simple Weapon (Club), Uncommon",
    "desc_zh": "類似一個超大號的玩具錘，小丑錘是學習現實世界有多危險的完美安全武器。用這種輕型近戰武器成功命中只會造成 1 點鈍擊傷害。此外，成功命中時，擲一顆 D100，擲出 100 時，該攻擊改為造成 100 點鈍擊傷害。擊中東西時會發出有趣的吱吱聲。",
    "desc_en": "Resembling an oversized toy hammer, the clown hammer is a perfectly safe weapon for learning how dangerous the real world is. A successful hit with this light melee weapon will only inflict 1 Bludgeoning damage. Additionally on a successful hit, roll a D100, on a roll of 100 the attack instead inflicts 100 Bludgeoning damage. It makes a fun squeaky noise when it hits things."
  },
  {
    "id": "小丑鞋 CLOWN SHOES",
    "name_zh": "小丑鞋",
    "name_en": "CLOWN SHOES",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "這些鮮紅色且顯眼得令人討厭的閃亮鞋子總是比新的生物腳型大上好幾號。穿著時，它們每走幾步就會發出尷尬的吱吱聲，就像踩在吱吱作響的玩具上一樣。穿著這些鞋子時，該生物在潛行檢定上處於劣勢，並且除非視線被完全遮蔽，否則無法躲藏。此外，穿著這些鞋子時，該生物可以消耗一個反應動作，使 10 英尺內的一個目標生物下一次進行的攻擊檢定處於劣勢（他們也應該說一個討厭的笑話）。最後，本回合已執行疾走動作的生物，如果他們在整個第一次疾走動作期間都穿著這些鞋子，則可以在本回合再執行一次疾走動作。",
    "desc_en": "These bright red and obnoxiously obvious shiny shoes are always several sizes to big even after adjusting to a new creatures foot size. When being worn they let out awkward squeaks every few steps as if walking on a squeaky toy. While wearing these shoes, the creature has disadvantage on Stealth checks and cannot hide unless completely obscured from sight. Additionally while wearing these shoes the wearer may expend a reaction to impose disadvantage on the next attack a target creature within 10 feet would make (they should make an obnoxious joke as well). Finally a creature that has taken a dash action this turn may make an additional dash action this turn if they are wearing these shoes for the entirety of the first dash action."
  },
  {
    "id": "百袋大衣 COAT OF MANY POCKETS",
    "name_zh": "百袋大衣",
    "name_en": "COAT OF MANY POCKETS",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "一件破爛的黑棕色外套，看起來歷經滄桑。它散發出一些奇怪而糾纏的魔法，彷彿僅靠一根細線勉強維持。仔細觀察，這件破爛的斗篷實際上完全由口袋製成。數百個不同大小的口袋全部縫合在一起，粗略形成一件斗篷的形狀。每個口袋都連接到一個統一的下層次元，可以存儲任何能穿過口袋開口而不撕裂口袋或內部足夠鋒利以切割內部的物體。活物在下層次元中無法呼吸，最終會窒息。你必須知道次元裡有什麼才能從口袋中取出它。每一個口袋都通向同一個下層次元，因此你可以從任何一個口袋中取出物品，無論它最初存放在哪個口袋裡。無論次元內存儲了多少東西，這件大衣的重量始終不變。撕破或摧毀任何口袋會導致一個通往星界位面的傳送門出現，吞噬附近的一切。",
    "desc_en": "A tattered black and brown coat that looks like it has seen far better days. It emanates some strange and tangled magic as if it is barely held together by a single thread. On closer inspection the tattered cloak is actually entirely made out of pockets. Hundreds of different sized pockets all sewn together to make the rough shape of a clock. Each pocket links to a unified sub dimension that can store any object that get fit through the pockets opening without ripping the pocket or being sharp enough to cut the inside apart. Living objects will not be able to breath in the sub dimension and will eventually suffocate. You must know what is in the sub dimension to be able to pull it out of a pocket. Each and every pocket leads to the same sub dimension and as such you can remove an item from any of the pockets no matter which one it was stored in. The coat is always the same weight no matter how much is stored in the sub dimension. Ripping apart or destroying any pockets will cause a portal to the astral plane to appear, consuming anything near it."
  },
  {
    "id": "腐蝕之血 CORROSIVE BLOOD",
    "name_zh": "腐蝕之血",
    "name_en": "CORROSIVE BLOOD",
    "category_zh": "普通物品，非普通Normal Item, Uncommon",
    "category_en": "",
    "desc_zh": "閃爍著青銅光澤的液體在方形的玻璃瓶內不自然地冒泡和沸騰，儘管瓶子本身沒有移動或產生熱量。瓶內的液體是一種從普通鏽蝕怪血液中提取的濃縮化合物。當液體被倒在金屬材料或物體上時，它會立即開始腐蝕並侵蝕金屬。該液體只影響金屬。一瓶的劑量足以摧毀任何單一非魔法金屬武器，或 20 枚金屬彈藥，或最多 2 x 2 平方英尺、1 英寸厚的金屬板或牆壁（或任何類似體積的組合）。液體侵蝕金屬後，只剩下的一堆生鏽的金屬碎屑。",
    "desc_en": "The shimmering bronze liquid appears to unnaturally bubble and boil inside the square glass bottle despite making no movement or heat. The liquid inside the bottle is a concentrated compound derived from the blood of a common rust monster. When the liquid is poured onto a metallic material or object it instantly begins to corrode and eat away at the metal. The liquid only affects metal. One bottle is enough to destroy any single non magical metal weapon or 20 metal ammunition or up to 2 x2 square feet of 1 inch thick metal plating or wall (or any combination of similar volume). All that is left over after the liquid has eaten at the metal is a pile of rusty metal filings."
  },
  {
    "id": "屍體線圈 CORPSE COIL",
    "name_zh": "屍體線圈",
    "name_en": "CORPSE COIL",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "一個小型黃銅裝置，由眾多小齒輪和緊密纏繞的銅線圈組成。齒輪連接到線圈頂部的一個中央手柄。一個小皮質手柄讓人可以握住線圈，並用另一隻手轉動手柄。你可以在你的回合中花費一個動作來上緊線圈。它在積聚線圈中的電荷時會產生明亮的火花。一旦線圈充電完成，它將保留該單次電荷長達 1 分鐘。在那分鐘內，你可以使用一個動作並消耗該電荷來執行以下一項：對一個生物進行一次近戰攻擊，成功命中時造成 2D12 閃電傷害。強力電擊一個倒地（進行死亡豁免）的生物，並擲一顆 D20，結果為 10 或更高則該生物傷勢穩定；結果低於 10 則該生物離死亡更近一步（死亡豁免失敗次數 +1）。電擊一具死亡不超過 1 小時的屍體，並擲一顆 D20，結果高於 10 則該屍體會復活恰好 1 分鐘，結果低於 10 則什麼都不發生。",
    "desc_en": "A small brass contraption consisting of numerous small gears and cogs surrounded by a tightly wound copper coil. The cogs and gears are connected to a central handle on top of the coil. A small leather handle allows one to hold the coil and turn the handle with the other hand. You may spend an action on your turn to wind up the coil. It creates bright sparks as it builds up an electrical charge in the coil. Once the coil is charged it will retain that single charge for 1 minute. During that minute you may use an action and expend the charge to do one of the following. - Make a melee attack against a creature dealing 2D12 Lightning Damage on a successful hit. - Forcefully shock a downed (death saves) creature and roll a D20, on a 10 or higher the creature is stabilized on a roll of less than 10 the creature is put one step closer to death (+1 to failed death saves). - Shock a corpse that has been dead for no longer than 1 hour and roll a D20, on a roll higher than 10 the corpse is revived for exactly 1 minute, on a roll of less than 10 nothing happens."
  },
  {
    "id": "棉花糖蘋果酒 COTTON CANDY CIDER",
    "name_zh": "棉花糖蘋果酒",
    "name_en": "COTTON CANDY CIDER",
    "category_zh": "普通物品（消耗品），常見",
    "category_en": "Normal Item (Consumable), Common",
    "desc_zh": "這種可怕的罐裝飲料在那些只存在了幾世紀的新生恐怖存在中非常受歡迎。它的味道就像你把粗糖倒進杯子裡並溶解在糖漿中一樣。對任何正常生物來說都甜得難以忍受。飲用時需進行一次 DC10 的體質豁免。豁免成功則你能忍住不吐但感覺難受；豁免失敗則你會吐出 1D6 顆完整成形的糖果玉米片，並在接下來一小時內因胃痛而導致所有體質檢定自動失敗。",
    "desc_en": "This horrific tinned drink is incredibly popular with newer horrors that have only been around for a few centuries. It tastes like you have poured raw sugar into a cup and dissolved it in syrup. It is just too sweet for any normal being to handle. When drunken make a DC10 Constitution saving throw. On a successful save you keep it down and feel horrible about it. On a failed save you throw up 1D6 full formed Candy Corn Pieces and suffer from a stomach ache for the next hour resulting in automatically failing all Constitution checks."
  },
  {
    "id": "棉花糖玉米 COTTON CANDY CORN",
    "name_zh": "棉花糖玉米",
    "name_en": "COTTON CANDY CORN",
    "category_zh": "普通物品（消耗品），常見",
    "category_en": "Normal Item (Consumable), Common",
    "desc_zh": "將糖果玉米片磨成細粉，融化後纏繞在一根分叉的棍子上。由此產生的網狀球體帶有橙色色調，味道就像你想像中由糖製成的雲朵一樣。它是一種很好的零食，但不飽腹，總是讓你想要吃更多。",
    "desc_en": "Candy Corn Pieces are ground up into a fine powder before being melted down and spun around a forked stick. The resulting web like ball has an orange tinge to it and tastes what one would imagine a cloud made of sugar tastes like. It makes for a great snack but it isn’t filling and always leaves you wanting more to eat."
  },
  {
    "id": "鱷魚箭 CROCARROW",
    "name_zh": "鱷魚箭",
    "name_en": "CROCARROW",
    "category_zh": "武器（箭），非普通Weapon (Arrow), Uncommon",
    "category_en": "",
    "desc_zh": "這些簡單的彈簧箭矢以一套鋒利的鋸齒狀下顎取代了傳統的寬頭箭頭。該機構旨在確保即使射擊不完美，箭矢也能鎖定在目標上。當使用鱷魚箭與弓一起使用時，你在攻擊檢定上獲得 +3 加值，但弓的所有射程都減少到通常總量的四分之一（向下取整），這是因為箭矢的重量。",
    "desc_en": "These simple spring loaded arrows feature a set of sharp toothed jaws rather than a traditional broad head. The mechanism is designed to ensure that the arrow latches onto the target even with a less than perfect shot. When using a Crocarrow with a bow, you gain a +3 bonus to the attack roll, but all ranges for the bow are reduced to a quarter of their usual totals (rounded down) due to the weight of the arrow."
  },
  {
    "id": "鱷魚蛋 CROCODILE EGG",
    "name_zh": "鱷魚蛋",
    "name_en": "CROCODILE EGG",
    "category_zh": "夥伴寵物，稀有Companion Pet, Rare",
    "category_en": "",
    "desc_zh": "這是一顆象牙色的蛋，表面有溫和的凹凸圖案。如果小心照料，這顆蛋會在 2D4 天內孵化出一隻手掌大小的鱷魚，並可以根據官方規則成為寵物或夥伴。它具有普通鱷魚的屬性。",
    "desc_en": "This is an ivory coloured egg with a gentle bumpy pattern across its surface. If looked after carefully this egg hatches into a hand sized crocodile in 2D4 days and can become a pet or companion as set out in the official rules. It has the statistics of a regular croc."
  },
  {
    "id": "烏鴉蛋 CROW EGG",
    "name_zh": "烏鴉蛋",
    "name_en": "CROW EGG",
    "category_zh": "夥伴寵物，稀有Companion Pet, Rare",
    "category_en": "",
    "desc_zh": "這是一顆斑駁的藍棕色烏鴉蛋，大小如一塊小石頭。如果小心照料，這顆蛋會在 2D4 天內孵化出一隻可馴服的小型烏鴉幼鳥，並可以根據官方規則成為寵物或夥伴。它具有普通烏鴉的屬性。",
    "desc_en": "This is a speckled blue and brown crow’s egg about the size of a small rock. If looked after carefully this egg hatches into a tameable small sized crow hatchling within 2D4 days and can become a pet or companion as set out in the official rules. It has the statistics of a regular crow."
  },
  {
    "id": "結晶鱷魚眼淚 CRYSTALIZED CROCODILE TEARS",
    "name_zh": "結晶鱷魚眼淚",
    "name_en": "CRYSTALIZED CROCODILE TEARS",
    "category_zh": "奇物，極稀有Wondrous Item, Very Rare",
    "category_en": "",
    "desc_zh": "這些結晶的眼淚幾乎完全透明，大小不超過金桔。消耗一個動作，你可以將一滴眼淚扔到 60 英尺內的任何一點。當眼淚在該點著陸或撞擊到固體物體時，它會碎裂並瞬間釋放出季風般的水量。突然釋放的水量大約足以填滿一個直徑 50 英尺、深 20 英尺的圓形區域。如果沒有適當的容器來容納那麼多水，它將根據流體的正常規則高速向外氾濫。其力量足以將大型生物推開至少 20 英尺，或中型生物 30 英尺，或小型生物 40 英尺。",
    "desc_en": "These crystalized tears are nearly completely transparent and are no larger than a kumquat. Expending an action you may throw a tear at any point within 60 feet. When the tear lands at the point or impacts are solid object it shatters and instantly unleashes a monsoon of water. The amount of water suddenly unleased is roughly enough to fill a circle 50 feet in diameter and 20 feet deep. Without a proper container to house that much water it will flood outwards at high speed as per the normal rules of fluids. The force is great enough to push a large creature at least 20 feet or a medium creature 30 feet or a small creature 40 feet."
  },
  {
    "id": "再甦醒的詛咒 CURSE OF REAWAKENING",
    "name_zh": "再甦醒的詛咒",
    "name_en": "CURSE OF REAWAKENING",
    "category_zh": "普通物品（收藏品），獨特",
    "category_en": "Normal Item (Collectible), Unique",
    "desc_zh": "",
    "desc_en": ""
  },
  {
    "id": "獨眼巨人眼 CYCLOPS EYE",
    "name_zh": "獨眼巨人眼",
    "name_en": "CYCLOPS EYE",
    "category_zh": "奇物（法術源），稀有Wondrous Item (Source), Rare",
    "category_en": "",
    "desc_zh": "獨眼巨人眼是魔法使用者的噩夢。外觀上它看起來像一個黏糊糊的眼球，後面還掛著一些必要的神經，它有藍色的虹膜。由從獨眼巨人身上精心提取的眼睛製成，這個魔法源賦予使用者額外的能力。此物品被視為 +1 魔法源，必須與之調適。此物品賦予擁有者魔法能力，可以暫時透過獨眼巨人的眼睛進行觀察，無論它在使用者 60 英尺範圍內的任何地方。使用此能力時，使用者無法透過自己的眼睛視物，並被視為失明。",
    "desc_en": "The cyclops eye is a magic wielders best nightmare. Physically it looks like a sticky eye with some essential nerves hanging out of the back of it, it has a blue iris. Made from the carefully extracted eye of a cyclops, this magic source grants the user extra abilities. This item is considered a +1 Magic Source and must be attuned too. This item grants the owner the magical ability to temporarily look through the eye of the cyclops where ever it may be within 60 feet of the user. While using this ability the user cannot see through their own eyes and is considered blind."
  },
  {
    "id": "死亡棒 DEATH STICKS",
    "name_zh": "死亡棒",
    "name_en": "DEATH STICKS",
    "category_zh": "普通物品（消耗品），常見",
    "category_en": "Normal Item (Consumable), Common",
    "desc_zh": "一股令人作嘔的強烈煙草和乾草藥氣味從這些 3 英寸長的棕色棒狀物中飄出。死亡棒由一種相當強效的致命植物組合製成，當吸食或吸入時，會導致你幾乎立即昏倒。此效果會使你的心跳急遽減慢，讓你在所有但不包括最具洞察力的人眼中，呈現出死亡的樣貌和外觀。效果持續 1 小時，之後恢復意識。",
    "desc_en": "A sickeningly strong odour of smoke and dried herbs wafts from these 3 inch brown sticks. Death sticks are made from a rather potent combination of deadly plants and when smoked or inhaled will cause you to pass out near immediately. This effect will cause your heartbeat to slow right down giving you the likeness and appearance of death to all but the most knowledgeable eye. The effect lasts 1 hour before regaining consciousness."
  },
  {
    "id": "死亡花束 DEATHLY BOUQUET",
    "name_zh": "死亡花束",
    "name_en": "DEATHLY BOUQUET",
    "category_zh": "奇物，常見Wondrous Item, Common",
    "category_en": "",
    "desc_zh": "一束精心排列的枯死變黑的花朵，如果它們沒有死去，可能曾經非常漂亮。然而在萬聖域，它們是最常見的道歉禮物，骷髏頓儲備了大量，因為他知道它們是暢銷品。壓碎或撕毀一束死亡花束會導致 30 碼內所有標準/正常植被慢慢枯萎死亡。",
    "desc_en": "A well-arranged assortment of dead and blackened flowers that may have once looked very pretty had they not died. In the Hallow however they are the most common apology gift and Skelton stocks plenty of them knowing full well they are a best seller. Crushing a deathly bouquet or ripping it apart will cause all standard/normal vegetation within 30yards to slowly shrivel up and die."
  },
  {
    "id": "惡魔之鹽 DEMON SALT",
    "name_zh": "惡魔之鹽",
    "name_en": "DEMON SALT",
    "category_zh": "普通物品，非普通Normal Item, Uncommon",
    "category_en": "",
    "desc_zh": "此物品包含一個由簡單染色皮革製成的小深紅色袋子，用黑色束口繩緊緊封閉。打開袋子會露出細膩的黃色鹽粒，聞起來有濃厚的硫磺和硫磺石氣味。這種細膩的黃色粉末對於任何愚蠢到去吃它的人來說，味道像一種特別煙燻的鹽。惡魔之鹽是一種由怪物或瘋子食用的致幻類食物。在休息或睡覺前食用一小撮惡魔之鹽，會導致該生物在睡眠或冥想時生動地、幾乎如現實般夢見他們最黑暗的記憶。雖然是一次震撼的經歷，但對於回憶被壓抑的記憶可能相當有幫助。這是一種不常見的物品，因為其配方是高度珍視的商業機密。",
    "desc_en": "This item consists of a small dark red pouch made from simple stained hide.  It is held tightly closed by black drawstrings. Opening the pouch reveals fine granules of yellow salt that smells thickly of sulphur and brimstone. The fine yellow powder tastes like an extra smoky salt for anyone foolish enough to eat it. Demon Salt is a type of Hallucinogenic food consumed by monsters or the insane. Consuming a small pinch of Demon Salt before resting or sleeping causes the creature to have vividly almost lifelike nightmares of their darkest memories while they sleep or meditate. Although a shocking experience, it can be quite helpful in remembering suppressed memories. It is an uncommon item to come by as the recipe is a highly valued trade secret."
  },
  {
    "id": "邪焰之息 EMBER OF EVIL",
    "name_zh": "邪焰之息",
    "name_en": "EMBER OF EVIL",
    "category_zh": "奇物，極稀有Wondrous Item, Very Rare",
    "category_en": "",
    "desc_zh": "一塊粗糙的漆黑石頭，包裹著變換不定的紅色光流。餘燼觸感灼熱，並散發出一種吸引你靠近的黑暗力量。石頭足夠脆弱，可以通過用力擠壓將其壓碎。如果一個生物壓碎了這塊餘燼，它會向外爆炸，形成一團濃密的黑霧。紅色光流會纏繞在目標生物身上，束緊其身體。此物品的效果持續 1 分鐘。當一個生物處於此物品的效果下時，他們免疫所有傷害和狀態，並且在所有攻擊和傷害檢定上獲得 +5 加值。在此期間，該生物會兇猛地無情攻擊，如果沒有敵人可攻擊，該生物將攻擊自己的盟友。當此效果消失時，在餘燼效果期間對該生物造成的任何傷害將一次性全部作用於該生物，因為發光的光流離開了它的身體。",
    "desc_en": "A small rough pitch black stone wrapped in shifting tendrils of red light. The ember is hot to the touch and exudes a dark power that beckons you to it. The stone is weak enough that it can be crushed by squeezing it firmly. If a creature crushes this ember it will explode outward in a thick cloud of dark fog. The red tendrils will wrap themselves around the target creature constricting around its body.  The effect of this item lasts 1 minute. While a creature is under the effects of this item they are immune to all damage and conditions and gain a +5 to all attack and damage roles. During this time the creature will viciously attack relentlessly, if there are no enemies to attack the creature will attack its own allies. When this effect wears off, any damage that was dealt to the creature while under the effects of the ember will be dealt to the creature all at once as the glowing tendrils leave its body."
  },
  {
    "id": "無盡火水 ENDLESS FIRE WATER",
    "name_zh": "無盡火水",
    "name_en": "ENDLESS FIRE WATER",
    "category_zh": "奇物，極稀有Wondrous Item, Very Rare",
    "category_en": "",
    "desc_zh": "裝在一個帶有金屬蓋的小深棕色瓶子裡，所謂的無盡火水即使密封嚴實，也總是散發出溫和的辛辣氣味。然而，打開瓶子時，你可能需要更換你的嗅覺，因為大量的香料會立即充滿周圍的空氣。喝下這種濃稠的油狀液體後，一個生物必須進行 DC20 的體質豁免。生物可以選擇自動失敗。失敗時，該生物將遭受等於 20 減去其豁免檢定結果的火焰傷害，並立即開始向他們面對的任何方向噴出 10 英尺錐形範圍的熱火焰。儘管被稱為無盡火水，但此效果實際上會在大約 1 分鐘後結束。任何在火焰中或被火焰觸及的生物必須進行 DC15 的敏捷豁免，失敗則遭受 2D6 火焰傷害，成功則傷害減半。",
    "desc_en": "Contained within a small dark brown bottle and sealed with metal cap the so called endless fire water always exudes a soft spicy smell despite being sealed tight. Upon opening the bottle however one might need to replace their sinuses given how much spice fills the immediate air space. Upon drinking the thick oily liquid a creature must make a DC20 Constitution saving throw.  A creature may choose to fail. On a failure the creature will suffer fire damage equal to 20 minus their saving throw and will immediately begin belching hot flames in a 10 foot cone in whatever direction they are facing. Despite being called endless fire water, this effect will actually end in about 1 minute. Any creature caught in or entering the flames must make a DC15 Dexterity saving throw or suffer 2D6 Fire Damage or half as much on a successful save."
  },
  {
    "id": "眼球棒 EYEBALL ON A STICK",
    "name_zh": "眼球棒",
    "name_en": "EYEBALL ON A STICK",
    "category_zh": "普通物品（消耗品），常見",
    "category_en": "Normal Item (Consumable), Common",
    "desc_zh": "來自食人魔美食的最愛小吃，樸素的眼球棒正如其名。它只是一根串在棍子上的隨機生物眼球。味道很好，而這甚至不是最詭異的部分。當眼球被吃掉時，該生物會看到一個短暫的幻象，看到該眼球在消亡前大約最後 6 秒所看到的景象。",
    "desc_en": "A favourite snack from ogre cuisine, the humble eyeball on a stick is exactly what it sounds like. It is just a random eyeball from a creature on a stick. It tastes quite good and that’s not even the creepiest part. When the eyeball is eaten, the creature suffers a short vision, seeing approximately the last 6 seconds of what the eyeball saw before meeting its demise."
  },
  {
    "id": "假花 FAKE FLOWER",
    "name_zh": "假花",
    "name_en": "FAKE FLOWER",
    "category_zh": "普通物品，稀有Normal Item, Rare",
    "category_en": "",
    "desc_zh": "",
    "desc_en": ""
  },
  {
    "id": "假牙 FALSE TEETH",
    "name_zh": "假牙",
    "name_en": "FALSE TEETH",
    "category_zh": "簡易武器，常見Simple Weapon, Common",
    "category_en": "",
    "desc_zh": "這套 100% 真正的吸血鬼牙齒完全可調節，適合任何生物的嘴巴，無論大小，或者根本沒有牙齒！佩戴此物品將允許使用者用造成 1D4 穿刺傷害的撕咬攻擊取代其徒手打擊。",
    "desc_en": "This set of 100% real vampires teeth is fully adjustable to fit into any creatures mouth be it big or small or have no teeth at all! Wearing this item will allow the user to replace their unarmed strike with a bite attack that inflicts 1D4 Piercing Damage on a successful hit."
  },
  {
    "id": "邪能詛咒 FEL CURSE",
    "name_zh": "邪能詛咒",
    "name_en": "FEL CURSE",
    "category_zh": "附魔物品，稀有Enchantment Item, Rare",
    "category_en": "",
    "desc_zh": "一張破舊的卷軸，用一條亮綠色的繩子綁著。這是一次性附魔，可用於附魔一把近戰或遠程武器。用此詛咒附魔武器會使其散發出微弱的魔法痕跡並發出微弱的綠光。用受此詛咒附魔的物品造成傷害時，命中會額外造成 1D4 毒素傷害，而當時持有此武器的生物會失去相同數值的生命值。這些武器不需要調適。",
    "desc_en": "A tattered scroll bound with a bright green cord. This is a single use enchantment that can be used to enchant one melee or ranged weapon. Enchanting a weapon with this curse causes it to emanate faint traces of magic and give off a slight green glow. Dealing damage with an item enchanted by this curse deals an extra 1D4 Poison Damage on a hit and the creature holding this weapon at the time loses that same amount of hit points. These weapons do not require attuning."
  },
  {
    "id": "易燃紙 FICKLE FLAME",
    "name_zh": "易燃紙",
    "name_en": "FICKLE FLAME",
    "category_zh": "奇物，常見Wondrous Item, Common",
    "category_en": "",
    "desc_zh": "一張無趣的乾燥羊皮紙碎片，沒有可見的標記或與普通羊皮紙不同的異常之處。然而，當這張羊皮紙與自身或粗糙表面摩擦 1 分鐘時，它會在一角燃起一小簇火焰。火焰將提供 10 英尺的半徑微光照明，持續 1 分鐘，然後完全燒盡。",
    "desc_en": "A small uninteresting scrap of dry parchment with no visible markings or unusual differences to that of regular parchment. However when this parchment is rubbed against itself or a course surface for 1 minute it sparks to life with a small flame at one corner of the parchment. The flame will provide 10 feet of dim light for 1 minute before burning out completely."
  },
  {
    "id": "新鮮南瓜 FRESH PUMPKIN",
    "name_zh": "新鮮南瓜",
    "name_en": "FRESH PUMPKIN",
    "category_zh": "普通物品（消耗品），常見",
    "category_en": "Normal Item (Consumable), Common",
    "desc_zh": "它包含一個從南瓜之王地裡直接摘來的大橙色南瓜。你還期待什麼呢？",
    "desc_en": "It consists of a single large orange pumpkin straight from the Pumpkin King[s patch. What else were you expecting?"
  },
  {
    "id": "炸手指 FRIED FINGERS",
    "name_zh": "炸手指",
    "name_en": "FRIED FINGERS",
    "category_zh": "普通物品（消耗品），常見",
    "category_en": "Normal Item (Consumable), Common",
    "desc_zh": "這根一英尺長的手指來自什麼生物，沒人願意告訴你。但它相當細長，略帶毛髮，而且圍繞細骨咀嚼起來很費勁。吃完一根炸手指後，擲一顆 D100，擲出 100 時，你會聽到一個空靈的聲音問你是否想來份三明治（DM 決定接下來發生什麼）。否則什麼都不會發生，你享受了你的手指。",
    "desc_en": "What creature this foot long finger came from no one is willing to tell you. But it is rather slender, slightly hairy and tough to eat around the thin bones. After finishing a Fried Finger roll a D100, on a roll of 100 you hear an ethereal voice ask if you would like to be made a sandwich (DM decides what happens next). Otherwise nothing happens and you enjoyed your finger."
  },
  {
    "id": "漏斗網蛋糕 FUNNEL WEB CAKE",
    "name_zh": "漏斗網蛋糕",
    "name_en": "FUNNEL WEB CAKE",
    "category_zh": "普通物品（消耗品），常見",
    "category_en": "Normal Item (Consumable), Common",
    "desc_zh": "一道由真正的漏斗網蜘蛛製成的美味油炸食品。最後撒上細緻的骨粉，這款蛋糕肯定會成為所有午夜派對的熱門。如果你能設法吃下這個蛋糕，你能感覺到昆蟲在皮膚下爬行的奇怪感覺。完全消耗此蛋糕的生物獲得蛛行術能力，持續 1 小時。",
    "desc_en": "A delectable fried dish made from real funnel web spiders. Finished with a fine sprinkling of bone powder, this cake is sure to be a sure hit for all midnight parties. If you can manage to stomach this cake you can feel the strange sensation of insects crawling under your skin. Creatures that fully consume this cake gain the Spider Climb ability for 1 hour."
  },
  {
    "id": "紳士手杖 GENTLEMEN’S CANE",
    "name_zh": "紳士手杖",
    "name_en": "GENTLEMEN’S CANE",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "這根結實的手杖打磨得如月光般閃亮，並以一個小型紅色水晶球作為握柄。手杖本身由樹妖樹僕製成，水晶球則由同一棵樹的結晶血液製成。用力將手杖敲擊地面會使紅色水晶球從內部發光，以深紅色調照亮周圍 15 英尺區域。再次敲擊手杖會熄滅光芒。",
    "desc_en": "This sturdy walking can is polished to a moonlit shine and features a small red crustal orb as the handle. The cane itself is made from a Jubokko tree and the orb is made from the crystalized blood of the same tree. Tapping the cane on the ground firmly causes the red orb to glow from within, illuminating a 15ft area around in in a deep red hue of light. Tapping the cane again will extinguish the light."
  },
  {
    "id": "鬼魅詛咒 GHOSTLY CURSE",
    "name_zh": "鬼魅詛咒",
    "name_en": "GHOSTLY CURSE",
    "category_zh": "附魔物品，稀有Enchantment Item, Rare",
    "category_en": "",
    "desc_zh": "一張破舊的卷軸，用一條亮白色的繩子綁著。這是一次性附魔，可用於附魔一把近戰或遠程武器。用此詛咒附魔武器會使其散發出微弱的魔法痕跡並發出微弱的白光。用受此詛咒附魔的物品造成傷害時，命中會額外造成 1D4 冰凍傷害，而當時持有此武器的生物會失去相同數值的生命值。這些武器不需要調適。",
    "desc_en": "A tattered scroll bound with a bright white cord. This is a single use enchantment that can be used to enchant one melee or ranged weapon. Enchanting a weapon with this curse causes it to emanate faint traces of magic and give off a slight white glow. Dealing damage with an item enchanted by this curse deals an extra 1D4 Cold Damage on a hit and the creature holding this weapon at the time loses that same amount of hit points. These weapons do not require attuning."
  },
  {
    "id": "黏稠袋 GLUTINOUS BAG",
    "name_zh": "黏稠袋",
    "name_en": "GLUTINOUS BAG",
    "category_zh": "奇物，稀有Wondrous Item, Rare",
    "category_en": "",
    "desc_zh": "此物品包含一個破爛的肩背包，看起來像是用十幾種不同的破布材料拼湊而成。這個袋子沒有背帶，沒有扣環或拉鍊來保持閉合。唯一的開口位於袋子的正面，在兩排縫在布料上的老化黃色尖牙之間，形狀像一個咧開笑的嘴。沒有其他方法可以打開袋子。黏稠袋不喜歡為任何人翻找其內部而打開。事實上，這個袋子除了食物外，並不真正在裡面儲存任何東西。黏稠袋有三發充能。擁有者可以消耗一發充能，讓黏稠袋創造並吐出使用者想要的、袋子曾經吃過的任何食物。該食物/菜餚與袋子吃掉原件時一模一樣。一旦袋子吃過一種食物，只要它有充能，就可以無限複製它。要恢復充能，必須餵給袋子一頓豐盛的正餐份量的食物。它最喜歡的食物是甜餡餅和蛋糕。",
    "desc_en": "This item consists of a tattered shoulder bag that looks like it has been patched together from a dozen different rag like materials. The bag has no strap, nor clasp or zipper keeping it closed. The only opening lies at the front of the bag between two rows of aged yellow fangs that have been sewn onto the fabric in the shape of a grinning mouth. There is no other way to open the bag. The Glutinous bag doesn’t like to open for anyone to rummage around its insides. In fact the bag doesn’t really store anything inside it except for food. The glutinous bag has three charges. An owner may expend a charge to have the Glutinous Bag create and spit out any food the user wants that the bag has eaten before. The food/dish is an exact replica as it was when the bag ate the original. Once the bag has eaten a food it can replicate it over and over as long as it has charges. To regain charges the bag must be fed a hearty meal sized amount of food. Its favourite type of food is sweet tarts and cake."
  },
  {
    "id": "高級神秘南瓜盒 GREATER MYSTERY PUMPKIN BOX",
    "name_zh": "高級神秘南瓜盒",
    "name_en": "GREATER MYSTERY PUMPKIN BOX",
    "category_zh": "普通物品（新奇物品），非普通",
    "category_en": "Normal Item (Novelty), Uncommon",
    "desc_zh": "這是一個新奇物品，玩家有機會獲得如表所示的隨機獎品。打開盒子並擲一顆 D20 來看你得到什麼。高級神秘南瓜盒有更高的機率獲得更好的獎勵，並且總是保證一個有用的獎品。\n擲骰\t物品\n1\t無頭騎士搖頭娃娃 南瓜頭\n2-3\t一整盒蛾\n4-5\t一根大骨頭\n6-7\t血酒\n8-9\t木樁\n10-11\t毒蘋果\n12-13\t新鮮出爐的南瓜餅乾\n14-16\t南瓜炸彈\n17\t餐館 20 CCP 優惠券\n18\t蜘蛛蛋\n19\t40 個糖果玉米片\n20\t生命血護符",
    "desc_en": "This is a novelty item in which players have a chance of getting a random price as shown in the table. Open the box and roll a D20 to see what you get. A greater mystery pumpkin box has a higher chance of getting better rewards and always guarantees a useful prize."
  },
  {
    "id": "石像鬼粉 GROUND GARGOYLE",
    "name_zh": "石像鬼粉",
    "name_en": "GROUND GARGOYLE",
    "category_zh": "奇物，稀有Wondrous Item, Rare",
    "category_en": "",
    "desc_zh": "這個小黑袋含有一種灰色沙子，由不再依附於這個世界的石像鬼風化碎石製成。將這種細粉末灑在活體生物上會慢慢將其變成石頭，永久石化。可以通過移除詛咒來結束此效果。將這種粉末灑在石像上會暫時使其復活。建議處理此粉末時戴上手套。",
    "desc_en": "This small black pouch contains a grey sand made from the crumbling stone of gargoyles who are no longer attached to this world. Sprinkling this fine powder onto a living creature will slowly turn it to stone petrifying it permanently. This effect can be ended by removing the curse. Sprinkling this powder on a stone statue will temporarily bring it to life. It is advised to wear gloves when handling this powder."
  },
  {
    "id": "妖精翅膀粉 GROUND PIXIE WINGS",
    "name_zh": "妖精翅膀粉",
    "name_en": "GROUND PIXIE WINGS",
    "category_zh": "奇物，稀有Wondrous Item, Rare",
    "category_en": "",
    "desc_zh": "這瓶稀有粉末在瓶中閃閃發光。它由萬聖域外圍的捕捉者和獵人捕獲的真正妖精翅膀製成。將此瓶的內容物灑在一個生物或自己身上，會賦予你飛行的能力，持續 1 小時後失效。它非常難以獲得。每瓶只夠一個生物或人使用。",
    "desc_en": "This rare powder sparkles in its vial. It is made from real pixie wings caught by the outlying rappers and hunters of the Hallow. Sprinkling the contents of this vial onto a creature or oneself will give you the gift of flight for 1 hour before wearing off. It is very hard to come by. Each vial only has enough for one creature or person."
  },
  {
    "id": "火藥鼠 GUNPOWDER RAT",
    "name_zh": "火藥鼠",
    "name_en": "GUNPOWDER RAT",
    "category_zh": "夥伴寵物，極稀有Companion Pet, Very Rare",
    "category_en": "",
    "desc_zh": "萬聖墓鎮早期動亂充斥街頭時遺留下來的極稀有物，火藥鼠是早期噩夢般實驗研究的結果。這隻小型、聞起來有煙燻味、煤灰色的老鼠看起來大多正常，除了那條相當易燃的引信尾巴。火藥鼠沿其毛髮產生強效的火藥濃縮物，當它們的尾巴被點燃時，只需要 12 秒就會爆炸。別擔心，這些老鼠完全不受傷害，並且免疫所有火焰傷害或爆炸造成的傷害，事實上它們喜歡爆炸，當老鼠們有機會向凡人報復時很有趣。當一隻火藥鼠爆炸時，所有在 20 英尺半徑球體內的生物必須進行 DC12 的敏捷豁免，失敗則遭受 8D6 火焰傷害，成功則傷害減半。一隻火藥鼠需要 5 天時間才能重新長出火藥毛皮。老鼠不能攻擊，但會通過其主人的口頭命令移動，移動速度為 30 英尺。",
    "desc_en": "A very rare leftover from the early days of Hallowgrave, when civil unrest flooded the streets, the gunpowder rat is the result of early nightmarish experimental research. This small smoky smelling, soot coloured rat looks mostly normal if not for the fuselage tail that is quite flammable. Gunpowder rats produce potent concentrations of gunpowder along their fur hairs and when their tail it only takes 12 seconds before it explodes. Don’t worry the rats are completely unharmed and impervious to all fire damage or damaged caused through explosions, in fact they love exploding, it’s fun when the rats get to take some revenge on the mortals for a change. When a gunpowder rat explodes all creatures within a 20 foot radius sphere must make a DC12 Dexterity saving throw or be dealt 8D6 Fire damage on a failed save or half as much on a successful one. A gunpowder rat takes 5 days to regrow its gunpowder fur coat. The rat cannot attack but will move through verbal commands of its owner with a movement speed of 30ft."
  },
  {
    "id": "聖化戰斧 HALLOWED AXE",
    "name_zh": "聖化戰斧",
    "name_en": "HALLOWED AXE",
    "category_zh": "軍用武器（戰斧），非普通",
    "category_en": "Martial Weapon (Battle-axe), Uncommon",
    "desc_zh": "一把普通的雙刃戰斧，斧頭形狀如同鋒利的蝙蝠。它有一層啞光黑色塗料，上面沾了一點乾涸的血跡。這把斧頭是 +1 戰斧，揮動時會發出蝙蝠的尖嘯聲。",
    "desc_en": "A common double sided battle axe with its heads shaped into that of razor sharp bats. It has a matt black coat of paint with a little dried blood. This axe is a +1 Battle Axe and when swung around it makes the sound of screeching bats."
  },
  {
    "id": "聖化短弓 HALLOWED BOW",
    "name_zh": "聖化短弓",
    "name_en": "HALLOWED BOW",
    "category_zh": "簡易武器（短弓），非普通",
    "category_en": "Simple Weapon (Shortbow), Uncommon",
    "desc_zh": "一把普通的短弓，由墮落者的肢體和粗陋的弓弦製成。其工藝看似粗糙，但就其使用的材料而言實際上相當可靠。這是一把 +1 短弓。從這把弓射出的箭矢會在空中發出高音尖叫。",
    "desc_en": "A common Short Bow fashioned from limbs of the fallen and guttural strings. The work appears gnarly but is actually quite sound for its use of materials. This is a +1 Short Bow. Firing an arrow from this bow will cause it to emanate a high pitch scream as it flies through the air."
  },
  {
    "id": "聖化匕首 HALLOWED DAGGER",
    "name_zh": "聖化匕首",
    "name_en": "HALLOWED DAGGER",
    "category_zh": "簡易武器（匕首），非普通",
    "category_en": "Simple Weapon (Dagger), Uncommon",
    "desc_zh": "一把普通的黑色匕首，其握柄由一隻骷髏手製成。這是一把 +1 匕首。揮舞或投擲此武器會使骷髏手發出令人作嘔的骨頭碎裂聲。",
    "desc_en": "A common black dagger whose handle is fashioned from a skeletal hand. This is a +1 Dagger. Swinging this weapon around or throwing it causes the skeletal hand to make sickening sounds of bones cracking."
  },
  {
    "id": "聖環 HALLOW RING",
    "name_zh": "聖環",
    "name_en": "HALLOW RING",
    "category_zh": "奇物，稀有Wondrous Item, Rare",
    "category_en": "",
    "desc_zh": "這枚戒指由單塊漂白的骨頭雕刻而成，對佩戴者來說觸感冰冷。這枚戒指賦予佩戴者對黯蝕傷害的抗性。",
    "desc_en": "This ring is carved from a single piece of bleached bone and feels cold to the wearer. This ring gives its wearer resistance to necrotic damage."
  },
  {
    "id": "聖化盾牌 HALLOWED SHIELD",
    "name_zh": "聖化盾牌",
    "name_en": "HALLOWED SHIELD",
    "category_zh": "護甲（盾牌），非普通Armor (Shield), Uncommon",
    "category_en": "",
    "desc_zh": "一塊普通的圓盾，形狀如同一個獰笑的傑克南瓜燈臉。這面黑色的獠牙盾牌觸感冰冷，非常適合威嚇敵人。這是一面 +1 盾牌。擊中東西或讓盾牌被擊中會導致惡魔般的笑聲在其周圍迴盪。",
    "desc_en": "A common Buckler Shield fashioned into the shape of a grimacing Jack-o-Lanterns face. This black toothy shield is cold to the touch and is great for intimidating foes. This is a +1 Shield Hitting things or letting the shield be hit results on a demonic laugh echoing around it."
  },
  {
    "id": "聖化短劍 HALLOWED SWORD",
    "name_zh": "聖化短劍",
    "name_en": "HALLOWED SWORD",
    "category_zh": "軍用武器（短劍），非普通",
    "category_en": "Martial Weapon (Shortsword), Uncommon",
    "desc_zh": "一把普通的短劍，劍柄由粗糙的骨頭和一個小型生物的頭骨製成。這是一把簡單、殘酷但有效的武器。這是一把 +1 短劍。揮動時，此武器會像狼一樣嚎叫。",
    "desc_en": "A common Short Sword with a hilt made from gnarled bones and a small creatures skull. This is a simple and brutal yet effective weapon. This is a +1 Short Sword. When swung this weapon howls like a wolf as it moves through the air."
  },
  {
    "id": "無頭騎士搖頭娃娃（藍色） HEADLESS HORSEMAN BOBBLEHEAD (BLUE)",
    "name_zh": "無頭騎士搖頭娃娃（藍色）",
    "name_en": "HEADLESS HORSEMAN BOBBLEHEAD (BLUE)",
    "category_zh": "普通物品（收藏品），稀有",
    "category_en": "Normal Item (Collectible), Rare",
    "desc_zh": "這是一個新奇收藏品，在此冒險的 2018 年版本中可用。它是一個無頭騎士的微型搖頭娃娃模型，散發著微弱的藍光。似乎有點沒意義，不是嗎？",
    "desc_en": "This is a novelty collectible item that is available during the 2018 running of this adventure. It is a miniature bobble head model of the headless horseman that glows faintly with blue light. Seems a little pointless doesn’t it?"
  },
  {
    "id": "無頭騎士搖頭娃娃（綠色） HEADLESS HORSEMAN BOBBLEHEAD (GREEN)",
    "name_zh": "無頭騎士搖頭娃娃（綠色）",
    "name_en": "HEADLESS HORSEMAN BOBBLEHEAD (GREEN)",
    "category_zh": "普通物品（收藏品），稀有",
    "category_en": "Normal Item (Collectible), Rare",
    "desc_zh": "這是一個新奇收藏品，在此冒險的 2016 年版本中可用。它是一個無頭騎士的微型搖頭娃娃模型，散發著微弱的綠光。似乎有點沒意義，不是嗎？",
    "desc_en": "This is a novelty collectible item that was available during the 2016 running of this adventure. It is a miniature bobble head model of the headless horseman that glows faintly with green light. Seems a little pointless doesn’t it?"
  },
  {
    "id": "無頭騎士搖頭娃娃（粉色） HEADLESS HORSEMAN BOBBLEHEAD (PINK)",
    "name_zh": "無頭騎士搖頭娃娃（粉色）",
    "name_en": "HEADLESS HORSEMAN BOBBLEHEAD (PINK)",
    "category_zh": "普通物品（收藏品），稀有",
    "category_en": "Normal Item (Collectible), Rare",
    "desc_zh": "這是一個新奇收藏品，在此冒險的 2021 年版本中可用。它是一個無頭騎士的微型搖頭娃娃模型，散發著微弱的粉光。似乎有點沒意義，不是嗎？",
    "desc_en": "This is a novelty collectible item that was available during the 2021 running of this adventure. It is a miniature bobble head model of the headless horseman that glows faintly with pink light. Seems a little pointless doesn’t it?"
  },
  {
    "id": "無頭騎士搖頭娃娃（紫色） HEADLESS HORSEMAN BOBBLEHEAD (PURPLE)",
    "name_zh": "無頭騎士搖頭娃娃（紫色）",
    "name_en": "HEADLESS HORSEMAN BOBBLEHEAD (PURPLE)",
    "category_zh": "普通物品（收藏品），稀有",
    "category_en": "Normal Item (Collectible), Rare",
    "desc_zh": "這是一個新奇收藏品，在此冒險的 2019 年版本中可用。它是一個無頭騎士的微型搖頭娃娃模型，散發著微弱的紫光。似乎有點沒意義，不是嗎？",
    "desc_en": "This is a novelty collectible item that was available during the 2019 running of this adventure. It is a miniature bobble head model of the headless horseman that glows faintly with purple light. Seems a little pointless doesn’t it?"
  },
  {
    "id": "無頭騎士搖頭娃娃（紅色） HEADLESS HORSEMAN BOBBLEHEAD (RED)",
    "name_zh": "無頭騎士搖頭娃娃（紅色）",
    "name_en": "HEADLESS HORSEMAN BOBBLEHEAD (RED)",
    "category_zh": "普通物品（收藏品），稀有",
    "category_en": "Normal Item (Collectible), Rare",
    "desc_zh": "這是一個新奇收藏品，在此冒險的 2022 年版本中可用。它是一個無頭騎士的微型搖頭娃娃模型，散發著微弱的紅光。似乎有點沒意義，不是嗎？",
    "desc_en": "This is a novelty collectible item that was available during the 2022 running of this adventure. It is a miniature bobble head model of the headless horseman that glows faintly with reddish light. Seems a little pointless doesn’t it?"
  },
  {
    "id": "無頭騎士搖頭娃娃（黃色） HEADLESS HORSEMAN BOBBLEHEAD (YELLOW)",
    "name_zh": "無頭騎士搖頭娃娃（黃色）",
    "name_en": "HEADLESS HORSEMAN BOBBLEHEAD (YELLOW)",
    "category_zh": "普通物品（收藏品），稀有",
    "category_en": "Normal Item (Collectible), Rare",
    "desc_zh": "這是一個新奇收藏品，在此冒險的 2020 年版本中可用。它是一個無頭騎士的微型搖頭娃娃模型，散發著微弱的黃光。似乎有點沒意義，不是嗎？",
    "desc_en": "This is a novelty collectible item that was available during the 2020 running of this adventure. It is a miniature bobble head model of the headless horseman that glows faintly with yellow light. Seems a little pointless doesn’t it?"
  },
  {
    "id": "無頭騎士搖頭娃娃 南瓜頭（橙色） HEADLESS HORSEMAN BOBBLEHEAD PUMPKIN HEAD (ORANGE)",
    "name_zh": "無頭騎士搖頭娃娃 南瓜頭（橙色）",
    "name_en": "HEADLESS HORSEMAN BOBBLEHEAD PUMPKIN HEAD (ORANGE)",
    "category_zh": "普通物品（收藏品），稀有",
    "category_en": "Normal Item (Collectible), Rare",
    "desc_zh": "這是一個新奇收藏品，僅可作為高級神秘南瓜盒的稀有獎品獲得。它是一個特別版的橙色無頭騎士搖頭娃娃，有一個咧嘴笑的南瓜頭，並散發著微弱的橙光。這次沒那麼沒意義了。",
    "desc_en": "This is a novelty collectible item that is only available as a rare prize from the greater mystery pumpkin box. It is a special edition orange version of the Headless Horseman Bobblehead that has a grinning pumpkin for a head and glows faintly with orange light. Not as pointless this time."
  },
  {
    "id": "地獄火箭矢 HELLFIRE ARROWS",
    "name_zh": "地獄火箭矢",
    "name_en": "HELLFIRE ARROWS",
    "category_zh": "武器（箭），非普通Weapon (Arrow), Uncommon",
    "category_en": "",
    "desc_zh": "這些高度危險的箭矢箭頭由不穩定的地獄石精心製作，這是一種在深層地獄礦井中發現的輕質但易揮發的石頭。箭桿由乾淨的骨頭雕刻而成，午夜的黑色羽毛取自一隻恐鴉。這些箭矢被視為 +1 魔法箭矢。當這些箭矢被射出並擊中預定目標或任何固體時，它們會立即引爆，向該區域噴灑熔岩和火焰。撞擊時，所有在箭矢 15 英尺內的生物必須進行 DC14 的敏捷豁免，失敗則遭受 3D10 火焰傷害，成功則傷害減半。任何未穿戴或可燃的物品會立即著火。",
    "desc_en": "The tips of these highly dangerous arrows are carefully crafted from unstable Hell Stone, a lightweight but volatile stone found deep in the Hell Mines. The shaft is carved from a clean bone and the midnight black feathers are taken from a dire crow. These arrows are considered +1 Magical Arrows. When these arrows are fired and impact its intended target or impact anything solid they will instantly detonate spraying the area with molten rock and fire. On impact all creatures within 15 feet of the arrow must make a DC14 Dexterity Saving Throw or be dealt 3D10 Fire damage or half as much on a successful save. Anything not worn or flammable immediately catches alight."
  },
  {
    "id": "好色魔鬼 HORNY DEVIL",
    "name_zh": "好色魔鬼",
    "name_en": "HORNY DEVIL",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "從一個魅魔角上斷裂下來的碎片。這片變暗的角碎片充滿了說服的魔法，並在擁有者周圍散發出強大的氣場。當這隻角在你擁有時，你在基於魅力的檢定上具有優勢，假設它們用於社交場合。有時這些檢定效果有點太好了。",
    "desc_en": "A broken fragment severed from a succubus’s horns. This shard of darkened horn is filled with persuasive magic’s and emanates a powerful aura around those whom own it. While this horn is in your possession you have advantage on charisma based checks assuming they are being used ion social situations. Sometimes these checks work a little too well."
  },
  {
    "id": "隱形床單 INVISIBLE SHEET",
    "name_zh": "隱形床單",
    "name_en": "INVISIBLE SHEET",
    "category_zh": "奇物，稀有Wondrous Item, Rare",
    "category_en": "",
    "desc_zh": "你看不到這個物品。但你可以感覺它，拿著它，並且絕對可以觸摸到你無法看到的東西。它感覺像一條柔軟的毯子，觸感溫暖。這張床單是完全透明的。躲在床單下不會讓你對任何事物隱藏。他們可以直接看穿床單。只有床單是隱形的。還不確定這有什麼用。",
    "desc_en": "You cannot see this item. But you may feel it, hold it and can definitely touch what you cannot see. It feels like a soft blanket and is warm to the touch. The sheet is completely see through. Hiding under the sheet will not hide you from anything. They can see straight through the sheet. Only the sheet is Invisible Not sure what this is useful for yet."
  },
  {
    "id": "傑克南瓜燈種子 JACK-O-LANTERN SEEDS",
    "name_zh": "傑克南瓜燈種子",
    "name_en": "JACK-O-LANTERN SEEDS",
    "category_zh": "普通物品，非普通Normal Item, Uncommon",
    "category_en": "",
    "desc_zh": "這個棕色小紙袋包含幾顆小的、各種扁平的種子。種下這些種子並悉心照料，將在平均 85-125 天內長出一片健康的 3D6 個中等大小的傑克南瓜燈。這些燈籠是預先雕刻好的，裡面已經有一根準備點燃的蠟燭。幾乎看起來太容易了。",
    "desc_en": "This small brown paper packet contains several small assorted flat seeds. Planting these seeds and caring for them will result in a healthy patch of 3D6 medium sized Jack-O-Lanterns in 85-125 average days. These lanterns come pre-carved and already have a candle inside ready to light. Almost seems too easy."
  },
  {
    "id": "雜耍飛刀 JUGGLING BLADES",
    "name_zh": "雜耍飛刀",
    "name_en": "JUGGLING BLADES",
    "category_zh": "軍用武器（3把匕首），獨特",
    "category_en": "Martial Weapon (3 Daggers), Unique",
    "desc_zh": "這些刀具有著亮銀色刀刃，刀身近一英尺長，還不包括刀柄的長度。總是成套發現和製造，一套3把，這些獨特的匕首需要極大的耐心和技巧才能有效使用。當持有這三把刀作為一個動作時，持用者可以開始雜耍這些刀。持續雜耍這些刀需要專注，並在受到傷害時視為正常專注。當 actively 雜耍這些刀時，持用者可以消耗一個動作，自動對30英尺內最多3個可見目標造成1D4揮砍傷害。在此之後，持用者還可以消耗一個附贈動作，在雜耍中添加一把額外的匕首。每添加一把額外的匕首，可以造成傷害的目標數量就增加一個。每把額外的匕首也會使維持專注的難度增加+2。",
    "desc_en": "The gently curved bright silver blades of these knives are nearly a foot long without the length of the handle. Always found and constructed in a set of 3, these unique daggers require a great deal of patience and skill to use effectively. When holding the three knives as an action the wielder may commence juggling the knives. Continuing to juggle the knives requires concentration and is treated as normal concentration when taking damage. While actively juggling the knives the wielder may expend an action to automatically inflict 1D4 Slashing damage to up to 3 visible targets within 30 feet. Directly after this a wielder may also expend a bonus action to add an additional dagger to their juggling. Each time an additional dagger is added the number of targets that can be dealt damage increases by one. Each additional dagger also increases the difficulty of maintaining concentration by +2."
  },
  {
    "id": "腎結石玉米糖 KIDNEY CORN",
    "name_zh": "腎結石玉米糖",
    "name_en": "KIDNEY CORN",
    "category_zh": "普通物品（消耗品），常見",
    "category_en": "Normal Item (Consumable), Common",
    "desc_zh": "包裝上的一個小標籤表明這是100%認證的腎結石，沒有糖果玉米在製作這種零食的過程中被傷害。這種堅硬的棕色糖果塊一點也不甜，反而味道相當酸澀。需要通過DC12的力量檢定才能咀嚼，否則該生物將在接下來一小時內或直到接受治療前一直牙痛。",
    "desc_en": "A small label on the packet indicates that this is 100% certified kidney stones and no candy corns were harmed in the making of this treat. This rock hard lump of brown candy is not sweet at all, instead tasting quite acidic and sour. Requires a DC12 Strength check to chew otherwise the creature will have a toothache for the next hour or until the receive healing."
  },
  {
    "id": "拉米娜的鋸齒牙 LAMINA’S SAW TOOTH",
    "name_zh": "拉米娜的鋸齒牙",
    "name_en": "LAMINA’S SAW TOOTH",
    "category_zh": "簡易武器（匕首），獨特",
    "category_en": "Simple Weapon (Dagger), Unique",
    "desc_zh": "這顆部分破裂且參差不齊的鱷魚牙齒呈淡黃色，尺寸近1英尺長。這顆鋸齒牙具有普通匕首的所有正常屬性，但其傷害已增加至1D6，並且在穿透生物抗性時被視為鍍銀武器。",
    "desc_en": "This partially cracked and jagged crocodiles tooth is an off yellow color and nearly 1 foot long in size. The saw tooth has all normal properties of a regular dagger, but its damage has been increased to 1D6 and it is considered silvered for the purposes of bypassing creature’s resistances."
  },
  {
    "id": "提燈盾 LANTERN SHIELD",
    "name_zh": "提燈盾",
    "name_en": "LANTERN SHIELD",
    "category_zh": "護甲（盾牌），非普通Armor (Shield), Uncommon",
    "category_en": "",
    "desc_zh": "這面猙獰的盾牌類似典型的圓形小盾，至少在你注意到其所有邊緣突出的尖銳生鏽釘刺之前是這樣。在堅固的鐵盾中心有一個大鉤子，上面掛著一盞油燈。這面盾牌對於在保持防禦的同時攜帶光源非常有用。提燈盾為AC提供+2加值。此外，持用者可以消耗一個動作，使用盾牌的釘刺邊緣進行攻擊，成功命中時造成1D6穿刺傷害。",
    "desc_en": "This gruesome shield resembles that of a typical round buckler shield, at least until you notice all of the sharp rusty spikes protruding around all edges of the shield. In the centre of the strong iron shield is a large hook where an oil lantern currently hangs from. The shield is useful for carrying a light source while still maintaining ones defence. The lantern shield provides a +2 bonus to AC. Additionally the wielder may expand an action to make an attack using the spiked edges of the shield which inflict 1D6 Piercing damage on a successful hit."
  },
  {
    "id": "利維坦詛咒 LEVIATHAN CURSE",
    "name_zh": "利維坦詛咒",
    "name_en": "LEVIATHAN CURSE",
    "category_zh": "附魔物品，稀有Enchantment Item, Rare",
    "category_en": "",
    "desc_zh": "一張破舊的卷軸，用一條暗棕色的繩子綁著。這是一次性附魔，可用於附魔一把近戰或遠程武器。用此詛咒附魔武器會使其散發出微弱的魔法痕跡並發出微弱的棕光。用受此詛咒附魔的物品造成傷害時，命中會額外造成1D4強酸傷害，而當時持有此武器的生物會失去相同數值的生命值。這些武器不需要調適。",
    "desc_en": "A tattered scroll bound with a dull brown cord. This is a single use enchantment that can be used to enchant one melee or ranged weapon. Enchanting a weapon with this curse causes it to emanate faint traces of magic and give off a slight brown glow. Dealing damage with an item enchanted by this curse deals an extra 1D4 Acid Damage on a hit and the creature holding this weapon at the time loses that same amount of hit points. These weapons do not require attuning"
  },
  {
    "id": "巫妖腸線 LICH’S GUT STRING",
    "name_zh": "巫妖腸線",
    "name_en": "LICH’S GUT STRING",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "雖然有些粗俗，但這條編織的弓弦注入了一絲巫妖的力量。由巫妖腸線編織而成的股線柔韌、堅固，並且比一些天然纖維更能保持張力。這條弦可以在短休期間裝備到任何非魔法弓上。任何使用此腸線弓射出的非魔法箭矢獲得以下屬性：成功命中時，無論使用何種類型的弓，該箭矢都會造成1D4冰凍傷害。目標還必須成功通過DC14的體質豁免，否則麻痺1分鐘。受此效果影響的生物可以在其每回合結束時重複進行該豁免。",
    "desc_en": "While mildly grotesque, this woven bowstring is imbued with an inkling of a lich’s power. The woven strands of lich intestinal strings are flexible, strong and hold a tension better than some natural fibres. This string can be equipped during a short rest to any non-magical bow. Any non-magical arrows fired from a bow using this gut string gain the following properties. On a successful hit the arrow will inflict 1D4 Cold damage regardless of the type of bow used. The target must also succeed on a DC14 constitution saving throw or become paralyzed for 1 minute. A Creature affected by this effect may repeat the save at the end of each of its turns."
  },
  {
    "id": "里希登斯坦的怪物圖鑑 LICHT’S MONSTER MANUAL",
    "name_zh": "里希登斯坦的怪物圖鑑",
    "name_en": "LICHT’S MONSTER MANUAL",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "這本手冊是一本破舊的書，似乎用某種皮革般的皮膚裝訂。這本巨著包含了里希登斯坦領主對來自各個存在領域的許多生物進行的所有秘密研究。這本巨著可用於確定最常見的怪物、生物和野獸（由DM決定）的弱點和抗性。",
    "desc_en": "The manual is a tattered book that appears to be bound with some kind of leathery skin. This tome contains all the secret research that Lord Lichtenstein has conducted on many creatures from across the realms of existence. This tome can be used to ascertain the weakness and resistances of the most common monsters, creatures and beasts known (up to DM)."
  },
  {
    "id": "生命血護符 LIFEBLOOD AMULET",
    "name_zh": "生命血護符",
    "name_en": "LIFEBLOOD AMULET",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "一條精緻的鏈子，鑲嵌著一顆切面良好的血石榴石，設置在一個雕刻華麗的黃金護符中。護符觸感溫暖，似乎輕輕搏動。此物品只能通過將該生物的一滴血浸入石榴石中來與一個生物調適（可以強制調適）。一旦調適，護符的搏動節奏將與調適生物的心跳相匹配。當護符在調適生物1英里範圍內時，石榴石會發出柔和的光芒。如果調適生物死亡，那麼護符會變得越來越冰冷和暗淡，直到它與另一個生物調適。如果護符在調適到一個活體生物時被破壞，該生物立即恢復其生命值的一半，向上取整。此效果、心跳效果和死亡效果沒有最大範圍限制。",
    "desc_en": "A delicate chain, supporting a well faceted blood garnet is set in an ornately etched gold amulet. The amulet is warm to the touch and seems to pulsate softly. This item can only be attuned to a creature by soaking a drop of blood from that creature into the garnet (can be forcibly attuned). Once attuned the pulsing throb of the amulet matches that of the attuned creature’s heartbeat. While the amulet is within 1 mile of the attuned creature the garnet glows softly. If the attuned creature dies then the amulet becomes increasingly cold and dull until it is attuned to another creature. If the amulet is broken while it is attuned to a living creature, that creature immediately regains half of their Hit Points rounded up. This effect, the heart beat effect and the dying effect have no maximum range."
  },
  {
    "id": "閃電棒 LIGHTNING ROD",
    "name_zh": "閃電棒",
    "name_en": "LIGHTNING ROD",
    "category_zh": "簡易武器（長棍），稀有",
    "category_en": "Simple Weapon (Quarterstaff), Rare",
    "desc_zh": "在未經訓練的人眼中，這根近5英尺長的金屬棒只不過是它看起來的樣子。然而，仔細觀察發現，金屬棒上精細地蝕刻著無盡的符文符號，這些符號似乎沒有任何規律。握住這根棒子會使你的手臂產生刺痛感，並讓你可能有的任何手臂毛髮因靜電而豎起。揮舞這根棍子會使其發出低沉的隆隆聲。閃電棒被視為 versatile 武器，成功命中時造成1D4鈍擊傷害，隨後是1D4閃電傷害，伴隨著火花從撞擊點飛濺。用雙手使用此武器會將鈍擊和閃電傷害的傷害骰都增加到1D6。",
    "desc_en": "To the unassuming eye this nearly 5 foot metal rod is nothing other than exactly what it looks like. Closer inspection however, reveals that the metal rod is finely etched with an endless pattern of runic symbols that don’t seem to follow any pattern. Holding the rod sends tingles up your arm and makes any arm hair you may have stand on end with static electricity. Swinging this staff around causes it to emanate small rumbles. The lightning Rod is considered versatile and inflicts 1D4 Bludgeoning Damage followed by 1D4 Lighting Damage as sparks fly from the impact. Using the weapon with two hands increases the damage dice of both Bludgeoning and Lightning Damage to 1D6."
  },
  {
    "id": "液態金屬 LIQUID METAL",
    "name_zh": "液態金屬",
    "name_en": "LIQUID METAL",
    "category_zh": "奇物，稀有Wondrous Item, Rare",
    "category_en": "",
    "desc_zh": "這個帶有蠟封橡膠塞的圓形小瓶內含一種奇怪黏稠的銀色液體，傾斜或轉動時移動緩慢。喝下此小瓶的內容物會導致飲用者劇烈不適。立即，消費者的外部四肢開始逐漸變色和硬化。他們的身體將在1D6 + 體質調整值天的過程中，變成一個他們自己的固態金屬雕像，無法移動、呼吸甚至死亡。他們將永遠被困在自己身體的銀色棺材裡。只有他們的身體會變成銀色，而不是他們持有或穿戴的任何物品。可以通過常規方式解除詛咒。即使在詛咒過程結束後，仍然可以解除。",
    "desc_en": "This round vial with a wax sealed rubber stopper contains an oddly thick silver liquid that is slow to move about when tilted or turned. Drinking the contents of this vial will cause the one who ingested it to become violently ill. Immediately the consumer’s outer extremities will begin to discolour and harden gradually. Their body will over the course of 1D6 + Constitution Modifier days, turn into a sold metal statue of themselves, unable to move, breathe or even die. They will be eternally trapped in a silver coffin of their own body. Only their body will turn to silver not any items they are holding or wearing. The curse can be undone by regular means. It can still be undone after the curse has run its course."
  },
  {
    "id": "莉絲貝的幸運符 LISBETH’S LUCKY CHARM",
    "name_zh": "莉絲貝的幸運符",
    "name_en": "LISBETH’S LUCKY CHARM",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "這個小巧的心形鎖墜是那些與心靈力量打交道之人的珍貴財產。鎖墜內有一張來源不明的褪色肖像。更換肖像會使幸運符失效。佩戴並與此物品調適的生物免疫被魅惑，除非他們自願如此。",
    "desc_en": "This small heart shaped locket is a prized possession of those who deal with the strength of the mind. Inside the locket is a faded portrait of an unknown origin. Replacing the portrait will prevent the charm from working. Creatures that wear and attune to this item have immunity to becoming charmed unless they are willing to do so."
  },
  {
    "id": "洛恩的裹屍布 LORNE’S BANDAGES",
    "name_zh": "洛恩的裹屍布",
    "name_en": "LORNE’S BANDAGES",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "此物品包含一小堆污漬斑斑的黃色裹屍布，它們早已風華不再，可能不應該再用來實際包紮傷口。將這些受詛咒的裹屍布包裹在一具死亡不超過 10 天的屍體上，會暫時復活該屍體，成為一具木乃伊，只要它仍然被裹屍布包裹。這不是永久性的，可以通過移除詛咒來解除。屍體在包裹時會停止腐爛，但如果裹屍布被摧毀，效果將停止。",
    "desc_en": "This item consists of a small pile of stained yellow bandages that have seen far better days and probably shouldn’t be used to actually bandage wounds. Wrapping these cursed bandages around a corpse that has been dead for no more than 10 days will temporarily revive the corpse as a mummy for as long as it remains wrapped in the bandages. It is not permanent and can be dispelled by removing the curse. The body will cease to decay while wrapped but if the bandages are destroyed the effect will cease."
  },
  {
    "id": "迷足族的沼澤水袋 LOSTFOOT’S BOGSKIN",
    "name_zh": "迷足族的沼澤水袋",
    "name_en": "LOSTFOOT’S BOGSKIN",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "這個沼澤水袋外觀是一個污跡斑斑的骯髒水囊，看起來飽經風霜。拔掉沼澤水袋的塞子會釋放出一股死水和腐爛植被的惡臭。儘管沼澤水袋看起來很大，但使用者每天最多可以倒出 4 加侖的停滯沼澤水。任何飲用此水的生物必須成功通過 DC15 的體質豁免，否則會中毒 1 小時。警告：持續飲用此水可能導致長期副作用，對此我們概不負責。",
    "desc_en": "The Bogskin has the appearance of a stained and dirty water skin that has seen better days. Unstoppering the Bogskin releases a putrid odour of stagnant water and rotting vegetation. Despite how big the Bogskin appears, the user can pour out up to 4 gallons of stagnant swamp water each day. Any creature that drinks the water must succeed on a DC15 Constitution saving throw or become poisoned for 1 hour. Warning, continuous consumption of the water may result in long term side effects for which we are not liable for."
  },
  {
    "id": "迷足族的失蹤靴子 LOSTFOOT’S MISSING BOOTS",
    "name_zh": "迷足族的失蹤靴子",
    "name_en": "LOSTFOOT’S MISSING BOOTS",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "這些破裂且黏滑的皮革靴子不斷散發出刺鼻的氣味。穿著這些靴子時，你可以將任何沼澤地、濕地、泥濘、淺水體或類似環境視為堅實地面，用於移動目的，而不會是困難地形。",
    "desc_en": "These cracked and slimy leather boots constantly let of a pungent smell. While wearing these boots you may treat any swampland, marshland, mud, bogs, and shallow bodies of water or similar environments as solid ground for the purpose of movement without it being difficult terrain."
  },
  {
    "id": "盧卡斯的項圈 LUCAS’S COLLAR",
    "name_zh": "盧卡斯的項圈",
    "name_en": "LUCAS’S COLLAR",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "盧卡斯的項圈曾經是亮紅色皮革配銀色扣環，但現在已褪色成斑駁的棕色，並染上了千百次殺戮的血跡。它寬大厚實，但佩戴舒適。調適並將此物品佩戴在脖子上，賦予使用者嗅聞 100 英尺內新鮮血液的能力。他們還能確定血液相對於他們当前位置的方向。",
    "desc_en": "Lucas’s Collar was once bright red leather with a silver clasp, but now is faded to a mottled brown and stained with the blood of a thousand kills. It is wide and chucky but can be worn comfortably. Attuning to and wearing this item around one’s neck grants the user the ability to smell fresh blood within 100ft of the user. They are also able to determine the direction in which the blood is from their current position."
  },
  {
    "id": "機械之血 MACHINE BLOOD",
    "name_zh": "機械之血",
    "name_en": "MACHINE BLOOD",
    "category_zh": "普通物品，非普通Normal Item, Uncommon",
    "category_en": "",
    "desc_zh": "這個小鋼瓶有一個彈簧加載的蓋子，以確保內容物免受灰塵和其他顆粒的污染。瓶內的內容物實際上在凡人領域是一種眾所周知的高度易燃油類，但這裡是萬聖域，一切都必須符合主題。僅僅一瓶用作莫洛托夫雞尾酒時，就有足夠的燃料在引爆時造成 20 英尺見方的爆炸。一瓶足以對任何被困在其熊熊烈火中的人造成 4D10 火焰傷害。儘管具有高度易燃性，但任何鉸鏈、門、齒輪、齒輪或生鏽的閥門如果卡住不動需要潤滑，都可以通過將其浸泡在機械之血中立即釋放。",
    "desc_en": "This small steel flask is well secured with a spring loaded lid to keep the contents free of dust and other particles. The contents of the flask are actually well known as a type of oil in the mortal realms, but this is the Hallow and everything has to be themed accordingly. Machine blood however is far more flammable than its regular counterparts, accounting for nearly 99% of all workshop burns in the Hallow. Just one flask used as a Molotov cocktail has enough fuel to cause a 20 foot square explosion when it detonates. One flask is capable of inflicting 4D10 Fire Damage to anyone caught in its raging inferno. Despite its highly flammable nature any hinge, door, gear, cog or rusty valve that won’t budge and needs some lubrication can be instantly freed up by dowsing it in machines blood."
  },
  {
    "id": "機械融合 MACHINE BONDING",
    "name_zh": "機械融合",
    "name_en": "MACHINE BONDING",
    "category_zh": "附魔物品，稀有Enchantment Item, Rare",
    "category_en": "",
    "desc_zh": "這張緊密捆綁的卷軸似乎由極薄且柔韌的金屬片製成。卷軸由簡單的銀色麻線在其中心綁緊。這是一次性附魔，可用於附魔兩把獨立的非魔法武器。這兩把受附魔的武器永久融合成一個奇特的組合。新融合的武器有兩種形態。每種形態都是所用原始武器中的一種。例如，如果一把劍和一把斧頭用於附魔過程，那麼新武器雖然看起來部分像斧部分像劍，但可以變成劍或斧頭。武器具有的屬性和傷害與其當前所處的形態完全相同。例如，如果它處於短劍形態，它仍然只造成 1D6 穿刺傷害，並被視為具有靈巧和輕型特性。要切換融合武器的形態，持用者必須在其回合中消耗一個附贈動作。",
    "desc_en": "This tightly bound scroll appears to be made from an incredibly thin and flexible sheet of golden metal. The scroll is bound closed by simple silver twine around its centre. This is a single use enchantment that may be used to enchant two separate non magical weapons. The two enchanted weapons permanently fuse together into an odd combination. The newly bonded weapon has two forms. Each form being that of one of the original weapons used. For example if a sword and an axe were used in the enchanting process then the new weapon while looks like part axe part sword can either turn into a sword or an axe. The attributes and damage the weapon has are identical to whatever form it is currently in. For example if it is in short sword form it still only does 1D6 Piercing damage and is considered to have finesse and light. To swap between a bonded weapons forms the wielder must spend a bonus action on their turn."
  },
  {
    "id": "女兒面具 MASK OF THE DAUGHTER",
    "name_zh": "女兒面具",
    "name_en": "MASK OF THE DAUGHTER",
    "category_zh": "奇物，獨特（面具）Wondrous Item, Unique (Mask)",
    "category_en": "",
    "desc_zh": "一個簡單、有缺損的面具，由單塊骨頭雕刻而成，描繪了一個哭泣的年輕女子面孔。佩戴此面具時，佩戴者獲得火焰傷害抗性，並且每天一次，佩戴者可以在自身周圍 15 英尺區域內呼出冰冷寒風。被困在寒風中的生物必須進行 DC15 的體質豁免，失敗則受到 4D4 冰凍傷害，成功則傷害減半。此外，作為一個附贈動作或反應動作，你可以魔法般地將此面具與你物品欄中的另一個面具交換。",
    "desc_en": "A simple chipped mask, carved from a single piece of bone depicting a crying young woman’s face. While this mask is worn, the wearer gains resistance to Fire Damage and once per day the wearing may expel ice cold winds in a 15 foot area around themselves. Creatures caught in the icy winds must make a DC15 Constitution saving throw, taking 4D4 Cold damage on a failed save or half as much on a successful one. Additionally as a bonus action or a reaction you may magically swap this mask for another one in your inventory."
  },
  {
    "id": "父親面具 MASK OF THE FATHER",
    "name_zh": "父親面具",
    "name_en": "MASK OF THE FATHER",
    "category_zh": "奇物，獨特（面具）Wondrous Item, Unique (Mask)",
    "category_en": "",
    "desc_zh": "一個簡單、有裂痕的面具，由單塊骨頭雕刻而成，描繪了一個強忍淚水的老年男子面孔。佩戴此面具時，佩戴者獲得雷鳴傷害抗性，並且每天一次，佩戴者可以用星界護甲包圍自己。該護甲授予 2D10 臨時生命值。此外，作為一個附贈動作或反應動作，你可以魔法般地將此面具與你物品欄中的另一個面具交換。",
    "desc_en": "A simple cracked mask, carved from a single piece of bone depicting an elderly man’s face stifling tears. While this mask is worn, the wearer gains resistance to Thunder damage and once per day the wearer may surround themselves with an ethereal Armor. The Armor grants 2D10 Temporary Hit Points. Additionally as a bonus action or a reaction you may magically swap this mask for another one in your inventory."
  },
  {
    "id": "母親面具 MASK OF THE MOTHER",
    "name_zh": "母親面具",
    "name_en": "MASK OF THE MOTHER",
    "category_zh": "奇物，獨特（面具）Wondrous Item, Unique (Mask)",
    "category_en": "",
    "desc_zh": "一個簡單、剝落的面具，由單塊骨頭雕刻而成，描繪了一個哭泣的女子面孔。佩戴此面具時，佩戴者獲得冰凍傷害抗性，並且每天一次，佩戴者可以在自身周圍 10 英尺區域內呼出灼熱火焰。任何被困在這些火焰中的生物必須進行 DC16 的敏捷豁免，失敗則受到 3D6 火焰傷害，成功則傷害減半。此外，作為一個附贈動作或反應動作，你可以魔法般地將此面具與你物品欄中的另一個面具交換。",
    "desc_en": "A simple flaking mask, carved from a single piece of bone depicting a weeping woman’s face. While this mask is worn, the wearer gains resistance to Cold damage and once per day the wearer may expel scorching flames in a 10 foot area around themselves. Any creature caught in these flames must make a DC16 Dexterity saving thro, taking 3D6 Fire damage on a failed save or half as much on a successful one. Additionally as a bonus action or a reaction you may magically swap this mask for another one in your inventory."
  },
  {
    "id": "兒子面具 MASK OF THE SON",
    "name_zh": "兒子面具",
    "name_en": "MASK OF THE SON",
    "category_zh": "奇物，獨特（面具）Wondrous Item, Unique (Mask)",
    "category_en": "",
    "desc_zh": "",
    "desc_en": ""
  },
  {
    "id": "肉鉤 MEAT HOOK",
    "name_zh": "肉鉤",
    "name_en": "MEAT HOOK",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "一條生鏽且血跡斑斑的長鏈，一端連著一個鋒利的鋸齒狀鉤子 。這是屠夫用來懸掛肉類進行熟成和切割的工具 。屠夫奥列格發現了這個鉤子更實用的用途，用來在他的冷藏室裡鉤住還在動的屍體 。當鉤子被扔出時，鏈條會延伸 25 英尺，然後鉤子會返回投擲者手中，並將其碰巧鉤住或纏住的任何東西拉回來 。",
    "desc_en": "A rusted and bloodied length of chain with a razor sharp jagged hook attacked to one end. A tool used by butchers to string up meat for aging and carving. Oleg the butcher discovered a more practical use for the hook when using it to catch still moving carcasses in his cool room. When the hook is thrown the chain extends 25 feet before the hook returns back to the throwers hand pulling anything it happened to catch or tangle up with it."
  },
  {
    "id": "肉鑰 MEAT KEY",
    "name_zh": "肉鑰",
    "name_en": "MEAT KEY",
    "category_zh": "普通物品，獨特Normal Item, Unique",
    "category_en": "",
    "desc_zh": "這個猙獰的裝置由幾塊死動物的部件製成，看起來像一把鑰匙，破碎的骨頭以奇怪的角度從中突出 。它的氣味光是靠近就讓你想要嘔吐，更別說觸摸它了 。免費附送一兩隻蒼蠅給任何有膽量把它帶回家的人 。此物品用於在未來更新中解鎖肉庫競技場的門 。",
    "desc_en": "This grotesque contraption is made from several parts of dead animals and somehow vaguely looks like a key with bits of broken bones sticking out of it at odd angles. Its smell makes you want to heave just by being near it let alone touching it. Comes with a free fly or two to any who are brave enough to take it home. This item is used to unlock the door to the Meat Locker arena in future updates."
  },
  {
    "id": "心靈詛咒 MIND CURSE",
    "name_zh": "心靈詛咒",
    "name_en": "MIND CURSE",
    "category_zh": "附魔物品，稀有Enchantment Item, Rare",
    "category_en": "",
    "desc_zh": "一張破舊的卷軸，用一條亮藍色的繩子綁著 。這是一次性附魔，可用於附魔一把近戰或遠程武器 。用此詛咒附魔武器會使其散發出微弱的魔法痕跡並發出微弱的藍光 。用受此詛咒附魔的物品造成傷害時，命中會額外造成 1D4 心靈傷害，而當時持有此武器的生物會失去相同數值的生命值 。這些武器不需要調適 。",
    "desc_en": "A tattered scroll bound with a bright blue cord. This is a single use enchantment that can be used to enchant one melee or ranged weapon. Enchanting a weapon with this curse causes it to emanate faint traces of magic and give off a slight blue glow. Dealing damage with an item enchanted by this curse deals an extra 1D4 Psychic Damage on a hit and the creature holding this weapon at the time loses that same amount of hit points. These weapons do not require attuning."
  },
  {
    "id": "母親的模仿鳥 MOTHERS MOCKINGBIRD",
    "name_zh": "母親的模仿鳥",
    "name_en": "MOTHERS MOCKINGBIRD",
    "category_zh": "奇物，稀有Wondrous Item, Rare",
    "category_en": "",
    "desc_zh": "母親的模仿鳥實際上是一個小巧、做工精緻的華麗音樂盒，可以通過轉動側面的一個小曲柄把手來播放 。轉動時，它會播放一首安撫靈魂的精緻旋律 。聽這首歌太久最終會讓 20 英尺內的任何生物入睡至少一小時 。",
    "desc_en": "Mother’s mockingbird is actually a small expertly crafted ornate music box that can be played by turning a small crank handle on its side. When turned it plays a delicate melody that soothes the soul. Listening to this song for too long will eventually put any creatures within 20 feet to sleep for at least an hour."
  },
  {
    "id": "神秘南瓜盒 MYSTERY PUMPKIN BOX",
    "name_zh": "神秘南瓜盒",
    "name_en": "MYSTERY PUMPKIN BOX",
    "category_zh": "普通物品（新奇物品），非普通",
    "category_en": "Normal Item (Novelty), Uncommon",
    "desc_zh": "這是一個新奇物品，玩家有機會獲得如表所示的隨機獎品 。打開盒子並擲一顆 D20 來看你得到什麼 。\n擲骰\t物品\n1\t驚奇盒 Jack in the box\n2-4\t綜合骨頭Assorted Bones\n5-7\t蝙蝠乾肉Bat Jerky\n8-9\t蛾Moths\n10-11\t小南瓜Small Pumpkin\n12-13\t生鏽的匕首Rusty Dagger\n15-16\t木樁Wooden Stake\n17\t餐館 5 CCP 優惠券",
    "desc_en": "5 CCP Coupon for the Eatery\n18\t史萊姆汁液Slime Juice\n19\t20 個糖果玉米片20 Candy Corn Pieces\n20\t聖環Hallow Ring\nThis is a novelty item in which players have a chance of getting a random price as shown in the table. Open the box and roll a D20 to see what you get."
  },
  {
    "id": "神秘骷髏 MYSTERY SKULL",
    "name_zh": "神秘骷髏",
    "name_en": "MYSTERY SKULL",
    "category_zh": "普通物品（新奇物品），非普通",
    "category_en": "Normal Item (Novelty), Uncommon",
    "desc_zh": "這是一個新奇物品，玩家有機會獲得如表所示的隨機獎品 。敲開骷髏並擲一顆 D20 來看你得到什麼 。",
    "desc_en": "This is a novelty item in which players have a chance of getting a random price as shown in the table. Crack open the skull and roll a D20 to see what you get.\n擲骰\t物品\n1\t邪焰之息 Ember of Evil\n2-4\t一隻大蜘蛛A Large Spider\n5-7\t稍小的骷髏Slightly Smaller Skull\n8-9\t機械之血Machine Blood\n10-11\t腐蝕之血Corrosive Blood\n12-13\t六根仙塵棒Six Pixie Stix\n15-16\t血酒瓶Blood Flask\n17\t餐館免費飲食挑戰券\nFree Eating Challenge at the Eatery Coupon\n18\t搖頭娃娃收藏家 50 CCP 優惠券\n50 CCP Coupon at Bobblehead Collector\n19\t75 個糖果玉米片75 Candy Corn Pieces\n20\t骷髏頓的恩惠Skelton’s Favour"
  },
  {
    "id": "惡夢燃料 NIGHTMARE FUEL",
    "name_zh": "惡夢燃料",
    "name_en": "NIGHTMARE FUEL",
    "category_zh": "普通物品，非普通Normal Item, Uncommon",
    "category_en": "",
    "desc_zh": "這個小鋼罐被漆成亮黃色，並有一個匆忙用可能是血的顏料畫在上面的危險符號 。罐內含有 1 加侖的惡夢燃料，一種高毒性油性化合物，據稱用於為散落在萬聖墓鎮周圍的一些機械裝置提供動力 。骷髏頓儲備它是因為小魔怪兄弟總是需要它 。除了為機器提供動力外，惡夢燃料在點燃時可以用作令人難以置信的熱源 。與其爆炸，液體燃燒緩慢，但具有強烈的光和熱 。受到燃燒的惡夢燃料傷害會造成 6D6 火焰傷害 。一加侖足以覆蓋 5 英尺區域，可以燃燒長達 6 小時，並且當生物在、接觸或覆蓋在燃燒的燃料中時，可以持續造成傷害 。",
    "desc_en": "This small steel tank is painted bright yellow and has a hazard symbol hastily painted across it in what could be blood. The tank contains 1 gallon of the nightmare fuel, a highly toxic oil compound that is supposedly used to fuel some of the machine contraptions scattered around Hallowgrave. Skelton stocks it because the gremlin brothers always need it. Other than powering machines, nightmare fuel can be used as an incredible heat source when lit on fire. Rather than exploding, the liquid burns slowly but with intense light and heat. Taking damage from burning nightmare fuel causes 6D6 Fire damage. One gallon is enough to cover a 5 foot area and can burn for up to 6 hours and can continually cause damage while a creature is in, touching or covered in the burning fuel."
  },
  {
    "id": "噩夢再生 NIGHTMARES REGROW",
    "name_zh": "噩夢再生",
    "name_en": "NIGHTMARES REGROW",
    "category_zh": "普通物品，常見Normal Item, Common",
    "category_en": "",
    "desc_zh": "來自收藏家的禮物 。「噩夢再生」是一本沾滿泥土的日記，似乎由活樹根裝訂而成 。解開這本骯髒的書會使它自動彈開到隨機一頁，上面有一幅女巫在小屋裡對著大釜辛勤工作的墨水圖像 。圖像似乎是活的並且在移動，同時一個聲音在讀者的腦海中迴盪，彷彿在敘述場景 。這似乎是關於沼澤女巫奧菲莉婭的故事 。「…在它進鍋之前，還要轉三圈生鏽的釘子。好了，全都完成了。似乎太多個月亮已經從最後一個齒輪滾過我的門檻以來過去了。當我轉身看到它就在我的桌子上時，這一切都太明顯了。鎮上的傻瓜們如此高度垂涎的那個齒輪形狀的金屬碎片。儘管我對它的存在感到厭惡，我仍然被它吸引。我們這些可怕的生物被齒輪所影響。我們想要把它們據為己有，想要確保沒有人能把它們從我們身邊奪走。它們給予我們，某種東西。某種我們曾經失去的東西。它在我們體內生長。我們擁有它的時間越長，它再生長的速度就越快。無論我們失去的是什麼。但我們永遠無法長時間持有一個來重新獲得它。當它從我們的屍體上被偷走，或者被送出去以避免另一次羞辱性的死亡時，我們會回到我們已成為的噩夢般的恐怖存在。就應該是這樣，永遠如此。我們應該戴上我們這些真實的面孔，生活在這永無止境的恐怖放縱循環中。已做的事無法挽回。不是由我們。不是由他們。命運是如何扭曲我們和我們的意圖，這真是奇怪。在將我們交付給我們的報應時，她允許我們成長為我們曾經想成為的一切 。」",
    "desc_en": "A gift from the collector. Nightmares Regrow is a dirt stained journal that appears to be bound with living tree roots. Unbinding the grubby book will cause it to spring open to a random mottled page where an inked image of a witch toiling over a cauldron in a small hut. The image seems to be alive and moving as a voice fills the reader’s mind as if narrating the scene. This seems to be a tale about Ophelia the witch of the marsh. “And three turns of rusted nail before it goes in the pot. There all done. Seems like too many moons had passed since the last cog had rolled through my doorway. It was all too obvious as I turned to see it upon my table. The gear shaped scrap of metal that the town fools so highly coveted. Despite my distaste for its presence I was still drawn to it. The cogs hold sway over us. We horrible creatures are drawn to them, wanting to keep them to ourselves, wanting to ensure no one can take them from us. They give us, something. Something that we had lost. It grows inside us. The longer we are in possession of one the faster it regrows. Whatever it was that we lost. But never can we hold on to one long enough to gain it back. When it is stolen from our corpse or given away to prevent another humiliating death we return to the nightmarish horrors that we have become. As it should be, forever and always. We deserve to wear these true faces of ours, to live in this never ending cycle of horrific indulgence. What is done cannot be undone. Not by us. Not by them. Strange how fate twists us and our intentions. In delivering us to our reckoning, she allowed us to grow into everything we wanted to ever be.”"
  },
  {
    "id": "吵鬧切割者 NOISY CUTTER",
    "name_zh": "吵鬧切割者",
    "name_en": "NOISY CUTTER",
    "category_zh": "軍用武器（重武器），獨特Martial Weapon (Heavy Weapon), Unique",
    "category_en": "",
    "desc_zh": "一個由齒輪、齒輪和旋轉刀片組成的獨特裝置。（想像一個發條鏈鋸）吵鬧切割者是一種原始而恐怖的武器，經常被刀鋒兄弟用於雜耍表演 。配備一個看似只有一個安全握持位置的地方和一個裝滿黏稠液體的惡臭油箱，這個裝置尖叫著古老和不必要的暴力 。吵鬧切割者最多有 10 發充能，但無法正常恢復 。要恢復充能，使用者必須消耗一個動作，用油或惡夢燃料加滿油箱 。一瓶油將為物品提供 2 發充能，而一加侖惡夢燃料將完全補滿所有充能 。在持用者的回合中，他們可以消耗一個動作和 3 發充能，對 5 英尺內的目標進行一次基於力量的近戰攻擊 。如果攻擊成功，目標將受到 6D6 揮砍傷害 。或者，持用者可以消耗一個動作和 1 發充能來啟動吵鬧切割者，使其下一次使用吵鬧切割者的攻擊動作具有優勢 。",
    "desc_en": "A unique contraption of gears, cogs and rotating knives. (Imagine a clockwork chainsaw) The noisy cutter is a primitive and horrific weapon often used in juggling acts by the blade brothers. Sporting what looks like only one safe place to hold it and a foul tank of viscous liquid, the contraption screams archaic and needlessly violent. The noisy cutter has a maximum of 10 charges but cannot regain them normally. To regain charges the user must expend an action filling the tank with either oil or Nightmare Fuel. One flask of oil will grant 2 charges to the item, while a gallon of Nightmare Fuel will completely refill all charges. On the wielders turn they may expend an action and 3 charges to make a strength based melee attack at a target within 5 feet. If the attack is successful the target is dealt 6D6 Slashing Damage. Instead a wielder may expend an action and 1 charge to rev the Noisy Cutter granting advantage to their next attack action with the Noisy Cutter."
  },
  {
    "id": "歐柏的鈴鐺 OBOL’S BELL",
    "name_zh": "歐柏的鈴鐺",
    "name_en": "OBOL’S BELL",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "來自歐柏船尾的生鏽神秘黃銅鈴鐺，搖響時只會發出陰沉的鐺鐺聲 。當鈴鐺恰好搖響三聲時，一艘星界划艇會從任何附近足夠大的水體表面下出現 。該划艇被視為常規划艇 。此外，該划艇免疫傷害，並持續 8 小時，或直到通過再次搖響鈴鐺三聲將其解散 。如果鈴鐺在划艇被召喚時掉落或放開，那麼星界划艇將會沉入水面下，如同被解散一樣 。",
    "desc_en": "The rusty arcane brass bell from the stern of obols boat makes only gloomy donging noises when rung. When the bell is rung exactly three times an ethereal rowboat appears from beneath the surface of any nearby suitably large enough body of water. The rowboat considered to be a regular rowboat. Additionally the rowboat is impervious to damage and lasts for 8 hours or until it is dismissed by ringing the bell three more times. If the bell is dropped or let go off while the rowboat is summoned, than the ethereal rowboat will sink beneath the surface as if it had been dismissed."
  },
  {
    "id": "歐柏的錢袋 OBOL’S COIN POUCH",
    "name_zh": "歐柏的錢袋",
    "name_en": "OBOL’S COIN POUCH",
    "category_zh": "奇物，獨特（需要調適）Wondrous Item, Unique (requires attunement)",
    "category_en": "",
    "desc_zh": "看著這個簡單、破爛且結滿鹽粒的皮質小袋，沒有人會認為它有什麼特別之處 。搖晃袋子總是會發出微弱的硬幣叮噹聲 。每天一次，你可以從袋中取出最多 10 枚金幣 。這些金幣觸感總是冰冷且潮濕 。任何從袋中取出的硬幣將在下次日出時消失 。同樣在下次日出時，每消失一枚硬幣，袋子將獲得一發充能 。當調適的生物死亡時，他們會被詛咒去幫助歐柏擺渡死者穿越靈魂之海 。他們必須為袋子在他們死亡時所擁有的每一發充能擺渡一個靈魂 。或者，調適的生物可以在死亡前，每將一枚金幣放回袋子中，就可以減少袋子的一發充能 。",
    "desc_en": "Looking at this simple tattered and salt encrusted leather pouch one would not assume there was anything special about it. Shaking the bag always makes a faint sound of jingling coins. Once per day you may withdraw up to 10 Gold Coins from the pouch. The coins are always cold and wet to the touch. Any coins removed from the pouch will vanish at the next sunrise. Also at the next sunrise, for each coin that vanishes, the pouch will gain one charge. When the attuned creature dies they are cursed to aid Obol ferrying the dead across the sea of souls. They must ferry one soul for each charge the pouch has when they die. Alternatively the attuned creature may reduce the number of chares the pouch has by one for each gold coin that is placed back into the pouch before they die."
  },
  {
    "id": "歐柏之槳 OBOL’S OAR",
    "name_zh": "歐柏之槳",
    "name_en": "OBOL’S OAR",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "這支長而華麗的單葉槳由一塊在靈魂之海中漂浮了一百年後被沖上岸的深色浮木雕刻而成 。當乘坐移動的水上交通工具（無論其大小，例如獨木舟或大帆船）旅行時，一個生物可以主動使用奧波爾之槳來划槳 。當使用槳來划水時，該水上船隻的速度會加倍 。只有在該生物持續划槳時速度才會加倍 。一旦划槳停止，船隻將恢復正常航行速度 。",
    "desc_en": "This long ornate single paddled oar is carved from a single dark piece of driftwood that had floated in the sea of souls for a 100 years before washing ashore. While travelling in a moving aquatic vehicle regardless of the vehicles size, such as a canoe or a galleon ship a creature may actively use Obol’s Oar to paddle. While using the oar to paddle the aquatic vessel’s speed is doubled. It is only doubled while the creature continues to paddle. Once the paddling has stopped the vessel will resume regular travelling speed."
  },
  {
    "id": "歐柏的另一個靈魂 OBOL’S OTHER SOUL",
    "name_zh": "歐柏的另一個靈魂",
    "name_en": "OBOL’S OTHER SOUL",
    "category_zh": "奇物，獨特（需要調適）Wondrous Item, Unique (requires attunement)",
    "category_en": "",
    "desc_zh": "此物品包含一個微微發光的水晶球，其周圍不斷環繞著蒸發的白色光流 。在一次長休結束時，一個生物可以選擇與這個結晶靈魂綁定 。靈魂一旦與一個生物綁定，就無法移除，直到該生物死亡或被如祈願術或移除詛咒之類的效果移除 。當與靈魂綁定時，該生物被授予消耗一個動作在凡人領域和死者領域之間轉換的能力 。在死者領域時，該生物獲得以下好處：該生物變成虛體，可以穿過不超過 5 英尺厚的物體和牆壁，如同在困難地形中移動。該生物無法以能力或攻擊為目標其他生物，除非他們也在死者領域。該生物可以看到並與在不到 24 小時前死亡的生物的靈魂交談。該生物可以消耗一個動作吸收 5 英尺內的一個靈魂，並恢復等於一顆生命骰擲骰結果的生命值。它不會消耗生命骰。該生物必須完成一次短休才能再次使用此好處 。\n\t該生物變成虛體，可以穿過不超過 5 英尺厚的物體和牆壁，如同在困難地形中移動 。\n\t該生物無法以能力或攻擊為目標其他生物，除非他們也在死者領域 。\n\t該生物可以看到並與在不到 24 小時前死亡的生物的靈魂交談 。\n\t該生物可以消耗一個動作吸收 5 英尺內的一個靈魂，並恢復等於一顆生命骰擲骰結果的生命值 。它不會消耗生命骰 。該生物必須完成一次短休才能再次使用此好處 。",
    "desc_en": "This item consists of a faintly glowing crystal orb that is enveloped in constant wisps of white light that evaporate around it. At the end of a long rest a creature may choose to bond with the crystalline soul. The soul once bonded to a creature, cannot be removed until the creature dies or it is removed by an effect such as wish or remove curse. While bonded to the soul, the creature is granted the ability to expend an action to transition between the mortal realm and the realm of the dead. While in the realm of the dead the creature gains the following benefits.\n•\tThe creature becomes incorporeal and can pass through objects and walls no more than 5 feet thick as if it were difficult terrain.\n•\tThe creature cannot target other creatures with abilities or attacks, unless they are in the realm of the dead also.\n•\tThe creature can see and speak with the souls of creatures who have died within less than 24 hours.\n•\tThe creature may expend an action to absorb a soul within 5 feet and regain hit points equal to one hit dice roll. It does not consume the hit dice. The creature must finish a short rest before using this benefit again."
  },
  {
    "id": "唯一的朋友 ONLY FRIEND",
    "name_zh": "唯一的朋友",
    "name_en": "ONLY FRIEND",
    "category_zh": "簡易武器（矛），獨特Simple Weapon (Spear), Unique",
    "category_en": "",
    "desc_zh": "這把獨特的矛是一根長而堅硬的粗木桿，帶有一個大的金屬尖頭，裝飾著奇怪的彎曲雕刻 。與普通矛不同，這把武器被投擲時造成 1D10 穿刺傷害 。如果使用者與物品調適，那麼使用一個附贈動作，矛會立即閃現回其主人手中 。它非常孤獨 。",
    "desc_en": "This unique spear is a long hard thick wooden shaft with a large metallic pointy end adorned with strange curving carvings. Unlike a regular spear this deals 1D10 piercing damage when thrown as a weapon. If the user is attuned to the item it will then using a bonus action the spear will immediately return back to its owners hand in a flash. It gets very lonely."
  },
  {
    "id": "奧菲莉婭的研缽與杵 OPHELIA’S MORTAR AND PESTLE",
    "name_zh": "奧菲莉婭的研缽與杵",
    "name_en": "OPHELIA’S MORTAR AND PESTLE",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "一套小而重、使用已久的研缽與杵，由火山硫磺石鑿成 。如果使用者花費至少 20 分鐘研磨一磅植物材料，那麼他們能夠魔法般地創造以下一項：1 磅麵粉、0.5 磅胡椒粉、0.5 磅灰燼、4 盎司鹽、3 盎司調味香料、2 盎司硫磺、2 盎司骨粉或 1 盎司黑火藥 。",
    "desc_en": "A small but heavy, well-worn mortar and pestle set hewn from volcanic brimstone. If the user spends at least 20 minutes grinding a pound of plant material then they are able to magically create one of the following: 1 pound of flour, ½ pound of pepper, ½ pound of ash, 4 ounces of salt, 3 ounces of seasoning spices, 2 ounces of sulphur, 2 ounces of bone dust or 1 ounce of black powder."
  },
  {
    "id": "原始噩夢 ORIGINAL NIGHTMARE",
    "name_zh": "原始噩夢",
    "name_en": "ORIGINAL NIGHTMARE",
    "category_zh": "普通物品，常見Normal Item, Common",
    "category_en": "",
    "desc_zh": "來自收藏家的禮物 。「原始噩夢」是一本破舊的兒童故事書，用人皮裝訂 。這本書被一條怪誕的皮革帶子繫緊 。解開皮帶會使書本自動魔法般地打開到隨機一頁 。頁面上的文字開始融合，在泛黃的污漬頁面上形成移動的圖畫 。它講述了一個來自萬聖域的著名故事 。\n一個關於凡人女子的故事。她渴望在自己的世界裡平靜生活，然而周遭之人從未將她視作人類。她的家人把她當作奴僕，她的朋友利用她達成私慾，而鎮上的人們則視她為負擔。她被稱為詛咒之人，眾人深信不疑。儘管如此，她仍努力追尋幸福。\n那女子一生從未犯下任何罪孽，卻長年飽受折磨。直到某日，她遇見了一位奇異的男子——他將她視為平等之人，甚至視為戀人。兩人共度數月，女子第一次感受到真正的快樂。\n但凡事終將消逝。凡人種族的容貌與心靈皆殘酷卑劣。那男子已有妻室，為了自保，他聲稱自己被女巫附身，被迫在她的操控下做出可怕之事。女子被誣陷為女巫，毫無證據便被判以絞刑。所有人都認定她有罪。\n當她立於木台之上，環顧人群，本以為能看到哀傷的面孔，卻只見滿場的笑意與冷笑。原來，鎮民早已策劃她的死。繩索收緊，生命逐漸被奪走時，她最後一絲人性崩斷。\n她用僅存的氣息，壓抑住淚水，讓怒火吞噬了自己。她詛咒——詛咒整座小鎮，詛咒她身邊的所有人。她詛咒父母、兄弟姊妹與那虛偽的戀人；詛咒他們腳下的大地，詛咒他們呼吸的空氣。她一遍又一遍地詛咒，直到最後——她連自己的名字、自己的存在，也一同詛咒。\n然後，整座小鎮被吞噬了……\n真奇怪。其餘的頁面似乎不見了。我想知道它們怎麼了 。",
    "desc_en": "A gift from the collector. The original Nightmare is a tattered old children’s story book, bound in human skin. The book is held closed by a strand of the grotesque leather. Undoing the strap will cause the book to open magically by itself to a random page. The words on the page begin to meld and form moving drawings on the stained yellow pages. It tells a well-known story from the Hallow.\n“A tale about a mortal woman who tried to live peacefully in her world. The woman however was never treated as human by those around her. Her family treated her like a slave, her friends used her to get what they wanted and the townsfolk treated her like a burden. She was a curse and everybody believed it, yet still she pressed on to be happy. The woman had done nothing wrong in her life. Her torment continued for untold years before she met a strange man who treated her as an equal and as a lover. They spent many months together and the woman felt truly happy. But nothing lasts forever. The looks and personalities of the mortal races are cruel and vile. The man was married to another, he claimed he had been possessed by the witch and made to do horrible things at her beck and call. The woman was unfairly tried as a witch and sentenced to death by hanging. All found her guilty without any proof. As she stood atop her wooden stage she looked around at the faces she thought would mourn her, but she only saw smiles and grins. The townsfolk had plotted her demise from the beginning. As the rope was drawn and the life slowly squeezed from her lungs, her final shred of humanity snapped. Mustering her remaining breath she fought back her tears as the rage filled up inside her. She cursed. She cursed the town. She cursed the people around her. She cursed her parents, her siblings, and her fake lover. She cursed the ground they stood on, she cursed the air they breathed. She cursed and cursed and cursed until finally she cursed her own name, cursed her own very existence. The town was swallowed whole…”\nThat’s odd. The rest of the pages appear to be missing. I wonder what happened to them."
  },
  {
    "id": "奧瑞莎的手術刀 ORISA’S SCALPEL",
    "name_zh": "奧瑞莎的手術刀",
    "name_en": "ORISA’S SCALPEL",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "這把手術刀異常乾淨，幾乎沒有重量，且鋒利無比 。它不到一手掌長，手柄上刻有字母 OC 。此物品的擁有者可以選擇對近戰範圍內一個自願的活體目標造成 2 點揮砍傷害，使刀刃沾滿血液 。擁有者將在對該手術刀造成傷害的目標進行的醫療檢定上獲得優勢 。此效果持續到血液從刀刃上被清理乾淨為止 。",
    "desc_en": "This scalpel is remarkably clean, almost weightless and razor sharp. It is less than a hands length long and has the letters OC etched into the handle. The owner of this item may choose to inflict 2 Slashing Damage to a willing, living target within melee range coating the blade in blood. The owner will gain advantage on Medicine checks for the target that the scalpel caused damage to. This effect lasts until the blood is cleaned from the blade."
  },
  {
    "id": "奧瑞克的鬼燈 ORRICK’S GHOST LAMP",
    "name_zh": "奧瑞克的鬼燈",
    "name_en": "ORRICK’S GHOST LAMP",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "這個略帶泥土和血跡的頭燈配有一條可調節的彈性束帶，適合任何頭部或頭盔尺寸 。一團鬼火棲息在燈的內部，當搖動時，會在物品周圍 20 英尺半徑內發出綠光 。這對於在黑暗中需要雙手操作的人來說非常有用 。",
    "desc_en": "This slightly dirt filled and blood stained head lamp comes with an adjustable elastic strap that fits any head or helm size. A small will-o-wisp inhabits the interior of the lamp and when rattled around will emit a green light in a 20 foot radius around the item. This is mighty useful for people who need both hands in the dark."
  },
  {
    "id": "奧斯瓦多的血管 OSVALDO’S VEINS",
    "name_zh": "奧斯瓦多的血管",
    "name_en": "OSVALDO’S VEINS",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "這個物品絕對令人毛骨悚然 。簡單雕刻的線軸不超過人類手掌大小 。它很輕，似乎由某種泛黃的骨頭製成 。緊緊纏繞在線軸上的是 100 英尺長的、看起來細長如線的東西 。在極近的檢查下，這條線似乎是由微小的血管和毛細血管編織而成，很可能是來自奧斯瓦多自己的身體 。這條線極其堅固，非常難以折斷或切割 。奧斯瓦多本人為他完美且非人般堅固的縫線感到自豪，這條線也不例外 。這條線總共有 25 點生命值，只能通過 DC21 的力量檢定才能扯斷 。與傳統的線不同，這種線免疫火焰 。奧斯瓦多的血管負重評級為 1000 磅 。",
    "desc_en": "This item is definitely creepy. The simple carved spool is no larger than the palm of a human hand. It is lightweight and appears to be made of some kind of yellowing bone. Tightly wound around the spool is 100 feet of a thing gangly looking thread. On extremely close inspection the thread appears to be woven of tiny veins and capillaries, most likely from Osvaldo’s own body. This thread is extremely strong and very difficult to break or cut. Osvaldo himself was proud of his perfect and inhumanly strong stitches and this thread is no different. This thread has a total of 25 Hit Points and can only be bust with a Strength Check of DC21. Unlike traditional threads this one is impervious to fire. Osvaldo’s veins has a load rating of 1000 pounds."
  },
  {
    "id": "完美之血 PERFECT BLOOD",
    "name_zh": "完美之血",
    "name_en": "PERFECT BLOOD",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "這種渾濁的紫色黏液只能由/從完美主義者雷恩那裡收穫。它不存在於其他任何地方。黏液觸感黏稠，在你手中像油灰一樣可塑。一旦收集，這種黏液無法被拉開或分離。將黏液塑形到一個生物的臉上，允許使用者完全改變該角色的臉部。眼睛顏色、膚色、鼻子大小、嘴唇、耳朵形状，甚至牙齒或種族面部特徵在使用完美之血時都會暫時改變。使用者可以複製他們曾經見過的任何臉孔，也可以創造新的臉孔。效果發生後，不可能分辨出這張臉是假的，儘管佩戴者肯定能感覺到，因為他們感到有點窒息。完美之血的效果持續到黏液從佩戴者臉上被拉下來為止。該物品可以無限重複使用，它畢竟是完美的。",
    "desc_en": "This murky purple slime can only be harvested by/from Laine the perfectionist. It exists nowhere else. The slime is sticky to the touch and malleable like putty in your hands. The slime once collected cannot be pulled apart or separated. Moulding the slime onto a creatures face allows the user to completely change the face of the character in question. Eye colour, skin tone, nose size, lips, ear shape and even teeth or racial facial features will temporarily change while using the perfect blood. The user can duplicate any face they have ever seen before as well as create new ones. After the effects have taken place, it is impossible to distinguish that the face is fake, although the person wearing it can definitely tell as they feel a little suffocated. The effects of the perfect blood last until the slime is pulled off the face of the wearer. The item can be reused infinitely, it is perfect after all."
  },
  {
    "id": "瘟疫花生 PESTILENT PEANUTS",
    "name_zh": "瘟疫花生",
    "name_en": "PESTILENT PEANUTS",
    "category_zh": "普通物品（消耗品），常見Normal Item (Consumable), Common",
    "category_en": "",
    "desc_zh": "這個濕漉漉的小紙袋裡裝著一些發霉的花生，看起來像是浸在污泥裡。儘管看起來如此，它們其實相當可口，帶有胡椒味的鹹香。然而，吃完一些這些花生後，你的胃開始咕嚕作響。無論醬汁是什麼，可能都不適合正常凡人食用。該生物將在接下來一小時內遭受劇烈放屁的困擾，導致他們無法潛行或躲藏。",
    "desc_en": "This small wet paper bag contains some mouldy peanuts that look like they were dipped in sludge. Despite how they look they are quite edible with a peppery savoury flavour. After eating some of these peanuts however your stomach begins to gurgle. Whatever the sauce is may not be meant for normal mortal consumption. The creature will suffer from volatile farting for the next hour granting them the inability to stealth or hide."
  },
  {
    "id": "針插 PIN CUSHION",
    "name_zh": "針插",
    "name_en": "PIN CUSHION",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "這個小紅色針插裝飾著銀色縫線和同色系的小流蘇。針插上有數百根鋒利的縫衣針，鈍端朝上從表面突出。可以隨時從針插上拔出一根針。當一根針被拔出時，另一根會長出來取代它的位置。一根針可以被視為微型武器，如果用於攻擊動作，能夠造成 1D2 點穿刺傷害。這些針也可用於縫紉、開鎖、製造破片炸彈，或者只是創造一個字面意義上的針堆。無論你有什麼需求，總會有針。沒有限制可以移除多少根針。",
    "desc_en": "This small red cushion is decorated with silver stitching and small tassels of the same colour. The cushion is home to hundreds of razor sharp sewing needles protruding blunt end up from the surface. A needle may be plucked from the cushion at any time. When a needle is plucked from it, another will grow to take its place. A needle may be considered a tiny weapon capable of inflicting 1D2 points of Piercing Damage if used in an attack action. The needles can also be useful with sewing, picking locks, building shrapnel bombs or just creating a literal haystack of needles. Whatever your needs there will always be needles. There is no limit to how many needles can be removed."
  },
  {
    "id": "毒藥壺 PITCHER OF POISONS",
    "name_zh": "毒藥壺",
    "name_en": "PITCHER OF POISONS",
    "category_zh": "奇物，稀有Wondrous Item, Rare",
    "category_en": "",
    "desc_zh": "這個金屬壺看起來相當樸素普通。這個壺沒有什麼突出之處，沒有雕刻或銘文。只是一個樸素的冷灰色金屬壺。它可以容納 20 盎司液體。任何倒入此壺的液體都會立即變成毒藥，無論它是什麼。毒藥的類型基於下表隨機決定。（這些毒藥可以在《玩家手冊》中找到）\n擲骰 (1D4)\t毒藥\n1\t刺客之血 Assassin’s Blood\n2\t午夜之淚 Midnight Tears\n3\t蒼白劑 Pale Tincture\n4\t吐真劑 Truth Serum",
    "desc_en": "This metal jug looks fairly plain and ordinary. Nothing stands out about this jug, there is no engravings or inscriptions. Just a plain cold grey metal jug. It can hold 20 ounces of liquid. Any liquid poured into this jug instantly becomes poison no matter what it is. The type of poison is random based on the table below. (These poisons can be found in the PHB)"
  },
  {
    "id": "仙塵棒 PIXIE STIX",
    "name_zh": "仙塵棒",
    "name_en": "PIXIE STIX",
    "category_zh": "普通物品（消耗品），非普通Normal Item (Consumable), Uncommon",
    "category_en": "",
    "desc_zh": "一根細長的灰色紙吸管，兩端用細繩繫緊，裡面裝滿了糖和 100% 真實仙塵的秘密混合物。裡面的細糖粉是深紅色的，聞起來有潮濕泥土的氣味。食用時擲一顆 D20，這種美味的零食有 DC10 的機率賦予消費者 20 英尺的飛行速度，持續 1 小時。擲出低於 10 時，消費者會被詛咒 1 小時，並且其移動速度減少 15 英尺。此效果可以疊加。如果此效果將生物的移動速度降低到零以下，則會額外對消費者造成 2D4 心靈傷害。",
    "desc_en": "A thin greying paper straw tied off at both ends with fine twine is filled with a secret mixture of sugar and 100% real pixie dust to make these sickening treats. The fine sugary powder inside is a crimson red colour and smells of damp earth. When consumed roll a D20, this tasty treat has a DC10 chance to grant the consumer a Flying Speed of 20ft for 1 Hour. On a roll of less than 10, the consumer is cursed for 1 Hour and has their movement speed reduced by 15ft. This effect can stack. If this effect would reduce a creature’s movement speed below zero then it will additionally cause 2D4 Psychic Damage to the consumer."
  },
  {
    "id": "瘟疫散布者 PLAGUE BEARER",
    "name_zh": "瘟疫散布者",
    "name_en": "PLAGUE BEARER",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "這個小型附魔銀製香爐連接著一條短鏈，使其可以來回搖擺。裡面沒有明顯的香料可以燃燒；然而，有一小段黑色的燈芯。點燃這根燈芯會立即導致濃密的綠色煙霧從香爐中漫無目的地飄出。煙霧將擴散到一個 30 英尺的立方體區域。任何被困在此煙霧中的生物必須進行 DC14 的體質豁免，否則中毒 1 分鐘。可以在該生物回合結束時重複進行此豁免。",
    "desc_en": "This small enchanted silver incense burner is attached to a short chain making it useful to swing back and forth. There is no obvious incense inside to burn; however there is a small blacked wick. Lighting this wick will immediately cause thick green smog to drift aimlessly from the burner. The smog will spread over a 30ft cube. Nay creature caught in this smog must make a DC14 Constitution saving throw or become poisoned for 1 minute. The save can be repeated at the end of that creatures turn."
  },
  {
    "id": "毛絨玩偶 - 綜合款 PLUSHIES - ASSORTED",
    "name_zh": "毛絨玩偶 - 綜合款",
    "name_en": "PLUSHIES - ASSORTED",
    "category_zh": "奇物（收藏品），常見Wondrous Item (Collectible), Common",
    "category_en": "",
    "desc_zh": "在年輕的邪惡存在和一些特殊的恐怖存在中很受歡迎，這些恐怖毛絨玩具是整個領域中可以找到的最柔軟、最可愛的東西。有各種各樣的款式可供選擇，從殭屍到蝙蝠到女妖等等。它們通常可以購買或通過屍體嘉年華的雜耍遊戲贏得。儘管它們具有完全可擠壓的特點，但每個毛絨玩偶也是一次性的召喚物品。通過閱讀產品標籤上的魔法詞語，毛絨玩具會變成它所代表的怪物的真實版本，只不過它對召喚它的人完全友好。例如，一個殭屍毛絨玩偶會變成一個真正的殭屍！召喚的生物最多持續一個小時，並在你的先攻順序下行動，會遵循基本的命令。一小時後，該生物會化為灰燼。甚至連毛絨玩偶也不會留下。",
    "desc_en": "Popular among young evils and some special horrors, these horror plush toys are the softest and cutest thing that can be found in all of the realm. There is an assortment available from zombies to bats to banshees and more. They can usually be purchased or won through sideshow games at the Corpse Carnival. Despite their totally squishable features each plushie is also a single use summoning item. By reading the magic words on the product tag the plush toy will turn into a real version of the monster it represents, except it will be totally friendly to the person that summoned it. For example a zombie plushie will become a real zombie! The summoned creature lasts up to an hour and operates on your initiative and will follow basic commands. Once the hour is up the creature will turn to ash. Not even the plushie will remain."
  },
  {
    "id": "劇毒生態瓶 POISONOUS TERRARIUM",
    "name_zh": "劇毒生態瓶",
    "name_en": "POISONOUS TERRARIUM",
    "category_zh": "奇物，稀有Wondrous Item, Rare",
    "category_en": "",
    "desc_zh": "此物品包含一個簡單的圓形透明玻璃瓶，帶有一個橡膠塞。瓶子內部似乎是一個小型生態缸。一個完全自然的環境，只需要每 2-3 天滴幾滴水，每天一點陽光就能茁壯成長。它無盡的迷你生長、衰敗和再生循環是一種愉悅的奇觀。每 6 天，如果生態缸得到照料，它會在瓶子中央生長並開出一朵亮黃色的花。這朵花可以在它開花的那天收穫一次。必須小心處理。花瓣含有劇毒。使用花瓣，人們可以在長休期間花時間創造 1（一）劑量的泰拉毒液（參見泰拉毒液物品）。花的生長速度無法改變。如果生態缸沒有得到適當的照料，花就不會開花。",
    "desc_en": "This item consists of a simple rounded clear glass bottle with a rubber stopper. Inside the bottle appears to be a small terrarium. A completely natural environment that only needs a dribble of water every 2-3 days and a little sunshine each day to thrive. Its endless mini cycle of growth, decay and regrowth is a pleasant wonder. Every 6 days, if the terrarium is cared for it will grow and bloom a single bright yellow flower in the centre of the bottle. The flower may be harvested once on the day it blooms. It must be handled with care. The petals are incredibly poisonous. Using the petals, one may spend time during a long rest to create 1 (ONE) dose of Terra Poison (see Terra Poison item). The growth rate of the flower cannot be changed. If the terrarium is not cared for properly, the flower will not bloom."
  },
  {
    "id": "彈出式稻草人 POP-UP SCARECROW",
    "name_zh": "彈出式稻草人",
    "name_en": "POP-UP SCARECROW",
    "category_zh": "普通物品，稀有Normal Item, Rare",
    "category_en": "",
    "desc_zh": "此物品預裝在一個中等大小的破舊木箱中。箱子有一個帶鉸鏈的蓋子，前面有一個小銅製插銷。當插銷被釋放時，會從箱子裡開始發出響亮的滴答聲。1 分鐘後，蓋子會彈開，一個中等大小的稻草人會在一根大彈簧上從箱子裡彈出來。它披著一件破爛的斗篷，有一個小傑克南瓜燈作為頭部。眼睛和嘴巴會發光，並發出能被 100 英尺內生物聽到的咯咯笑聲。非常適合用來惡作劇，甚至更適合用來分散注意力。它可以重新裝填。",
    "desc_en": "This Item comes preloaded in a medium sized tatty wooden box. The box has a hinged lid with a small bronze latch at the front. When the latch is released a loud ticking noise will start coming from the box. After 1 minute the lid will fling open and a medium sized scarecrow will bounce from the box on a large spring. It is draped in a tattered cloak and has a small jack-o-lantern for a head. The eyes and mouth glow and it makes a cackling noise that can be heard by creatures within 100 ft. Makes for great tricks and even better distractions. It can be reloaded."
  },
  {
    "id": "便攜棺材 PORTABLE COFFIN",
    "name_zh": "便攜棺材",
    "name_en": "PORTABLE COFFIN",
    "category_zh": "普通物品，稀有Normal Item, Rare",
    "category_en": "",
    "desc_zh": "由頂尖吸血鬼工程師設計，此物品是一個微小的木盒，由深色木材製成，形狀像傳統棺材。使用內置機制，棺材可以展開成一個足以容納一個中型生物的完整尺寸棺材。逆轉此過程可以讓你將棺材縮小回大約 1 英寸的大小。盒子裡的東西不會隨之折疊。",
    "desc_en": "Designed by the top vampire engineers this item is a tiny wooden box constructed from a dark timber in the shape of a traditional coffin. Using a built in mechanism the coffin can be folded out into a full sized coffin large enough for one medium creature. Reversing the process allows you to shrink the coffin back down to its roughly 1 inch size. Things inside the box will not fold with it."
  },
  {
    "id": "便攜哨兵機器人 PORTABLE SENTRY BOT",
    "name_zh": "便攜哨兵機器人",
    "name_en": "PORTABLE SENTRY BOT",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "一個小型生鏽的發條機器人，配備一個喇叭和某種描述在它頭上的機械燈。這個小錫罐機器人有胳膊和腿，但它們的動作不是很流暢。一個大小合適的上弦鑰匙位於它的背部。轉動鑰匙幾次就足以為哨兵機器人充電並允許其使用。將哨兵機器人放在地面上，面向一個方向，將啟動其哨兵協議。機器人會緩慢地向它被放置的方向行走 10 英尺，轉身並走回它來的方向，在它機械地跺腳走動時發出輕柔的咔嗒聲。它將繼續這種移動長達一小時。在其巡邏期間，如果哨兵 10 英尺內有任何未受隱形效果影響的移動，或者哨兵機器人被除了為其上弦的生物之外的任何東西或任何人觸碰，它將導致哨兵機器人開始其警報協議。在警報協議期間，機器人會吹響它的喇叭，發出震耳欲聾的響聲，使 30 英尺內的所有生物耳聾一分鐘。它頭上的燈也會開始閃爍，周期性地用明亮的紅光照亮自身周圍 30 英尺的區域。警報序列將持續剩餘的哨兵協議時間，或者直到它被摧毀或被為其上弦的生物撿起。",
    "desc_en": "A small rusted clockwork robot sporting a trumpet and some description of a mechanical lamp on what assumedly is its head. The little tin bot has arms and legs but they aren’t very fluid in their movements. A sizable wind up key is located on its back. Winding up the key a few times will be enough to charge the sentry bot and allow its usage. Placing the sentry bot on the ground facing a direction will start its sentry protocols. The bot will slowly walk 10 feet towards the direction it was placed, turn around and walk back the direction it has come from making a gentle clicking noise as it mechanically stomps around. It will continue this movement for up to an hour. During its patrol if there is any movement with 10 feet of the sentry that is not under the effects of invisibility or if the sentry bot is touched by anything or anyone other than the creature who wound it up it will cause the sentry bot to begin its alarm protocols. During the alarm protocol the bot will blow its trumpet deafeningly loudly, deafening all creatures within 30 feet for one minute. The lamp on its head will also begin to flash, periodically illuminating a 30 foot area around itself with a bright red light. The alarm sequence will continue for the remaining duration of the hour left over from the sentry protocol or until it is destroyed or picked up by the creature who wound it up."
  },
  {
    "id": "盒中瘟疫 POX IN A BOX",
    "name_zh": "盒中瘟疫",
    "name_en": "POX IN A BOX",
    "category_zh": "奇物，稀有Wondrous Item, Rare",
    "category_en": "",
    "desc_zh": "一個用可愛的橙色絲帶包裝得像禮物一樣的小黑紙板盒。盒子裡有什麼你可能會問？嗯，誰知道盒子裡到底有什麼。可能是一些積木，可能是一隻狐狸，但它最肯定是瘟疫。任何在盒子打開時 5 英尺內的生物必須進行 DC16 的體質豁免。如果失敗，該生物會感染瘟疫。在接下來的 D6+1 天裡，該生物獲得 2 級力竭，並且其生命值暫時降低到其當前最大值的四分之一（向下取整）。如果豁免成功，則沒有效果發生，並且該生物在接下來的 24 小時內不會受到此瘟疫的影響。",
    "desc_en": "A small black cardboard box wrapped up like a present with a lovely orange ribbon on top. What’s in the box you might ask? Well who knows really what’s in the box. It could be some blocks, it could be a fox, but it is most definitely a pox. Any creature within 5 feet of the box as it is opened must make a DC16 Constitution Saving Throw. If failed the creature contracts a pox. For the next D6+1 days the creature gains 2 levels of exhaustion and its life total is temporarily reduced to a quarter of its current maximum rounded down. If the save was successful no effects occur and the creature cannot be affected by the pox for the next 24 hours."
  },
  {
    "id": "保護盒 PROTECTIVE BOX",
    "name_zh": "保護盒",
    "name_en": "PROTECTIVE BOX",
    "category_zh": "普通物品，常見Normal Item, Common",
    "category_en": "",
    "desc_zh": "這個超級棒、超神奇的盒子今天就可以屬於你，價格超級便宜！你可能會問這個盒子有什麼用？完全沒用！這個超清晰的保護盒只是一個無用的透明盒子，而且它的大小剛好適合你的搖頭娃娃！用這些超酷的透明盒子，安全地讓你的珍貴收藏遠離細菌和黯蝕傷害吧！採用全新的盒子設計，這個保護盒現在有 5 AC！沒錯，5 AC，總共 4 HP！這足以完全擋住一個力量 10 的人使用的普通匕首！多麼神奇的產品！那你還在等什麼？現在就來買一個吧！",
    "desc_en": "This super awesome and amazing box can be all yours today for a super cheap price! What does the box do you might ask? Absolutely nothing! This ultra-clear protective box is just a useless clear box that just so happens to be the perfect size for your Bobbleheads! Safely keep germs and Necrotic damage away from your prized collection with these super cool clear boxes! Sporting a brand new box design, this protective box now has an AC of 5! That’s right 5 AC with a total of 4 HP! That’s enough to completely stop a generic dagger from someone with 10 strength! What an amazing product! So what are you waiting for? Come and get yours now!"
  },
  {
    "id": "蓬蓬炸彈 PUFF BOMB",
    "name_zh": "蓬蓬炸彈",
    "name_en": "PUFF BOMB",
    "category_zh": "普通物品，非普通Normal Item, Uncommon",
    "category_en": "",
    "desc_zh": "蓬蓬炸彈由一個足球大小的球狀蘑菇帽組成，觸感輕微毛茸茸。蓬蓬炸彈本身有一根短柄，可以很容易地從菌蓋上脫落。當柄從菌蓋上被拉出時，蓬蓬炸彈就會啟動。當蓬蓬炸彈被投出並著陸或在啟動時撞擊到堅硬表面時，它會爆發出濃密的孢子雲。每個在 10 英尺半徑內的生物必須進行 DC13 的體質豁免，失敗則受到 3D4 毒素傷害，成功則傷害減半。",
    "desc_en": "The puff bomb consists of a football sized bulbous mushroom cap that is lightly furry to the touch. The puff bomb itself has a short stem that can be easily dislodged from the cap. When the stem is pulled from the cap, the puff bomb becomes active. When the puff bomb is thrown and lands or it impacts a hard surface while active it bursts in thick cloud of spores. Each creature within a 10 foot radius must make a DC13 Constitution saving throw or be dealt 3D4 Poison damage on a failed save or half as much on a successful one."
  },
  {
    "id": "南瓜血 PUMPKIN BLOOD",
    "name_zh": "南瓜血",
    "name_en": "PUMPKIN BLOOD",
    "category_zh": "奇物，稀有Wondrous Item, Rare",
    "category_en": "",
    "desc_zh": "這個帶有橙色橡膠塞的矩形小瓶內含一種濃稠的橙色液體，裡面漂浮著果肉。喝下此小瓶的內容物會導致飲用者劇烈不適。有 DC15 的機率，使用者在 24 小時內會被詛咒並變成一個南瓜。受此物品詛咒的人會變成一個南瓜，無法移動、說話、使用物品或通常做任何事情。他們將保持南瓜的形態，直到詛咒被解除或被吃掉。這個詛咒可以通過高等法術和祝福來移除。",
    "desc_en": "This rectangle vial with an orange rubber stopper contains a thick orange liquid that has pulp floating inside it. Drinking the contents of this vial will cause the one who ingested it to become violently ill. There is a DC15 chance that within 24 hours the user will be cursed and turn into a pumpkin. A person cursed with this item will turn into a pumpkin and be unable to move, speak, use items or generally do anything. They will remain a pumpkin until the curse can be lifted or they get eaten. This curse can be removed by high level spells and blessings."
  },
  {
    "id": "南瓜炸彈 PUMPKIN BOMB",
    "name_zh": "南瓜炸彈",
    "name_en": "PUMPKIN BOMB",
    "category_zh": "普通物品，非普通Normal Item, Uncommon",
    "category_en": "",
    "desc_zh": "它大約是你的拳頭大小，一個小橙色南瓜，一側雕刻著邪惡的笑容。梗是由某種看起來像是引信的東西製成的。當引信被點燃時，南瓜會發出咯咯的笑聲，持續 1D6 輪，然後在火焰中爆炸。爆炸對南瓜炸彈 10 英尺立方體內的生物造成 1D10 火焰傷害。",
    "desc_en": "It is about the size of your fist, a small orange pumpkin with an evil grin carved into one side. The stem is made of what appears to be some kind of fuse. When the fuse is lit the pumpkin will emit cackling laughter for 1D6 rounds before exploding in a fiery blaze. The explosion deals 1D10 Fire damage in a 10 foot cube from the pumpkin bomb."
  },
  {
    "id": "南瓜之心 PUMPKIN HEART",
    "name_zh": "南瓜之心",
    "name_en": "PUMPKIN HEART",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "南瓜之心是一個多汁的、佈滿通風口和管道的小外殼，滲出橙色的汁液。這顆心在你的手中緩慢而輕柔地跳動，滲出更多的汁液，供應永不枯竭。這顆心跳動得越快，就表示你離高品質的南瓜越近。它面對的南瓜品質越好，它就跳得越快、汁液越多。也許在那些神秘南瓜上會有用？",
    "desc_en": "The pumpkin heart is a small juicy husk of vents and pipes that ooze an orange coloured juice. The heart unceremoniously beats slowly and softly in your hand, oozing more juice in a never-ending supply. The heart beats faster the closer you are to good quality pumpkins. The better the quality pumpkin it is facing the faster and juicier it beats. Might be useful on those Mystery pumpkins?"
  },
  {
    "id": "南瓜撲克牌 PUMPKIN PLAYING CARDS",
    "name_zh": "南瓜撲克牌",
    "name_en": "PUMPKIN PLAYING CARDS",
    "category_zh": "普通物品，常見Normal Item, Common",
    "category_en": "",
    "desc_zh": "萬聖墓鎮的南瓜撲克牌是在深夜打發無聊的完美方式。這些優質撲克牌由一種特殊的南瓜羊皮紙製成，既不會褪色也不會撕裂。然而，警告所有使用者，如果你在玩這些牌時輸了遊戲，你會立即失去 1 點生命值。",
    "desc_en": "The pumpkin playing cards of Hallowgrave are the perfect way to pass the boredom in the dead of night. These premium cards are made from a special pumpkin parchment that will neither fade nor tear. Warning to all users however, if you lose a game while playing with these cards you will instantly lose 1 Hit Point."
  },
  {
    "id": "南瓜潘趣酒 PUMPKIN PUNCH",
    "name_zh": "南瓜潘趣酒",
    "name_en": "PUMPKIN PUNCH",
    "category_zh": "普通物品（消耗品），常見Normal Item (Consumable), Common",
    "category_en": "",
    "desc_zh": "相信我朋友，你其實不想知道這杯潘趣酒裡放了什麼。只要知道如果你喝了它，它肯定會吐出來，不管你喜不喜歡。消耗此飲品後，在接下來 1 小時內，每次你張開嘴時都要進行一次 DC12 的體質豁免。如果你失敗，內容物會以投射性嘔吐物的形式從你面前 5 英尺處噴出。如果你被嘔吐物擊中，則受到 1D4 力場傷害。",
    "desc_en": "Trust me friend you don’t actually want to know what went into this punch. Just know that if you drink it, it’s definitely going to come back up whether you like it or not. After consuming this drink make a DC12 Constitution saving throw every time you open your mouth for 1 hour. If you fail the contents come back up in projectile vomit 5ft in front of you. Take 1D4 force damage if you get hit by the vomit."
  },
  {
    "id": "鬼響鞭 RATTLE WHIP",
    "name_zh": "鬼響鞭",
    "name_en": "RATTLE WHIP",
    "category_zh": "軍用武器（鞭），稀有Martial Weapon (Whip), Rare",
    "category_en": "",
    "desc_zh": "靈感來自外來的毒響尾蛇，鬼響鞭由厚實沉重的爬行動物皮革製成，鞭繩上間隔地附著著蛇牙。一個裝滿金屬片和釘子的尖刺籠連在鞭繩的末端。當搖動時，它會發出獨特的嘎嘎聲，讓人想起其同名生物。鬼響鞭被視為具有長武、輕型與靈巧武器屬性。鬼響鞭成功命中時造成 1D4 毒素傷害。",
    "desc_en": "Inspired by the foreign venomous rattlesnake, the Rattle Whip is made from thick and heavy reptile hide with snake fangs attached at various interval down the length of the cord. A small spike cage filled with slivers of metal and nails is attached to the end of the cord. When shaken around it makes a distinct rattling sound reminiscent of its namesake. The Rattle Whip is considered to have the Reach, Light and Finesse weapon attributes. The rattle whip inflicts 1D4 Poison Damage on a successful hit."
  },
  {
    "id": "烏鴉顱骨項鍊 RAVEN SKULL NECKLACE",
    "name_zh": "烏鴉顱骨項鍊",
    "name_en": "RAVEN SKULL NECKLACE",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "一個漂白的白色烏鴉頭骨，掛在一條簡單的長環棕色編織繩上。佩戴此項鍊時，你會有不祥的烏鴉在遠處跟隨著你。每天黎明時，擲一顆 D6。擲出 1、2 或 3 時，什麼都不會發生。擲出 4 時，一隻烏鴉會帶給你一個價值 1 CP 的小飾品。擲出 5 時，一隻烏鴉會帶給你一個價值 1 SP 的小飾品。擲出 6 時，一隻烏鴉會帶給你一個價值 1 GP 的小飾品。",
    "desc_en": "A bleached white raven’s skull hung from a simple long loop of brown braided cord. While wearing this necklace you are ominously followed at a distance by ravens. At dawn each day roll a D6. On a roll of 1, 2 or 3 nothing happens. On a roll of 4 a raven brings you a trinket worth 1 CP. On a roll of 5 a raven brings you a trinket worth 1 SP. On a roll of 6 a raven brings you a trinket worth 1 GP."
  },
  {
    "id": "萬聖域重建錄 RECONSTRUCTION OF HALLOW",
    "name_zh": "萬聖域重建錄",
    "name_en": "RECONSTRUCTION OF HALLOW",
    "category_zh": "普通物品（收藏品），獨特Normal Item (collectible), Unique",
    "category_en": "",
    "desc_zh": "來自收藏家的禮物。「萬聖域重建錄」是一本老舊的日記，缺少封面，僅靠長長的金色髮絲勉強維持。展開第一頁會使書本自動魔法般地打開到隨機一頁。頁面上的文字開始融合，形成在羊皮紙上舞動的移動圖畫。它似乎是一個年輕女子，或者可能是。這個身影不斷地變換形態，從不在單一形象上停留超過幾秒鐘。這可能是關於雷恩的故事嗎？\n「這個嗎？不，還是不太合適。那昨天那個呢？不，太偏了。為什麼在這場完美的惡夢裡，偏偏有這麼多瑕疵？這面鏡子肯定變形了。得再向史凱頓申請一面新的。\n唉，看來今天又得回去替年輕的娜菈小姐主持診療了。又是一場診療，又是一個夜晚，又一次將我完美的天賦浪費在這些醜陋的生物身上。唯一的希望，是有幾個外來者能被帶到我這裡來。我真想看看能不能有新的臉能加入我的收藏。也許這次的下巴會更俐落，也許會有我最近聽說的那種漂亮酒窩。光是想像就令人愉悅。\n現在，只能等著看看威廉今年會從他的魔帽裡抽出誰了。他到底是怎麼決定誰生誰死的？我甚至不知道他是誰，或者曾是誰。重建之後，一切都變了。我明白。但其他人都那麼顯而易見——他們只是成為了自己本來該是的樣子。唯獨他、那個商人，還有我，是這座墳墓裡的變數。\n我也是重建的一部分。不過，我那被拓展的才能讓我能照自己意願重寫故事。這裡沒有人會記得從前的我。當我親手劃開那具皮囊，從她的軀體裡爬出、重生之時，我就確保了這一點。\n嗯……這念頭太感傷了。也許該換個髮色了。這顏色，看起來有點舊了呢。」",
    "desc_en": "A gift from the collector. Reconstruction of Hallow is an aging diary missing its cover, barely held together with long woven strands of golden hair. Unfolding the first page will cause the book to open magically by itself to a random page. The words on the page begin to meld and form moving drawings that danced across the parchment. It appears to be a young woman or at least it might be. The figure continues to change forms endlessly never resting on a single figure for more than a few seconds. Could this be a story about Laine?\n“Maybe this one? No it doesn’t fit right. What about the one from yesterday? No it’s too off centre. Why must there be so many imperfections in such a perfect nightmare. This mirror must have a warp in it. I’ll have to requisition another one from Skelton. I guess it is back to young Miss Nara for today’s clinic then. Mental sigh. Another clinic. Another night. Another waste of my perfectly good talents on these hideous creatures. My only hope is that some of the interlopers head my way. I would love for a new face to add to my look. Maybe this one will have a better chin, or maybe some of those new dimples I keep hearing about. I am thrilled at the thought. Now I only have to wait see who William pulls from his magic hat this year. How does he choose who lives and who dies anyway. I don’t even know who he is, who he was. During the reconstruction everything changed so much I know. But everyone else is so obvious, they just become what they always were. Only he, the merchant and I are the wild cards in this grave. I was part of the reconstruction as well, but my newly expanded talents allowed me to rewrite my story just the way I wanted it. Nobody here would ever remember the old me. I had mode sure of that when I sliced her open and crawled out born anew. Hmm a little to melancholy, maybe it’s time to change my hair color as well, it’s looking a little worn.”"
  },
  {
    "id": "團長高頂禮帽 RINGMASTER’S TOP HAT",
    "name_zh": "團長高頂禮帽",
    "name_en": "RINGMASTER’S TOP HAT",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "此物品包含一頂無可挑剔閃亮的黑色高頂禮帽，從帽簷算起至少一英尺高。帽子內部直徑 10 英寸，內襯深紅色絲綢面料，出於某種原因看起來糾結而皺巴巴的。這頂高頂禮帽實際上是一個通往次元次元的入口，很像百袋大衣。該次元最多可以容納 250 磅，只要它能穿過帽子的開口。無論裡面裝了多少東西，帽子總是重 5 磅。與其他次元次元不同，高頂禮帽內部的次元自然含有空氣，生物即使被放入次元內也能安全呼吸。撕毀、破壞或將高頂禮帽放入另一個次元次元會導致一個通往星界位面的傳送門出現，吞噬其 5 英尺內的任何東西並蒸發該物品。",
    "desc_en": "This item consists of an impeccably shiny black top hat that is at least a foot high from the brim. The inside of the hat is 10 inches across and lined with a crimson red silken fabric that for some reason looks tangled and scrunched up. The top hat is actually a portal that leads to a sub dimension much like a coat of many pockets. The sub dimension can hold up to 250 lbs as long as it can fit through the opening of the hat. The Hat always weighs 5 lbs regardless of how much is in it. Unlike other sub dimensions, the one inside the top hat naturally contains air and creatures can breathe safely even when placed inside the sub dimension. Ripping apart, destroying or placing the top hat inside another sub dimension will cause a portal to the astral plane to appear, consuming anything within 5 feet of it and vaporising the item."
  },
  {
    "id": "團長之鞭 RINGMASTER’S WHIP",
    "name_zh": "團長之鞭",
    "name_en": "RINGMASTER’S WHIP",
    "category_zh": "軍用武器（鞭），稀有Martial Weapon (Whip), Rare",
    "category_en": "",
    "desc_zh": "這條深色拋光的鞭子，仔細觀察會發現握柄處略有磨損和磨損。這條 8 英尺長的鞭子是聖墓團長的標準配備，這條顯然已經使用了幾十年。手柄底部刻有首字母 OVG。這條鞭子被視為具有靈巧和長武屬性的軍用武器。然而，此武器成功命中目標時不會造成任何傷害。相反，如果目標是生物，它必須進行 DC14 的感知豁免，否則被魅惑直到你的下個回合開始。",
    "desc_en": "This dark polished whip upon closer inspection is slightly frayed and well-worn on the grip. The 8 foot whip is a standard of hallowed ringmasters and this one has clearly seen many decades of use. The initials OVG have been etched in the base of the handle. This whip is considered to be a martial weapon with the finesse and reach attribute. This weapon however, inflicts no damage to a target on a successful hit. Instead, if the target is a creature it must make a DC14 Wisdom saving throw or become charmed until the beginning of your next turn."
  },
  {
    "id": "稻草人之血 SCARECROW BLOOD",
    "name_zh": "稻草人之血",
    "name_en": "SCARECROW BLOOD",
    "category_zh": "奇物，稀有Wondrous Item, Rare",
    "category_en": "",
    "desc_zh": "這個帶有棕色橡膠塞的橢圓形小瓶內裝滿了由稻草製成的稀薄木屑。喝下此小瓶的內容物會在你口中留下木頭味，並導致飲用者劇烈不適。有 DC15 的機率，使用者在 24 小時內會被詛咒變成一個有著傑克南瓜燈頭的稻草人，不再需要食物和水來維持生命，但變得易受火焰傷害。這個詛咒可以通過高等法術和祝福來移除。",
    "desc_en": "This small oval vial with a brown rubber stopper is filled with a watery sawdust made from straw. Drinking the contents of this vial leaves a woody taste in your mouth and will cause the one who ingested it to become violently ill. There is a DC15 chance that within 24 hours the user will be cursed to become a scarecrow with a jack-o-lantern head, no longer needing food or water to sustain their life, but becoming vulnerable to fire damage. This curse can be removed by high level spells and blessings."
  },
  {
    "id": "蠍尾鞭 SCORPION TAIL",
    "name_zh": "蠍尾鞭",
    "name_en": "SCORPION TAIL",
    "category_zh": "軍用武器，稀有Martial Weapon, Rare",
    "category_en": "",
    "desc_zh": "這把武器由一個製成蠍尾形狀的大型連枷組成。握柄約一英尺長，由堅固的橡木製成。鏈節由堅固的鋼鐵製成，連接握柄和頭部的蠍子毒刺。蠍子毒刺會帶來痛苦的體驗，因為它砸入你敵人脆弱的身體，並在尖端為他們留下一個 nasty surprise。這把武器是單手武器，造成 1D8 鈍擊傷害，並且當蠍子毒液從尾尖滲出時，還會造成額外的 1D2 毒素傷害。",
    "desc_en": "This weapon consists of a large flail fashioned to look like a scorpion’s tail. The handle is about a foot long and is made from a sturdy oak tree. The chain links are made from a strong steel connecting the handle to the scorpion’s stinger at the head. The scorpion stinger makes for a painful experience as it smashes into the frail bodies of your enemies and leaves them with a nasty surprise waiting for them at the tip. This weapon is single handed and inflicts 1D8 Bludgeoning Damage and also inflicts an additional 1D2 Poison damage as the scorpions poison seeps from the tip of the tail."
  },
  {
    "id": "驚嚎冰棒 SCREAMSICLE",
    "name_zh": "驚嚎冰棒",
    "name_en": "SCREAMSICLE",
    "category_zh": "普通物品（消耗品），常見Normal Item (Consumable), Common",
    "category_en": "",
    "desc_zh": "一種冰冷的點心，這種傲霜的糖果是在萬聖域的冰凍深處由雪人一族製成的。有各種顏色和口味，包括黃色和檸檬味。每次你舔或咬一口驚嚎冰棒時，你都會毫無緣由地尖叫。它味道很好，質地舒緩，只是會讓你為此尖叫。",
    "desc_en": "An icy cold treat, this snowy confectionary is made in the frozen depths of the Hallow by the Yeti Folk. An assortment of colours and flavours including yellow and lemon. Every time you lick or take a bite of a screamsicle you scream for no apparent reason. It tastes great and has a soothing texture, it just makes you scream about it."
  },
  {
    "id": "尖嘯箭矢 SCREAMING ARROWS",
    "name_zh": "尖嘯箭矢",
    "name_en": "SCREAMING ARROWS",
    "category_zh": "武器（箭），非普通Weapon (Arrow), Uncommon",
    "category_en": "",
    "desc_zh": "這些箭矢由被殺死的半人馬骨頭和獻祭烏鴉的羽毛精心製作而成。這些箭矢中的每一支都是 +1 魔法箭矢，射出時會發出高音尖嘯，造成黯蝕傷害而非穿刺傷害。",
    "desc_en": "These arrows are expertly crafted from the bones of a slain centaur and the feathers of a sacrificed crow. Each of these arrows is a +1 Magical Arrow that when fired emits a high pitched screaming sound as they fly, inflicting Necrotic Damage instead of piercing damage."
  },
  {
    "id": "海洋靈魂 SEA SOUL",
    "name_zh": "海洋靈魂",
    "name_en": "SEA SOUL",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "一顆乳白色的珍珠光澤球體，不大於普通人類的手掌。儘管是固體，球體總是感覺冰冷且潮濕。球體內部什麼也看不見。然而，當靠近水時，它似乎會輕輕搏動。如果球體在手持時完全浸入水中，你將開始聽到從球體發出的低語聲。低語詢問你是否希望安全穿越這片水域。如果你選擇是，球體會破裂並變成一塊藍綠色的海玻璃。從視線外，一艘可以容納最多 5 個中型生物的小船會眨眼間出現。它古老、飽經風霜且沒有船槳，但對於那些爬上船的人，它會安全地、悄無聲息地載他們穿越這片水域，然後在生物下船後消失。這是一次性物品，但有傳言說，老船主可以將新的海洋靈魂束縛到海玻璃上。",
    "desc_en": "A small milky pearlescent orb no larger than an average human’s palm. Despite being solid, the orb always feels cold and wet. Nothing can be seen inside the orb. When held near water however it seems to pulse gently. If the orb is completely submerged in water while held you will begin to hears whispers emanate from the orb. The whispers ask if you would like safe passage across this body of water. If you choose yes the orb will crack and turn into a piece of blue green sea glass. From out of site a small boat that can fit up to 5 medium creatures will appear in the blink of an eye. It is old, sea worn and without paddles but for those who climb aboard, it will safely carry them silently across the body of water before disappearing after the creatures disembark. This is a single use item, but a rumour has it that a new sea soul can be bound to sea glass by the old boat master."
  },
  {
    "id": "驚喜袋 - 各種尺寸 SHOW BAG – ASSORTED SIZES",
    "name_zh": "驚喜袋 - 各種尺寸",
    "name_en": "SHOW BAG – ASSORTED SIZES",
    "category_zh": "普通物品（新奇物品），非普通Normal Item (Novelty), Uncommon",
    "category_en": "",
    "desc_zh": "這是一個新奇物品，玩家有機會根據袋子的大小獲得各種隨機物品。\n1.\t小號 - 在表格上擲骰1次。\n2.\t中號 - 在表格上擲骰2次。\n3.\t大號 - 在表格上擲骰3次。\n4.\t特大號 - 在表格上擲骰 5 次。\n擲骰 1D20\t物品\n1\t綜合骨頭？(Assorted bones?)\n2\t可疑的紅氣球(Suspiciously Red Balloon)\n3\t1D4 顆腎結石玉米糖(1D4 Kidney Corns)\n4\t驚嚎冰棒(Screamsicle)\n5\t蟾蜍氣球(Toad Balloon)\n6\t1D6 根電擊太妃糖(1D6 Zappy Taffy)\n7\t棉花糖蘋果酒(Cotton Candy Cider)\n8\t1D4 根眼球棒(1D4 Eyeball’s On A Stick)\n9\t尖叫汽水(Soda Scream)\n10\t殭屍玉米(Zombie Corn)\n11\t1D4 個棉花糖玉米(1D4 Cotton Candy Corn)\n12\t滴血餅乾(Bleeding Biscuit)\n13\t免費雜耍遊戲券(Free Sideshow Game Coupon)\n14\t烏鴉毛絨玩偶(Crow Plushie)\n15\t瘟疫花生(Pestilent Peanuts)\n16\t1D6 個骨製煙花(1D6 Boneworks)\n17\t老鼠毛絨玩偶(Rat Plushie)\n18\t骷髏頓毛絨玩偶(Skelton Plushie)\n19\t幽靈毛絨玩偶(Ghost Plushie)\n20\t希德搖頭娃娃(Sid’s Bobblehead)",
    "desc_en": "This is a novelty item in which players have a chance of getting a varied assortment of random goods depending on the size of the bag. Small – Roll on the table once. Medium – Roll on the table twice. Large – Roll on the table three times. Extra Large – Roll on the table 5 times."
  },
  {
    "id": "驚喜袋（小號） SHOW BAG (SMALL)",
    "name_zh": "驚喜袋（小號）",
    "name_en": "SHOW BAG (SMALL)",
    "category_zh": "普通物品（新奇物品），非普通Normal Item (Novelty), Uncommon",
    "category_en": "",
    "desc_zh": "這是一個新奇物品，玩家有機會根據袋子的大小獲得各種隨機物品。\n1.\t小號 - 在表格上擲骰1次。\n2.\t中號 - 在表格上擲骰2次。\n3.\t大號 - 在表格上擲骰3次。\n4.\t特大號 - 在表格上擲骰 5 次。\n擲骰 1D20\t物品\n1\t綜合骨頭？(Assorted bones?)\n2\t可疑的紅氣球(Suspiciously Red Balloon)\n3\t1D4 顆腎結石玉米糖(1D4 Kidney Corns)\n4\t驚嚎冰棒(Screamsicle)\n5\t蟾蜍氣球(Toad Balloon)\n6\t1D6 根電擊太妃糖(1D6 Zappy Taffy)\n7\t棉花糖蘋果酒(Cotton Candy Cider)\n8\t1D4 根眼球棒(1D4 Eyeball’s On A Stick)\n9\t尖叫汽水(Soda Scream)\n10\t殭屍玉米(Zombie Corn)\n11\t1D4 個棉花糖玉米(1D4 Cotton Candy Corn)\n12\t滴血餅乾(Bleeding Biscuit)\n13\t免費雜耍遊戲券(Free Sideshow Game Coupon)\n14\t烏鴉毛絨玩偶(Crow Plushie)\n15\t瘟疫花生(Pestilent Peanuts)\n16\t1D6 個骨製煙花(1D6 Boneworks)\n17\t老鼠毛絨玩偶(Rat Plushie)\n18\t骷髏頓毛絨玩偶(Skelton Plushie)\n19\t幽靈毛絨玩偶(Ghost Plushie)\n20\t希德搖頭娃娃(Sid’s Bobblehead)",
    "desc_en": "This is a novelty item in which players have a chance of getting a varied assortment of random goods depending on the size of the bag. Small – Roll on the table once. Medium – Roll on the table twice. Large – Roll on the table three times. Extra Large – Roll on the table 5 times."
  },
  {
    "id": "驚喜袋（中號） SHOW BAG (MEDIUM)",
    "name_zh": "驚喜袋（中號）",
    "name_en": "SHOW BAG (MEDIUM)",
    "category_zh": "普通物品（新奇物品），非普通Normal Item (Novelty), Uncommon",
    "category_en": "",
    "desc_zh": "這是一個新奇物品，玩家有機會根據袋子的大小獲得各種隨機物品。\n1.\t小號 - 在表格上擲骰1次。\n2.\t中號 - 在表格上擲骰2次。\n3.\t大號 - 在表格上擲骰3次。\n4.\t特大號 - 在表格上擲骰 5 次。\n擲骰 1D20\t物品\n1\t綜合骨頭？(Assorted bones?)\n2\t可疑的紅氣球(Suspiciously Red Balloon)\n3\t1D4 顆腎結石玉米糖(1D4 Kidney Corns)\n4\t驚嚎冰棒(Screamsicle)\n5\t蟾蜍氣球(Toad Balloon)\n6\t1D6 根電擊太妃糖(1D6 Zappy Taffy)\n7\t棉花糖蘋果酒(Cotton Candy Cider)\n8\t1D4 根眼球棒(1D4 Eyeball’s On A Stick)\n9\t尖叫汽水(Soda Scream)\n10\t殭屍玉米(Zombie Corn)\n11\t1D4 個棉花糖玉米(1D4 Cotton Candy Corn)\n12\t滴血餅乾(Bleeding Biscuit)\n13\t免費雜耍遊戲券(Free Sideshow Game Coupon)\n14\t烏鴉毛絨玩偶(Crow Plushie)\n15\t瘟疫花生(Pestilent Peanuts)\n16\t1D6 個骨製煙花(1D6 Boneworks)\n17\t老鼠毛絨玩偶(Rat Plushie)\n18\t骷髏頓毛絨玩偶(Skelton Plushie)\n19\t幽靈毛絨玩偶(Ghost Plushie)\n20\t希德搖頭娃娃(Sid’s Bobblehead)",
    "desc_en": "This is a novelty item in which players have a chance of getting a varied assortment of random goods depending on the size of the bag. Small – Roll on the table once. Medium – Roll on the table twice. Large – Roll on the table three times. Extra Large – Roll on the table 5 times."
  },
  {
    "id": "驚喜袋（大號） SHOW BAG (LARGE)",
    "name_zh": "驚喜袋（大號）",
    "name_en": "SHOW BAG (LARGE)",
    "category_zh": "普通物品（新奇物品），非普通Normal Item (Novelty), Uncommon",
    "category_en": "",
    "desc_zh": "這是一個新奇物品，玩家有機會根據袋子的大小獲得各種隨機物品。\n1.\t小號 - 在表格上擲骰1次。\n2.\t中號 - 在表格上擲骰2次。\n3.\t大號 - 在表格上擲骰3次。\n4.\t特大號 - 在表格上擲骰 5 次。\n擲骰 1D20\t物品\n1\t綜合骨頭？(Assorted bones?)\n2\t可疑的紅氣球(Suspiciously Red Balloon)\n3\t1D4 顆腎結石玉米糖(1D4 Kidney Corns)\n4\t驚嚎冰棒(Screamsicle)\n5\t蟾蜍氣球(Toad Balloon)\n6\t1D6 根電擊太妃糖(1D6 Zappy Taffy)\n7\t棉花糖蘋果酒(Cotton Candy Cider)\n8\t1D4 根眼球棒(1D4 Eyeball’s On A Stick)\n9\t尖叫汽水(Soda Scream)\n10\t殭屍玉米(Zombie Corn)\n11\t1D4 個棉花糖玉米(1D4 Cotton Candy Corn)\n12\t滴血餅乾(Bleeding Biscuit)\n13\t免費雜耍遊戲券(Free Sideshow Game Coupon)\n14\t烏鴉毛絨玩偶(Crow Plushie)\n15\t瘟疫花生(Pestilent Peanuts)\n16\t1D6 個骨製煙花(1D6 Boneworks)\n17\t老鼠毛絨玩偶(Rat Plushie)\n18\t骷髏頓毛絨玩偶(Skelton Plushie)\n19\t幽靈毛絨玩偶(Ghost Plushie)\n20\t希德搖頭娃娃(Sid’s Bobblehead)",
    "desc_en": "This is a novelty item in which players have a chance of getting a varied assortment of random goods depending on the size of the bag. Small – Roll on the table once. Medium – Roll on the table twice. Large – Roll on the table three times. Extra Large – Roll on the table 5 times."
  },
  {
    "id": "驚喜袋（特大號） SHOW BAG (EXTRA_LARGE)",
    "name_zh": "驚喜袋（特大號）",
    "name_en": "SHOW BAG (EXTRA_LARGE)",
    "category_zh": "普通物品（新奇物品），非普通Normal Item (Novelty), Uncommon",
    "category_en": "",
    "desc_zh": "這是一個新奇物品，玩家有機會根據袋子的大小獲得各種隨機物品。\n1.\t小號 - 在表格上擲骰1次。\n2.\t中號 - 在表格上擲骰2次。\n3.\t大號 - 在表格上擲骰3次。\n4.\t特大號 - 在表格上擲骰 5 次。\n擲骰 1D20\t物品\n1\t綜合骨頭？(Assorted bones?)\n2\t可疑的紅氣球(Suspiciously Red Balloon)\n3\t1D4 顆腎結石玉米糖(1D4 Kidney Corns)\n4\t驚嚎冰棒(Screamsicle)\n5\t蟾蜍氣球(Toad Balloon)\n6\t1D6 根電擊太妃糖(1D6 Zappy Taffy)\n7\t棉花糖蘋果酒(Cotton Candy Cider)\n8\t1D4 根眼球棒(1D4 Eyeball’s On A Stick)\n9\t尖叫汽水(Soda Scream)\n10\t殭屍玉米(Zombie Corn)\n11\t1D4 個棉花糖玉米(1D4 Cotton Candy Corn)\n12\t滴血餅乾(Bleeding Biscuit)\n13\t免費雜耍遊戲券(Free Sideshow Game Coupon)\n14\t烏鴉毛絨玩偶(Crow Plushie)\n15\t瘟疫花生(Pestilent Peanuts)\n16\t1D6 個骨製煙花(1D6 Boneworks)\n17\t老鼠毛絨玩偶(Rat Plushie)\n18\t骷髏頓毛絨玩偶(Skelton Plushie)\n19\t幽靈毛絨玩偶(Ghost Plushie)\n20\t希德搖頭娃娃(Sid’s Bobblehead)",
    "desc_en": "This is a novelty item in which players have a chance of getting a varied assortment of random goods depending on the size of the bag. Small – Roll on the table once. Medium – Roll on the table twice. Large – Roll on the table three times. Extra Large – Roll on the table 5 times."
  },
  {
    "id": "甜膩糖果 SICKLY SWEET CANDY",
    "name_zh": "甜膩糖果",
    "name_en": "SICKLY SWEET CANDY",
    "category_zh": "普通物品（消耗品），常見Normal Item (Consumable), Common",
    "category_en": "",
    "desc_zh": "這個小透明包裝袋內含一塊橙黑相間的漩渦狀糖果。它觸感極黏，難以咀嚼。食用此糖果後，一個生物立即進入糖分亢奮狀態，其先攻值增加 1，持續一小時。此增益可疊加，但吃太多糖果會讓你生病或導致蛀牙。",
    "desc_en": "This small clear packet contains an orange and black swirled piece of candy. It is extremely sticky to the touch and hard to chew. Upon consuming this sweet a creature immediately enters a sugar rush and their initiative score increases by 1 for an hour. This buff is stackable, but eating to man candies can make you sick or give you tooth decay."
  },
  {
    "id": "鍍銀柯爾特子彈 SILVERED COLT ROUNDS",
    "name_zh": "鍍銀柯爾特子彈",
    "name_en": "SILVERED COLT ROUNDS",
    "category_zh": "武器（子彈），獨特Weapon (Bullet), Unique",
    "category_en": "",
    "desc_zh": "這些是特殊的鍍銀子彈，只能從傳奇武器銀色柯爾特中發射。每顆子彈都需要耗費極長的時間製作，極為稀有。傳說中，從柯爾特射出的這樣一顆子彈可以殺死它擊中的任何生物。",
    "desc_en": "These are special silvered bullets that can only be fired from the legendary Silver Colt weapon. Each bullet takes a painstakingly long time to make and is extremely rare. It’s said in legends that a single one of these bullets fired from the colt can kill any creature it hits."
  },
  {
    "id": "骷髏胸甲 SKELETAL BREASTPLATE",
    "name_zh": "骷髏胸甲",
    "name_en": "SKELETAL BREASTPLATE",
    "category_zh": "護甲（中甲），稀有Armor (Medium), Rare",
    "category_en": "",
    "desc_zh": "這件華麗的胸甲由蒼白的白色骨頭用未知的皮革捆綁在一起製成。雖然它看起來比堅固更怪異，但這件可怕的部件提供與其標準對應物相同的防護，賦予穿戴者 14 AC 加上生物的敏捷調整值，最多增加 2。此外，穿戴此護甲時，使用者不會受到任何等級力竭的影響。該生物仍然會正常獲得力竭等級，但在胸甲被移除之前不會遭受那些影響。此外，穿戴者在穿戴骷髏胸甲時無法適當休息或減少力竭等級。",
    "desc_en": "This ornate looking breastplate is made from pale white bones strapped together with an unknown hide. While it looks more gruesome than sturdy this macabre piece provides the same protection as its standard counterpart by granting its wearing an AC of 14 plus a creatures Dexterity modifier to a maximum increase of 2. Additionally while wearing this Armor the user does not suffer any effects of any level of exhaustion. The creature will still gain levels of exhaustion as normal but will not suffer those effects until the Breastplate is removed. Additionally the wearer cannot properly rest or reduce levels of exhaustion while wearing the Skeletal Breastplate."
  },
  {
    "id": "骷髏馬雕像 SKELETON HORSE IDOL",
    "name_zh": "骷髏馬雕像",
    "name_en": "SKELETON HORSE IDOL",
    "category_zh": "奇物，極稀有Wondrous Item, Very Rare",
    "category_en": "",
    "desc_zh": "此物品是一個小雕像，描繪了一匹用後腿站立的骷髏馬。雕像由單塊骨頭雕刻而成，並注入了古老的魔法。此物品的擁有者可以召喚一匹骷髏戰馬，最多持續 24 小時。在此時間結束時或如果馬被解散，馬將會消失，並且雕像在 10 天內無法重複使用。",
    "desc_en": "This item is a small figure that depicts a skeleton horse rearing back on its hind legs. The idol is carved from a single piece of bone and is imbued with old magic. The owner of this item may summon a skeletal steed for up to a maximum of 24 hours. At the end of this time or if the horse is dismissed the horse will disappear and the Idol cannot be reused for 10 days."
  },
  {
    "id": "骷髏鑰匙 SKELETON KEY",
    "name_zh": "骷髏鑰匙",
    "name_en": "SKELETON KEY",
    "category_zh": "奇物，極稀有Wondrous Item, Very Rare",
    "category_en": "",
    "desc_zh": "從這條小皮帶上掛著一把看起來腐爛的鑰匙，由某個早已死去生物的單塊骨頭雕刻而成。這把鑰匙可以解開任何有鑰匙孔的鎖。骷髏鑰匙每天可以使用一次來解開一把鎖。",
    "desc_en": "From this small leather strap hangs a rotted looking key that has been carved from a single piece of some long dead creature’s bone. This key can unlock any lock as long as it has a keyhole. The skeleton Key can be used once per day to unlock one single lock."
  },
  {
    "id": "骷髏頓的恩惠 SKELTON’S FAVOUR",
    "name_zh": "骷髏頓的恩惠",
    "name_en": "SKELTON’S FAVOUR",
    "category_zh": "普通物品，極稀有Normal Item, Very Rare",
    "category_en": "",
    "desc_zh": "這個特殊物品只能從神秘骷髏中贏得。它是一個骯髒的銀製護身符，上面描繪著一個骷髏手持糖果玉米高舉於其頭骨上方的圖案。擁有此物品並在向骷髏頓購物時出示它，將允許你獲得他商店中所有產品 10% 的折扣（向上取整）。此物品是綁定的，無法交易。放棄它會導致護身符鏽蝕消失。此物品不能疊加，如果你獲得第二個，它會變成 10 CCP。",
    "desc_en": "This special item can only be won from the Mystery Skull. It is a small grubby silver amulet emblazoned with a depiction of a skeleton holding a candy corn above its skull. Owning this item and presenting it to Skelton when making purchases will allow you to receive 10% off all products in his store rounded up. This item is bound and cannot be traded. Giving it up will cause the amulet to rust away. This item cannot stack, if you obtain a second one it turns into 10 CCP."
  },
  {
    "id": "史萊姆汁液 SLIME JUICE",
    "name_zh": "史萊姆汁液",
    "name_en": "SLIME JUICE",
    "category_zh": "普通物品（消耗品），非普通Normal Item (Consumable), Uncommon",
    "category_en": "",
    "desc_zh": "當你拔掉這個相當平淡無奇的瓶子的軟木塞時，一股酸味會刺激你的嗅覺。史萊姆汁液是通過大力壓榨普通綠色史萊姆，然後蒸餾其內部汁液製成的。史萊姆農場的巨魔們以創造完美的、刺激的混合口味為榮，用於在月光下的恐怖之夜後幫助消化。喝這種史萊姆汁液大部分是安全的，但它有一個惱人的副作用。飲用此消耗品後，立即恢復 1D4 生命值。此外，作為副作用，消費者在其下一次屬性檢定、攻擊檢定或豁免檢定上處於劣勢。此副作用是疊加的。如果你喝三瓶史萊姆汁液，那麼接下來的三次檢定都將處於劣勢。",
    "desc_en": "A sour aroma tingles your sense of smell when you remove the cork from this rather flat looking bottle. Slime juice is made by rigorously squashing common green slimes and then distilling the internal juices. The trolls of the slime farm take pride in creating the perfect zesty blend for easing digestion after a horror filled night under the moonlight. It is mostly safe to drink this Slime Juice, but it does an irritating side effect. Upon drinking this consumable item regain 1D4 Hit Points instantly. Additionally as a side effect, the consumer gains disadvantage on their next ability, attack or saving roll. This side effect is stacking. If you drink three bottles of Slime Juice then the next three rolls would be made with disadvantage."
  },
  {
    "id": "狡詐之袋 SLY BAG",
    "name_zh": "狡詐之袋",
    "name_en": "SLY BAG",
    "category_zh": "奇物，稀有Wondrous Item, Rare",
    "category_en": "",
    "desc_zh": "這個棕色的小袋子看起來非常普通。然而，它無法被打開。無論施加多大的力，它就是打不開。此物品的擁有者可以選擇專注於他們在 30 英尺內能看到的一個其他普通袋子。然後他們可以打開狡詐之袋。狡詐之袋將顯示擁有者正在專注的袋子裡的所有內容物。你可以移動它們並查看袋子裡的物品，但你不能通過這種方式從專注的袋子中取出物品，只能查看裡面有什麼。",
    "desc_en": "This small brawn bag looks perfectly normal to say the least. However the cannot be opened. No matter how much force is applied to it, it simply won’t open. The owner of this item may choose to focus on one other regular bag they can see within 30 ft. They may then open the Sly Bag. The sly bag will show all the contents of the bag that the owner is focusing on. You can move them around and look at the items in the bag, but you cannot take items from the focused bag this way only look at what’s inside."
  },
  {
    "id": "蛇血 SNAKES BLOOD",
    "name_zh": "蛇血",
    "name_en": "SNAKES BLOOD",
    "category_zh": "奇物，稀有Wondrous Item, Rare",
    "category_en": "",
    "desc_zh": "這個帶有綠色鱗片塞子的淚滴形小瓶內含一種濃稠的透明液體，打開時會發出嘶嘶聲。喝下此小瓶的內容物會導致飲用者劇烈不適。當被一個生物消耗時，他們必須進行 DC15 的體質豁免，否則其種族會被強制改變為純血蛇人，作為一種詛咒。如果自願，生物可以選擇自動失敗此豁免。這個詛咒可以通過適當的高等法術和祝福來移除，如果試圖打破詛咒，生物也可以選擇維持詛咒。",
    "desc_en": "This tear drop vial with a green scaled stopper contains a thick clear liquid that makes a hissing sound when opened. Drinking the contents of this vial will cause the one who ingested it to become violently ill. When consumed by a creature, they must make a DC15 Constitution saving throw or have their race forcibly changed into a Pure Blood Yuan-Ti as a curse. A creature may choose to fail the saving throw if willing. This curse can be removed by the appropriate high level spells and blessings, a creature may also choose to maintain the curse if an attempt is may to break the curse."
  },
  {
    "id": "尖叫汽水 SODA SCREAM",
    "name_zh": "尖叫汽水",
    "name_en": "SODA SCREAM",
    "category_zh": "普通物品（消耗品），常見Normal Item (Consumable), Common",
    "category_en": "",
    "desc_zh": "這種當地釀造的飲料是由蒸餾的女妖嚎叫強行注入一個帶有拉環的密封罐中製成的。當一個罐子被打開時，它會發出刺耳的尖叫聲。所有在打開的罐子 10 英尺內的生物必須進行 DC13 的體質豁免，失敗則遭受 1D4 心靈傷害並被擊倒。豁免成功則在接下來 24 小時內免疫此效果。味道像冒泡的靜電。",
    "desc_en": "This locally curated beverage is made from distilled banshee howls forced into a sealed can with a ring pull opening. When a can is opened it lets out an ear piercing scream. All creatures within 10 feet of the opened can must make a DC13 Constitution saving throw or suffer 1D4 psychic damage and be knocked prone. Succeeding on the save grants immunity to this effect for the next 24 hours. Tastes like bubbly static."
  },
  {
    "id": "靈魂之鐮 SOUL SCYTHE",
    "name_zh": "靈魂之鐮",
    "name_en": "SOUL SCYTHE",
    "category_zh": "簡易武器（鐮刀），獨特Simple Weapon (Scythe), Unique",
    "category_en": "",
    "desc_zh": "這件傳奇物品曾經由令人恐懼的騎手攜帶，現在它在你可憐的手中。作為一把普通的鐮刀，它造成 2D6 揮砍傷害，被視為重型武器並具有 5 英尺觸及範圍。一旦一個生物與此鐮刀調適，他們將擁有暫時將靈魂與其身體分離的能力，使用鐮刀的魔法。分離效果在大約一小時後消失。只要確保靈魂回到正確的身體就行。",
    "desc_en": "This legendary item was once carried by the feared horseman, now it’s in your measly hands. As a regular scythe it deals 2D6 slashing damage and is considered heavy and has a 5ft of reach. Once a creature has attuned to this scythe they will have the ability to temporarily separate a soul from its body using the scythes magic. The separation wears off after about an hour. Just make sure that the soul makes it back to the right body."
  },
  {
    "id": "蜘蛛蟹護符 SPIDER CRAB CHARM",
    "name_zh": "蜘蛛蟹護符",
    "name_en": "SPIDER CRAB CHARM",
    "category_zh": "奇物，極稀有Wondrous Item, Very Rare",
    "category_en": "",
    "desc_zh": "這個護符由細長的白色肉絲纏繞在一顆輕輕搏動的乳白色珍珠上製成。護符有兩發充能，無法恢復任何充能。持用者可以消耗一個反應動作和一發充能，在自身周圍創造一個星界蜘蛛蟹殼，暫時將其 AC 增加 3，直到其下個回合開始。",
    "desc_en": "This charm is made from thin strands of sinewy white meat wrapped around a gently pulsing creamy white pearl. The charm has two charges and cannot regain any charges. The wielder may expend a reaction and a charge to create an ethereal spider crab shell around them that temporarily increases their AC by 3 until the start of their next turn."
  },
  {
    "id": "蜘蛛蛋 SPIDERS EGG",
    "name_zh": "蜘蛛蛋",
    "name_en": "SPIDERS EGG",
    "category_zh": "夥伴寵物，極稀有Companion Pet, Very Rare",
    "category_en": "",
    "desc_zh": "這是一個黏糊糊的、帶網的蜘蛛蛋，大小約為一個普通拳頭。如果小心照料，這顆蛋會在 2D4 天內孵化出一隻手掌大小的蜘蛛，並可以根據官方規則成為寵物或夥伴。它具有普通蜘蛛的屬性。",
    "desc_en": "This is a sticky webbed spider’s egg about the size of an average fist. If looked after carefully this egg hatches into a hand sized spider in 2D4 days and can become a pet or companion as set out in the official rules. It has the statistics of a regular spider."
  },
  {
    "id": "蛛絲繩 SPIDER THREAD ROPE",
    "name_zh": "蛛絲繩",
    "name_en": "SPIDER THREAD ROPE",
    "category_zh": "普通物品，稀有Normal Item, Rare",
    "category_en": "",
    "desc_zh": "這條繩子由蜘蛛自然精細編織而成，具有顯著的黏性，允許它黏附在幾乎任何表面上，並且仍然承受大量的重量。當一個鬆散的末端被扔出時，它會黏附在它接觸到的表面上，並且可以承受相當重的物體，例如攀爬的角色等。不過之後需要相當大的力氣才能把它拉下來。應該小心使用，不想被它纏住。",
    "desc_en": "This rope is finely woven naturally by spiders and has a remarkable sticky property that allows it to stick to almost any surface and still sustain a large amount of weight. When a loose end is thrown in will stick to the surface it comes into contact with and can hold quite heavy objects such as characters climbing etc. It does take quite a strong tug though to pull it free afterwards. It should be used with caution don’t want to get wrapped up in it."
  },
  {
    "id": "蜘蛛毒液蘋果酒 SPIDER VENOM CIDER",
    "name_zh": "蜘蛛毒液蘋果酒",
    "name_en": "SPIDER VENOM CIDER",
    "category_zh": "普通物品（消耗品），常見Normal Item (Consumable), Common",
    "category_en": "",
    "desc_zh": "這種高毒性飲料由新鮮的蜘蛛毒液製成，聞起來像死亡，如果死亡有氣味的話。難以下嚥，但如果你能忍住不吐，你將在 1 小時內獲得對毒素攻擊的抗性。",
    "desc_en": "This highly toxic drink is made from fresh spider venom and smells like death if death had a smell. It is difficult to stomach but if you can keep it down you receive resistance to poison attacks for 1 hour."
  },
  {
    "id": "脊骨巨劍 SPINAL BLADE",
    "name_zh": "脊骨巨劍",
    "name_en": "SPINAL BLADE",
    "category_zh": "軍用武器（巨劍），稀有Martial Weapon (Greatsword), Rare",
    "category_en": "",
    "desc_zh": "這把可怕的武器由一條大棘蛇的粗糙脊柱製成。它大約 5 英尺長，每個椎骨都有鋒利的骨鉤，會撕裂毫無戒心的敵人的肉體。骨頭堅固但因年代久遠而泛黃。這把武器被視為具有重型屬性的雙手劍，成功命中時造成 3D4 揮砍傷害。",
    "desc_en": "This gruesome weapon is made from the gnarled spine of a great spined serpent. It is about 5 feet long and each vertebrae has sharp hooks of bone that will rip into the flesh of unsuspecting enemies. The bone is strong but yellowing from age. This weapon is considered a two handed sword that has the heavy attribute that inflicts 3D4 Slashing damage on a successful hit."
  },
  {
    "id": "脊骨啤酒杯 SPINE STEIN",
    "name_zh": "脊骨啤酒杯",
    "name_en": "SPINE STEIN",
    "category_zh": "奇物，稀有Wondrous Item, Rare",
    "category_en": "",
    "desc_zh": "脊骨啤酒杯字面上就是一個飲用馬克杯，由一個未知生物的單個脊柱椎骨粗略製成。除了其泛黃骨頭的怪異外觀，馬克杯最多可容納 24 盎司液體，並散發出微弱的魔法。任何在脊骨啤酒杯中放置超過一分鐘的液體都會魔法般地變成製作馬克杯的未知生物的血液。",
    "desc_en": "The spine stein is quite literally a drinking stein that is crudely fashioned from a single spinal vertebrae of an unknown creature. Aside from its grotesque appearance of yellowing bone the stein can hold up to 24 ounces of fluid and emanates a faint magic. Any liquid that sits in the spine stein for more than a minute will magically turn into the blood of the unknown creature that the stein was made from."
  },
  {
    "id": "南瓜小魔 SQUASHLING",
    "name_zh": "南瓜小魔",
    "name_en": "SQUASHLING",
    "category_zh": "夥伴寵物，極稀有Companion Pet, Very Rare",
    "category_en": "",
    "desc_zh": "南瓜小魔是一個有著露齒笑容的小品脫大小南瓜。儘管外觀如此，這個南瓜是活著的。半打多刺的根從其基部長出，使其能夠像微型腿一樣移動。南瓜小魔是拉札拉克另一個失敗的實驗創造物。它相當友好，喜歡吃甜食。它有 5 HP 和 8 AC。這個生物可以成為夥伴寵物。",
    "desc_en": "The Squashling is a small pint sized pumpkin with a toothy grin. Despite its appearance this pumpkin is alive and living. Half a dozen thorny roots sprout from its base allowing it to move around like miniature legs. The Squashling is another of Lazarak’s creators failed experiments. It is quite friendly and enjoys eating sweets. It has 5HP and 8AC. This creature can become a companion pet."
  },
  {
    "id": "人頭杖 STAFF OF HUMAN HEADS",
    "name_zh": "人頭杖",
    "name_en": "STAFF OF HUMAN HEADS",
    "category_zh": "奇物，稀有Wondrous Item, Rare",
    "category_en": "",
    "desc_zh": "這根粗糙扭曲的杖由單塊燒焦的黑色木頭製成，並被打磨得黝黑發亮。在這根扭曲的樹枝頂端坐著兩個被斬下的人頭，它們的脖子從木桿上長出。一個是棕色頭髮女人的頭，另一個是黑鬍子男人的頭。兩個頭都沒有腐爛的跡象。這根杖被視為需要調適的 +1 魔法源。使用者可以使用這根杖來確定一個生物是在說真話還是說謊。這根杖理解所有口語語言，並且總是知道一個生物何時在說謊。在一個生物在杖面前回答問題後，使用者可以命令杖進行判斷。如果男人的頭說「有罪」，那麼該生物說了謊。如果女人的頭說「無罪」，那麼該生物說了真話。此命令可以無休止地使用。這些頭不會說謊。",
    "desc_en": "This gnarled and twisted staff is made from a single piece of charred black wood that has been polished to a dark shine. Atop this twisted tree limb sits two severed human heads whose necks have sprouted from the wooden shaft. One is the head of a brown haired woman and the other of a black bearded man. Neither head appears to be decaying. This staff is considered a +1 Magical Source that requires attunement. The user may use the staff to determine if a creature is telling the truth or lying. The staff understands all spoken languages and always knowns when a creature is lying. After a creature has answered a question in the presence of the staff, the user may command to staff to pass judgement. If the man’s head speaks ‘Guilty’ then the creature has lied. If the woman’s head speaks ‘innocent’ then the creature has told the truth. This command can be used without rest. The heads do not lie."
  },
  {
    "id": "可疑的紅氣球 SUSPICIOUSLY RED BALLOON",
    "name_zh": "可疑的紅氣球",
    "name_en": "SUSPICIOUSLY RED BALLOON",
    "category_zh": "普通物品，常見Normal Item, Common",
    "category_en": "",
    "desc_zh": "一個顯眼得令人討厭的亮紅色漂浮氣球，由一種惱人的吱吱作響的材料製成。這個氣球繫在一條簡單的繩子上，是年輕恐怖存在們喜歡的惡作劇道具。抓住氣球繩子至少 1 分鐘後，該生物會逐漸產生越來越強的偏執感和被人持續監視的感覺。當氣球遺失、丟棄或被摧毀後，在接下來的 24 小時內，它會隨機出現在不可能的地方，例如地下城房間內、拐角處、綁在公園長椅上等等。24 小時後，它停止出現，該生物恢復正常，且不記得任何關於氣球的事情。",
    "desc_en": "An obnoxiously bright red floating balloon made from an irritatingly squeaky material. Tied to a simple string this balloon is a fun prank for younger horrors. After holding onto the balloons string for at least 1 minute the creature is overcome with steadily growing paranoia and the feeling that someone is constantly watching them. When the balloon is lost, thrown away or destroyed, for the next 24 hours it will randomly reappear in impossible places such as inside a dungeon room, around a corner, tied to a park bench etc. After the 24 hours it ceases to appear and the creature recovers without remembering anything about the balloon."
  },
  {
    "id": "重生傳說 TALE OF REBIRTH",
    "name_zh": "重生傳說",
    "name_en": "TALE OF REBIRTH",
    "category_zh": "普通物品，常見Normal Item, Common",
    "category_en": "",
    "desc_zh": "來自收藏家的禮物。「重生傳說」是一本封面看似某種暗紅色鱗狀皮膚的書。它由一小塊老化骨頭雕刻的插銷緊閉。解開插銷會使書本自動魔法般地打開到隨機一頁。頁面上的文字開始融合，在泛黃的污漬頁面上形成移動的圖畫。頁面上看起來有一個稻草人。也許這是關於威廉的故事？\n「我不記得自己第一次睜開眼的時候。\n我不記得第一次感受到午夜月光的冰冷。\n我也不記得第一次露出這種帶刺的笑容。\n我不記得第一次那樣放聲狂笑。\n其實，有許多事情我都不記得。\n事實上，我甚至不記得自己第一次開始『不記得』是什麼時候。\n但我記得一件事——那是我第一次，不再孤單。\n我曾透過星界的鏡池凝視無數個紀元，遠超過我願意承認的時間。\n只有我、我的思緒、我的黑暗，以及那通往虛無的門。\n那樣的寂靜很和平。\n但當然，也極端孤獨。\n每個人都會孤單，對吧？」\n——此處的頁面似乎缺失，故事斷裂後跳躍繼續——\n「它就那樣出現了。突如其來。\n我不假裝自己理解無盡星界的運作原理，\n但我只是個觀察者，而我從未見過一個位面被『賦予生命』的時刻。\n或者該說，『不死』？『死亡』？『亡靈』？\n這樣的分類對生者是否有歧視意味？算了，離題了。\n總之，它就那樣出現了——\n尖塔、崩毀的街道、歪斜的小巷、亡者的呻吟、狼群的嚎叫、濕土的氣味——整個一切，就那樣存在了。\n我的角色改變了。\n我不再只是觀察者。\n我成了某種……『更多的存在』。\n我被捲入其中了。」",
    "desc_en": "A gift from the collector. The Tale of Rebirth is a book that is covered in what appears to be some kind of dull red scaly skin. It is fastened shut by a small latch carved out of aging bone. Undoing the latch will cause the book to open magically by itself to a random page. The words on the page begin to meld and form moving drawings on the stained yellow pages. It looks like a scarecrow on the page. Perhaps this is a story about William?\n“I don’t remember the first time I opened my eyes. I don’t remember the first time I felt the coolness of the midnight moon. I can’t remember the first time I smiled this spiky grin. I can’t remembered the first time I cackled so joyously. I can’t remember a lot of things actually. In fact I can’t even remember the first time I couldn’t remember at all. But what I can remember is that for the first time ever, I wasn’t alone. I have watched through the mirrored pool of the astral plane for more eons then I would personally care to admit. Just myself, my thoughts, my darkness, my gateway to nowhere. It was peaceful. But of course it was lonely. Everyone gets lonely now don’t they?”\nIt appears some pages here and there a missing and the story stutters as it skips ahead.\n“It was just there. Out of nowhere. Now I don’t pretend to understand how the endless astral plane functions. But I was just a watcher, and I had never watched a plane being given life before. Or unlife? Death maybe? Or undeath? Is that discrimination against the living impaired? I am getting off topic. It was just there. The spires, the crumbling streets, the crooked alleyways, the moans of the dead, the howls of the wolves, the smell of damp soil, the whole thing was just there. My role changed, I wasn’t just a watcher anymore. I was something, more. I was involved.”"
  },
  {
    "id": "黯淡戒指 TARNISHED RING",
    "name_zh": "黯淡戒指",
    "name_en": "TARNISHED RING",
    "category_zh": "奇物，稀有Wondrous Item, Rare",
    "category_en": "",
    "desc_zh": "這枚簡單的黯淡白鑞小指環在外觀上沒有任何特別之處。沒有寶石、黃金，甚至沒有重要的標記，只有一些小凹痕和刮痕。儘管外觀如此，它仍然包含一些微弱的魔法。當與此戒指調適時，你角色的所有基本屬性減少 1。此外，你角色當前的所有豁免檢定加值增加 1。如果可能，你可以同時佩戴多於一枚黯淡戒指。",
    "desc_en": "This small simple band of tarnished pewter is nothing special to the eye. There are no gems, gold or even significant markings aside from small dents and scratches. Despite its appearance it still contains some faint magic. While attuned to this ring all of your characters base attributes are reduced by 1. Additionally all of your characters current saving throw bonuses are increased by 1. If able, you may wear more than one tarnished ring at a time."
  },
  {
    "id": "泰拉毒液 TERRA POISON",
    "name_zh": "泰拉毒液",
    "name_en": "TERRA POISON",
    "category_zh": "奇物，稀有Wondrous Item, Rare",
    "category_en": "",
    "desc_zh": "泰拉毒液是一種獨特的黃色液體，源自食人泰拉的黃花。雖然這些花通常只在萬聖墓鎮外的死亡泰拉濕地中找到，但如果你知道去哪裡找，看到它出售是相當常見的。毒液本身聞起來和嚐起來都有甜美的花香，易於偽裝。這個小瓶足夠 1 劑量。如果泰拉毒液被攝入，該生物必須進行 DC 15 的感知豁免，因為毒液會滲透到受害者的腦海中。如果豁免失敗，該生物中毒 24 小時，發高燒，並不斷遭受噩夢般的幻覺。他們周圍的一切都是一場活生生的噩夢，已知受害者會攻擊附近的其他人，相信他們是怪物。此外，在受此毒液影響時，該生物每小時會遭受 1D8 心靈傷害，因為他們的心智因恐怖的幻象而破碎。這種毒液可以使用適當的法術或療法來中和。",
    "desc_en": "Terra poison is a distinctly yellow liquid derived from the yellow flower of a Man Eating Terra. While the flowers are usually only found within the Deathly Terra Marsh outside of Hallowgrave, it is quite common to see it for sale if one knows where to look. The poison itself smells and tastes of sweet flowers making it easy to disguise. This vial contains enough for 1 dosage. If the Terra Poison is ingested, the creature must make a DC 15 Wisdom Saving Throw as the poison works its way into the mind of the victim. If the save is failed the creature is poisoned for 24 hours, runs an extremely high fever and suffers nightmarish hallucinations constantly. Everything around them is a living nightmare and victims have been known to attack others nearby, believing them to be monsters. Additionally while inflicted with this poison the creature will suffer 1D8 Psychic Damage once every hour as their mind shatters from the horrific visions. This poison can be nullified using appropriate spells or remedies."
  },
  {
    "id": "最後一笑 THE LAST LAUGH",
    "name_zh": "最後一笑",
    "name_en": "THE LAST LAUGH",
    "category_zh": "奇物（法術法器），獨特Wondrous Item (Spell Focus), Unique",
    "category_en": "",
    "desc_zh": "直接取自賴瑞，「最後一笑」包含一枚嚴重刮傷和凹陷的銀幣。一些凹痕似乎是牙印。要使用這個法器，一個生物必須將硬幣放在舌頭下，一旦放置，該生物幾乎感覺不到它，並且它不會妨礙說話。使用時，該物品暫時提供 +1 魅力加值，並且在施展任何包含言語成分的法術時被視為 +3 法術法器。請不要吞下硬幣。如果使用過該物品的生物失去擁有權或被偷走硬幣，他們將遭受永久的魅力懲罰，該屬性減少 3。此負面效果無法抵消，但如果硬幣被找回則可以逆轉。",
    "desc_en": "Taken straight from Larry, the last laugh consists of a single severely scratched and dented silver coin. Some of the dents appear to be tooth marks. To use this focus a creature must place the coin underneath their tongue, once placed the creature will barely be able to feel it and it will not impede speech. While in use the item provides a temporary +1 bonus to charisma and is considered a +3 spell focus when casting any spell that contains Verbal components. Please do not swallow the coin. If a creature that has used the item, loses possession or has the coin stolen from them they will suffer a permanent penalty to their Charisma, reducing the attribute by 3. This negative effect cannot be negated but can be reversed if the coin is recovered."
  },
  {
    "id": "蟾蜍氣球 TOAD BALLOON",
    "name_zh": "蟾蜍氣球",
    "name_en": "TOAD BALLOON",
    "category_zh": "普通物品，常見Normal Item, Common",
    "category_en": "",
    "desc_zh": "食人魔的最愛，這個瓜大小的多疣蟾蜍被充滿氣態魔法並繫在一條結實的繩子上以防止它飄走。抓住氣球的繩子時，你會感到一種怪異的、像噁心人類那樣的快樂。這真令人作嘔。氣球只能持續一小時或直到遺失。恕不退款。",
    "desc_en": "A favourite among ogres, this melon sized warty toad is inflated with gaseous magic and tied to a sturdy string to prevent it from floating away. While holding the balloon’s string you feel oddly happy in a gross human kind of way. It’s disgusting. The balloon only lasts an hour or until lost. No refunds."
  },
  {
    "id": "折磨之釘 TORMENTING NAILS",
    "name_zh": "折磨之釘",
    "name_en": "TORMENTING NAILS",
    "category_zh": "奇物，非普通Wondrous Item, Uncommon",
    "category_en": "",
    "desc_zh": "這個棕色小包裝有 5 根生鏽的釘子，每根約 5 英寸長，有一個寬頭，非常適合敲擊。用血液塗抹釘子會使釘子變得固定不動且無法拔出。此效果僅在釘子被釘入某物時有效；它仍然會從空中掉落，並且它被釘入的物體如果可能的話仍然可以被移動。但這對於釘住那些想逃跑的討厭小動物很有用。",
    "desc_en": "This brown packet comes with 5 rusty nails each about 5 inches long with a wide head perfect for hammering. Coating the nail with blood will cause the nail to become immovable and unable to be pulled out. This effect will only work if the nail is nailed into something it will still drop to the ground from the air and the object it is nailed into may still be moved if possible. But it’s good for nailing down pesky critters who want to run away."
  },
  {
    "id": "撕裂的恐怖雜誌 TORN HORROR MAG",
    "name_zh": "撕裂的恐怖雜誌",
    "name_en": "TORN HORROR MAG",
    "category_zh": "普通物品，常見Normal Item, Common",
    "category_en": "",
    "desc_zh": "《恐怖雜誌》是萬聖墓鎮自己專業出版的名人雜誌。它刊登了來自整個萬聖域最著名恐怖存在的新圖片、特別採訪和故事。這本雜誌在那些仰望這些著名生物，希望自己也能成為那樣——一個真正的恐怖存在，不僅在名義上，更在氣場和地位上——的年輕怪胎中相當受歡迎。這些撕裂的雜誌是來自這本流行雜誌不同期號的隨機頁面。它們涉及玩家在萬聖墓鎮冒險期間可能遇到的一些恐怖存在。\n撕裂雜誌 #1 - 阿嘉莎「...沒有什麼能將我與我的獵物分開。一旦我將他們鎖定在我的視線中，他們就是我的，而不是其他任何人的。自然，我對男人的標準比普通的萬聖墓鎮小惡魔要高。我的第一任丈夫是唯一一個接近完美的男人。但當我發現他以錯誤的方式看另一個女人時，我知道他不再屬於我了。所以我必須讓他永遠屬於我...」\n撕裂雜誌 #2 - 里希登斯坦「...這真的對我的研究沒有幫助。但我想偶爾有點正面宣傳對科學家來說也不壞。嗯。嗯。好吧，你看到的這種生物在通用語中通常被稱為矮人。他們身材矮小、脾氣暴躁，並且長著可以想像到的最雄偉的鬍鬚。我一直在對他們的鬍鬚毛髮進行一些實驗，它們被證明相當堅固。」\n撕裂雜誌 #3 - 莉絲貝「...當然會寂寞。僅僅因為我是誘惑魔女並不意味著不會寂寞。我們在這裡都已經待了很長時間了，你只能誘惑同一群傻瓜那麼多次，然後他們就變得無聊了。如果不是那些偶爾來搗亂的凡人，我就沒有什麼可以陪伴我了...」\n撕裂雜誌 #4 - 奧瑞克「...奧爾 奧爾來這裡的時候什麼都沒有。利基 利基給了奧爾 奧爾第一份工作。奧爾 奧爾在阿里 阿里忙著幫威利 威利用心臟做重要事情的時候看守那些洞。哦，奧爾 奧爾不該談論心臟。利基 利基會解剖奧爾 奧爾的，嘿嘿...」\n撕裂雜誌 #5 - 拉西安娜「...這是多麼奇怪的問題。我的孩子們是我野心的驅動力。如果不是為了餵飽我如此喜愛的他們成千上萬張飢餓的嘴，我就不需要這個偏僻地獄洞裡的政治傀儡。沒有我的野心，那些傻瓜永遠無法保住他們的權力。我是主謀，但我首先是一位母親。」\n撕裂雜誌 #6 - 拉札拉克「...我的主人是個天才，至少在我有時間消化他之後是這麼覺得的。畢竟他確實得到了他想要的，而且那年鎮上沒有人能阻止他贏得第一名。當然，我吃了他並不感到難過，他壓碎了我更多的兄弟姐妹。雖然我必須承認我的家人確實能做出一鍋相當不錯的湯。你應該試試。」\n撕裂雜誌 #7 - 奧列格「...現在你是要肋排還是豬排配那些大腿肉？什麼？哦，對不起。生意從來沒有這麼好過，這些日子附近有大量的新鮮肉類可供宰割。連客戶群都改善了。不，我的意思是他們停止問問題了。就像你應該做的那樣。」\n撕裂雜誌 #8 - 阿斯特洛斯（對屍體說話）「...這就是你把我帶回來的原因？一些陳年舊事。成熟點吧。人們那時不在乎，現在仍然不在乎。如果有的話，他們都欠我的。看看他們，看看他們如何在真實自我的光芒中毫無抑制地狂歡。他們所有人都得到了他們想要的，而你卻想挖掘關於我前妻的八卦？去找她談談，讓我睡一會兒吧。」\n撕裂雜誌 #9 - 洛恩「...現在聽好了，小傢伙。我在這裡的時間比大多數這些沉悶的渣滓都長，你知道什麼能讓一切順利進行嗎？管好你自己的該死的事。你以為這個完美的小鎮是靠人們的善意運轉的嗎？每個人都好好配合，這個小鄉村小鎮的完美外表。如果你相信那個，你會比我死得更透。但我的墳墓仍然會比你的好。」\n撕裂雜誌 #10 - 傲霜姊妹「...鎮上並不總是喜歡我們。有一次，一個傻瓜把阿夸留在暴風雪中。一個嫉妒的巨魔試圖燒死安珀。一個科學存在試圖電死紫晶。許多人不喜歡我們。但他們總是需要我們，來找我們，想要我們幫助。所以，是的，他們不喜歡我們，但他們更不喜歡她。」\n撕裂雜誌 #11 - 盧卡斯（被白銀束縛）「...你知道在我身邊真的不安全。整晚都是滿月，這讓這份工作變成了永久性的。有很多傻瓜走錯了路，需要一隻引導之手穿過森林...」\n撕裂雜誌 #12 - 奧瑞莎「...它以前是多汁而甜美的。但現在，即使只是最微小的一滴，也充滿了我無法抗拒喝乾的無數感覺。但唉，這裡的血液雖然奇異，但在這些一次又一次的許多夜晚中已經變得陳舊。我多麼希望能有什麼新的東西跨過我的門檻。」",
    "desc_en": "The Horror Mag is the Hallowgrave’s own professionally published celebrity magazine. It features new pictures, special interviews and stories about the most famed Horrors from all across the Hallow. The magazine is quite popular among young misfits whom look up to these famous creatures as something they all wish to become. A real horror not just in name but in presence and statue. These torn mags are random pages from different issues of the popular magazine. They reference some horrors that the players may encounter during their adventure around Hallowgrave.\nTorn Mag #1 – Agatha “...nothing can separate me from my prey. Once I have them set in my sights they will be mine and no one else’s. Naturally I have a higher standard of men then the normal Hallowgrave imps. My first husband was truly the only man that ever came close to perfection. But when I caught him looking the wrong way at another woman, I knew that he was no longer mine. So I made I had to make him mine forever...”\nTorn Mag #2 – Lichtenstein “...This really isn’t assisting in my research. But I suppose a little positive publicity for a change isn’t bad for a scientist. Ahem. Well this creature you see before you is commonly referred to in the common tongue as a Dwarf. They are short, ill-tempered and grow the most majestic beards imaginable. I have been running some experiments on their beard hairs and they are proving to be quite strong.”\nTorn Mag #3 – Lisbeth “...Of course it gets lonely. Just because I’m the temptress doesn’t mean it doesn’t get lonely. We have all been here for a long time now and there is only so many times you can tempt the same gaggle of fools before they get boring anyway. If not for those occasional mortals making a mess every now and then I would have nothing to keep me company…”\nTorn Mag #4 – Orrick “...Orr Orr had nothing when he came here. Licky Licky gave Orr Orr his first job. Orr Orr watches the holes while Ali Ali is busy helping Willy Willy do important stuffs with the heart. Oh Orr Orr not meant to talk about the heart. Licky Licky would dissect Orr Orr heh heh…”\nTorn Mag #5 – Laciana “...What a strange question indeed. My children are what drive my ambitions. If not for the need to feed their thousands of hungry mouths that I oh so adore, I would have no need of the political puppets in this backwater hell hole. Without my ambitions those fools could never hold onto their power. I am the mastermind, but I am a mother foremost.”\nTorn Mag #6 – Lazarak “…My master was something of a genius, at least that’s what a gathered after I had time to digest him. After all he did get what he wanted and nobody in the entire town would stop him from winning first place that year. Of course I don’t feel bad for eating him, he squashed so many more of my siblings. Although I must admit my family does make a pretty mean soup. You should try it.”\nTorn Mag #7 – Oleg “...Now was that ribs or chops you wanted with those thighs? What? Oh right my apologies. Business has never been better, plenty of fresh meat for the chopping the block around here these days. The clientele has even improved. No I mean they stopped asking questions. Like you should.”\nTorn Mag #8 – Asteroth (Spoke to the corpse) “...This is really why you brought me back? Some age old drama. Grow up. The people didn’t care then and they still don’t care now. If anything they are all in debt to me. Look at them and how the revel in the light of their true selves without inhibition. All of them got their wish and you want to drudge up gossip about my ex-wife? Go talk to her and let me sleep for once.”\nTorn Mag #9 – Lorne “...Now look here youngling. I’ve been here longer than most of these drab scabs and you know what makes everything get along smoothly. Minding yer own damn business. You think these perfect little town runs on the good will of the people? Everyone playing along nicely, the perfect little visage of a small rural town. If you did believe that you’d be deader than I am. But my tomb would still be better than yours.”\nTorn Mag #10 – Alabaster Sisters “...The town wasn’t always fond of us. A fool left Aqua in a blizzard once. An envious troll tried to burn Amber once. And a being of science tried to electrocute Amethyst once. Many weren’t fond of us. But they always needed us, came to us, and wanted us to help. So yes they didn’t like us, but they didn’t like her more.\nTorn Mag #11 – Lucas (Bound by Silver) “...It’s really not safe to be around me you know. Full moon all night every night kind of makes the job permanent. Plenty of fools taking the wrong path in need of a guiding hand through the forest…”\nTorn Mag #12 – Orisa “...It was succulent and sweet before. But now even just the barest drop fills me with a multitude of sensations that I can’t help but drink my full. But alas the blood here while exotic has grown stale over these many eves over and over again. What I wouldn’t give for something new to cross my threshold.”"
  },
  {
    "id": "糖果袋 TREAT BAG",
    "name_zh": "糖果袋",
    "name_en": "TREAT BAG",
    "category_zh": "奇物，稀有Wondrous Item, Rare",
    "category_en": "",
    "desc_zh": "這個小黑挎包曾經被一群特別惡劣的「不給糖就搗蛋」者使用，據說他們在一個晚上偷走了世界上所有的糖果，而這個袋子就是他們的方法。袋子在一個內部次元中存儲了無盡的糖果供應。每天一次，你可以伸手進去抓一小把 1D4 個隨機糖果。每種顏色的糖果將賦予你對一種傷害類型的抗性，持續 1 小時，一次只能使用一種。\n紅色糖果 - 吃這種糖果將賦予你火焰傷害抗性。\n綠色糖果 - 吃這種糖果將賦予你強酸傷害抗性。\n藍色糖果 - 吃這種糖果將賦予你冰凍傷害抗性。\n紫色糖果 - 吃這種糖果將賦予你閃電傷害抗性。\n白色糖果 - 吃這種糖果將賦予你光耀傷害抗性。\n黑色糖果 - 吃這種糖果將賦予你黯蝕傷害抗性。\n棕色糖果 - 吃這種糖果將賦予你雷鳴傷害抗性。",
    "desc_en": "This small black satchel was once used by a particularly nasty group of trick or treaters who supposedly stole all the candies in the world in a single night and this bag is how they did it. The bag as an endless supply of candy stored in a sub dimension inside. Once per day you may reach in and grab a small handful of 1D4 random candy pieces. Each coloured candy will grant you resistance to a damage type for 1 hour, only 1 may be used at a time.\nRed Candy – Eating this candy will grant you resistance to Fire Damage.\nGreen Candy – Eating this candy will grant you resistance to Acid Damage.\nBlue Candy – Eating this candy will grant you resistance to Cold Damage.\nPurple Candy – Eating this candy will grant you resistance to Lightning Damage.\nWhite Candy – Eating this candy will grant your resistance to Radiant Damage.\nBlack Candy – Eating this candy will grant you resistance to Necrotic Damage.\nBrown Candy – Eating this candy will grant you resistance to Thunder Damage"
  },
  {
    "id": "不死詛咒 UNDEAD CURSE",
    "name_zh": "不死詛咒",
    "name_en": "UNDEAD CURSE",
    "category_zh": "附魔物品，稀有Enchantment Item, Rare",
    "category_en": "",
    "desc_zh": "一張破舊的卷軸，用一條暗黑色的繩子綁著。這是一次性附魔，可用於附魔一把近戰或遠程武器。用此詛咒附魔武器會使其散發出微弱的魔法痕跡並發出微弱的黑光。用受此詛咒附魔的物品造成傷害時，命中會額外造成 1D4 黯蝕傷害，而當時持有此武器的生物會失去相同數值的生命值。這些武器不需要調適。",
    "desc_en": "A tattered scroll bound with a dull black cord. This is a single use enchantment that can be used to enchant one melee or ranged weapon. Enchanting a weapon with this curse causes it to emanate faint traces of magic and give off a slight black glow. Dealing damage with an item enchanted by this curse deals an extra 1D4 Necrotic Damage on a hit and the creature holding this weapon at the time loses that same amount of hit points. These weapons do not require attuning."
  },
  {
    "id": "不死之勺 UNDEAD SPOON",
    "name_zh": "不死之勺",
    "name_en": "UNDEAD SPOON",
    "category_zh": "奇物，非普通Wondrous Item, Uncommon",
    "category_en": "",
    "desc_zh": "如果收到一把不死之勺作為禮物，大多數人會認為這是個玩笑，因為它真的只是一把失去光澤的銀製點心勺。然而，不死之勺是一件具有非常特定用途的簡單魔法物品。任何用勺子舀起的食物或飲料都會變得完全安全可食用。勺子會魔法般地消除所有可能使食物對正常凡人無法食用的毒藥、疾病和其他病痛。",
    "desc_en": "If given an undead spoon as a gift most would assume it a joke as it really is just a tarnished silver dessert spoon. However, the undead spoon is a simple magical item with a very specific purpose. Any food or drinks that is scooped up with the spoon becomes completely safe to eat. The spoon magically negates all poisons, diseases and other maladies that could make the food inedible to normal mortals."
  },
  {
    "id": "邪惡之水 UNHOLY WATER",
    "name_zh": "邪惡之水",
    "name_en": "UNHOLY WATER",
    "category_zh": "普通物品，非普通Normal Item, Uncommon",
    "category_en": "",
    "desc_zh": "這是一個簡單的生鏽鐵瓶，裡面裝有刺鼻的濃稠液體。觸感冰冷且油膩。將此瓶的內容物潑灑在聖潔或神聖物品或符號上，會導致它們迅速腐爛並化為塵埃。它也會對生物造成 1D6 黯蝕傷害，或對聖潔、天界或類似狀態的生物造成 2D6 黯蝕傷害。",
    "desc_en": "This is a simple rusted iron flask with a pungent smelling thick liquid inside. It feels cold to the touch and grimy. Splashing the contents of this flask onto radiant or holy items or symbols will cause them to decay rapidly and dissolve into dust. It will also deal 1D6 necrotic damage to creatures or 2D6 necrotic damage to creatures of holy, celestial or similar status."
  },
  {
    "id": "獨角獸之血 UNICORN BLOOD",
    "name_zh": "獨角獸之血",
    "name_en": "UNICORN BLOOD",
    "category_zh": "奇物，稀有Wondrous Item, Rare",
    "category_en": "",
    "desc_zh": "這個帶有亮粉色橡膠塞的圓形小瓶內充滿了一種閃閃發光的銀色液體，看起來像由數千個微小的銀色斑點製成。喝下此小瓶的內容物會導致飲用者劇烈不適。有 DC15 的機率，使用者在 24 小時內會被詛咒，獲得一種弱效形式的不朽。在接下來的 24 小時內，你無法受到致命傷或承受巨量傷害。會將你的生命值降低到 0 的傷害會將其改為降低到 1。你仍然會感到疼痛。一旦此效果消失，你將立即獲得 5 級力竭。",
    "desc_en": "This small round vial with a bright pink rubber stopper is filled with a glittering silver liquid that looks like it is made of thousands of tiny specks of silver. Drinking the contents of this vial will cause the one who ingested it to become violently ill. There is a DC15 chance that within 24 hours the user will be cursed with a weak form of immortality. For the next 24 hours you cannot be more mortally wounded or receive massive damage. Damage that would reduce your Hit points to 0 will reduce it to one instead. You still feel pain. Once this effect wears off you will receive 5 levels of exhaustion immediately."
  },
  {
    "id": "吸血鬼之血 VAMPIRES BLOOD",
    "name_zh": "吸血鬼之血",
    "name_en": "VAMPIRES BLOOD",
    "category_zh": "奇物，稀有Wondrous Item, Rare",
    "category_en": "",
    "desc_zh": "這個帶有紅色橡膠塞的小瓶內充滿了一種濃稠的黑色液體，似乎散發著飢餓感。喝下此小瓶的內容物會導致飲用者劇烈不適。有 DC15 的機率，使用者在 24 小時內會被詛咒，患上某種吸血鬼症，必須定期吸食新鮮血液才能生存。這個詛咒可以通過高等法術和祝福來移除。",
    "desc_en": "This small vial with a red rubber stopper is filled with a thick black liquid that seemingly emanates hunger. Drinking the contents of this vial will cause the one who ingested it to become violently ill. There is a DC15 chance that within 24 hours the user will be cursed with a form of Vampirism and must feed on fresh blood regularly to survive. This curse can be removed by high level spells and blessings."
  },
  {
    "id": "吸血鬼之淚 VAMPIRE TEARS",
    "name_zh": "吸血鬼之淚",
    "name_en": "VAMPIRE TEARS",
    "category_zh": "奇物，稀有Wondrous Item, Rare",
    "category_en": "",
    "desc_zh": "一滴完全結晶化的微小血滴。這些很難獲得，因為吸血鬼感覺很少，所以需要非常多才能讓一個吸血鬼哭泣，除了那個我們不會談論的吸血鬼。吞下一滴吸血鬼之淚會在你舌頭上留下新鮮血液的味道，持續幾個小時。在接下來的 10 分鐘內，你將被賦予一小部分吸血鬼的再生能力。在吸血鬼之淚效果下的每一分鐘，拋一次硬幣。如果你贏了拋幣，你恢復 2 點生命值；如果你輸了，你只恢復 1 點生命值。",
    "desc_en": "A tiny tear drop shaped speck of blood that is completely crystalized. These are hard to come by as vampires feel very little so it takes an awful lot for one to cry, except for that one vampire who we won’t talk about. Swallowing a vampire tear will leave the taste of fresh blood on your tongue for a few hours. For the next 10 minutes you will be granted a small portion of a vampires regenerative powers. Every minute while under the effect of a vampire tear flip a coin. If you win the flip you gain 2 hit points back if you lose you gain only 1 hit point back instead."
  },
  {
    "id": "吸血鬼之牙 VAMPIRIC TOOTH",
    "name_zh": "吸血鬼之牙",
    "name_en": "VAMPIRIC TOOTH",
    "category_zh": "奇物，稀有Wondrous Item, Rare",
    "category_en": "",
    "desc_zh": "一顆來自幼年吸血鬼的長珍珠白色尖牙。這些牙齒偶爾會脫落，但別擔心，大多數情況下它會再長出來。吸血鬼之牙非常脆弱，可以輕易在手中壓碎成細粉。這種粉末通常混合到飲料中或在火中吸食其煙霧。如果一個生物攝入或吸入吸血鬼之牙的氣味，那麼他們會立即昏迷 12 小時，無需豁免。據說這是由於吸血鬼咬傷對其受害者產生的鎮靜劑般的效果，以防止逃脫。",
    "desc_en": "A long pearly white fang from a juvenile vampire. These fall out once in a while but don’t worry it will grow back most of the time. The vampiric tooth is oddly very fragile and can be crushed easily in ones hand into a fine dust. The dust is typically either mixed into a drink or smoked in a fire. If a creature ingests or inhales the odours of a vampiric tooth, then they immediately become unconscious for 12 hours without a save. Supposedly this is due to the sedative like effect vampire bites have on their victims to prevent escape."
  },
  {
    "id": "虛空詛咒 VOID CURSE",
    "name_zh": "虛空詛咒",
    "name_en": "VOID CURSE",
    "category_zh": "附魔物品，稀有Enchantment Item, Rare",
    "category_en": "",
    "desc_zh": "一張破舊的卷軸，用一條亮紫色的繩子綁著。這是一次性附魔，可用於附魔一把近戰或遠程武器。用此詛咒附魔武器會使其散發出微弱的魔法痕跡並發出微弱的紫光。用受此詛咒附魔的物品造成傷害時，命中會額外造成 1D4 閃電傷害，而當時持有此武器的生物會失去相同數值的生命值。這些武器不需要調適。",
    "desc_en": "A tattered scroll bound with a bright purple cord. This is a single use enchantment that can be used to enchant one melee or ranged weapon. Enchanting a weapon with this curse causes it to emanate faint traces of magic and give off a slight purple glow. Dealing damage with an item enchanted by this curse deals an extra 1D4 Lightning Damage on a hit and the creature holding this weapon at the time loses that same amount of hit points. These weapons do not require attuning."
  },
  {
    "id": "衰弱詛咒 WEAKENING CURSE",
    "name_zh": "衰弱詛咒",
    "name_en": "WEAKENING CURSE",
    "category_zh": "附魔物品，稀有Enchantment Item, Rare",
    "category_en": "",
    "desc_zh": "一張破舊的卷軸，用一條金屬青銅色的繩子綁著。這是一次性附魔，可用於附魔一把近戰或遠程武器。用此詛咒附魔武器會導致該生物在接下來的一小時內，其所有攻擊和傷害檢定以及技能檢定遭受 -1 效果。此效果不疊加。這些武器不需要調適。",
    "desc_en": "A tattered scroll bound with a metallic bronze cord. This is a single use enchantment that can be used to enchant one melee or ranged weapon. Enchanting a weapon with this curse causes it to emanate faint traces of magic and give off a slight bronze glow. Dealing damage with an item enchanted by this curse will cause the creature to suffer a -1 effect to all their attack and damage rolls and skill checks for the next hour. This does not stack. These weapons do not require attuning."
  },
  {
    "id": "狼人之血 WEREWOLVES BLOOD",
    "name_zh": "狼人之血",
    "name_en": "WEREWOLVES BLOOD",
    "category_zh": "奇物，稀有Wondrous Item, Rare",
    "category_en": "",
    "desc_zh": "這個帶有灰色橡膠塞的方形小瓶內含一種濃稠的深紅色液體，在其容器中冒泡。喝下此小瓶的內容物會導致飲用者劇烈不適。有 DC15 的機率，使用者在 24 小時內會被詛咒，患上某種狼化症。受此物品詛咒的人會在滿月的光芒下變成一隻狂暴、破爛的狼。這個詛咒可以通過高等法術和祝福來移除。",
    "desc_en": "This square vial with a grey rubber stopper contains a thick deep red liquid that bubbles in its container. Drinking the contents of this vial will cause the one who ingested it to become violently ill. There is a DC15 chance that within 24 hours the user will be cursed with a form of Lycanthropy. A person cursed with this item will turn into a rabid tattered wolf under the light of a full moon. This curse can be removed by high level spells and blessings."
  },
  {
    "id": "柳枝蠟燭 WICKER CANDLE",
    "name_zh": "柳枝蠟燭",
    "name_en": "WICKER CANDLE",
    "category_zh": "普通物品，常見Normal Item, Common",
    "category_en": "",
    "desc_zh": "此物品包含一支小紅色蠟燭。點燃時，這支蠟燭會在 20 英尺半徑內發出溫暖的光芒。在半空中釋放這支蠟燭會使其懸浮不動，直到它被移動或蠟燭燃盡。這些在術士和邪教徒中非常受歡迎。漂浮的蠟燭確實增添了戲劇效果。",
    "desc_en": "This item consists of a small red wax candle. When lit this candle lets of a warm glow in a 20ft radius. Releasing this candle mid-air will cause it to float motionless until it is either moved or until the candle burns out. These are very popular amongst sorcerers and cultists. Floating candles really add to the dramatic effect."
  },
  {
    "id": "威廉之眼 WILLIAM’S EYE",
    "name_zh": "威廉之眼",
    "name_en": "WILLIAM’S EYE",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "雖然它被稱為威廉之眼，但這件奇物實際上並不是一隻眼睛，而且威廉也沒有任何實際的眼睛。此物品包含一顆小型透明玻璃彈珠，散發著柔和的橙光。表面散發出淡淡的、味道難聞的魔法。將玻璃彈珠舉到你的眼睛前，允許你直接看穿它，儘管顏色被染上了橙色。透過這顆玻璃彈珠觀看時，該生物擁有真實視覺能力。此真實視覺的範圍為 30 英尺。",
    "desc_en": "Although it is called William’s Eye, this wondrous item is in fact not actually an eye and nor does William have any actual eyes. This item consist of a small transparent glass marble that glows with a soft orange light. A faint foul tasting magic exudes itself from the surface. Holding the glass marble up to your eye allows you to see directly through it albeit the colours are tainted with orange. While looking through this glass marble the creature has the ability of True Sight. This true sight has a range of 30 feet."
  },
  {
    "id": "威廉的割草鐮 WILLIAM’S GRASS CUTTER",
    "name_zh": "威廉的割草鐮",
    "name_en": "WILLIAM’S GRASS CUTTER",
    "category_zh": "簡易武器（鐮刀），獨特Simple Weapon (Scythe), Unique",
    "category_en": "",
    "desc_zh": "割草鐮是威廉在削減敵人生命時選擇的實體武器。這把長長的割草鐮有一個粗糙的木桿作為握柄，看起來與威廉的稻草人木樁驚人地相似。一個長而薄的彎曲刀刃支撐在其頂部，並像新月一樣向外彎曲。作為一把普通的鐮刀，它造成 2D6 揮砍傷害，被視為重型武器並具有 5 英尺觸及範圍。與此物品調適的持用者可以使用其內部魔法召喚一群烏鴉，這些烏鴉會服從持用者，最多持續 1 小時。",
    "desc_en": "The grass cutter scythe is William’s physical weapon of choice when it comes to cutting down the lives of his enemies. This long grass scythe has a gnarled wooden pole for a handle that looks remarkably similar to William’s scarecrow stake. A long thin curved blade is supported at its head and curves outwards like a crescent moon. As a regular scythe it deals 2D6 slashing damage and is considered heavy and has a 5ft of reach. A wielder who is attuned to this item may use its internal magic to summon a swarm of crows that will obey the wielder for a maximum time of 1 hour."
  },
  {
    "id": "威廉的袖珍傳送門 WILLIAM’S POCKET GATE",
    "name_zh": "威廉的袖珍傳送門",
    "name_en": "WILLIAM’S POCKET GATE",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "袖珍傳送門是一個小型、雕刻複雜的混亂小齒輪，纏繞在一個小發條撥盤上。每個齒輪的顏色略有不同，混合了青銅、銅和銀金屬。這個裝置以穩定的脈衝散發出低水平的古老黑暗魔法。轉動撥盤啟動機構，齒輪開始轉動。隨著齒輪轉動，它散發出的魔法急遽增加。當達到頂峰時，一個手持該物品的單一生物可以傳送到其位置 30 英尺內任何無障礙的地點。這次傳送發生後，裝置再次停止運動。袖珍傳送門只能使用一次，然後需要重新充能。要重新充能，必須在 7 天內每天為懷錶上弦一次。完成此過程後，該裝置可以再次使用。充能不能疊加。",
    "desc_en": "The pocket gate is a small intricately carved mess of small cogs wound around a small wind up dial. Each cog is a slightly different colour in a mix of bronze, copper and silver metals. The contraption emits a low level of archaic dark magic in steady pulses. Winding up the dial starts the mechanism and cogs moving. As the cogs move around the magic it emits increases rapidly. As it reaches its peak a single creature that is holding the item can teleport to any unobstructed location within 30 feet of its location. After this teleportation occurs the device ceases its movement once more. The pocket gate can only be used once before needing to recharge its power. To recharge the pocket watch must be rewound once every day for 7 days. After this has been completed the contraption can be used once more. Charges do not stack."
  },
  {
    "id": "女巫帽（變體） WITCHES HAT (VARIANTS)",
    "name_zh": "女巫帽（變體）",
    "name_en": "WITCHES HAT (VARIANTS)",
    "category_zh": "奇物，獨特Wondrous Item, Unique",
    "category_en": "",
    "desc_zh": "不同類型的女巫帽通過帽子內部使用的織物顏色來識別。每頂帽子都由褪色的黑色織物製成，並有一個寬帽簷，兩側下垂。帽頂螺旋上升並彎曲成一個尖捲。\n安柏女巫帽 - 佩戴並與此帽子調適將為使用者提供火焰傷害免疫，以及使用火焰鞭笞戲法的能力，使用你的感知調整值作為攻擊加值。火焰鞭笞是一種遠程法術攻擊，對 25 英尺範圍內的單一目標造成 4D4 火焰傷害。\n紫晶女巫帽 - 佩戴並與此帽子調適將為使用者提供閃電傷害免疫，以及使用閃電火花戲法的能力，使用你的感知調整值作為攻擊加值。閃電火花是一種遠程法術攻擊，對 25 英尺範圍內的單一目標造成 4D4 閃電傷害。\n安漷女巫帽 - 佩戴並與此帽子調適將為使用者提供冰凍傷害免疫，以及使用冰矛戲法的能力，使用你的感知調整值作為攻擊加值。冰矛是一種遠程法術攻擊，對 25 英尺範圍內的單一目標造成 4D4 冰凍傷害。",
    "desc_en": "The different types of witch’s hats are identified by the colour fabric used on the inside of the hat. Each hat is made of a faded black fabric and sports a wide brim that sags either side. The top of the hat spirals up and bends over into a pointed curl.\nAmber Witch Hat – Wearing and attuning to this hat will provide the user with immunity to fire damage and the Ability to use the Flame Lash Cantrip using your wisdom modifier as your attack bonus. Flame Lash is a ranged spell attack that deals 4D4 Fire Damage to a single target within 25ft range.\nAmethyst Witch Hat - Wearing and attuning to this hat will provide the user with immunity to lightning damage and the Ability to use the Lightning Spark Cantrip using your wisdom modifier as your attack bonus. Lightning Spark is a ranged spell attack that deals 4D4 Lightning Damage to a single target within 25ft range.\nAqua Witch Hat - Wearing and attuning to this hat will provide the user with immunity to cold damage and the Ability to use the Ice Spear Cantrip using your wisdom modifier as your attack bonus. Ice Spear is a ranged spell attack that deals 4D4 Cold Damage to a single target within 25ft range."
  },
  {
    "id": "狼皮手套 WOLF GLOVES",
    "name_zh": "狼皮手套",
    "name_en": "WOLF GLOVES",
    "category_zh": "簡易武器（拳套），非普通Simple Weapon (Fist), Uncommon",
    "category_en": "",
    "desc_zh": "這副粗糙的皮手套是由一隻落入獵人陷阱的野性狼人的戰利品爪製成的。每個手指的尖端都有一個大的染色爪子突出。佩戴此物品時，使用者可以用造成 1D4 揮砍傷害的爪擊取代其徒手打擊。這些手套被視為具有輕型屬性。",
    "desc_en": "This rugged leather gloves have been made from the trophy paws of a feral werewolf caught in a hunters trap. Each finger has a large stained claw protruding from each tip. While wearing this item the user may replace their unarmed strike with a claw attack that inflicts 1D4 Slashing Damage on a successful hit. These gloves are considered to have the light attribute."
  },
  {
    "id": "木樁 WOODEN STAKE",
    "name_zh": "木樁",
    "name_en": "WOODEN STAKE",
    "category_zh": "簡易武器，非普通Simple Weapon, Uncommon",
    "category_en": "",
    "desc_zh": "一根簡單粗糙製作的木樁，由白楊樹的樹枝製成。這種木材通常被認為可以抵禦邪靈。這種特殊的木樁用於獵殺吸血鬼。在對抗吸血鬼類生物時，此木樁被視為 +2 魔法武器，被視為輕型武器，成功命中時造成 1D6 傷害。對抗任何其他類型的生物時，它沒有 +2 魔法效果。",
    "desc_en": "A simple and crudely crafted wooden stake made from the branch of an Aspen tree. This type of wood is commonly believed to ward off evil spirits. This particular wooden stake is used for hunting Vampires. This stake is considered a +2 magical weapon when fighting Vampiric Creatures that is considered a Light weapon and inflicts 1D6 Damage on a successful hit. Against any other type of creature it does not have the +2 magical effect."
  },
  {
    "id": "電擊太妃糖 ZAPPY TAFFY",
    "name_zh": "電擊太妃糖",
    "name_en": "ZAPPY TAFFY",
    "category_zh": "普通物品（消耗品），常見Normal Item (Consumable), Common",
    "category_en": "",
    "desc_zh": "萬聖域年輕一代中最喜歡的惡作劇糖果，電擊太妃糖是一塊簡單的藍色黏性太妃糖，肉眼看來 otherwise 正常。咀嚼它會在你的口中產生愉快的嗡嗡聲，然後你會感覺到一次討厭但並不超級危險的電擊。該生物在此過程中將遭受 1 點閃電傷害。",
    "desc_en": "A favourite trick candy among the Hallows younglings, Zappy Taffy is a simple piece of blue sticky taffy that is otherwise normal to the naked eye. Chewing on it creates a pleasant buzz in your mouth before you feel a nasty but not super dangerous shock. The creature will suffer 1 point of Lightning Damage in the process."
  },
  {
    "id": "殭屍玉米 ZOMBIE CORN",
    "name_zh": "殭屍玉米",
    "name_en": "ZOMBIE CORN",
    "category_zh": "普通物品（消耗品），常見Normal Item (Consumable), Common",
    "category_en": "",
    "desc_zh": "一個短而顏色鮮豔的盒子，裡面裝滿了看起來像粉色黏液的爆米花。雖然有點黏，但它不是濕漉漉的，而且爆米花仍然鬆脆。每一塊都奇怪地像一個微縮的大腦。在吃殭屍玉米期間以及吃完後最多 1 小時，該生物將呈現出殭屍化的外觀。此效果是無害的，除非你去某個不喜歡殭屍的地方，否則你會完全沒事，即使你偶爾會想到大腦。",
    "desc_en": "A short brightly coloured box filled with what appears to be pink slimed popcorn. While slightly sticky it’s not dripping wet and the popcorn is still crunchy. Each piece oddly resembles a tiny brain. While eating the Zombie Corn and for up to 1 hour after eating it, the creature will take on the appearance of being zombified. The effect is harmless and unless you go somewhere that doesnt like zombies you will be totally fine even if you occasionally think about brains."
  },
  {
    "id": "殭屍皮 ZOMBIE SKIN",
    "name_zh": "殭屍皮",
    "name_en": "ZOMBIE SKIN",
    "category_zh": "普通物品，非普通Normal Item, Uncommon",
    "category_en": "",
    "desc_zh": "殭屍皮是一件 aptly named 的破舊旅行外套，由老舊殭屍的斑駁腐爛皮膚製成。這件骯髒的外套養著幾隻蒼蠅和蛆蟲在接縫處爬行，清楚地表明皮膚沒有經過適當清潔或鞣製。除了作為萬聖節服裝的極其逼真的絕佳補充外，殭屍皮允許穿戴者近乎完美地與真正的殭屍融為一體。穿著這件外套時，殭屍無法將你與另一個殭屍區分開來（是因為氣味）。你可以和平地在它們中間移動而不會引起它們的攻擊性。但如果你脫掉它，那你就完蛋了。",
    "desc_en": "The Zombie Skin is an aptly named shabby travellers coat made from the mottled rotting skin of aged zombies. The filthy coat supports a few flies and maggots crawling around the seams, clearly aware that the skin has not been cleaned nor tanned properly. Aside from making a great addition to a freakishly realistic Halloween costume, the Zombie Skin allows the wearer to near perfectly blend in with actual zombies. While wearing this coat zombies are unable to differentiate you from another zombie (it’s the smell). You can peacefully move among them without them becoming aggressive. But if you take it off then you are done for."
  },
  {
    "id": "亞當 ADAM",
    "name_zh": "亞當",
    "name_en": "ADAM",
    "category_zh": "普通物品（收藏品），特殊",
    "category_en": "Normal Item (Collectible), Special",
    "desc_zh": "",
    "desc_en": ""
  },
  {
    "id": "阿嘉莎 AGATHA",
    "name_zh": "阿嘉莎",
    "name_en": "AGATHA",
    "category_zh": "普通物品（收藏品），特殊",
    "category_en": "Normal Item (Collectible), Special",
    "desc_zh": "",
    "desc_en": ""
  },
  {
    "id": "傲霜女巫姊妹三人組 ALABASTER WITCH SISTERS TRIO",
    "name_zh": "傲霜女巫姊妹三人組",
    "name_en": "ALABASTER WITCH SISTERS TRIO",
    "category_zh": "普通物品（收藏品），特殊",
    "category_en": "Normal Item (Collectible), Special",
    "desc_zh": "",
    "desc_en": ""
  },
  {
    "id": "阿納巨蟒 ANACONDA",
    "name_zh": "阿納巨蟒",
    "name_en": "ANACONDA",
    "category_zh": "普通物品（收藏品），特殊",
    "category_en": "Normal Item (Collectible), Special",
    "desc_zh": "",
    "desc_en": ""
  },
  {
    "id": "阿斯特洛斯之樹 ASTEROTH’S TREE",
    "name_zh": "阿斯特洛斯之樹",
    "name_en": "ASTEROTH’S TREE",
    "category_zh": "普通物品（收藏品），特殊",
    "category_en": "Normal Item (Collectible), Special",
    "desc_zh": "",
    "desc_en": ""
  },
  {
    "id": "弗萊徹 FLETCHER",
    "name_zh": "弗萊徹",
    "name_en": "FLETCHER",
    "category_zh": "普通物品（收藏品），特殊",
    "category_en": "Normal Item (Collectible), Special",
    "desc_zh": "",
    "desc_en": ""
  },
  {
    "id": "拉西安娜 LACIANA",
    "name_zh": "拉西安娜",
    "name_en": "LACIANA",
    "category_zh": "普通物品（收藏品），特殊",
    "category_en": "Normal Item (Collectible), Special",
    "desc_zh": "",
    "desc_en": ""
  },
  {
    "id": "雷恩 LAINE",
    "name_zh": "雷恩",
    "name_en": "LAINE",
    "category_zh": "普通物品（收藏品），特殊",
    "category_en": "Normal Item (Collectible), Special",
    "desc_zh": "",
    "desc_en": ""
  },
  {
    "id": "拉米娜 LAMINA",
    "name_zh": "拉米娜",
    "name_en": "LAMINA",
    "category_zh": "普通物品（收藏品），特殊",
    "category_en": "Normal Item (Collectible), Special",
    "desc_zh": "",
    "desc_en": ""
  },
  {
    "id": "拉札拉克 LAZARAK",
    "name_zh": "拉札拉克",
    "name_en": "LAZARAK",
    "category_zh": "普通物品（收藏品），特殊",
    "category_en": "Normal Item (Collectible), Special",
    "desc_zh": "",
    "desc_en": ""
  },
  {
    "id": "L.E.A.D. 南瓜終結者 L.E.A.D. PUMPKINATOR",
    "name_zh": "L.E.A.D. 南瓜終結者",
    "name_en": "L.E.A.D. PUMPKINATOR",
    "category_zh": "普通物品（收藏品），特殊",
    "category_en": "Normal Item (Collectible), Special",
    "desc_zh": "",
    "desc_en": ""
  },
  {
    "id": "莉絲貝 LISBETH",
    "name_zh": "莉絲貝",
    "name_en": "LISBETH",
    "category_zh": "普通物品（收藏品），特殊",
    "category_en": "Normal Item (Collectible), Special",
    "desc_zh": "",
    "desc_en": ""
  },
  {
    "id": "里希登斯坦領主 LORD LICHTENSTEIN",
    "name_zh": "里希登斯坦領主",
    "name_en": "LORD LICHTENSTEIN",
    "category_zh": "普通物品（收藏品），特殊",
    "category_en": "Normal Item (Collectible), Special",
    "desc_zh": "",
    "desc_en": ""
  },
  {
    "id": "洛恩 LORNE",
    "name_zh": "洛恩",
    "name_en": "LORNE",
    "category_zh": "普通物品（收藏品），特殊",
    "category_en": "Normal Item (Collectible), Special",
    "desc_zh": "",
    "desc_en": ""
  },
  {
    "id": "離途沼澤 LOSTFOOT’S BOG",
    "name_zh": "離途沼澤",
    "name_en": "LOSTFOOT’S BOG",
    "category_zh": "普通物品（收藏品），特殊",
    "category_en": "Normal Item (Collectible), Special",
    "desc_zh": "",
    "desc_en": ""
  },
  {
    "id": "盧卡斯 LUCAS",
    "name_zh": "盧卡斯",
    "name_en": "LUCAS",
    "category_zh": "普通物品（收藏品），特殊",
    "category_en": "Normal Item (Collectible), Special",
    "desc_zh": "",
    "desc_en": ""
  },
  {
    "id": "奧列格 OLEG",
    "name_zh": "奧列格",
    "name_en": "OLEG",
    "category_zh": "普通物品（收藏品），特殊",
    "category_en": "Normal Item (Collectible), Special",
    "desc_zh": "",
    "desc_en": ""
  },
  {
    "id": "奧菲莉婭 OPHELIA",
    "name_zh": "奧菲莉婭",
    "name_en": "OPHELIA",
    "category_zh": "普通物品（收藏品），特殊",
    "category_en": "Normal Item (Collectible), Special",
    "desc_zh": "",
    "desc_en": ""
  },
  {
    "id": "奧瑞莎 ORISA",
    "name_zh": "奧瑞莎",
    "name_en": "ORISA",
    "category_zh": "普通物品（收藏品），特殊",
    "category_en": "Normal Item (Collectible), Special",
    "desc_zh": "",
    "desc_en": ""
  },
  {
    "id": "奧瑞克 ORRICK",
    "name_zh": "奧瑞克",
    "name_en": "ORRICK",
    "category_zh": "普通物品（收藏品），特殊",
    "category_en": "Normal Item (Collectible), Special",
    "desc_zh": "",
    "desc_en": ""
  },
  {
    "id": "奧斯瓦多 OSVALDO",
    "name_zh": "奧斯瓦多",
    "name_en": "OSVALDO",
    "category_zh": "普通物品（收藏品），特殊",
    "category_en": "Normal Item (Collectible), Special",
    "desc_zh": "",
    "desc_en": ""
  },
  {
    "id": "威廉 WILLIAM",
    "name_zh": "威廉",
    "name_en": "WILLIAM",
    "category_zh": "普通物品（收藏品），特殊",
    "category_en": "Normal Item (Collectible), Special",
    "desc_zh": "",
    "desc_en": ""
  }
];
