import React from 'react'
import MenuItem from '../menuItem/menuItem'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectSections } from '../../redux/directory/directorySelector'
import './directory.scss'


const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />
      })}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectSections
})
export default connect(mapStateToProps)(Directory)
