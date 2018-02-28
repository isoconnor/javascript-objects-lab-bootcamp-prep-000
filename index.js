var recipes ={};

function updateObjectWithKeyAndValue(object,key,value){
  
  var recipesUpdate = Object.assign({},recipes,{[key]: value });
  
  return recipesUpdate
}

function updateObjectWithKey