import Container from "../../components/container/Container"
import Game from "../../components/game/Game"
import { getGameById } from "../../controllers/gameController"


const Index = ({p}) =>{

    return(
        <Container>
            <Game />
        </Container>
    )
}

export const getServerSideProps = async (ctx) =>{
    return await getGameById(ctx)
}


export default Index