function Registrationa(){
    return(
        <div className="Registerr">
            <h1>Register</h1>
            <form>
                <div>
                    <label>Name:</label>
                    <input type="text" placeholder="Enter your name" required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" placeholder="Enter your email" required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" placeholder="Enter your password" required />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
export default Registrationa;

