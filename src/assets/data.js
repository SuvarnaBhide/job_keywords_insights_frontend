// export const data = [
//   {
//     question: "Which device is required for the Internet connection?",
//     options: {0: "Modem", 1: "Router", 2: "LAN Cable", 3: "Pen Drive"},
//     ans: 0,
//   },
//   {
//     question: "Which continent has the highest number of countries?",
//     options: {0: "Asia", 1: "Europe", 2: "North America", 3: "Africa"},
//     ans: 3,
//   },
//   {
//     question: "Junk e-mail is also called?",
//     options: {0: "Spam", 1: "Fake", 2: "Archived", 3: "Bin"},
//     ans: 0,
//   },
//   {
//     question: "A computer cannot BOOT if it does not have the?",
//     options: {0: "Application Software", 1: "Internet", 2: "Operating System", 3: "Mouse"},
//     ans: 2,
//   },
//   {
//     question: "First page of Website is termed as?",
//     options: {0: "Index Page", 1: "Homepage", 2: "Sitemap", 3: "Pen Drive"},
//     ans: 1,
//   },
// ];


export const data = [
  {
    "content": "What is the correct syntax for referring to an external script called \"xxx.js\"?",
    "id": 1,
    "options": [
      {
        "content": "<script href=\"xxx.js\">",
        "explanation": null,
        "id": 1,
        "is_correct": false,
        "label": "A"
      },
      {
        "content": "<script name=\"xxx.js\">",
        "explanation": null,
        "id": 2,
        "is_correct": false,
        "label": "B"
      },
      {
        "content": "<script src=\"xxx.js\">",
        "explanation": "This is the correct way to reference an external script.",
        "id": 3,
        "is_correct": true,
        "label": "C"
      },
      {
        "content": "<script file=\"xxx.js\">",
        "explanation": null,
        "id": 4,
        "is_correct": false,
        "label": "D"
      }
    ]
  },
  {
    "content": "How do you write \"Hello World\" in an alert box?",
    "id": 2,
    "options": [
      {
        "content": "alert(\"Hello World\");",
        "explanation": "This is the correct syntax to show an alert box.",
        "id": 5,
        "is_correct": true,
        "label": "A"
      },
      {
        "content": "msg(\"Hello World\");",
        "explanation": null,
        "id": 6,
        "is_correct": false,
        "label": "B"
      },
      {
        "content": "msgBox(\"Hello World\");",
        "explanation": null,
        "id": 7,
        "is_correct": false,
        "label": "C"
      },
      {
        "content": "alertBox(\"Hello World\");",
        "explanation": null,
        "id": 8,
        "is_correct": false,
        "label": "D"
      }
    ]
  }
]
