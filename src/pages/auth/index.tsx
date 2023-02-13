import { useNavigate } from "@solidjs/router";
import logined from "../../utils/logined";

const Auth = () => {
    const navigate = useNavigate();
    if (logined()) {
        navigate("/main", { replace: true });
        return <></>;
    }
    return <div>Auth</div>;
};

export default Auth;
