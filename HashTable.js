class HashTable {
  constructor(length) {
    this.data = new Array(length);
    this.length = 0;
  }
  _hash(key) {
    let hash = 0;
    for (let index = 0; index < key.length; index++) {
      hash = (hash + key.charCodeAt(index) * index) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const hash = this._hash(key);
    if (!this.data[hash]) {
      this.data[hash] = [];
    }
    this.data[hash].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    const bucket = this.data[index];
    if (bucket.length > 0) {
      for (let index = 0; index < bucket.length; index++) {
        if (bucket[index][0] === key) {
          return bucket[index][1];
        }
      }
    }
    return this.data[bucket];
  }

  getKeys() {
    console.log("hello>>")
    let keys = [];
    for (let index = 0; index < this.data.length -1; index++) {
      if (this.data[index]) {
        if (this.data[index].length > 0) {
          for (
            let innerIndex = 0;
            innerIndex < this.data[index].length -1;
            innerIndex++
          ) {
            keys.push(this.data[index][innerIndex][0]);
           }
        }

        console.log("first check",this.data[index][0][0])
        keys.push(this.data[index][0][0]);

      }
    }

    return keys
  }
}

const obj = new HashTable(20);
// const h = );
// console.log("_hash", obj._hash("apple"));

console.log("_hash", obj.set("apple", 24));

console.log("_hash", obj.set("apple", 44));

console.log("_hash", obj.set("apple", 44));

console.log("_hash", obj.set("banana", 39));
console.log("data", obj.data.length);
console.log("keys", obj.getKeys());
// console.log("data", obj.data);
