import React from 'react';
import Icon from '@mdi/react';
import { mdiWeatherNight, mdiWeatherSunny } from '@mdi/js';
import { fromTheme } from '@store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkTheme } from '@store/actions';
import './ThemeToggler.scss';


function ThemeToggler() {
    const isItDark = useSelector(fromTheme.getDarkTheme);
    console.log("isItDark -> ", isItDark);
    const dispatch = useDispatch();
    return (
        <div className="button theme-toggler is-dark" onClick={() => dispatch(toggleDarkTheme())}>
            <Icon path={ isItDark ? mdiWeatherNight : mdiWeatherSunny } size="2rem" />
        </div>
    );
}

export default ThemeToggler;
