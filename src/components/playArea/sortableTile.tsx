import styles from './playArea.module.css'
import React, { type JSX } from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import type { MahjongTile } from './useMahjongTiles';

interface SortableTileProps {
  tile: MahjongTile;
  index: number;
  onDiscard: (index: number) => void;
}


export function SortableTile({ tile, index, onDiscard }: SortableTileProps): JSX.Element {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: tile.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <img
      ref={setNodeRef}
      style={style}
      className={styles.handTile}
      src={tile.image}
      alt={tile.name}
      draggable={false}
      {...attributes}
      {...listeners}
      onClick={() => onDiscard(index)}
    />
  );
}