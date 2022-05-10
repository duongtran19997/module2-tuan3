let map = new Map();
map.set('22','crazy')
map.set(13,'TSC')
map.set(false,'Babylon')
map.set('45','Amazon')
map.set('65','Shoppe')
console.log("Employer at index 22: " +map.get('22'));
console.log("Employer at index 13: " +map.get(13));
console.log("Size of the map: " +map.size);
console.log("Deleting a value: " +map.delete('65'));
console.log( "New Size of the map: " +map.size);