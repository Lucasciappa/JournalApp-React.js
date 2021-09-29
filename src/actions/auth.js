import Swal from 'sweetalert2';

import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';
import { types } from '../types/types';
import { notesLogout } from './notes';
import { finishLoading, startLoading } from './ui';



export const startLoginEmailPass = (email, password) => {

    return (dispatch) => {

        dispatch(startLoading())

        firebase.auth().signInWithEmailAndPassword( email, password )
            .then( ({ user }) => {

                dispatch(
                    login( user.uid, user.displayName)
                );
                
                dispatch(finishLoading())

            })
            .catch(err => {
                dispatch(finishLoading() );
                Swal.fire("Error",err.message, "error");
            })
    }
}


export const startRegisterWithNameEmailPassword = (name, email, password) => {

    return (dispatch) => {

        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async ({ user }) => {
                await user.updateProfile({ displayName: name });
                dispatch(
                    login( user.uid, user.displayName )
                );

            })
            .catch( err => {
                Swal.fire("Error",err.message, "error");
            })
    }
}


export const startGoogleLogin = () => {

    return (dispatch) => {

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispatch(
                    login( user.uid, user.displayName )
                );
            });
    }
}

export const login = (uid, displayName) => ({
        type: types.login,
        payload: {
            uid,
            displayName
        }
})

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();

        dispatch( logout() )

        dispatch( notesLogout() )
        
    }
}

export const logout = () => ({
    type: types.logout
})


