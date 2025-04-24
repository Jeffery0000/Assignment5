import './RegisterView.css';
import { useNavigate } from 'react-router-dom';

function RegisterView() {
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        navigate('/login');
    };

    return (
        <div className='register'>
            <h1 className="register-title">Register</h1>
            <form className='register-form' onSubmit={handleRegister}>
                <label htmlFor="first-name" className='form-label'>First name</label>
                <input id='first-name' type="text" name='first-name' className='form-input' required />
                <label htmlFor="last-name" className='form-label'>Last name</label>
                <input id='last-name' type="text" name='last-name' className='form-input' required />
                <label htmlFor="email" className='form-label'>Email</label>
                <input id='email' type="email" name='email' className='form-input' required />
                <label htmlFor="password" className='form-label'>Password</label>
                <input id="password" type='password' name="password" className='form-input' required />
                <label htmlFor="re-password" className='form-label'>Re-enter Password</label>
                <input id='re-password' type='password' name='re-password' className='form-input' required />
                <button type='submit' className='submit-button'>Register</button>
            </form>
        </div>
    );
}

export default RegisterView;