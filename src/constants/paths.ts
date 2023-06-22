export enum Paths {
  Home = '/',
  Play = '/play',
}

export const getPath = (path: Paths) => {
  return `${import.meta.env.VITE_ROOT_PATH ?? ''}${path}`
}
