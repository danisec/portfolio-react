import React from 'react'
import Card from '../atoms/Card'

import WebImage from '../../../../../assets/skills/icon/web.svg'
import DesignImage from '../../../../../assets/skills/icon/design.svg'
import AppImage from '../../../../../assets/skills/icon/app.png'

function CardComponent() {
  return (
    <>
      <div className='flex items-center justify-center'>
        <div className='absolute top-52 grid gap-10 md:top-64 lg:grid-flow-col'>
          <Card
            imgCard={WebImage}
            titleCard={`Web Development`}
            descCard={`Build websites, responsive web, dynamic or static web applications.`}
          />

          <Card
            imgCard={DesignImage}
            titleCard={`Design UI/UX`}
            descCard={`Website, application or other design related tasks. I love tracking digital problems and help fix them.`}
          />

          <Card
            imgCard={AppImage}
            titleCard={`Mobile App`}
            descCard={`Build application, responsive apps, dynamic or static applications.`}
          />
        </div>
      </div>
    </>
  )
}

export default CardComponent
