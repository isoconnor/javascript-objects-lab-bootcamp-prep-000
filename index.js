var recipes ={};






function updateObjectWithKeyAndValue(object,key,value){
  
  var recipes2 = Object.assign({},recipes,{[key]: value });
  
  return recipes2;
}

destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  
  
}