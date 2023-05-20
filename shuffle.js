// 名前の配列
const names = ['中島勇生', '佐藤智紀', '中島礼愛', '武田一志', '加藤真規'];

// 名前の配列がなくなるまで繰り返す
while (names.length > 0) {
  // ランダムなインデックスを生成する
  const randomIndex = Math.floor(Math.random() * names.length);

  // ランダムなインデックスに対応する名前を取得する
  const randomName = names[randomIndex];

  // 取得した名前を表示する
  alert(randomName);

  // 表示した名前1つを配列から削除する
  names.splice(randomIndex, 1);
}








/* for of文　←　3回しか繰り返されない謎のエラー
const names = ['中島勇生', '佐藤智紀', '中島礼愛', '武田一志', '加藤真規'];

for (const name of names) {
  const randomIndex = Math.floor(Math.random() * names.length);
  const randomName = names[randomIndex];
  
  alert(randomName);
  
  names.splice(randomIndex, 1);
}
*/