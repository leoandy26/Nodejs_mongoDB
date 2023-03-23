// // data fetching
// const inputTextDOM = document.getElementById("inputTitle");
// const inputContentDOM = document.getElementById("inputContent");
// //formDomを追加する。
// const formDOM = document.querySelector(".form-section");
const threadSectionDOM = document.querySelector(".thread-section");
const formDOM = document.querySelector(".form-section");
const inputTitleDOM = document.getElementById("inputTitle");
const inputContentTitleDOM = document.getElementById("inputContent");

let inputTitleText = "";
let inputContentText = "";

//最初はThreadを全て読み込む
// const getAllThreads = async () => {
//   try {
//     console.log("show");
//     let allThreads = await axios.get("/api/v1/threads");
//     console.log(allThreads);
//     let { data } = allThreads;
//     //出力
//     allThreads = data
//       .map((thread) => {
//         const { title, content } = thread;
//         console.log(title);
//         return `
//       <div class="single-thread">
//           <h3>${title}</h3>
//           <p>${content}</p>
//         </div>
//       `;
//       })
//       .join("");
//     //挿入
//     threadSectionDOM.innerHTML = allThreads;
//   } catch (err) {
//     console.log(err);
//   }
// };

// getAllThreads();

// //タイトルと内容を打ち込んだらpostメソッドを実装してデータ追加。
// inputTextDOM.addEventListener("change", (e) => {
//   //   console.log(e.target.value);
//   inputText = e.target.value;
// });
// inputContentDOM.addEventListener("change", (e) => {
//   contentText = e.target.value;
// });

// formDOM.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   if (inputText && inputContent) {
//     console.log("success");
//     //postメソッドで送信する。

//     try {
//       console.log(inputText);
//       await axios.post("/ap1/v1/thread", {
//         title: inputText,
//         content: contentText,
//       });
//       getAllThreads();
//     } catch (err) {
//       console.log(err);
//     }

//     //投稿したらinputのvalueを削除
//     inputText = "";
//     contentText = "";
//     inputTextDOM.value = "";
//     inputContentDOM.value = "";
//   } else {
//     console.log("error");
//   }
// });

const getAllThreads = async () => {
  try {
    let allThreads = await axios.get("/api/v1/threads");
    console.log(allThreads);
    let { data } = allThreads;
    allThreads = data
      .map((thread) => {
        const { title, content } = thread;
        return `
      <div class="single-thread">
          <h3>${title}</h3>
          <p>${content}</p>
        </div>
      `;
      })
      .join("");
    threadSectionDOM.innerHTML = allThreads;
  } catch (err) {
    console.log(err);
  }
};

getAllThreads();

inputTitleDOM.addEventListener("change", (e) => {
  inputTitleText = e.target.value;
});

inputContentTitleDOM.addEventListener("change", (e) => {
  inputContentText = e.target.value;
});

formDOM.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (inputTitleText && inputContentText) {
    try {
      await axios.post("/api/v1/thread", {
        title: inputTitleText,
        content: inputContentText,
      });
      getAllThreads();
    } catch (err) {
      console.log(err);
    }
    inputTitleText = "";
    inputContentText = "";
    inputTitleDOM.value = "";
    inputContentTitleDOM.value = "";
  }
});

// if (inputTitleText && inputContentText) {
//   console.log("success");
//   try {
//     await axios.post("/api/v1/thread", {
//       title: inputTitleText,
//       content: inputContentText,
//     });

//     getAllThreads();
//   } catch (err) {
//     console.log(err);
//   }
//   inputTitleText = "";
//   inputContentText = "";
// }
