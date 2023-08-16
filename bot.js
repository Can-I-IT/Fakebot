const pertanyaan = document.getElementById("pertanyaan");
const jawapan = document.getElementById("jawapan");

let init = 0;

const botSay = (data) => {
  return [
    "Perkenalkan nama saya Terra. Siapa nama kamu?",
    `Hello ${data?.nama}, umur kamu berapa?`,
    `Ohh ${data?.umur}, hobi kamu apa?`,
    `Wow sama la, hobi saya juga ${data?.hobi}, btw dah ada partner ka?`,
    `Ohh ${data?.Sayang}, ya sudah, jumpa lagi ya?`,
  ];
};

pertanyaan.innerHTML = botSay()[0];

let usersData = [];

function botStart() {
  init++;
  if (init === 1) {
    botDelay({ nama: jawapan.value });
  } else if (init === 2) {
    botDelay({ umur: jawapan.value });
  } else if (init === 3) {
    botDelay({ hobi: jawapan.value });
  } else if (init === 4) {
    botDelay({ Sayang: jawapan.value });
  } else if (init === 5) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(jawapanUser) {
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawapanUser)[init];
  }, 1250);
  usersData.push(jawapan.value);
  jawapan.value = "";
}

function finishing() {
  pertanyaan.innerHTML = `Thank you ${usersData[0]} dah luangkan masa dengan saya 🤗, sekali-sekala kita ${usersData[2]} bersama ya!`;
  jawapan.value = "";
}

function botEnd() {
  window.location.reload();
}
