import type { ReactElement } from "react";

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

/**
 * Retrieve a subset of Mahjong tiles by their names.
 * Names must match the `name` field of MahjongTile.
 */
export const useTilesByName = (codes: string[]): MahjongTile[] => {
  return codes.map((code, index) => {
    //
    // Suited tiles: Man1–Man9, Pin1–Pin9, Sou1–Sou9
    //
    const suitedMatch = code.match(/^(Man|Pin|Sou)([1-9])$/);
    if (suitedMatch) {
      const suit = suitedMatch[1] as TileSuit;
      const value = Number(suitedMatch[2]);

      return {
        id: `${suit}-${value}-${index}`,
        suit,
        value,
        name: `${value} of ${suit}`,
        image: `/src/assets/riichi-mahjong-tiles/${suit}${value}.png`,
      };
    }

    //
    // Winds: Ton, Nan, Shaa, Pei
    //
    const winds = ["Ton", "Nan", "Shaa", "Pei"] as const;
    if (winds.includes(code as any)) {
      return {
        id: `wind-${code}-${index}`,
        suit: "honor",
        value: null,
        honorType: "wind",
        name: `${code} Wind`,
        image: `/src/assets/riichi-mahjong-tiles/${code}.png`,
      };
    }

    //
    // Dragons: Haku, Hatsu, Chun
    //
    const dragons = ["Haku", "Hatsu", "Chun"] as const;
    if (dragons.includes(code as any)) {
      return {
        id: `dragon-${code}-${index}`,
        suit: "honor",
        value: null,
        honorType: "dragon",
        name: `${code} Dragon`,
        image: `/src/assets/riichi-mahjong-tiles/${code}.png`,
      };
    }

    //
    // dora tiles: Haku, Hatsu, Chun
    //
    const dora = ["Man5-Dora", "Pin5-Dora", "Sou5-Dora"] as const;
    if (dora.includes(code as any)) {
      return {
        id: `dragon-${code}-${index}`,
        suit: "honor",
        value: null,
        honorType: "dragon",
        name: `${code}`,
        image: `/src/assets/riichi-mahjong-tiles/${code}.png`,
      };
    }

    //
    // No matching format -> fail explicitly
    //
    throw new Error(`Invalid tile code: ${code}`);
  });
};

export const useDisplayTiles = (tiles: MahjongTile[]): ReactElement => {
  const wrapperStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "15px",
    // flexWrap: "wrap",
  }
  
  const tileStyle: React.CSSProperties = {
    width: "103px",
    height: "150px",
    objectFit: "contain",
    background: "#ffffff",
    borderRadius: "6px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.4)",
  };

  return (
    <div style={wrapperStyle}>
      {tiles.map((tile) => (
        <img
            key={tile.id}
            src={tile.image}
            alt={tile.name}
            style={tileStyle}
            draggable={false}
        />
      ))}
    </div>
  )
};