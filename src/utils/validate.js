const checkValidation=(email,password)=>{

    const isEmailValid=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const isPasswordValid=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/.test(password)

    if(!isEmailValid) return "Email is not valid"
    if(!isPasswordValid) return "Password is not valid"

    return null

}
export default checkValidation;