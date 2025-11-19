import { Routes, Route, Link, Navigate } from 'react-router-dom';

export default function navBar()
{
    return(
        <>
        <div className='flex flex-1'>
            <nav className='flex flex-row gap-5 text-xl'>
                <Link to={'/home'} className='hover:bg-white hover:rounded-lg p-2'>Home</Link>
                <Link>Dummy</Link>
                <Link>Dummy</Link>
            </nav>
        </div>

       
        </>
    )
}