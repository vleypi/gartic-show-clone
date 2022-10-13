import Container from "../components/container/Container"
import Rooms from "../components/rooms/Rooms"
import { getGames } from "../controllers/gameController"


const Index = ({games}) =>{

    return(
        <>
            <Container title={'Main page'}> 
                <Rooms games={games.games}/>
            </Container>
        </>
    )
}


export const getServerSideProps = async (ctx) =>{
    return await getGames(ctx)
}

export default Index