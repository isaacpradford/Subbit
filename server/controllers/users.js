const registeredEmails = ['example@example.com'];

const registerUser = (req, res) => {
    const { name, email, password } = req.body


    // Check if email is registered
    if (registeredEmails.includes(email)) {
        return res.status(400).json({ error: 'Email is already registered'});
    }

    // If not registered, add it to list of registered emails
    registeredEmails.push(email);
    res.status(200).json({ message: 'User registered sucessfully.' })
    
    console.log("Registered Emails:")
    console.log(registeredEmails)
}


module.exports = {
    registerUser,
}