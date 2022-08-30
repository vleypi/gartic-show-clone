import Container from "../components/container/Container"
import Rooms from "../components/rooms/Rooms"



const Index = ({}) =>{



    return(
        <>
            <Container title={'Main page'}> 
                <Rooms />
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