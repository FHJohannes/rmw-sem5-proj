import styles from './playArea.module.css'
import { useEffect, useState } from "react";
import { useMahjongTiles } from "./useMahjongTiles";
import type { MahjongTile } from "./useMahjongTiles";

export function PlayArea() {
    
    const [wall, setWall] = useState<MahjongTile[]>([]);
    const [drawnTile, setDrawnTile] = useState<MahjongTile | null>(null);
    const [playerHand, setPlayerHand] = useState<MahjongTile[]>([]);
    const [discardPile, setDiscardPile] = useState<MahjongTile[]>([]);
    const [hoveredTile, setHoveredTile] = useState<String>("Hover over a Tile");
    
    
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

    function draw(): null {
        if (wall.length === 0) return null;

        const newWall = [...wall]
        const tile = newWall.shift()!;
        setWall(newWall)
        setDrawnTile(tile)

        return null
    }

    function discard(tile: MahjongTile): void {
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
        //draw();
    }

    function sortHand(hand: MahjongTile[]): MahjongTile[] {
        const suitOrder = ["Man", "Pin", "Sou", "Wind", "Dragon"];

        return [...hand].sort((a, b) => {
            const suitDiff = suitOrder.indexOf(a.suit) - suitOrder.indexOf(b.suit);
            if (suitDiff !== 0) return suitDiff;

            // Handle honor tiles (winds and dragons)
            if (a.value === null && b.value === null) return 0;
            if (a.value === null) return 1;
            if (b.value === null) return -1;

            return a.value - b.value;
        });
    }

    async function reset(): Promise<void> {
        const allTiles = useMahjongTiles();
        const shuffled = shuffle(allTiles);
        setWall(shuffled);
        setPlayerHand([]);
        setDiscardPile([]);

        // Draw 13 tiles one by one with 150ms delay
        const startingHand = shuffled.slice(0, 13);
        setWall(shuffled.slice(13));
        let index = 0;

        console.log(startingHand)

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
    }
    
    return (
        <main className={styles.container}>
            <section className={styles.tableArea}>
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
                            <div className="drawn-tile">
                                <img
                                    key={drawnTile.id}
                                    src={drawnTile.image}
                                    alt={drawnTile.name}
                                    className={styles.handTile}
                                    draggable={false}
                                    onMouseEnter={() => setHoveredTile(drawnTile.name)}
                                    onMouseLeave={() => setHoveredTile("Hover over a Tile")}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.controls}>
                    <button onClick={() => reset()}>Reset</button>
                    <button onClick={() => draw()}>draw</button>
                </div>
            </section> 
        </main>
    );
}