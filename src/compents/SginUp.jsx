import React, { useRef } from 'react';
function SignUp() {
    // **** form valdition **** 


// **** form valdition **** 
    const signUpContainer = useRef()
    const signUp = useRef()
    const checkBox = useRef()
    const handleCheckBox = ()=> {
        checkBox.current.classList.toggle('checked')
    }
    function handleSignUp(){
        signUpContainer.current.classList.toggle('block')
        signUp.current.classList.toggle('flexx')
   }
   const handlelogIn = ()=> {
    const logIn = document.getElementById('login')
    signUpContainer.current.classList.toggle('block')
    logIn.classList.toggle('flexx')
}
   const handleSwitch = ()=> {
    const logIn = document.getElementById('login')
    const signnUp = document.getElementById('signUp')
    signnUp.classList.toggle('flexx')
    logIn.classList.toggle('flexx')
   }

    return (
        <div ref={signUpContainer}  className="sign-up-container">
            <div ref={signUp} id="signUp" className="sign-up">
                <div className="icons-head">
                <div onClick={handleSignUp} className="back-icon">
                        <div className="line line-1"></div>
                        <div className="line line-2"></div>
                </div>
                <div onClick={handleSignUp}  className="list-icon">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line l-3"></div>
                </div>
                </div>            
                <div className="head">
                    <div className="text-box">
                    <p className="p-1"><span className="logo">KS</span> Kemit Stream</p>
                    <p className="p-2">Register to enjoy the features</p>
                    </div>
                    <button onClick={handleSignUp} className="primary-button">Close</button>
                </div>
                <form id="form-sign-up" action="#" method="post">
                    <label htmlFor="username">Username</label>
                    <input placeholder="Username" type="text" id="username" name="username" />
                    <p className="error-p"></p>

                    <label htmlFor="email">Email</label>
                    <input placeholder="Email"type="email" id="email" name="email" />
                    <p className="error-p"></p>

                    <label htmlFor="password">Password</label>
                    <input className="" placeholder="Password"type="password" id="password" name="password" />
                    <p className="error-p"></p>

                    <label htmlFor="confirmPassword">Password</label>
                    <input placeholder="Confirm Password"type="password" id="confirmPassword" name="confirmPassword" />
                    <p className="error-p"></p>

                    <div onClick={handleCheckBox}  className="check-box">
                        <div  ref={checkBox} className="check  "></div>
                        <p> I have read and agree to the <span className="form-span">privacy policy</span>  and <span className="form-span">terms & conditions</span> .</p>
                    </div>

                    <button className="form-button " type="submit">Continue</button>
                </form>
                <div className="foot">
                    <p>Already have account?<a onClick={handleSwitch} href="#k" className="form-span">Login</a></p>
                </div>
            </div>
            <div className="sign-up" id='login'>
                <div className="icons-head">
                <div onClick={handlelogIn} className="back-icon">
                        <div className="line line-1"></div>
                        <div className="line line-2"></div>
                </div>
                <div onClick={handlelogIn}  className="list-icon">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line l-3"></div>
                </div>
                </div>            
                <div className="head">
                    <div className="text-box">
                    <p className="p-1"><span className="logo">KS</span> Kemit Stream</p>
                    <p className="p-2">Login to your account</p>
                    </div>
                    <button onClick={handlelogIn} className="primary-button">Close</button>
                </div>
                <form id="form-login" action="#" method="post">


                    <label htmlFor="email">Email</label>
                    <input placeholder="Email"type="email" id="email2" name="email" />
                    <p className="error-p"></p>

                    <label htmlFor="password">Password</label>
                    <input className="" placeholder="Password"type="password" id="password2" name="password" />
                    <p className="error-p"></p>

                    <button className="form-button " type="submit">Login</button>
                </form>
                <div className="foot">
                    <p>Don't have an account?<a onClick={handleSwitch} href="#k" className="form-span">Sign Up</a></p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
