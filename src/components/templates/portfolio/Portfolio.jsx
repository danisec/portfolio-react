import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from '../../UI/organisms/navbar/Navbar'

import HomePages from '../../pages/home'
import AboutPages from '../../pages/about'
import ExperiencePages from '../../pages/experience'
import SkillsPages from '../../pages/skills'
import InterestPages from '../../pages/interest'
import AwardsPages from '../../pages/awards'

function Portfolio() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePages />} />
        <Route path='/about' element={<AboutPages />} />
        <Route path='/experience' element={<ExperiencePages />} />
        <Route path='/skills' element={<SkillsPages />} />
        <Route path='/interest' element={<InterestPages />} />
        <Route path='/awards' element={<AwardsPages />} />
      </Routes>
    </div>
  )
}

export default Portfolio
