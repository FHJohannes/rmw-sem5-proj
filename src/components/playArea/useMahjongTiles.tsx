export type TileSuit = "Man" | "Pin" | "Sou" | "honor";
export type HonorType = "wind" | "dragon";

export interface MahjongTile {
  id: string;           // unique identifier
  suit: TileSuit;
  value: number | null; // 1–9 for suits, null for honors
  honorType?: HonorType;
  name: string;
  image: string;
}

/**
 * Generate the full Riichi Mahjong tile set (136 tiles):
 * - 4 copies each of:
 *   - 9 manzu (characters)     =   Man
 *   - 9 pinzu (dots)           =   Pin  
 *   - 9 souzu (bamboos)        =   Sou
 *   - 7 honors (4 winds, 3 dragons)
 */
export const useMahjongTiles = (): MahjongTile[] => {
  const tiles: MahjongTile[] = [];
  const suits: TileSuit[] = ["Man", "Pin", "Sou"];

  // Number tiles (1–9 for each suit)
  suits.forEach((suit) => {
    for (let value = 1; value <= 9; value++) {
      for (let i = 0; i < 4; i++) {
        tiles.push({
          id: `${suit}-${value}-${i}`,
          suit,
          value,
          name: `${value} of ${suit}`,
          image: `src/assets/riichi-mahjong-tiles/${suit}${value}.svg`,
        });
      }
    }
  });

  // Honor tiles: Winds and Dragons
  const winds = ["Ton", "Nan", "Shaa", "Pei"];
  winds.forEach((wind) => {
    for (let i = 0; i < 4; i++) {
      tiles.push({
        id: `wind-${wind}-${i}`,
        suit: "honor",
        value: null,
        honorType: "wind",
        name: `${wind} Wind`,
        image: `src/assets/riichi-mahjong-tiles/${wind}.svg`,
      });
    }
  });

  const dragons = ["Haku", "Hatsu", "Chun"];
  dragons.forEach((dragon) => {
    for (let i = 0; i < 4; i++) {
      tiles.push({
        id: `dragon-${dragon}-${i}`,
        suit: "honor",
        value: null,
        honorType: "dragon",
        name: `${dragon} Dragon`,
        image: `src/assets/riichi-mahjong-tiles/${dragon}.svg`,
      });
    }
  });

  return tiles;
};
