const logined = (): boolean => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    console.info("Token: ", token);
    console.info("Username: ", username);
    return !!(token && username);
};

export default logined;
