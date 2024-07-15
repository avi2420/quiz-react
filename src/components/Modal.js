import React, { useState } from 'react';
import '../style/Modal.css';

const Modal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        let valid = true;
        const emailPattern = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

        if (!emailPattern.test(email)) {
            setEmailError('Invalid email address');
            valid = false;
        } else {
            setEmailError('');
        }

        if (!passwordPattern.test(password)) {
            setPasswordError('Invalid password. Must contain uppercase, lowercase, numbers, and special character.');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (valid) {
            
            console.log('Form submitted');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>&times;</button>
                <div className="login-form">
                    <div className="login-heading">
                        <h2>Login</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            {emailError && <p className="error">{emailError}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            {passwordError && <p className="error">{passwordError}</p>}
                        </div>
                        <button type="submit">Login</button>
                    </form>
                    <p>
                        Don't have an account? <a href="/signup">Sign Up</a>
                    </p>
                    <div className="social-login">
                        <a href="/"><i className="fab fa-facebook-f"></i></a>
                        <a href="/"><i className="fab fa-google"></i></a>
                        <a href="/"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
