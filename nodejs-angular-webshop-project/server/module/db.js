// Betöltjük a path modult az elérési utak kezeléséhez.
const path = require('path');
const fs = require('fs');
const FsUtil = require('./fsUtil');

// A modul egy osztállyal tér vissza, ami az adatbázis fájlokat kezeli.
module.exports = class DB {
  // A konstruktor megkapja az adott json fájl nevét.
  constructor(jsonFileName) {
    // Beállítjuk a json fájlokat tartalmazó mappa elérési útját.
    this.jsonDirectory = path.join('./../json');

    // Beállítjuk a kezelendő json fájl teljes elérési útját.
    this.jsonFilePath = path.join(
      this.jsonDirectory,
      `${jsonFileName}.json`,
    );

    console.log(this.jsonFilePath);
  }

  async find(id = 0, query = '') {
    const dataArray = await this.getJsonArray();
    if (id == 0) {
      return await this.filterByQueryParams(dataArray, query);
    }
    return dataArray.filter(item => item.id == id)[0] || {};
  }

  filterByQueryParams(arr, query) {
    return new Promise((resolve, reject) => {
      if (query) {
        const queryParams = query.split('=');
        const filtered = arr.filter(item => item[queryParams[0]] == decodeURI(queryParams[1]));
        resolve(filtered);
      }
      resolve(arr);
    });
  }

  async create(item) {
    const dataArray = await this.getJsonArray();
    item.id = this.getNextId(dataArray);
    dataArray.push(item);
    await this.write(dataArray);
    return item;
  }

/** 
 * @param {number} id id of the object which will be updated
 * @param {Object} obj object to be updated
*/
   


  async edit(id, obj) {
    const dataArray = await this.getJsonArray();

    if (obj.id !== id) {
      throw new Error("Object id isn't met with url parameter.");
    }

    // const i = dataArray.map(item => item.id).indexOf(id);
    // const i = dataArray.filter(item => {return item.id == id});
    for (let i = 0; i < dataArray.length; i++) {
      if (dataArray[i].id === id) {
        dataArray[i] = obj;
        break;
      }
    }
    await this.write(dataArray);
    return obj;
  }

  async remove(id, obj) {
    const dataArray = await this.getJsonArray();

    
  }

  async getJsonArray() {
    const data = await FsUtil.readFile(this.jsonFilePath);
    return JSON.parse(data);
  }

  getNextId(dataArray) {
    if (!Array.isArray(dataArray)) {
      return 1;
    }

    if (dataArray.length === 0) {
      return 1;
    }

    dataArray.sort((a, b) => a.id - b.id);
    return dataArray[dataArray.length - 1].id + 1;
  }

  async write(dataArray) {
    const data = JSON.stringify(dataArray, null, 4);
    await FsUtil.writeFile(this.jsonFilePath, data);
  }
};
