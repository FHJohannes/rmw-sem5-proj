import styles from './playArea.module.css'
import { useEffect, useState } from "react";
import { useMahjongTiles } from "./useMahjongTiles";
import type { MahjongTile, TileSuit } from "./useMahjongTiles";

export function PlayArea() {
    const allTiles = useMahjongTiles();
    const [wall, setWall] = useState<MahjongTile[]>([]);
    const [drawnTile, setDrawnTile] = useState<MahjongTile | null>(null);
    const [playerHand, setPlayerHand] = useState<MahjongTile[]>([]);
    const [discardPile, setDiscardPile] = useState<MahjongTile[]>([]);
    const [hoveredTile, setHoveredTile] = useState<String>("Hover over a Tile");
    const [turnCounter, setTurnCounter] = useState<number>(0);
    const [showWinButton, setShowWinButton] = useState<boolean>(false);
    const [discardLocked, setDiscardLocked] = useState(false);
    
    type NumberSuit = Exclude<TileSuit, "honor">;

    interface SuitsState {
        Man: number[];
        Pin: number[];
        Sou: number[];
    }
    
    useEffect(() => {
        reset();

    }, []);

    function shuffle(tiles: MahjongTile[]): MahjongTile[] {
        const array = [...tiles];
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]
        }
        return array
    }

    function draw():void {
        setWall(prevWall => {
            if (prevWall.length === 0) return prevWall;

            const newWall = [...prevWall];
            const tile = newWall.shift()!;
            setDrawnTile(tile);

            setTurnCounter(prev => prev + 1);

            setShowWinButton(isWinningHand(playerHand, tile));

            return newWall;
        });
    }

    function discard(tile: MahjongTile): void {
        if (discardLocked) return;
        setDiscardLocked(true);

        setDiscardPile(prev => [...prev, tile])
        
        if (tile.id === drawnTile?.id) {
            setDrawnTile(null)
        } else {
            setPlayerHand(prev => {
                const newHand = prev.filter(t => t.id !== tile.id)
                return sortHand([...newHand, drawnTile!])
            });
        }

        setDrawnTile(null)
        draw();

        setTimeout(() => setDiscardLocked(false), 50);
    }

    function sortHand(hand: MahjongTile[]): MahjongTile[] {
        const suitOrder = ["Man", "Pin", "Sou", "honor"];
        const windOrder = ["Ton", "Nan", "Shaa", "Pei"];
        const dragonOrder = ["Haku", "Hatsu", "Chun"];

        const clean = hand.filter(Boolean);

        return clean.sort((a, b) => {
            // 1. Sort suits first
            const suitDiff = suitOrder.indexOf(a.suit) - suitOrder.indexOf(b.suit);
            if (suitDiff !== 0) return suitDiff;

            // 2. If they are honors (winds + dragons), sort by honor type
            if (a.suit === "honor" && b.suit === "honor") {
                if (a.honorType !== b.honorType) {
                    if (a.honorType === "wind") return -1;
                    if (b.honorType === "wind") return  1;
                }
                if (a.honorType === "wind" && b.honorType === "wind") {
                    const aName = a.id.split("-")[1];
                    const bName = b.id.split("-")[1];
                    return windOrder.indexOf(aName) - windOrder.indexOf(bName);
                }
                if (a.honorType === "dragon" && b.honorType === "dragon") {
                    const aName = a.id.split("-")[1];
                    const bName = b.id.split("-")[1];
                    return dragonOrder.indexOf(aName) - dragonOrder.indexOf(bName);
                }
            }

            // 3. Otherwise sort numbered tiles by value
            return (a.value ?? 0) - (b.value ?? 0);
        });
    }

    function isWinningHand(hand: MahjongTile[], drawn: MahjongTile | null): boolean {
        if (!drawn) return false;

        const tiles = [...hand, drawn];
        if (tiles.length !== 14) return false;

        const suitsState: Record<NumberSuit, number[]> = {
            Man: new Array(10).fill(0),
            Pin: new Array(10).fill(0),
            Sou: new Array(10).fill(0),
        };

        const honorWinds = new Array(4).fill(0);   // Ton, Nan, Shaa, Pei
        const honorDragons = new Array(3).fill(0); // Haku, Hatsu, Chun

        // Populate counts
        for (const tile of tiles) {
            if (tile.suit !== "honor") {
                suitsState[tile.suit][tile.value!]++; 
            } else {
                const name = tile.id.split("-")[1];

                if (tile.honorType === "wind") {
                    const index = ["Ton", "Nan", "Shaa", "Pei"].indexOf(name);
                    honorWinds[index]++;
                } else if (tile.honorType === "dragon") {
                    const index = ["Haku", "Hatsu", "Chun"].indexOf(name);
                    honorDragons[index]++;
                }
            }
        }

        // Try all possible pairs
        for (let i = 0; i < tiles.length; i++) {
            const tile = tiles[i];

            // Copy states for simulation
            const suitsCopy = {
                Man: [...suitsState.Man],
                Pin: [...suitsState.Pin],
                Sou: [...suitsState.Sou]
            };
            const windsCopy = [...honorWinds];
            const dragonsCopy = [...honorDragons];

            // Try using this tile as part of the pair
            if (tile.suit !== "honor") {
                if (suitsCopy[tile.suit][tile.value!] < 2) continue;
                suitsCopy[tile.suit][tile.value!] -= 2;
            } else {
                const name = tile.id.split("-")[1];
                if (tile.honorType === "wind") {
                    const idx = ["Ton", "Nan", "Shaa", "Pei"].indexOf(name);
                    if (windsCopy[idx] < 2) continue;
                    windsCopy[idx] -= 2;
                } else {
                    const idx = ["Haku", "Hatsu", "Chun"].indexOf(name);
                    if (dragonsCopy[idx] < 2) continue;
                    dragonsCopy[idx] -= 2;
                }
            }

            // After removing the pair, check if the rest forms 4 melds
            if (
                checkMelds(suitsCopy.Man) &&
                checkMelds(suitsCopy.Pin) &&
                checkMelds(suitsCopy.Sou) &&
                checkTripletOnly(windsCopy) &&
                checkTripletOnly(dragonsCopy)
            ) {
                return true;
            }
        }

        return false;
    }

    function checkMelds(arr: number[]): boolean {
        arr = [...arr];
        for (let i = 1; i <= 9; i++) {
            // Remove triplet
            while (arr[i] >= 3) {
                arr[i] -= 3;
            }

            // Remove runs
            if (arr[i] > 0) {
                if (i > 7) return false; 
                if (arr[i + 1] <= 0 || arr[i + 2] <= 0) return false;

                arr[i]--;
                arr[i + 1]--;
                arr[i + 2]--;

                i--; // re-check same index
            }
        }

        return arr.every(v => v === 0);
    }
    function checkTripletOnly(arr: number[]): boolean {
        return arr.every(v => v === 0 || v === 3);
    }

    async function reset(): Promise<void> {
        const shuffled = shuffle(allTiles);
        setWall(shuffled);
        setPlayerHand([]);
        setDiscardPile([]);

        // Draw 13 tiles one by one with 150ms delay
        const startingHand = shuffled.slice(0, 13);
        setWall(shuffled.slice(13));
        let index = 0;

        for (const tile of startingHand) {
            await new Promise<void>(resolve => {
            setTimeout(() => {
                // Append one tile at a time for visual effect
                setPlayerHand(prev => sortHand([...prev, tile]));
                index++;
                resolve();
            }, 150);
            });
        }
        setTurnCounter(0);
        draw()
    }
    
    return (
        <main className={styles.container}>
            <section className={styles.tableArea}>
                <p>Current urn: {turnCounter}</p>
                <div className={styles.discardSection}>
                    <h2 className={styles.sectionTitle}>Discards</h2>
                    <div className={styles.discardRow}>
                        {discardPile.map((tile) => (
                            <img
                                key={tile.id}
                                src={tile.image}
                                alt={tile.name}
                                className={styles.discardTile}
                                draggable={false}
                            />
                        ))}
                    </div>
                </div>

                <div className={styles.handSection}>
                    <p>{hoveredTile}</p>
                    <h2 className={styles.sectionTitle}>Your Hand</h2>
                    <div className={styles.handRow}>
                        {playerHand.map((tile, index) => (
                        <img
                            key={tile.id}
                            src={tile.image}
                            alt={tile.name}
                            className={styles.handTile}
                            draggable={false}
                            onClick={() => discard(tile)}
                            onMouseEnter={() => setHoveredTile(tile.name)}
                            onMouseLeave={() => setHoveredTile("Hover over a Tile")}
                        />
                        ))}
                        {drawnTile && (
                            <div className={styles.drawnTile}>
                                <img
                                    key={drawnTile.id}
                                    src={drawnTile.image}
                                    alt={drawnTile.name}
                                    className={styles.handTile}
                                    draggable={false}
                                    onClick={() => discard(drawnTile)}
                                    onMouseEnter={() => setHoveredTile(drawnTile.name)}
                                    onMouseLeave={() => setHoveredTile("Hover over a Tile")}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.controls}>
                    {showWinButton ? 
                        <button className={styles.winButton} onClick={() => {
                            reset() 
                      
                        }}>Win!</button> : 
                        <button className={styles.resetButton} onClick={() => {
                            reset()
                      
                        }}>Reset</button> 
                    }
                    
                    
                    
                </div>
            </section> 
        </main>
    );
}