import React from 'react'
import Link from 'next/link'
import MainLayout from '../components/mainLayout'
import classes from '../styles/error.module.scss'

const ErrorPage = () => {
    return (
        <MainLayout>
            <h1 className={classes.error}>404</h1>
            <p>please <Link href='/'>go bact to safety</Link></p>
        </MainLayout>
    )
}

export default ErrorPage
