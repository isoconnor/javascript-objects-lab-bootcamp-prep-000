var recipes ={};






function updateObjectWithKeyAndValue(object,key,value){
  
  var recipes2 = Object.assign({},recipes,{[key]: value });
  
  return recipes2;
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  recipes[key]=value;
  
  return recipes;
  
}

function deleteFromObjectByKey(object,key){
  
  var recipes2 = Object.assign({},recipes,{[key]: value });
  
  delete recipes2.key;
  
  return recipes2;
}

function destructivelyDeleteFromObjectByKey(object,key){
  delete recipes.key;
  
  return recipes;
  
}