import React from 'react'

export default function A({ href, children }) {
    return <a href={href} className='underline text-neutral-600 hover:text-neutral-400'>{children}</a>
}