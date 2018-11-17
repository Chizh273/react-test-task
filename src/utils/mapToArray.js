export default (map, idKey = 'id') => Object.keys(map).map(key => ({
  [idKey]: key,
  ...map[key]
}))
