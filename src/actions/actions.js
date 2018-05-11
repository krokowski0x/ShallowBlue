export const PIECE_MOVED = 'PIECE_MOVED';

export const moved = where => ({
  type: PIECE_MOVED,
  where,
});
