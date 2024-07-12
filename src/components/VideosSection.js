import React from "react";
import YouTube from "react-youtube"; // Import react-youtube library if using

// Replace with your actual YouTube video IDs or URLs
const youtubeVideos = [
  "https://www.youtube.com/watch?v=7wjWVipnDmg",
  "https://www.youtube.com/watch?v=26-EjlVIoPU",
  // Add more video URLs as needed
];

const VideosSection = () => {
  return (
    <section id="videos" className="py-20 px-10 bg-green-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#173f36] mb-8">Our Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {youtubeVideos.map((videoUrl, index) => (
            <div key={index} className="py-4 px-6 bg-gray-200 rounded-lg shadow-lg">
              <YouTube videoId={getVideoIdFromUrl(videoUrl)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Function to extract video ID from YouTube URL
const getVideoIdFromUrl = (url) => {
  const params = new URLSearchParams(new URL(url).search);
  return params.get("v"); // Extracts video ID from URL
};

export default VideosSection;
