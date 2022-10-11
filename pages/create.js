import Container from "../components/container/Container"
import Create from "../components/create/Create"



const Index = ({}) =>{



    return(
        <>
            <Container title={'Main page'}> 
                <Create />
            </Container>
        </>
    )
}


export const getStaticProps = () =>{
    return {
        props: {
            
        }
    }
}

export default Index