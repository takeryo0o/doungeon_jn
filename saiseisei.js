// ゴール設定
if (goal && maxDist > 0) {
  maze[goal.y][goal.x].el.classList.add("goal");
} else {
  // スタートからどこにも行けなかった → 再生成
  generateMaze();
}
let itemPos = { x: 0, y: 0 }; // アイテム座標
