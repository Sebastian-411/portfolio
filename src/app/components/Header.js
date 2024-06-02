import React from 'react'
import LanguageSelector from './header/LanguajeSelector'

export default function Header() {
    return (
        <header className='bg-white dark:bg-gray-900'>
            <div className='grid max-w-screen-xl px-4 pt-4 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-4'>
                <LanguageSelector />
            </div>
        </header>
    )
}
