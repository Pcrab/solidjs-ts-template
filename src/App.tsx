import { Routes, Route } from "@solidjs/router";
import Auth from "./pages/auth";
import Main from "./pages/main";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" component={Auth} />
                <Route path="/main" component={Main} />
            </Routes>
        </>
    );
};

export default App;
