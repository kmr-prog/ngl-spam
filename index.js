const ddosin = require("./lol.js");

const randomWords = [
  "Udah segini aja udah kesel?",
  "Pantes baper, kan emang sensian.",
  "Baru segitu udah ngambek? Kuat nggak?",
  "Kok serius amat? Nggak usah kebawa perasaan deh.",
  "Jangan gampang panas dong, santai aja.",
  "Lagi bad mood ya? Pantes.",
  "Kenapa bawa perasaan sih? Nggak kuat debat?",
  "Halah, gitu doang baper.",
  "Udah biasa nggak dihargain, kan?",
  "Ih, gampang banget kepancing emosi.",
  "Kalo nggak kuat mental, mending diem aja deh.",
  "Cuma ngomong gitu doang kok udah tersinggung?",
  "Baru gini aja udah panas?",
  "Coba lebih tenang deh, biar nggak ketahuan emosinya.",
  "Nggak bisa becanda ya? Pantesan gampang tersinggung.",
  "Santai aja dong, jangan gampang kepancing.",
  "Dikit-dikit tersinggung, emang gampang banget ya?",
  "Kalo gak kuat denger kenyataan, mending tutup telinga deh.",
  "Baru juga mulai, udah panas aja.",
  "Sabar dong, jangan cepet marah.",
  "Ngomong dikit, udah baper aja. Hehe.",
  "Nggak sangka, segitu aja udah kebawa perasaan.",
  "Becanda gini doang udah tersinggung?",
  "Seriusan, ini beneran marah?",
  "Wah, ternyata sensitif juga ya.",
  "Mental tempe nih, gampang banget tersinggung.",
  "Lah, baru gitu doang udah emosi?",
  "Coba deh belajar nggak gampang panas.",
  "Cuma omongan angin doang, kok udah kesel?",
  "Lho, segini doang udah ngambek?"
];

function getRandomPhrase() {
  return randomWords[Math.floor(Math.random() * randomWords.length)];
}

ddosin(`menfess.smandadenta`, getRandomPhrase());
