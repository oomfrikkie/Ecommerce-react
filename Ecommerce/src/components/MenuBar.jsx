import { Routes, Route, Link, Navigate } from 'react-router-dom';

export default function MenuBar()
{
    return(
        <>
        <div className="p-1">
            <nav className="flex flex-row">
              <Link to={'/home'} className='border border-transparent hover:border-orange-300 hover:rounded-lg p-1'>Home</Link>
            </nav>
        </div>
        </>
    )
}