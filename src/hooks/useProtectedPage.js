
import { useHistory } from "react-router-dom";
import { useLayoutEffect } from "react";

function useProtectedPage() {
    const history = useHistory();

    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if (token === null) {
            history.push("/login")
        }
    }, [])
}
export default useProtectedPage;