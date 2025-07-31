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
        <h1 className='projectTitle'>Image Processing using gRPC API</h1>
        <span className='projectDescription'>Image Processing using gRPC API.</span>
        <div className='projectsImgs'>
          <PhotoCarousel className="carousel" images={imgProcessingUrls} size={"75%"}/>
        </div>
      </span>

      <span className='projectBox'>
        <h1 className='projectTitle'>Mobile Application - ScheduleRx</h1>
        <span className='projectDescription'>Mobile App using Flutter and FDA OpenAPI to retrieve drug label information.</span>
        <div className='projectsImgs'>
          <PhotoCarousel className="carousel" images={imgScheduleRx} size={"50%"}/>
        </div>
      </span>

      <span className='projectBox'>
        <h1 className='projectTitle'>Mobile Application - Workout App</h1>
        <span className='projectDescription'>Mobile App using Flutter and Firebase</span>
        <div className='projectsImgs'>
          <PhotoCarousel className="carousel" images={imgWorkoutApp} size={"50%"}/>
        </div>
      </span>

      <span className='projectBox'>
        <h1 className='projectTitle'>Excision Trading Card Website</h1>
        <span className='projectDescription'>Pokemon trading card website created using .NET framework and C# for backend.</span>
        <div className='projectsImgs'>
          <PhotoCarousel className="carousel" images={imgExcision} size={"50%"}/>
        </div>
      </span>
    </section>
  );
}

export default Projects;
