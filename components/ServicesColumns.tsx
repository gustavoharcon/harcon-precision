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
                    <div className="col">
                        <div className="text-container">
                            <div className="icon-wrapper">
                                {getIcon("cnc")}
                            </div>
                            <h3 className="title">CNC punching and machining</h3>
                            <p className="description">High-speed production with repeatable accuracy on every part</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="text-container">
                            <div className="icon-wrapper">
                                {getIcon("metal")}
                            </div>
                            <h3 className="title">Welding and powder coating</h3>
                            <p className="description">Strong joints and durable finishes that meet strict specifications</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="text-container">
                            <div className="icon-wrapper">
                                {getIcon("sheet")}
                            </div>
                            <h3 className="title">Sheet metal fabrication</h3>
                            <p className="description">Complete forming and assembly for enclosures, brackets, and custom components</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesColumns