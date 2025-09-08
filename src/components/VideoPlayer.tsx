export default function VideoPlayer({videoSrc}) {
    return (
        <div className="relative inline-block">
            {/* <video
            src={videoSrc}
            width="600"
            height="400"
            controls
            autoPlay= {autoPlay} 
            preload="metadata"
            playsInline
            className="rounded-2xl shadow-2xl h-auto relative z-10"
            style={{ maxWidth: '100%', maxHeight: '400px' }}
            onError={(e) => console.error('Video error:', e)}
            onLoadStart={() => console.log('Video loading started')}
            onCanPlay={() => console.log('Video can play')}
        >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
        </video> */}
         <iframe
                width="650"
                height="370"
                src={videoSrc}
                title="RepresentU promotional video - Learn about our mission to empower organizations"
                className="rounded-2xl shadow-2xl relative z-10"
                style={{ maxWidth: '100%', maxHeight: '400px' }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
            ></iframe>
        </div>
    )
}

// export default VideoPlayer;