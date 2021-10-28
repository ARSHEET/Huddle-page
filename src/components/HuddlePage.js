import React from 'react'
import './huddlepage.css'

function HuddlePage() {
    return (
        <div className="huddle">
            <header>
                <img src="https://1.bp.blogspot.com/-Yetpa9qb5Fs/XgtNkpCAHyI/AAAAAAAADW4/MYAqZ1GMoJoSGnUMQJo9-8cMHiJKdxU2QCLcBGAsYHQ/s1600/what-is-e-learning-and-how-it-is-so-important.jpg" alt="logo" />
            </header>

            <main>
                <section className='left'>
                    <img src="https://t4.ftcdn.net/jpg/01/51/26/75/360_F_151267526_CCzkZ7cM0p2dTalSL6RQIoDxr2VUXEkZ.jpg" alt="illustration-mockups" />
                </section>
                <section className='right'>
                <h1>Build the community your fans will love</h1>
                <p>E-Learning is the use of technology to enable people to learn anytime and anywhere. ... E-learning includes numerous types of media that deliver text, audio, images, animation, streaming video, audio or video tape, satellite TV, CD or DVD-ROM and computer-based, as well as web-based learning.</p>
                <button>Register</button>
                </section>
            </main>
            <footer>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
            </footer>
        </div>
    )
}

export default HuddlePage
