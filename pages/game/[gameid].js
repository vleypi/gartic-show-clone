
import CanvasDraw from "react-canvas-draw";

const Index = ({p}) =>{

    return(
        <div className="index">
            <CanvasDraw 
                canvasWidth={1000}
                canvasHeight={400}
                brushColor={'#000000'}
                brushRadius={5}
                lazyRadius={5}
            />
            
        </div>
    )
}


export default Index