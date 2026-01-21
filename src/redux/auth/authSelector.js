
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn
export const selectIsRefresh = (state) => state.auth.isRefreshed
export const selectIsUser = (state) => state.auth.user
export const selectIsToken = (state) => state.auth.token

// const state = {
//     auth: {
//         user: {
//             name: null,
//             email: null
//         },
//         token: null,
//         isLoggedIn: false,
//         isRefreshed: false
//     }
// }