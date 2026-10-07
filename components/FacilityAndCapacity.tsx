import Link from "next/link";
import Image from "next/image";

const FacilityAndCapacity = () => {
    return (
        <section className="facility-and-capacity">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="text-container">
                            <div className="badge-tag">
                                <span>Facility</span>
                            </div>
                            <h2 className="title">Operating 66,000 square feet of advanced CNC fabrication space</h2>
                            <p className="description">
                                Since 1969, our San Diego facility has established a solid reputation for quality in the sheet metal fabrication industry. Located on over 3.8 acres, our impressively diversified plant features extensive in-house manufacturing capabilities. Our advanced CAD/CAM systems and SolidWorks 3D modeling are directly linked to our machinery, providing accurate responses to your drawings and ensuring a controlled production flow for consistent results.
                            </p>
                            <div className="columns">
                                <div className="column">
                                    <h3 className="column-title">Capacity</h3>
                                    <p className="column-description">Specializing in computers, electronics, and medical/biomedical products, we handle large-scale production runs with speed and accuracy.</p>
                                </div>
                                <div className="column">
                                    <h3 className="column-title">Technology</h3>
                                    <p className="column-description">Our MIETrak production control system provides comprehensive job tracking and control of virtually every operation, from quote and order to final inspection.</p>
                                </div>
                            </div>
                        </div>
                        <div className="buttons-container">
                            <Link href="#" className="btn-third">
                                <span>View Equipment</span>
                            </Link>
                            <Link href="#" className="btn-fourth">
                                <span>About Us</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <Image className="right-column-image" src="https://res.cloudinary.com/irwujctd/image/upload/w_768/v1785878814/pacific-maritime-industries-facility_vlhhyz.png" alt="" width={600} height={0} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FacilityAndCapacity