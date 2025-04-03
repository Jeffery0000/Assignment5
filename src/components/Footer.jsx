import './Footer.css';
import logoImage from '../assets/logo.png';

function Footer() {
    return (
        <div className='footer'>
            <div className="title">
                <h1>Stream City</h1>
                <img className="logo-image" src={logoImage} alt="Logo Image" />
            </div>
            <div className="footer-columns">
                <div className='links'>
                    <div className='link-row'>
                        <p>Github</p>
                        <a href="https://github.com/Jeffery0000/Assignment2" target="_blank">
                            <img className="github-icon" src="github.png" alt="github icon" />
                        </a>
                    </div>
                    <div className='link-row'>
                        <p>Classroom</p>
                        <a href="https://classroom.google.com/u/1/c/NzQ3OTAzODQ0Mzcz" target="_blank">
                            <img className="classroom-logo" src="classroomLogo.png" alt="classroom logo" />
                        </a>
                    </div>
                    <div className='link-row'>
                        <p>Assignment page</p>
                        <a href="https://classroom.google.com/u/0/c/NzQ3OTAzODQ0Mzcz/a/NzM3Nzc1MTIxNzYx/details"
                            target="_blank">
                            <img className="assignment-logo" src="assignmentLogo.png" alt="assignment Logo" />
                        </a>
                    </div>
                </div>
            </div>
            <p className="copywrite">&copy; 2025 Stream City</p>
        </div>
    );
}

export default Footer;