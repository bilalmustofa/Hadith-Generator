async function getHadith() {
  const apiKey = "$2y$10$bAg6Z7oS8BY2cGGJYvedQEXG5geqgwKMtnvawLkpx21WpJzqIm";
  try {
    const response = await fetch(
      `https://hadithapi.com/public/api/hadiths?apiKey=${apiKey}&limit=50`,
    );
    const data = await response.json();
    const hadiths = data.hadiths.data;

    // Random
    const random = Math.floor(Math.random() * hadiths.length);
    const hadith = hadiths[random];

    // Extract
    const textArabic = hadith.hadithArabic;
    const reporter = hadith.englishNarrator;
    const bookName = hadith.book.bookName;

    // Display
    const wrapper = document.querySelector(".wrapper");
    wrapper.querySelector("#singleHadith").textContent = `${textArabic}`;
    wrapper.querySelector("#reporter").textContent = `${reporter}`;
    wrapper.querySelector("#bookName").textContent = `${bookName}`;
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("box").innerText = "unstable NetWork!";
  }
}
getHadith();

// when click button
const btn = document.getElementById("btn");
btn.onclick = () => {
  getHadith();
};
