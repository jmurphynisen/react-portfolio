import './index.scss'

const Experience = () => {
    return(    
        <div className='container experience-page'>
        <div className='text-zone'>
            <head>
            Experience
            </head>
            <figure>
                <figcaption>&nbsp;NYU Langone Medical Center</figcaption>
                <h1>&nbsp;Laboratory of Proteomics Data Science Volenteer</h1>
                <ul>
                    <li>Aided in compiling datasets and helped develop an AI script designed to classify neutrophils from an input
image with techniques such as using an adaptive threshold. This project used libraries such as Numpy,
Matplotlib, and Scikit-image.</li>
                    <li>Cleaned CSV files and tables manually and using Pandas (Python) for team projects such as a program that
when given a video of a cell going through mitosis, can detect the range of frames it goes through the G1
phase through image analysis.</li>
                    <li>Attended weekly meetings and presentations about what certain members of the proteomics team were
working on and future projects for the team.</li>
                </ul>
                <figcaption>&nbsp;Codepath</figcaption>
                <h1>&nbsp;iOS App Development Student</h1>
                <ul>
                    <li>Learned how to use Swift and XCode to program iOS Apps, including how to parse data from servers, create
an interface, and use open source APIs (Twitter, Spotify, Instagram, etc).</li>
                    <li>Built weekly projects including clones of Instagram and Twitter, focusing on aforementioned skills.</li>
                    <li>Developed a final group project (listed bellow) where we submitted proposals and communicated
responsibilities to each other to ensure a functional product, designating tasks such as UI design, Backend
(API and framework usage), Frontend (controllers, implementing UI elements, etc).
</li>
                </ul>
            </figure>
        </div>
        </div>
    )
}

export default Experience