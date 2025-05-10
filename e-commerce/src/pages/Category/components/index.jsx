import React from 'react'
import FilterSidebar from './FilterSidebar'
import { Breadcrumb } from '../../../components'

import './CategoryDetails.scss'
import FilteredProducts from './FilteredProducts'

const CategoryDetails = () => {
    return (
        <div className='container flex'>
            <FilterSidebar />
            <FilteredProducts />
        </div>
    )
}

export default CategoryDetails