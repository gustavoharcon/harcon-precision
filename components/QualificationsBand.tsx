import { getIcon } from "@/utils/helperFunctions"

const QualificationsBand = () => {
    return (
        <div className="qualifications-band">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="icon">
                            {getIcon('certification')}
                        </div>
                        <p className="title">Certifications</p>
                        <p className="description">ISO 9001:2015</p>
                    </div>
                    <div className="col">
                        <div className="icon">
                            {getIcon('industry')}
                        </div>
                        <p className="title">Industries Served</p>
                        <p className="description">Computers & Electronics, Medical & Biomedical</p>
                    </div>
                    <div className="col">
                        <div className="icon">
                            {getIcon('core')}
                        </div>
                        <p className="title">Core Processes</p>
                        <p className="description">CNC Machining, Laser Cutting, Forming, Welding, & Powder Coating</p>
                    </div>
                    <div className="col">
                        <div className="icon">
                            {getIcon('office')}
                        </div>
                        <p className="title">Production Capacity</p>
                        <p className="description">66,000 sq. ft. facility + 14,000 square feet of dedicated inventory staging</p>
                    </div>
                    <div className="col">
                        <div className="icon">
                            {getIcon('prototyping')}
                        </div>
                        <p className="title">Prototyping</p>
                        <p className="description">Prototype to Full Production</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QualificationsBand