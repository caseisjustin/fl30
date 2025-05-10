import React, { useEffect, useState } from 'react'
import ReactRangeSliderInput from 'react-range-slider-input'
import { ArrowRightIcon, FilterIcon } from '../../../../assets/icons'
import 'react-range-slider-input/dist/style.css'
import './FilterSide.scss'
import ColorPicker from './ColorPicker'
import { useLocation, useNavigate, useParams } from 'react-router'
import { useProducts } from '../../../../hooks/useProducts'
import { parseQueryParams } from '../../../../utils'

const FilterSidebar = () => {

    const navigate = useNavigate();
    const { categoryId } = useParams();
    const location = useLocation();
    const [selectedColors, setSelectedColors] = useState([])

    const objParams = parseQueryParams(location.search);

    const {data, isLoading} = useProducts({
        category: objParams?.category
    });

    console.log(data, isLoading);

    const [togglers, setTogglers] = useState({
        priceToggler: false,
        colorToggler: false,
        sizeToggler: false,
        dressStyleToggler: false,
    });

    const handleToggle = (key) => {
        setTogglers({
            ...togglers,
            [key]: !togglers[key]
        })
    }

    const [priceRange, setPriceRange] = useState([0, 500]);

    useEffect(() => {
        const el = document.querySelectorAll('.range-slider__thumb');

        if (!!el[0] && !!el[1]) {
            el[0].innerHTML = `<span style="font-weight: 700;position:absolute;bottom: -20px;background-color: transparent !important;">$${priceRange[0]}</span>`;
            el[1].innerHTML = `<span style="font-weight: 700;position:absolute;bottom: -20px;background-color: transparent !important;">$${priceRange[1]}</span>`;
        }
    }, [priceRange]);

    const filterByCloths = [
        { filterKey: "T-shirt", title: "T-shirt" },
        { filterKey: "Men's-shoes", title: "Shoes" },
        { filterKey: "Socks", title: "Socks" },
        { filterKey: "Pants", title: "Pants" },
    ]

    const handleCategoryClick = (categoryObj) => {
        navigate(`/category/${categoryId}?category=${categoryObj.title}`);
    }


    const [selectedSize, setSelectedSize] = useState('');
    const [selectedDressStyle, setSelectedDressStyle] = useState('');


    const sizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'];
    const dressStyles = ['Casual', 'Formal', 'Party', 'Gym'];

    const handleFilterApply = () => {
        const params = new URLSearchParams();
    
        if (priceRange[0] !== 0) params.append("minPrice", priceRange[0]);
        if (priceRange[1] !== 500) params.append("maxPrice", priceRange[1]);
        if (selectedSize) params.append("size", selectedSize);
        if (selectedColors) params.append("color", selectedColors);
        if (selectedDressStyle) params.append("dressStyle", selectedDressStyle);
        if (objParams?.category) params.append("category", objParams.category);
    
        navigate(`/category/${categoryId}?${params.toString()}`);
    };
    

    return (
        <div className='filter-side-wrapper'>
            <div className='filter-header'>
                <h3>Filters</h3>
                <FilterIcon />
            </div>

            <div className='hr-line' />

            {filterByCloths.map(item => (
                <div key={item.title} onClick={() => handleCategoryClick(item)} className='filter-item'>
                    <span>{item.title}</span>
                    <ArrowRightIcon />
                </div>
            ))}

            <div className='hr-line' />

            {/* Price Filter */}
            <div className='accordion'>
                <div className='accordion-header' onClick={() => handleToggle('priceToggler')}>
                    <p>Price</p>
                    <div className={`arrow ${togglers.priceToggler ? 'arrow-top' : 'arrow-bottom'}`}>
                        <ArrowRightIcon />
                    </div>
                </div>
                <div className={`accordion-body ${togglers.priceToggler ? 'open' : 'hide'}`}>
                    <ReactRangeSliderInput
                        className='hola'
                        min={5}
                        max={500}
                        onInput={(range) => setPriceRange(range)}
                    />
                </div>
            </div>

            <div className='hr-line' />

            {/* Color Filter */}
            <div className='accordion'>
                <div className='accordion-header' onClick={() => handleToggle('colorToggler')}>
                    <p>Colors</p>
                    <div className={`arrow ${togglers.colorToggler ? 'arrow-top' : 'arrow-bottom'}`}>
                        <ArrowRightIcon />
                    </div>
                </div>
                <div className={`accordion-body color-accordion ${togglers.colorToggler ? 'open' : 'hide'}`}>
                    <ColorPicker handleResult={(res) => setSelectedColors(res)} />
                </div>
            </div>

            <div className='hr-line' />

            {/* Size Filter */}
            <div className='accordion'>
                <div className='accordion-header' onClick={() => handleToggle('sizeToggler')}>
                    <p>Size</p>
                    <div className={`arrow ${togglers.sizeToggler ? 'arrow-top' : 'arrow-bottom'}`}>
                        <ArrowRightIcon />
                    </div>
                </div>
                <div className={`accordion-body size-accordion ${togglers.sizeToggler ? 'open' : 'hide'} size-grid`}>
                    {sizes.map((size) => (
                        <button
                            key={size}
                            className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            <div className='hr-line' />

            {/* Dress Style Filter */}
            <div className='accordion'>
                <div className='accordion-header' onClick={() => handleToggle('dressStyleToggler')}>
                    <p>Dress Style</p>
                    <div className={`arrow ${togglers.dressStyleToggler ? 'arrow-top' : 'arrow-bottom'}`}>
                        <ArrowRightIcon />
                    </div>
                </div>
                <div className={`accordion-body dress-style-accordion ${togglers.dressStyleToggler ? 'open' : 'hide'}`}>
                    {dressStyles.map((style) => (
                        <div key={style} onClick={() => setSelectedDressStyle(style)} className='filter-item'>
                            <span>{style}</span>
                            <ArrowRightIcon />
                        </div>
                    ))}
                </div>
            </div>

            <div className='hr-line' />

            <button className='apply-filter-btn' onClick={handleFilterApply}>Apply Filter</button>
        </div>
    );
};

export default FilterSidebar;


