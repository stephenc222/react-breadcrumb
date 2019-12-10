import React from 'react'
import './Breadcrumbs.css'

// join the array up and including this path
const getPath = (crumbArr, index) => {
  return crumbArr.map(({ label }) => label).splice(0, index + 1).join('/')
}

const BreadcrumbItem = ({ index, crumb, crumbArr, separator, activePath }) => {
  const path = getPath(crumbArr, index)
  const isActive = path === activePath

  const onBreadCrumbClick = (e) => {
    e && e.preventDefault && e.preventDefault()
    e && e.stopPropagation && e.stopPropagation()
    typeof crumb.onClick === 'function' && crumb.onClick(path)
  }

  const spacer = <div className='breadcrumb-spacer' />

  const labelClassName = isActive
    ? 'breadcrumb-item-container-cell-label--active'
    : 'breadcrumb-item-container-cell-label'

  const labelSeparator = index > 0
    ? separator
    : spacer

  return (
    <div className='breadcrumb-item-container'>
      <div className='breadcrumb-item-container-cell'>
        {labelSeparator}
      </div>
      <div
        className={labelClassName}
        onClick={onBreadCrumbClick}>
        {crumb.label}
      </div>
    </div>
  )
}

const Breadcrumb = ({ crumbs, activePath, separator = '>' }) => {
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
