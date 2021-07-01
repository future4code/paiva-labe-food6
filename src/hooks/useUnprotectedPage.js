import { useHistory } from "react-router";
import { useLayoutEffect } from "react";

function useUnProtectedPage() {
    const history = useHistory();

    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            history.push("/pagina-inicial")
        }
    }, [])
}
export default useUnProtectedPage;