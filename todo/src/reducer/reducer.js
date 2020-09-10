export const initialState = [
  {
    name: "Learning Reducer",
    id: 3892987589,
    done: false
  },


]

export const reducer = (state, action) => {
  switch (action.type){
    case "ADD_TODO":
      return [
        ...state,
        {
          name: action.payload,
          id: Date.now(),
          done: false
        }
      ]
    case 'TOGGLE_DONE':
      return state.map((item)=>{
        if(item.id === action.id){
          return {
            ...item,
            done: !item.done
          }
        }
        else
        return item
        
      })
    case 'CLEAR_COMPLETED':
      return state.filter((item)=> {
        if(item.done === false)
        return item
      })
    default:
      return state
  }
}