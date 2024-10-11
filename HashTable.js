class HashTable {
    constructor(length) {
      this.data = new Array(length);
      this.length = 0;
    }
    _hash(key) {
      let hash = 0;
      for (let index = 0; index < key.length; index++) {
      //   console.log("in", index);Z
        hash = (hash + key.charCodeAt(index) * index)  % this.data.length
      }
      // console.log("hasg", hash, "k", key.length);
      return hash;
    }
  
    set(key,value){
      const hash= this._hash(key)
      // console.log("first",!this.data.length)
      if(!this.data[hash]){
          this.data[hash]=[]
      }
  
      this.data[hash].push([key,value])
    }
  
  }
  
  
  const obj = new HashTable(20);
  // const h = );
  // console.log("_hash", obj._hash("apple"));
  
  console.log("_hash", obj.set("apple",24));
  
  console.log("_hash", obj.set("apple",44));


  console.log("_hash", obj.set("apple",44));
  
  console.log("data",obj.data)
  console.log("_hash", obj.set("banana",39));
  console.log("data",obj.data)
  