import React, {useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
	
   export default function WebCam() {
	const videoRef = useRef(null);
	const [timeLeft, setTimeLeft] = useState(0);
	const [takenPhoto, setPhoto] = useState(0);

	useEffect(() => {
		const intervalID = setInterval(() => {
			setTimeLeft((t) => t-1 );
		}, 50);
		return () => clearInterval(intervalID);
	}, []);

	useEffect(() => {
		if (timeLeft <= 1) {
		  takePhoto();
		  setTimeLeft(20);
		}
	  }, [timeLeft]);
	
	
	const getVideo = () => {
		navigator.mediaDevices.getUserMedia({video: {width:720, height:1080}}).then(stream =>{
			let video = videoRef.current;
			video.srcObject = stream;
			video.play();
		}).catch(err => {
			console.error(err);
		})
	}

	const takePhoto = () => {
		let dataURL = 0
		const size = 244;
		let video = videoRef.current;
		let canvas = document.createElement("canvas");

		canvas.width = size;
		canvas.height = size;

		let ctx = canvas.getContext('2d');
		ctx.drawImage(video,0,0,size,size);
		console.log(canvas.toDataURL())
		dataURL = canvas.toDataURL()
		sendImage(dataURL);
	}

	async function sendImage(dataURL) {
		// When a post request is sent to the create url, we'll add a new record to the database.
		const newImage = { data: dataURL }
		setPhoto(dataURL);
		// setPhoto(dataURL);
		
		await fetch("http://localhost:4000/image/add", {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
		  },
		  body: JSON.stringify(newImage),
		})

		
	  }

	// This method fetches the Frames from the database.
	useEffect(() => {
	console.log("seeeeeeeeeeeeeeeeeeeeeeeeeeee");
			getVideo();
		}, [videoRef]);

	// This following section will display the table with the frames of individuals.
	return (
	  <div classname = "camera">
		<h3>WebCam</h3>
		<video ref = {videoRef}></video>
		<span>{timeLeft}</span>
		<h1></h1><span>{takenPhoto}</span>
	  </div>
	);
	}