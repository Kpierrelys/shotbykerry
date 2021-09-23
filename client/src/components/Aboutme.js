
const Aboutme = ({ focusAboutMe }) => {

    return (
        <div className='about'>
            <div className='about-container'>
                <h3 ref={focusAboutMe}>About Me</h3>
                <img src='images/turtle.jpg' alt='about me photo' />
                <p className='bio'> Hi, My name is Kerry and I am a professional hobbiest that loves turning moments into picture perfect memories! I am based in Atlanta and we will have a blast working together.</p>
                <div className='contact'>
                    <p style={{width: '400px'}} className='email'>email: kpierrelys.kp@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Aboutme