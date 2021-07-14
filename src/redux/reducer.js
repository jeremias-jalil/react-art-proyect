import { GET_SEARCH, GET_SEARCH_ARTIST, GET_SEARCH_ART, CLEAN, CLEAN_ART, LOADING, ADD_FAVOURITE,REMOVE_FAVOURITE } from '../function/const'


const initialState = {
    cuadros: [],
    cuadrosArtist: [],
    cuadro: {},
    loading: false,
    favourite: JSON.parse(localStorage.getItem('favourites')),

}



export default function reducer(state = initialState, action) {

    switch (action.type) {
        case GET_SEARCH:
            
            return {
                ...state,
                cuadros: action.payload
            }

        case GET_SEARCH_ARTIST:
            return {
                ...state,
                cuadrosArtist: action.payload
            }

        case GET_SEARCH_ART:

            return {
                ...state,
                cuadro: action.payload
            }

        case CLEAN:
            return {...state,
                cuadros: [],
                cuadro: {}
            }

        case CLEAN_ART:
            return {
                ...state,
                cuadro: {}
            }

        case LOADING:
            return {
                ...state,
                loading: !state.loading
            }

        case ADD_FAVOURITE:
            return {
                ...state,
                favourite: [...state.favourite, action.payload]
            }

        case REMOVE_FAVOURITE:
            return {
                ...state,
                favourite: state.favourite.filter((e)=>e.objectID!==action.payload)
            }

        default: return state
    }


}
