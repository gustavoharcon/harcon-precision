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
                            <p className="description">High-precision cutting of complex geometries with minimal heat distortion, directly linked to our CAD/CAM systems.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="text-container">
                            <div className="icon-wrapper">
                                {getIcon("cnc")}
                            </div>
                            <h3 className="title">CNC punching, laser, and machining</h3>
                            <p className="description">High-speed, repeatable production runs with tight tolerances, utilizing advanced CNC equipment and SolidWorks 3D modeling.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="text-container">
                            <div className="icon-wrapper">
                                {getIcon("metal")}
                            </div>
                            <h3 className="title">Welding and assembly</h3>
                            <p className="description">Expert welding and complete assembly to deliver strong, durable, and ready-to-install components that meet strict specifications.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="text-container">
                            <div className="icon-wrapper">
                                {getIcon("sheet")}
                            </div>
                            <h3 className="title">Sheet metal fabrication</h3>
                            <p className="description">Complete custom forming and bending for enclosures, brackets, and complex components, supporting your project from prototype to full production.</p>
                        </div>
                    </div>
                </div>
                <div className="row buttons-row">
                    <div className="col">
                        <div className="buttons-container">
                            <Link href="/" className="btn-fifth">
                                <span>Request a Quote</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesColumns