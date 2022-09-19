import React from 'react'
import Tools from '../atoms/Tools'

import HTML5 from '../../../../../assets/skills/icon/tools/html5.svg'
import JavaScript from '../../../../../assets/skills/icon/tools/javascript.svg'
import CSS3 from '../../../../../assets/skills/icon/tools/css3.svg'
import CodeIgniter from '../../../../../assets/skills/icon/tools/codeigniter.svg'
import Laravel from '../../../../../assets/skills/icon/tools/laravel.svg'
import ReactJS from '../../../../../assets/skills/icon/tools/react.svg'

function ToolsComponent() {
  return (
    <>
      <Tools imgTools={HTML5} />
      <Tools imgTools={JavaScript} />
      <Tools imgTools={CSS3} />
      <Tools
        imgTools={
          'https://raw.githubusercontent.com/danisec/danisec/main/icon/php.svg'
        }
      />
      <Tools imgTools={CodeIgniter} />
      <Tools imgTools={Laravel} />
      <Tools imgTools={ReactJS} />
      <Tools
        imgTools={
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg'
        }
      />
      <Tools
        imgTools={
          'https://raw.githubusercontent.com/danisec/danisec/main/icon/tailwind.svg'
        }
      />
      <Tools
        imgTools={
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg'
        }
      />
      <Tools
        imgTools={
          'https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667'
        }
      />
    </>
  )
}

export default ToolsComponent
