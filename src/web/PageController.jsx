import React, { useState } from "react";
import MainPage from "./MainPage";
import Signup from "./Signup";

function PageController() {
    const [page, setPage] = useState("main");

    return (
        <>
            {page === "main" && <MainPage goSignup={() => setPage("signup")} />}
            {page === "signup" && <Signup goMain={() => setPage("main")} />}
        </>
    );
}

export default PageController;