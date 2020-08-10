// AccountInfo
// CharInfo
// PlayerInfo

type AccountInfo = {
  id: number | string;
  name: string;
  email?: string;
}

const account: AccountInfo = {
  id: 12,
  name: 'Bruno',
  // email: 'bruno@teste.com'
}

type CharInfo = {
  nickname: string;
  level: number;
}

const char: CharInfo = {
  nickname: 'Rush Lazzy',
  level: 131
}

// intersection (&)
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
  id: '123',
  name: 'Ramires',
  nickname: 'Ruxi',
  level: 200,
}