const transformArray = () => {
    const arr = ["x:1", "y:2", "x:3", "a:15"];
    arr.sort();
    const hash = {};
  
    arr.forEach((item) => {
      const entry = item.split(":");
      const key = entry[0];
      const value = parseInt(entry[1]);
  
      hash[key] = hash[key] ? hash[key] + value : value;
    });
  
    const result = Object.entries(hash).reduce((acc, entry, i, array) => {
      const joinedEntry = entry.join("=");
  
      return i === array.length - 1
        ? (acc += joinedEntry)
        : (acc += `${joinedEntry}, `);
    }, "");
  
    console.log(result);
  };
  
  transformArray();