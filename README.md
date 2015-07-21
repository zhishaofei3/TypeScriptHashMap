# TypeScriptHashMap
TypeScriptHashMap

### Usage
```TypeScript
  var map = new HashMap(); 
  map.put("key1","Value1"); 
  map.put("key2","Value2"); 
  map.put("key3","Value3"); 
  map.put("key4","Value4"); 
  map.put("key5","Value5"); 
  console.log("size£º"+map.size()+" key1£º"+map.get("key1")); 
  map.remove("key1"); 
  map.put("key3","newValue"); 
  var values = map.values(); 
  for(var i in values){ 
      console.log(i+"£º"+values[i]+"   "); 
  } 
  var keySet = map.keySet(); 
  for(var i in keySet){ 
      console.log(i+"£º"+keySet[i]+"  "); 
  } 
  console.log(map.isEmpty()); 
```