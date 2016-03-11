import React from 'react'

const Detail = ({video}) => {
  if (!video) {
    return (
      <div>Loading...</div>
    )
  }

  let videoId = video.id.videoId;
  let url = 'https://www.youtube.com/embed/' + videoId;

  return (
    <div className="embed-responsive embed-responsive-4by3">
      <iframe className="embed-responsive-item" src={url}></iframe>
    </div>
  );
}

export default Detail;
