const actionUsername= () => (dispatch) =>{
    setTimeout(() => {
        return dispatch({
            type: 'CHANGE_USER', value: 'Mohamad Khadik'
        })
    }, 2000);
 }

 export default actionUsername;