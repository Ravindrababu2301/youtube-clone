const My_API_Key = "AIzaSyBxE2WqidexT0zLLmE6ULA0ctzWTkfJ-is";

// const VIDEO_URL =
//   "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key="+ My_API_Key +" HTTP/1.1";

export const VIDEO_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&key=${My_API_Key}`;
