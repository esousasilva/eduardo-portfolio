import React from 'react';
import './projects.css';
import PhotoCarousel from './slider';
//Image Manipulation using gRPC API photos import
import photo1 from '../../assets/imgprocessing1.jpeg';
import photo2 from '../../assets/imgprocessing2.jpeg';
//Mobile App Scheduler photos import
import schedulerx1 from '../../assets/scheduleRx-homescreen.jpeg';
import schedulerx2 from '../../assets/scheduleRx-mymedications.jpeg';
import schedulerx3 from '../../assets/scheduleRx-drugAPI.jpeg';
import schedulerx4 from '../../assets/scheduleRx-druginfo.jpeg';
import schedulerx5 from '../../assets/scheduleRx-clock.jpeg';
import schedulerx6 from '../../assets/scheduleRx-calendar.jpeg';
//Mobile App Workout photos import
import workout1 from '../../assets/workout-history.jpeg';
import workout2 from '../../assets/workout-importprocess.jpeg';
import workout3 from '../../assets/workout-imported.jpeg';

//Excision trading card website photo import
import excision1 from '../../assets/excision1.jpeg';

//Bilimetrix 
import bilimetrix from '../../assets/bilimetrix.jpeg';

//Capstone project photo import
import capstonePhoto from '../../assets/capstone-photo.png';


const imgProcessingUrls = [
  photo1,
  photo2
];

const imgScheduleRx = [
  schedulerx1,
  schedulerx2,
  schedulerx3,
  schedulerx4,
  schedulerx5,
  schedulerx6
]

const imgExcision = [
  excision1,
  photo2
]

const imgWorkoutApp = [
  workout1,
  workout2,
  workout3
]

export const Projects = () => {
  return (
    <section id='projects'>
      <h2 className='projectGeneralTitle'>My Projects</h2>

      <span className='projectBox'>
        <h1 className='projectTitle'>Capstone UI/UX Design Prototype - Black Swan Event Scheduler</h1>
        <span className='projectDescription'>Black Swan is a Figma-based UI/UX design prototype for a mobile application focused on event scheduling and coordination. The project involved designing user flows, detailed wireframes, and high-fidelity prototypes with an emphasis on clean aesthetics and intuitive navigation. Through usability testing and feedback integration, the interface was refined to improve accessibility, responsiveness, and overall user experience, resulting in a design optimized for clarity and efficiency.<br/>
          Check out the LinkedIn post <a href="https://www.linkedin.com/feed/update/urn:li:activity:7313607186801180672/" target='_blank' rel='noopener noreferrer' className='link'>[here]</a>.
        </span>
        <div className='projectsImgs'>
          <img src={capstonePhoto} alt='The Event Run Sheet for Project Day at Seattle University.' className='capstonePhoto'/>
        </div>
      </span>

      <span className='projectBox'>
        <h1 className='projectTitle'>Image Processing using gRPC API</h1>
        <span className='projectDescription'>This project features both terminal-based and Windows Forms (WinForms) interfaces for performing image manipulation using a custom gRPC API. It utilizes EmguCV, a .NET wrapper for OpenCV, 
          to support advanced image processing operations such as filtering, resizing, and transformations. 
          The gRPC architecture enables efficient client-server communication, ensuring modularity and scalability. 
          Development and collaboration were streamlined through GitHub, with effective version control and team coordination throughout the project lifecycle. <br/>The GitHub repositories are available for both the terminal-based version <a href="https://github.com/esousasilva/ImageManipulationApp" target="_blank" rel="noopener noreferrer" className='link'>[here]</a> and the Windows Form version <a href="https://github.com/esousasilva/-CPSC-5200-IndividualProject" target='_blank' rel='noopener noreferrer' className='link'>[here]</a>. </span>
        <div className='projectsImgs'>
          <PhotoCarousel className="carousel" images={imgProcessingUrls} size={"75%"}/>
        </div>
      </span>

      <span className='projectBox'>
        <h1 className='projectTitle'>Mobile Application - ScheduleRx</h1>
        <span className='projectDescription'>ScheduleRx is a mobile application built with Flutter that helps users manage their medications effectively. The app integrates with the FDA OpenAPI to retrieve accurate drug label information, enhancing user awareness and safety. It allows users to log their medication intake, set up recurring reminders, and track their adherence over time. For secure and seamless data management, the app uses Firebase Authentication and Cloud Firestore, enabling real-time syncing and personalized cloud storage across devices.</span>
        <div className='projectsImgs'>
          <PhotoCarousel className="carousel" images={imgScheduleRx} size={"50%"}/>
        </div>
      </span>

      <span className='projectBox'>
        <h1 className='projectTitle'>Mobile Application - Workout App</h1>
        <span className='projectDescription'>This mobile app, developed with Flutter, enables users to create, import, and share custom workouts, promoting collaboration and fitness tracking within a community. It features seamless authentication and cloud storage powered by Firebase and Firestore, ensuring secure, real-time access to workout data across devices. To support offline usage and local data persistence, the app also integrates SQFlite, allowing users to continue managing their fitness routines without an internet connection. <br/>
          The GitHub repository is available <a href="https://github.com/esousasilva/Eduardo-Mobile-App-CPSC-5250" target='_blank' rel='noopener noreferrer' className='link'>[here]</a>.
        </span>
        <div className='projectsImgs'>
          <PhotoCarousel className="carousel" images={imgWorkoutApp} size={"50%"}/>
        </div>
      </span>

      <span className='projectBox'>
        <h1 className='projectTitle'>Excision Trading Card Website</h1>
        <span className='projectDescription'>This project involved designing and developing a dynamic website using ASP.NET and C# for the back-end, as part of a class assignment focused on full-stack web development. The site showcases server-side rendering, form handling, and data-driven functionality. Throughout development, GitHub was used for version control, enabling organized code management, collaboration, and iterative feature integration in a team environment.</span>
        <div className='projectsImgs'>
          <img src={excision1} alt='Excision Website Running Locally' className='bilimetrixPhoto'/>
        </div>
      </span>

      <span className='projectBox'>
        <h1 className='projectTitle'>Bilimetrix USA Web Development Volunteer</h1>
        <span className='projectDescription'>This project involved designing and developing a dynamic website using ASP.NET and C# for the back-end, as part of a class assignment focused on full-stack web development. The site showcases server-side rendering, form handling, and data-driven functionality. Throughout development, GitHub was used for version control, enabling organized code management, collaboration, and iterative feature integration in a team environment. <br/>
          You can find the website of this organization <a href="https://www.bilimetrixusa.org" target='_blank' rel='noopener noreferrer' className='link'>[here]</a>.
        </span>
        <div className='projectsImgs'>
          <img src={bilimetrix} alt='Bilimetrix Website Running Locally' className='bilimetrixPhoto'/>
        </div>
      </span>
    </section>
  );
}

export default Projects;
