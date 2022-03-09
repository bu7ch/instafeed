const accessToken = "";
const fields = "id,media_type, media_url, timestamp, permalink";
const apiUrl = `https://graph.instagram.com/me/media?fields={fields}&accessToken={accessToken}`;

const fetchPosts = async () => {
  try {
  const response = await fetch(apiUrl);
  const { data } = await response.json();


  data.forEach(post => {
    let a = document.createElement(a)
    a.href = post.permalink
    a.target ="_blank"
    a.rel ="noreferrer noopener"
  })
} catch (err) {
  log.error(err)
}
};
