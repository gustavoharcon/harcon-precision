import Link from "next/link"
import { getIcon } from "@/utils/helperFunctions"

const ServicesColumns = () => {
    return (
        <section className="services-columns">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="text-container">
                            <div className="badge-tag">
                                <span>Services</span>
                            </div>
                            <h2 className="title">Full fabrication under one roof</h2>
                        </div>
                    </div>
                    <div className="col">
                        <p className="text">We cut, punch, machine, weld, and coat. No outsourcing means tighter control over quality and lead times.</p>
                    </div>
                </div>
                <div className="row services-row">
                    <div className="col">
                        <div className="text-container">
                            <div className="icon-wrapper">
                                {getIcon("water")}
                            </div>
                            <h3 className="title">Laser and waterjet cutting</h3>
                            <p className="description">Clean cuts on complex geometries with minimal heat distortion</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesColumns