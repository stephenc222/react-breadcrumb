import React from 'react'
import './Breadcrumbs.css'

// join the array up and including this path
const getPath = (crumbArr, index) => {
  return crumbArr.map(({ label }) => label).splice(0, index + 1).join('/')
}

const BreadcrumbItem = ({ index, crumb, crumbArr, separator, activePath }) => {
  const { label, onClick } = crumb
  const path = getPath(crumbArr, index)
  const isActive = path === activePath
  const onBreadCrumbClick = () => onClick(path)
  if (index === 0) {
    return <div className='breadcrumb-item-container'>
      <div className='breadcrumb-item-container-cell'>&nbsp;</div>
      <div onClick={onBreadCrumbClick} className={`breadcrumb-item-container-cell-label${isActive ? '--active' : ''}`}>{label}</div>
    </div>
  }
  return <div className='breadcrumb-item-container'>
    <div className='breadcrumb-item-container-cell'>{separator}</div>
    <div onClick={onBreadCrumbClick} className={`breadcrumb-item-container-cell-label${isActive ? '--active' : ''}`}>{label}</div>
  </div>

}

const Breadcrumb = (props) => {
  const { crumbs, activePath, separator = '>' } = props
  return (
    <div className='breadcrumb-container'>
      {
        crumbs.map((crumb, index, crumbArr) =>
          <BreadcrumbItem
            key={`bc_${index}`}
            separator={separator}
            crumbArr={crumbArr}
            activePath={activePath}
            index={index}
            crumb={crumb}
          />
        )
      }
    </div>
  )
}

export default Breadcrumb
