/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import { Grid } from "@material-ui/core";
import Fade from "react-reveal";
import { motion } from "framer-motion";
import "./About.css";
import { GetApp } from "@material-ui/icons";
import { Link } from "react-router-dom";

function About(props) {
	const ref = useRef();

	return (
		<div className="section-style">
			<motion.h1 className="section-head">
				<span role="img" aria-label="student emoji">
					👨‍🎓
				</span>
				About Me
			</motion.h1>
			<div className="about-content" ref={ref}>
				<Grid container className="about-grid">
					<Grid item sm={12} md={6} className="about-text-div">
						<Fade left>
							<motion.p
								drag={props.interactive}
								dragConstraints={ref}
								className={
									props.interactive
										? "z-index1 grabbable"
										: "z-index1"
								}
							>
								Hello! I am{" "}
								<span className="blue-color">
									Abdelrahman Sakr
								</span>
								, a dedicated{" "}
								<span className="blue-color">
									QA Engineer
								</span>{" "}
								and final-year Software Engineering student at{" "}
								<span className="blue-color">
									University of Duisburg Essen
								</span>
								. With a passion for technology that began early
								in my life, I have developed expertise that
								bridges both quality assurance and software
								development. <br /> <br />
								I am proficient in{" "}
								<span className="blue-color">
									full-stack application development
								</span>
								, comprehensive{" "}
								<span className="blue-color">
									QA methodologies and testing strategies
								</span>
								, and{" "}
								<span className="blue-color">
									test automation frameworks
								</span>
								. My technical versatility spans multiple
								programming languages and tools, enabling me to
								deliver high-quality software solutions from
								concept to deployment.
							</motion.p>
							<div className="btn-container">
								<Link
									to="/resume"
									style={{ textDecoration: "none" }}
								>
									<motion.button
										className="cv-btn"
										drag={props.interactive}
										dragConstraints={ref}
									>
										<GetApp className="down-icon" />
										Download CV
									</motion.button>
								</Link>
							</div>
						</Fade>
					</Grid>
					{/* <Grid
						item
						sm={12}
						md={6}
						className={
							props.interactive
								? "profile-img-div grabbable"
								: "profile-img-div"
						}
					>
						<motion.img
							drag={props.interactive}
							dragConstraints={ref}
							src="profile.jpeg"
							alt="my face"
							className={props.interactive ? "grabbable" : null}
						/>
					</Grid> */}
				</Grid>
			</div>
		</div>
	);
}

export default About;
