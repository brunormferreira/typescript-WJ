interface Game {
  title: string;
  description: string;
  readonly genre: string;
  platform?: string[];
  getSimilars?: (title: string) => void
}

const tlou: Game = {
  title: 'The last of US',
  description: 'The best game in the world',
  genre: 'Action',
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: WoW, Mario, FcK`);
  }
}

if (tlou.getSimilars) {
  tlou.getSimilars(tlou.title)
}

interface DLCx extends Game {
  originalGame: Game;
  newContent: string[];
}

const leftBehind: DLCx = {
  title: 'The last of US - Left Behind',
  description: '...',
  genre: 'Action',
  platform: ['PS4'],
  originalGame: tlou,
  newContent: ['3 Hours of Expansion', 'new characters']
}