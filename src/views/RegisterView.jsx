import Header from '../components/Header';
import './RegisterView.css';
import { useNavigate } from 'react-router-dom';

function RegisterView() {
    const navigate = useNavigate();
    
    const handleRegister = (e) => {
        e.preventDefault();
        navigate('/login');
    }

    return (
        <div className='register'>
            <Header />

        </div>
    );
}   

export default RegisterView;