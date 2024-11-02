function Logina(){
    return(
        <div className="loginn">
            <h1>Login</h1>
            <form>
                <div>
                    <label>Email:</label>
                    <input type="email" placeholder="Enter your email" required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" placeholder="Enter your password" required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Logina;
