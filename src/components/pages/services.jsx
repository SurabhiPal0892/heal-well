import { Modalities } from "../modalities"
import { Treatments } from "../treatments"

export const Services=()=>{
    return(
        <>
                <div className="section-container">

        <h2 className="headline">Our Treatments</h2>
        <Treatments />
        </div>
        <div className="section-container">
        <h2 className="headline">Available Modalities</h2>
        <Modalities />
      </div>
        </>
    )
}