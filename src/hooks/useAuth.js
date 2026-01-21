import { useSelector } from "react-redux"
import { selectIsLoggedIn, selectIsRefresh, selectIsToken, selectIsUser } from "../redux/auth/authSelector"
export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const user = useSelector(selectIsUser)
    const isRefreshing = useSelector(selectIsRefresh)
    const token = useSelector(selectIsToken)
    return {
        isLoggedIn,
        user,
        isRefreshing,
        token
    }
}