// const basicReducer = (storeData={
//     name:"Nawaz"
// }, action) =>{
//     return storeData
// }

var initialData = {
  name: "Shahnawaz",
};


const basicReducer = (storeData = initialData, action) => {
    if(action.type === "name"){
        return {
            name:action.username,
        }
    }
  return storeData;
};


export default basicReducer;
