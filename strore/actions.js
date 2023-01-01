export const GET_CHARECTERS='GET_CHARECTERS';
export const GET_Continents='GET_Continents';
export const getCharecters =() => {
    return async dispatch  => {
        try {
            const api = 'https://thronesapi.com/api/v2/Characters';
            const request = await fetch(api,{method:'get'});
            const data = await request.json();
            dispatch(getCharectersDispatch(data));
            
        } catch (error) {
            throw new Error('ERRRRRRROR!!!');
        }
    }
}
export const getCharectersDispatch = (data) =>{
    return dispatch  => {
        dispatch({type: GET_CHARECTERS,data});
    }
}

export const getContinents =() => {
    return async dispatch  => {
        try {
            const api = 'https://thronesapi.com/api/v2/Continents';
            const request = await fetch(api,{method:'get'});
            const data = await request.json();
            dispatch(getContinentsDispatch(data));
            
        } catch (error) {
            throw new Error('ERRRRRRROR!!!');
        }
    }
}
export const getContinentsDispatch = (data) =>{
    return dispatch  => {
        dispatch({type: GET_Continents,data});
    }
}