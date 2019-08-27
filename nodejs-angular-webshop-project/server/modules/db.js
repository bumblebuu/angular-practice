const path = require('path');
const fs = require('fs');

module.exports = class DB {
  constructor(jsonFileName) {
    this.jsonDirectory = path.join('./../json');
    this.jsonFilePath = path.join(
      this.jsonDirectory,
      `${jsonFileName}.json`,
    );

    console.log(this.jsonFilePath);
  }

  find(id = 0) {
    return new Promise((resolve, reject) => {
      if (id == 0) {
        this.getJsonArray().then(
          dataArray => {
            if (query) {
              let queryParams = query.split('=');
              dataArray = dataArray.filter(item = item[queryParams[0]]);
            }
            resolve(dataArray);
          },
          err => reject(err),
        );
      } else {
        this.getJsonArray().then(
          (dataArray) => {
            const found = dataArray.filter(item => item.id == id)[0] || {};
            resolve(found);
          },
        );
      }
    });
  }

  async create(item) {
    let dataArray = await this.getJsonArray();
    item.id = this.getNextId(dataArray);
    dataArray.push(item);
    await this.write(dataArray);
    return item;
  }

  // create(item) {
  //   return new Promise((resolve, reject) => {
  //     this.getJsonArray().then(
  //       dataArray => {
  //         item.id = this.getNextId(dataArray);
  //         dataArray.push(item);
  //         this.write(dataArray).then(
  //           () => resolve(item),
  //           err => reject(err)
  //         );
  //       },
  //       err => reject(err)
  //     );
  //   });
  // }

  getNextId(dataArray) {
    if (!Array.isArray(dataArray)) {
      return 1;
    }

    if (dataArray.length === 0) {
      return 1;
    }

    dataArray.sort((a, b) => a.id - b.id);
    return dataArray([dataArray.length - 1].id) + 1;
  }

  getJsonArray() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.jsonFilePath, 'utf8', (err, jsonString) => {
        if (err) {
          return reject(err);
        }

        resolve(JSON.parse(jsonString));
      });
    });
  }

  write(dataArray) {
    return new Promise((resolve, reject) => {
      let data = JSON.stringify(dataArray);
      fs.writeFile(this.jsonFilePath, data, 'utf8', (err) => {
        if (err) {
          reject(err)
        }
        resolve()
      })
    });
  }

};
