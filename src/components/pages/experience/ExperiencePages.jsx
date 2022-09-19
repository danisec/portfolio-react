import React from 'react'
import WorkExperience from './components/WorkExperience'
import Education from './components/Education'

function ExperiencePages() {
  return (
    <>
      <div className='layout my-8 md:my-12'>
        <div className='grid gap-20 lg:grid-cols-2 lg:gap-32'>
          <WorkExperience />
          <Education />
        </div>
      </div>
    </>
  )
}

export default ExperiencePages
