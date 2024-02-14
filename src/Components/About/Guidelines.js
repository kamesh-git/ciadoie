import React from 'react'
import HeadingComp from '../Others/HeadingComp'

const Guidelines = () => {
    return (
        <>
            <div className="container-fluid padding mb-3" data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
                <HeadingComp head={'Guidelines'} />
                <ul className='d-flex flex-column' id='awardbenefits'>
                    <table className='table'>

                    </table>
                    <li style={{
                        textTransform: "uppercase",
                    }}>Team Size: 2-4 members per team</li>
                    <li style={{
                        textTransform: "uppercase",
                    }}>Team may consist of members from various levels of management.</li>
                    <li style={{
                        textTransform: "uppercase",
                    }}>Language: Tamil (or) English</li>
                    <li style={{
                        textTransform: "uppercase",
                    }}>About Presentation</li>
                    <li>
                        <p style={{
                            paddingLeft:"1rem",
                            fontSize:"1.2rem"
                        }}> The team will make a power point presentation as per following details:</p>
                        <ol className='mt-2'>
                            <li style={{
                            fontSize:"1.2rem",
                            marginBottom:0,
                        }}>Overview of the manufacturing processes and operations.</li>
                            <li  style={{
                            fontSize:"1.2rem",
                            marginBottom:0,
                        }}>Description of the continuous improvement initiatives implemented.</li>
                            <li  style={{
                            fontSize:"1.2rem",
                            marginBottom:0,
                        }}>Metrics and data showcasing the impact of these initiatives.</li>
                        </ol>
                    </li>
                    <li>Presentation will be in offline mode</li>
                    <li>Date and time slot of the Presentation will be informed by 22nd March 2024.</li>
                    <li>Presentations will be organized on 28th March 2024 at Vivekananda Auditorium.</li>
                    <li>Presentation duration will be Maximum of 10 minutes and 5 minutes for Questions
                    and Answers.</li>
                    <li>Presentation should not exceed more than 15 slides.</li>
                    <li style={{
                        textTransform: "uppercase",
                    }}>Judging Process:</li>
                        <ol>
                            <li style={{
                            fontSize:"1.2rem",
                            marginBottom:0,
                        }}>A panel of experts from Industry, and the Department of Industrial Engineering will evaluate the presentation.</li>
                            <li  style={{
                            fontSize:"1.2rem",
                            marginBottom:0,
                        }}>Each submission will be evaluated against the established criteria, and scores will be assigned accordingly.</li>
  
                        </ol>
                    <li style={{
                        textTransform: "uppercase",
                    }}>Awards and Recognition:</li>
                        <ol>
                            <li style={{
                            fontSize:"1.2rem",
                            marginBottom:0,
                        }}>The winner of the Industry Excellence Award will be announced at a special ceremony organized by the Department of Industrial Engineering on 28th March,  2024.</li>
                            <li  style={{
                            fontSize:"1.2rem",
                            marginBottom:0,
                        }}>The winning team will receive a trophy and certificate of recognition.</li>
  
                        </ol>
                </ul>
            </div>
        </>
    )
}

export default Guidelines