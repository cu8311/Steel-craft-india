import React, { useState, useEffect } from 'react';
import styles from './manufacturing.module.css';

export default function ManufacturingProcess() {
	const [playingVideo, setPlayingVideo] = useState(null);
	const [isVisible, setIsVisible] = useState({});

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(prev => ({ ...prev, [entry.target.dataset.section]: true }));
					}
				});
			},
			{ threshold: 0 }
		);

		const sections = document.querySelectorAll('[data-section]');
		sections.forEach(section => observer.observe(section));

		return () => observer.disconnect();
	}, []);

	// 8 Manufacturing process steps from PDF
	const processSteps = [
		{
			id: 1,
			number: "01",
			title: "Raw Material Procurement",
			description: "High-grade MS steel is sourced directly from certified steel mills, ensuring consistent quality and strength from the very first stage.",
			tags: ["Quality Testing", "Grade Verification"]
		},
		{
			id: 2,
			number: "02",
			title: "Material Testing",
			description: "The incoming raw material undergoes quality and composition testing to verify compliance with industry standards before processing.",
			tags: ["Composition Analysis", "Standards Compliance"]
		},
		{
			id: 3,
			number: "03",
			title: "Precision Cutting",
			description: "Based on part specifications, the material is cut to required dimensions using TRAUB machines, ensuring accuracy and minimal material wastage.",
			tags: ["TRAUB Machines", "Zero-Waste Approach"]
		},
		{
			id: 4,
			number: "04",
			title: "Dimensional Inspection",
			description: "Each cut fitting is checked using Vernier calipers to confirm precise measurements and tight tolerances.",
			tags: ["Vernier Calibration", "Tolerance Checking"]
		},
		{
			id: 5,
			number: "05",
			title: "Machining Operations",
			description: "Multiple operations such as threading, drilling, and shaping are performed using CNC machines and conventional lathe machines to achieve exact geometry and finish.",
			tags: ["CNC Machining", "Threading Operations"]
		},
		{
			id: 6,
			number: "06",
			title: "Surface Treatment / Plating",
			description: "The machined fittings are sent for zinc plating, which enhances corrosion resistance and extends product life.",
			tags: ["Zinc Plating", "Corrosion Protection"]
		},
		{
			id: 7,
			number: "07",
			title: "Pressure & Performance Testing",
			description: "Finished fittings are pressure-tested to ensure they can safely handle the required operating pressure and perform reliably in real-world applications.",
			tags: ["Pressure Testing", "Load Testing"]
		},
		{
			id: 8,
			number: "08",
			title: "Packaging & Dispatch",
			description: "After final inspection, products are securely packed and dispatched through reliable transport partners to ensure safe and timely delivery.",
			tags: ["Secure Packaging", "Logistics Coordination"]
		}
	];

	// Flexible video array - add more videos as needed
	const processVideos = [
		{
			id: 1,
			videoUrl: "/Video1.webm"
		},
		{
			id: 2,
			videoUrl: "/Video2.webm"
		},
		{
			id: 3,
			videoUrl: "/Video3.webm"
		},
		{
			id: 4,
			videoUrl: "/Video4.webm"
		},
		{
			id: 5,
			videoUrl: "/Video5.webm"
		},
		{
			id: 6,
			videoUrl: "/Video6.webm"
		},
		{
			id: 7,
			videoUrl: "/Video7.webm"
		}
	];

	const handleVideoPlay = (videoId, videoElement) => {
		console.log(videoElement);

		if (playingVideo === videoId) {
			// Pause if already playing
			videoElement.pause();
			setPlayingVideo(null);
		} else {
			// Pause all other videos
			document.querySelectorAll('video').forEach(video => {
				if (video !== videoElement) {
					video.pause();
				}
			});
			// Play this video
			videoElement.play();
			setPlayingVideo(videoId);
		}
	};

	const handleVideoEnded = () => {
		setPlayingVideo(null);
	};

	const handleFullscreen = (videoElement) => {
		if (videoElement.requestFullscreen) {
			videoElement.requestFullscreen();
		} else if (videoElement.webkitRequestFullscreen) {
			videoElement.webkitRequestFullscreen();
		} else if (videoElement.mozRequestFullScreen) {
			videoElement.mozRequestFullScreen();
		} else if (videoElement.msRequestFullscreen) {
			videoElement.msRequestFullscreen();
		}
	};

	return (
		<section className={styles.manufacturingSection} id="manufacturing">
			{/* Header */}
			<div className={styles.manufacturingHeader}>
				<div className={styles.headerContent}>
					<h1 className={styles.headerTitle}>Manufacturing Process</h1>
					<p className={styles.headerSubtitle}>Precision Engineering for Hydraulic Fittings</p>
				</div>
			</div>

			{/* Main Content - Two Columns */}
			<div className={styles.processMainContainer}>
				{/* Left Column - 8 Steps */}
				<div
					className={`${styles.stepsColumn} ${isVisible['steps'] ? 'visible' : ''}`}
					data-section="steps"
				>
					<h2 className={styles.columnTitle}>Our Process</h2>
					{processSteps.map((step) => (
						<div
							key={step.id}
							className={`${styles.stepItem} ${isVisible['steps'] ? 'visible' : ''}`}
						>
							<div className={styles.stepHeader}>
								<div className={styles.stepNumber}>{step.number}</div>
								<h3 className={styles.stepTitle}>{step.title}</h3>
							</div>
							<p className={styles.stepDescription}>{step.description}</p>
							<div className={styles.stepTags}>
								{step.tags.map((tag, idx) => (
									<span key={idx} className={styles.stepTag}>{tag}</span>
								))}
							</div>
						</div>
					))}
				</div>

				{/* Right Column - Flexible Videos (Equal Height Distribution) */}
				<div
					className={`${styles.videosColumn} ${isVisible['videos'] ? 'visible' : ''}`}
					data-section="videos"
				>
					<h2 className={styles.columnTitle}>Watch Process</h2>
					<div className={styles.videosWrapper}>
						{processVideos.map((video) => (
							<div
								key={video.id}
								className={`${styles.videoItem} ${isVisible['videos'] ? 'visible' : ''}`}
							>
								<div className={styles.videoContainer}>
									<video
										className={styles.videoElement}
										src={video.videoUrl}
										onClick={(e) => {
											const videoEl = e.currentTarget;
											handleVideoPlay(video.id, videoEl);
										}}
										onEnded={handleVideoEnded}
										onPlay={() => setPlayingVideo(video.id)}
										onPause={() => {
											if (playingVideo === video.id) {
												setPlayingVideo(null);
											}
										}}
										playsInline
									/>
									<div className={`${styles.videoOverlay} ${playingVideo === video.id ? styles.hidden : ''}`}>
										<button
											className={styles.playButton}
											onClick={(e) => {
												e.stopPropagation();
												const videoEl = e.currentTarget.closest(`.${styles.videoContainer}`).querySelector('video');
												handleVideoPlay(video.id, videoEl);
											}}
										>
											<div className={styles.playIcon}></div>
										</button>
									</div>
									<div className={styles.videoControls}>
										<button
											className={styles.videoControlBtn}
											title={playingVideo === video.id ? "Pause" : "Play"}
											onClick={(e) => {
												e.stopPropagation();
												const videoEl = e.currentTarget.closest(`.${styles.videoContainer}`).querySelector('video');
												handleVideoPlay(video.id, videoEl);
											}}
										>
											<svg className={styles.videoControlIcon} viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor">
												{playingVideo === video.id ? (
													<>
														<rect x="6" y="4" width="4" height="16" />
														<rect x="14" y="4" width="4" height="16" />
													</>
												) : (
													<polygon points="5 3 19 12 5 21" />
												)}
											</svg>
										</button>
										<button
											className={styles.videoControlBtn}
											title="Fullscreen"
											onClick={(e) => {
												e.stopPropagation();
												const videoEl = e.currentTarget.closest(`.${styles.videoContainer}`).querySelector('video');
												handleFullscreen(videoEl);
											}}
										>
											<svg className={styles.videoControlIcon} viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor">
												<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
											</svg>
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Documentary Section */}
			<div className={styles.documentarySection}>
				<h2 className={styles.documentaryTitle}>Watch Complete Process</h2>
				<button className={styles.documentaryButton}>
					<svg viewBox="0 0 24 24">
						<path d="M8 5v14l11-7z" />
					</svg>
					View Full Documentary
				</button>
			</div>
		</section>
	);
}