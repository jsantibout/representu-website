export default function VideoPlayer({videoSrc, autoPlay}) {
    return (
        <div className="relative">
            <video
            src={videoSrc}
            width="600"
            height="400"
            controls
            autoPlay= {autoPlay} 
            preload="metadata"
            playsInline
            className="rounded-2xl shadow-2xl w-full h-auto max-w-full relative z-10"
            style={{ maxHeight: '400px' }}
            onError={(e) => console.error('Video error:', e)}
            onLoadStart={() => console.log('Video loading started')}
            onCanPlay={() => console.log('Video can play')}
        >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </div>
    )
}

// export default VideoPlayer;