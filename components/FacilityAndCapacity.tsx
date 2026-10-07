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
                                Our San Diego operation runs on advanced CAD/CAM systems and SolidWorks 3D modeling. Every job moves through a controlled production flow for consistent results.
                            </p>
                            <div className="columns">
                                <div className="column">
                                    <h3 className="column-title">Capacity</h3>
                                    <p className="column-description">Large-scale production runs handled with speed and accuracy</p>
                                </div>
                                <div className="column">
                                    <h3 className="column-title">Technology</h3>
                                    <p className="column-description">MIETrak software tracks every part from order to delivery</p>
                                </div>
                            </div>
                        </div>
                        <div className="buttons-container">
                            <Link href="#" className="btn-third">
                                <span>View Equipment</span>
                            </Link>
                            <Link href="#" className="btn-fifth">
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