const productsReducer = (state, action) => {
    switch(action.type){
      case 'ADD_PRO': {
        return [...state, {...action.payload}]
      }
      case 'EDIT_PRO': {
        return state.map(pro=>{
          if(pro.id == action.payload.id){
            return {...action.payload}
          }else{
            return {...pro}
          }
        })
      }
      case 'DEL_PRO': {
        return state.filter(pro=>{
          return pro.id !== action.payload
        })
      }
      default:{
        return state
      }
    }
  }

export default productsReducer