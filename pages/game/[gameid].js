import Container from "../../components/container/Container"
import Game from "../../components/game/Game"
import { getGameById } from "../../controllers/gameController"

const Index = ({game}) =>{
    return(
        <Container>
            <Game game={game.game}/>
        </Container>
    )
}

export const getServerSideProps = async (ctx) =>{
    return await getGameById(ctx)
}


export default Index