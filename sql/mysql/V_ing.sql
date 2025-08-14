-- INGREDIENTS TABLE (30-40 items)
INSERT IGNORE INTO ingredients (name) VALUES ('しょうゆ'); -- soy sauce
INSERT IGNORE INTO ingredients (name) VALUES ('みそ'); -- miso
INSERT IGNORE INTO ingredients (name) VALUES ('みりん'); -- mirin
INSERT IGNORE INTO ingredients (name) VALUES ('さけ'); -- sake
INSERT IGNORE INTO ingredients (name) VALUES ('だし'); -- dashi
INSERT IGNORE INTO ingredients (name) VALUES ('こめ'); -- rice
INSERT IGNORE INTO ingredients (name) VALUES ('とうふ'); -- tofu
INSERT IGNORE INTO ingredients (name) VALUES ('わかめ'); -- wakame seaweed
INSERT IGNORE INTO ingredients (name) VALUES ('のり'); -- nori seaweed
INSERT IGNORE INTO ingredients (name) VALUES ('たまご'); -- egg
INSERT IGNORE INTO ingredients (name) VALUES ('ぎゅうにく'); -- beef
INSERT IGNORE INTO ingredients (name) VALUES ('ぶたにく'); -- pork
INSERT IGNORE INTO ingredients (name) VALUES ('とりにく'); -- chicken
INSERT IGNORE INTO ingredients (name) VALUES ('さけ'); -- salmon
INSERT IGNORE INTO ingredients (name) VALUES ('まぐろ'); -- tuna
INSERT IGNORE INTO ingredients (name) VALUES ('えび'); -- shrimp
INSERT IGNORE INTO ingredients (name) VALUES ('たまねぎ'); -- onion
INSERT IGNORE INTO ingredients (name) VALUES ('にんじん'); -- carrot
INSERT IGNORE INTO ingredients (name) VALUES ('だいこん'); -- daikon radish
INSERT IGNORE INTO ingredients (name) VALUES ('きゃべつ'); -- cabbage
INSERT IGNORE INTO ingredients (name) VALUES ('しょうが'); -- ginger
INSERT IGNORE INTO ingredients (name) VALUES ('にんにく'); -- garlic
INSERT IGNORE INTO ingredients (name) VALUES ('ねぎ'); -- green onion
INSERT IGNORE INTO ingredients (name) VALUES ('しいたけ'); -- shiitake mushroom
INSERT IGNORE INTO ingredients (name) VALUES ('なめこ'); -- nameko mushroom
INSERT IGNORE INTO ingredients (name) VALUES ('ごま'); -- sesame seeds
INSERT IGNORE INTO ingredients (name) VALUES ('ごまあぶら'); -- sesame oil
INSERT IGNORE INTO ingredients (name) VALUES ('さとう'); -- sugar
INSERT IGNORE INTO ingredients (name) VALUES ('しお'); -- salt
INSERT IGNORE INTO ingredients (name) VALUES ('こしょう'); -- pepper
INSERT IGNORE INTO ingredients (name) VALUES ('らーゆ'); -- chili oil
INSERT IGNORE INTO ingredients (name) VALUES ('すし酢'); -- sushi vinegar
INSERT IGNORE INTO ingredients (name) VALUES ('かたくり粉'); -- potato starch
INSERT IGNORE INTO ingredients (name) VALUES ('小麦粉'); -- wheat flour
INSERT IGNORE INTO ingredients (name) VALUES ('パン粉'); -- panko breadcrumbs
INSERT IGNORE INTO ingredients (name) VALUES ('そば'); -- soba noodles
INSERT IGNORE INTO ingredients (name) VALUES ('うどん'); -- udon noodles
INSERT IGNORE INTO ingredients (name) VALUES ('そうめん'); -- somen noodles
INSERT IGNORE INTO ingredients (name) VALUES ('てんぷら粉'); -- tempura flour
INSERT IGNORE INTO ingredients (name) VALUES ('まめもやし'); -- bean sprouts
INSERT IGNORE INTO ingredients (name) VALUES ('あぶらあげ'); -- fried tofu
INSERT IGNORE INTO ingredients (name) VALUES ('こんにゃく'); -- konjac
INSERT IGNORE INTO ingredients (name) VALUES ('やさい'); -- vegetables
INSERT IGNORE INTO ingredients (name) VALUES ('あぶら'); -- oil
INSERT IGNORE INTO ingredients (name) VALUES ('おちゃ'); -- tea
INSERT IGNORE INTO ingredients (name) VALUES ('みず'); -- water

-- RECIPES TABLE (10-13 dishes)
INSERT IGNORE INTO recipes (name, instructions, cuisine_type, time, imageurl) VALUES 
('みそしる (Miso Shiru)', 'だしを鍋に入れて中火で温める。沸騰したら火を弱くする。|みそを小さなボウルで少量のだしで溶かしてから鍋に加える。再び沸騰させずに温める。|とうふとわかめを加えて2-3分煮る。ねぎを散らして完成。', 'Jap', 10, 'https://oishibook.com/wp-content/uploads/2021/10/miso-soup-blog-RECIPE-750_750.jpg');

INSERT IGNORE INTO recipes (name, instructions, cuisine_type, time, imageurl) VALUES 
('たまごやき (Tamagoyaki)', 'たまご4個をボウルで割り、みりん、さとう、しおを加えてよく混ぜる。|卵焼き器を中火で熱し、少量のあぶらを引く。卵液の1/3を流し入れて薄く広げる。|半熟状態で手前から奥に向かって巻く。奥に寄せて再度あぶらを引き、残りの卵液で同様に繰り返す。|最後に形を整えて完成。', 'Jap', 15, 'https://www.justonecookbook.com/wp-content/uploads/2024/04/Chicken-Teriyaki-7895-I-1.jpg');

INSERT IGNORE INTO recipes (name, instructions, cuisine_type, time, imageurl) VALUES 
('てりやきチキン (Teriyaki Chicken)', 'とりにくを一口大に切り、しおとこしょうで下味をつける。|フライパンにあぶらを熱し、とりにくを皮目から焼く。両面に焼き色をつける。|しょうゆ、みりん、さけ、さとうを混ぜたタレを加える。弱火で煮詰めながら照りを出す。|ねぎを散らして完成。', 'Jap', 20, 'https://www.justonecookbook.com/wp-content/uploads/2024/02/Simple-Tamagoyaki-4664-I.jpg');

INSERT IGNORE INTO recipes (name, instructions, cuisine_type, time, imageurl) VALUES 
('すしめし (Sushi Meshi)', 'こめを研いで炊飯器で炊く。少し硬めに炊き上げる。|すし酢をボウルで作る：酢、さとう、しおを混ぜる。|炊き上がったご飯を大きなボウルに移し、すし酢を加える。|しゃもじで切るように混ぜながら、うちわで冷ます。人肌程度まで冷ましたら完成。', 'Jap', 45, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM5_RJkfaR9guXmlXGrZvOtNRn-ksAlEm2tQ&s');

INSERT IGNORE INTO recipes (name, instructions, cuisine_type, time, imageurl) VALUES 
('やきそば (Yakisoba)', 'やきそば麺を袋から出して軽くほぐす。やさいを食べやすい大きさに切る。|フライパンにあぶらを熱し、ぶたにくを炒める。色が変わったらやさいを加えて炒める。|麺を加えて炒め、水を少量加えて蒸し焼きにする。|やきそばソース、しょうゆで味付けし、あおのりとかつおぶしをかけて完成。', 'Jap', 15, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxCJdRx6oWtTCL7E9SOqDzZdPg15e2WhbHiA&s');

INSERT IGNORE INTO recipes (name, instructions, cuisine_type, time, imageurl) VALUES 
('てんぷら (Tempura)', 'えび、やさいを準備し、えびは背わたを取り、やさいは食べやすく切る。|てんぷら粉を冷水で軽く混ぜる。混ぜすぎないのがコツ。|あぶらを170-180度に熱する。|具材に衣をつけて揚げる。きつね色になったら油を切る。天つゆやしおでいただく。', 'Jap', 25, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8igOe7h8V1Qcx32l1vMlEwWi2jR2N9uNoaA&s');

INSERT IGNORE INTO recipes (name, instructions, cuisine_type, time, imageurl) VALUES 
('らーめん (Ramen)', 'だしを鍋で温め、みそまたはしょうゆベースのスープを作る。|別の鍋で麺を茹でる。茹で時間は麺の種類により調整。|チャーシュー、たまご、ねぎ、のり、もやしなどトッピングを準備。|茹でた麺をどんぶりに入れ、熱いスープを注ぐ。トッピングを盛り付けて完成。', 'Jap', 30, 'https://www.kikkoman.eu/fileadmin/_processed_/f/0/csm_1103-recipe-page-Spicy-Kimchi-Ramen-with-Pork_desktop_c8dc4e51e8.jpg');

INSERT IGNORE INTO recipes (name, instructions, cuisine_type, time, imageurl) VALUES 
('ぎゅうどん (Gyudon)', 'たまねぎを薄切りにする。ぎゅうにくは食べやすい大きさに切る。|フライパンにあぶらを熱し、たまねぎを炒めて透明になるまで炒める。|ぎゅうにくを加えて炒め、色が変わったらだし、しょうゆ、みりん、さとうを加える。|弱火で10分程度煮込む。どんぶりのご飯の上にのせて完成。', 'Jap', 20, 'https://www.cherryonmysundae.com/wp-content/uploads/2016/02/gyudon-final-feature.jpg');

INSERT IGNORE INTO recipes (name, instructions, cuisine_type, time, imageurl) VALUES 
('おにぎり (Onigiri)', 'こめを炊いて少し冷ます。手を水で濡らし、しおを少量つける。|ご飯を手のひらにとり、中央に具材（さけ、うめぼし、こんぶなど）を入れる。|ご飯で具材を包み込み、三角形に握る。|のりを巻いて完成。お弁当や軽食として最適。', 'Jap', 10, 'https://www.justonecookbook.com/wp-content/uploads/2023/09/Onigiri-Japanese-Rice-Balls-2063-I-1.jpg');

INSERT IGNORE INTO recipes (name, instructions, cuisine_type, time, imageurl) VALUES 
('やきとり (Yakitori)', 'とりにくを一口大に切り、串に刺す。ねぎも交互に刺してもよい。|タレを作る：しょうゆ、みりん、さけ、さとうを混ぜて煮詰める。|グリルまたは網で串を焼く。途中でタレを塗りながら焼く。|両面に焼き色がついて中まで火が通ったら完成。', 'Jap', 18, 'https://www.justonecookbook.com/wp-content/uploads/2024/04/Yakitori-7831-I.jpg');

INSERT IGNORE INTO recipes (name, instructions, cuisine_type, time, imageurl) VALUES 
('かつどん (Katsudon)', 'とんかつを作る：ぶたにくに小麦粉、たまご、パン粉の順で衣をつけて揚げる。|たまねぎを薄切りにし、だし、しょうゆ、みりん、さとうと一緒に煮る。|とんかつを食べやすく切り、煮えたたまねぎの上にのせる。|溶きたまごを回し入れ、半熟状態でどんぶりのご飯にのせて完成。', 'Jap', 25, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbHVR_xlzPnDYYWTpswEOfeNjC3ZpMnsecw&s');

INSERT IGNORE INTO recipes (name, instructions, cuisine_type, time, imageurl) VALUES 
('ちらしずし (Chirashizushi)', 'すしめしを作る：ご飯にすし酢を混ぜて冷ます。|さしみ用の魚を薄く切る。たまごやきを作って細切りにする。|きゅうり、だいこんなどやさいを千切りにする。|すしめしを器に盛り、具材を彩りよく盛り付ける。わさびとしょうゆを添えて完成。', 'Jap', 40, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNciTkeiZWcNsCTJWzS6CHvP-7OsG4XZPDGA&s');

-- RECIPE_INGREDIENTS TABLE (50-60 samples)
INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='みそしる (Miso Shiru)'), (SELECT ingredient_id FROM ingredients WHERE name='だし'), '400ml', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='みそしる (Miso Shiru)'), (SELECT ingredient_id FROM ingredients WHERE name='みそ'), '大さじ2', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='みそしる (Miso Shiru)'), (SELECT ingredient_id FROM ingredients WHERE name='とうふ'), '100g', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='みそしる (Miso Shiru)'), (SELECT ingredient_id FROM ingredients WHERE name='わかめ'), '10g', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='みそしる (Miso Shiru)'), (SELECT ingredient_id FROM ingredients WHERE name='ねぎ'), '適量', 1);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='たまごやき (Tamagoyaki)'), (SELECT ingredient_id FROM ingredients WHERE name='たまご'), '4個', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='たまごやき (Tamagoyaki)'), (SELECT ingredient_id FROM ingredients WHERE name='みりん'), '小さじ1', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='たまごやき (Tamagoyaki)'), (SELECT ingredient_id FROM ingredients WHERE name='さとう'), '小さじ1', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='たまごやき (Tamagoyaki)'), (SELECT ingredient_id FROM ingredients WHERE name='しお'), '少々', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='たまごやき (Tamagoyaki)'), (SELECT ingredient_id FROM ingredients WHERE name='あぶら'), '適量', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='てりやきチキン (Teriyaki Chicken)'), (SELECT ingredient_id FROM ingredients WHERE name='とりにく'), '400g', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='てりやきチキン (Teriyaki Chicken)'), (SELECT ingredient_id FROM ingredients WHERE name='しょうゆ'), '大さじ3', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='てりやきチキン (Teriyaki Chicken)'), (SELECT ingredient_id FROM ingredients WHERE name='みりん'), '大さじ2', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='てりやきチキン (Teriyaki Chicken)'), (SELECT ingredient_id FROM ingredients WHERE name='さけ'), '大さじ1', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='てりやきチキン (Teriyaki Chicken)'), (SELECT ingredient_id FROM ingredients WHERE name='さとう'), '大さじ1', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='すしめし (Sushi Meshi)'), (SELECT ingredient_id FROM ingredients WHERE name='こめ'), '300g', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='すしめし (Sushi Meshi)'), (SELECT ingredient_id FROM ingredients WHERE name='すし酢'), '大さじ4', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='やきそば (Yakisoba)'), (SELECT ingredient_id FROM ingredients WHERE name='そば'), '2玉', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='やきそば (Yakisoba)'), (SELECT ingredient_id FROM ingredients WHERE name='ぶたにく'), '100g', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='やきそば (Yakisoba)'), (SELECT ingredient_id FROM ingredients WHERE name='きゃべつ'), '200g', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='やきそば (Yakisoba)'), (SELECT ingredient_id FROM ingredients WHERE name='にんじん'), '1/2本', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='やきそば (Yakisoba)'), (SELECT ingredient_id FROM ingredients WHERE name='しょうゆ'), '大さじ2', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='てんぷら (Tempura)'), (SELECT ingredient_id FROM ingredients WHERE name='えび'), '8尾', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='てんぷら (Tempura)'), (SELECT ingredient_id FROM ingredients WHERE name='やさい'), '適量', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='てんぷら (Tempura)'), (SELECT ingredient_id FROM ingredients WHERE name='てんぷら粉'), '100g', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='てんぷら (Tempura)'), (SELECT ingredient_id FROM ingredients WHERE name='みず'), '150ml', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='らーめん (Ramen)'), (SELECT ingredient_id FROM ingredients WHERE name='だし'), '600ml', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='らーめん (Ramen)'), (SELECT ingredient_id FROM ingredients WHERE name='みそ'), '大さじ3', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='らーめん (Ramen)'), (SELECT ingredient_id FROM ingredients WHERE name='たまご'), '2個', 1);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='らーめん (Ramen)'), (SELECT ingredient_id FROM ingredients WHERE name='ねぎ'), '適量', 1);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='らーめん (Ramen)'), (SELECT ingredient_id FROM ingredients WHERE name='まめもやし'), '100g', 1);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='ぎゅうどん (Gyudon)'), (SELECT ingredient_id FROM ingredients WHERE name='ぎゅうにく'), '300g', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='ぎゅうどん (Gyudon)'), (SELECT ingredient_id FROM ingredients WHERE name='たまねぎ'), '2個', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='ぎゅうどん (Gyudon)'), (SELECT ingredient_id FROM ingredients WHERE name='だし'), '200ml', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='ぎゅうどん (Gyudon)'), (SELECT ingredient_id FROM ingredients WHERE name='しょうゆ'), '大さじ4', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='ぎゅうどん (Gyudon)'), (SELECT ingredient_id FROM ingredients WHERE name='みりん'), '大さじ2', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='ぎゅうどん (Gyudon)'), (SELECT ingredient_id FROM ingredients WHERE name='こめ'), '4膳分', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='おにぎり (Onigiri)'), (SELECT ingredient_id FROM ingredients WHERE name='こめ'), '2膳分', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='おにぎり (Onigiri)'), (SELECT ingredient_id FROM ingredients WHERE name='しお'), '適量', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='おにぎり (Onigiri)'), (SELECT ingredient_id FROM ingredients WHERE name='さけ'), '適量', 1);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='おにぎり (Onigiri)'), (SELECT ingredient_id FROM ingredients WHERE name='のり'), '適量', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='やきとり (Yakitori)'), (SELECT ingredient_id FROM ingredients WHERE name='とりにく'), '400g', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='やきとり (Yakitori)'), (SELECT ingredient_id FROM ingredients WHERE name='しょうゆ'), '大さじ3', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='やきとり (Yakitori)'), (SELECT ingredient_id FROM ingredients WHERE name='みりん'), '大さじ2', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='やきとり (Yakitori)'), (SELECT ingredient_id FROM ingredients WHERE name='さけ'), '大さじ1', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='やきとり (Yakitori)'), (SELECT ingredient_id FROM ingredients WHERE name='ねぎ'), '2本', 1);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='かつどん (Katsudon)'), (SELECT ingredient_id FROM ingredients WHERE name='ぶたにく'), '4枚', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='かつどん (Katsudon)'), (SELECT ingredient_id FROM ingredients WHERE name='たまご'), '4個', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='かつどん (Katsudon)'), (SELECT ingredient_id FROM ingredients WHERE name='パン粉'), '適量', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='かつどん (Katsudon)'), (SELECT ingredient_id FROM ingredients WHERE name='小麦粉'), '適量', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='かつどん (Katsudon)'), (SELECT ingredient_id FROM ingredients WHERE name='たまねぎ'), '1個', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='かつどん (Katsudon)'), (SELECT ingredient_id FROM ingredients WHERE name='だし'), '200ml', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='かつどん (Katsudon)'), (SELECT ingredient_id FROM ingredients WHERE name='こめ'), '4膳分', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='ちらしずし (Chirashizushi)'), (SELECT ingredient_id FROM ingredients WHERE name='こめ'), '300g', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='ちらしずし (Chirashizushi)'), (SELECT ingredient_id FROM ingredients WHERE name='すし酢'), '大さじ4', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='ちらしずし (Chirashizushi)'), (SELECT ingredient_id FROM ingredients WHERE name='まぐろ'), '150g', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='ちらしずし (Chirashizushi)'), (SELECT ingredient_id FROM ingredients WHERE name='さけ'), '150g', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='ちらしずし (Chirashizushi)'), (SELECT ingredient_id FROM ingredients WHERE name='たまご'), '3個', 0);

INSERT IGNORE INTO recipe_ingredients (recipe_id, ingredient_id, quantity, optional) VALUES 
((SELECT recipe_id FROM recipes WHERE name='ちらしずし (Chirashizushi)'), (SELECT ingredient_id FROM ingredients WHERE name='だいこん'), '100g', 1);

-- INGREDIENT_SUBSTITUTES TABLE (40-50 samples)
INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='しょうゆ'), (SELECT ingredient_id FROM ingredients WHERE name='みそ'), 2, (SELECT recipe_id FROM recipes WHERE name='みそしる (Miso Shiru)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='みりん'), (SELECT ingredient_id FROM ingredients WHERE name='さけ'), 1, (SELECT recipe_id FROM recipes WHERE name='てりやきチキン (Teriyaki Chicken)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='さとう'), (SELECT ingredient_id FROM ingredients WHERE name='みりん'), 2, (SELECT recipe_id FROM recipes WHERE name='たまごやき (Tamagoyaki)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='ぎゅうにく'), (SELECT ingredient_id FROM ingredients WHERE name='ぶたにく'), 1, (SELECT recipe_id FROM recipes WHERE name='ぎゅうどん (Gyudon)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='とりにく'), (SELECT ingredient_id FROM ingredients WHERE name='ぶたにく'), 1, (SELECT recipe_id FROM recipes WHERE name='やきとり (Yakitori)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='わかめ'), (SELECT ingredient_id FROM ingredients WHERE name='のり'), 1, (SELECT recipe_id FROM recipes WHERE name='みそしる (Miso Shiru)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='とうふ'), (SELECT ingredient_id FROM ingredients WHERE name='あぶらあげ'), 1, (SELECT recipe_id FROM recipes WHERE name='みそしる (Miso Shiru)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='えび'), (SELECT ingredient_id FROM ingredients WHERE name='さけ'), 2, (SELECT recipe_id FROM recipes WHERE name='てんぷら (Tempura)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='てんぷら粉'), (SELECT ingredient_id FROM ingredients WHERE name='小麦粉'), 1, (SELECT recipe_id FROM recipes WHERE name='てんぷら (Tempura)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='そば'), (SELECT ingredient_id FROM ingredients WHERE name='うどん'), 1, (SELECT recipe_id FROM recipes WHERE name='やきそば (Yakisoba)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='きゃべつ'), (SELECT ingredient_id FROM ingredients WHERE name='まめもやし'), 2, (SELECT recipe_id FROM recipes WHERE name='やきそば (Yakisoba)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='みそ'), (SELECT ingredient_id FROM ingredients WHERE name='しょうゆ'), 2, (SELECT recipe_id FROM recipes WHERE name='らーめん (Ramen)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='あぶら'), (SELECT ingredient_id FROM ingredients WHERE name='ごまあぶら'), 1, (SELECT recipe_id FROM recipes WHERE name='たまごやき (Tamagoyaki)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='たまねぎ'), (SELECT ingredient_id FROM ingredients WHERE name='ねぎ'), 2, (SELECT recipe_id FROM recipes WHERE name='ぎゅうどん (Gyudon)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='だし'), (SELECT ingredient_id FROM ingredients WHERE name='みず'), 2, (SELECT recipe_id FROM recipes WHERE name='みそしる (Miso Shiru)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='さけ'), (SELECT ingredient_id FROM ingredients WHERE name='まぐろ'), 1, (SELECT recipe_id FROM recipes WHERE name='おにぎり (Onigiri)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='パン粉'), (SELECT ingredient_id FROM ingredients WHERE name='小麦粉'), 2, (SELECT recipe_id FROM recipes WHERE name='かつどん (Katsudon)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='すし酢'), (SELECT ingredient_id FROM ingredients WHERE name='しょうゆ'), 2, (SELECT recipe_id FROM recipes WHERE name='すしめし (Sushi Meshi)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='しいたけ'), (SELECT ingredient_id FROM ingredients WHERE name='なめこ'), 1, (SELECT recipe_id FROM recipes WHERE name='みそしる (Miso Shiru)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='にんじん'), (SELECT ingredient_id FROM ingredients WHERE name='だいこん'), 2, (SELECT recipe_id FROM recipes WHERE name='やきそば (Yakisoba)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='ごま'), (SELECT ingredient_id FROM ingredients WHERE name='ごまあぶら'), 2, (SELECT recipe_id FROM recipes WHERE name='やきそば (Yakisoba)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='しょうが'), (SELECT ingredient_id FROM ingredients WHERE name='にんにく'), 2, (SELECT recipe_id FROM recipes WHERE name='てりやきチキン (Teriyaki Chicken)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='こしょう'), (SELECT ingredient_id FROM ingredients WHERE name='らーゆ'), 2, (SELECT recipe_id FROM recipes WHERE name='らーめん (Ramen)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='うどん'), (SELECT ingredient_id FROM ingredients WHERE name='そうめん'), 1, (SELECT recipe_id FROM recipes WHERE name='らーめん (Ramen)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='こんにゃく'), (SELECT ingredient_id FROM ingredients WHERE name='とうふ'), 2, (SELECT recipe_id FROM recipes WHERE name='みそしる (Miso Shiru)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='やさい'), (SELECT ingredient_id FROM ingredients WHERE name='きゃべつ'), 1, (SELECT recipe_id FROM recipes WHERE name='てんぷら (Tempura)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='まめもやし'), (SELECT ingredient_id FROM ingredients WHERE name='きゃべつ'), 1, (SELECT recipe_id FROM recipes WHERE name='らーめん (Ramen)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='かたくり粉'), (SELECT ingredient_id FROM ingredients WHERE name='小麦粉'), 1, (SELECT recipe_id FROM recipes WHERE name='てりやきチキン (Teriyaki Chicken)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='しお'), (SELECT ingredient_id FROM ingredients WHERE name='しょうゆ'), 2, (SELECT recipe_id FROM recipes WHERE name='たまごやき (Tamagoyaki)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='おちゃ'), (SELECT ingredient_id FROM ingredients WHERE name='みず'), 2, (SELECT recipe_id FROM recipes WHERE name='おにぎり (Onigiri)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='ねぎ'), (SELECT ingredient_id FROM ingredients WHERE name='たまねぎ'), 1, (SELECT recipe_id FROM recipes WHERE name='やきとり (Yakitori)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='まぐろ'), (SELECT ingredient_id FROM ingredients WHERE name='えび'), 2, (SELECT recipe_id FROM recipes WHERE name='ちらしずし (Chirashizushi)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='だいこん'), (SELECT ingredient_id FROM ingredients WHERE name='にんじん'), 1, (SELECT recipe_id FROM recipes WHERE name='ちらしずし (Chirashizushi)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='あぶらあげ'), (SELECT ingredient_id FROM ingredients WHERE name='とうふ'), 1, (SELECT recipe_id FROM recipes WHERE name='らーめん (Ramen)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='なめこ'), (SELECT ingredient_id FROM ingredients WHERE name='わかめ'), 2, (SELECT recipe_id FROM recipes WHERE name='みそしる (Miso Shiru)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='こめ'), (SELECT ingredient_id FROM ingredients WHERE name='そば'), 2, (SELECT recipe_id FROM recipes WHERE name='おにぎり (Onigiri)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='ぶたにく'), (SELECT ingredient_id FROM ingredients WHERE name='とりにく'), 1, (SELECT recipe_id FROM recipes WHERE name='かつどん (Katsudon)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='のり'), (SELECT ingredient_id FROM ingredients WHERE name='ごま'), 2, (SELECT recipe_id FROM recipes WHERE name='おにぎり (Onigiri)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='そうめん'), (SELECT ingredient_id FROM ingredients WHERE name='うどん'), 1, (SELECT recipe_id FROM recipes WHERE name='らーめん (Ramen)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='らーゆ'), (SELECT ingredient_id FROM ingredients WHERE name='ごまあぶら'), 1, (SELECT recipe_id FROM recipes WHERE name='らーめん (Ramen)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='にんにく'), (SELECT ingredient_id FROM ingredients WHERE name='しょうが'), 1, (SELECT recipe_id FROM recipes WHERE name='やきそば (Yakisoba)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='みず'), (SELECT ingredient_id FROM ingredients WHERE name='だし'), 2, (SELECT recipe_id FROM recipes WHERE name='てんぷら (Tempura)'));

INSERT IGNORE INTO ingredient_substitutes (original_ingredient_id, substitute_ingredient_id, similarity_score, comment) VALUES 
((SELECT ingredient_id FROM ingredients WHERE name='小麦粉'), (SELECT ingredient_id FROM ingredients WHERE name='かたくり粉'), 1, (SELECT recipe_id FROM recipes WHERE name='かつどん (Katsudon)'));