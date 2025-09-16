interface VideoPlayerProps {
  videoSrc: string;
}

export default function VideoPlayer({videoSrc}: VideoPlayerProps) {
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
                title="RepresentU promotional video - Learn about our mission to empower organizations and amplify your voice through strategic marketing solutions"
                className="rounded-2xl shadow-2xl relative z-10"
                style={{ maxWidth: '100%', maxHeight: '400px' }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                aria-describedby="video-description"
                suppressHydrationWarning
            ></iframe>
            <div id="video-description" className="sr-only">
                This promotional video showcases RepresentU's mission to empower organizations through strategic planning, 
                event management, content creation, and grant writing services. The video demonstrates how we help 
                businesses and nonprofits amplify their impact and achieve their goals.
            </div>
        </div>
    )
}

// export default VideoPlayer;