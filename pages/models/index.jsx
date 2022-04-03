import { ModelsSection } from "../../components/models/models"
import ModelTransition from "../../components/animations/pageTransitions/modelTransition"

const ModelsPage = () => {
    return (
        <ModelTransition>
            <ModelsSection />
        </ModelTransition>
    )
}

export default ModelsPage