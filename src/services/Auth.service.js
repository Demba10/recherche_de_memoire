const [user, setUser] = useState(null);

const signIn = async () => {
    try {
        const result = await firebase.auth().signInWithEmailAndPassword('email@example.com', 'password');
        setUser(result.user);
    } catch (error) {   
        console.error(error);
    }
};

const signOut = async () => {
    try {
        await firebase.auth().signOut();
        setUser(null);
    } catch (error) {
        console.error(error);
    }
};