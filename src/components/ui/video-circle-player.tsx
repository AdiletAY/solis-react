import '@vidstack/react/player/styles/base.css';
import '@/styles/video.css';
import {MediaPlayer, MediaProvider} from "@vidstack/react";

const VideoCirclePlayer = ({src}: {src: string}) => {

	const handleActionPlayer = (e: any) => {
		if (e.target.paused) {
			e.target.play();
		} else {
			e.target.pause();
		}
	}

	return (
			<div className='h-[225px]'>
				<MediaPlayer
						onClick={handleActionPlayer}
						aria-hidden='false'
						title="feedback"
						src={{ src, type: "video/mp4" }}
				>
					<MediaProvider className='flex justify-center items-center min-w-[225px] min-h-[225px]' />
				</MediaPlayer>
			</div>
	);
};

export default VideoCirclePlayer;