import Head from 'next/head'
import Header from "../header/Header"
import SignContainer from '../SignIn/SignContainer'

const Container = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <Header />

            <SignContainer />

            <div className='contentMain'>
                {children}
            </div>

        </>
    )
}

export default Container 