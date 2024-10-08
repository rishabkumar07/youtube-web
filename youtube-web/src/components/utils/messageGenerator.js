const liveChatMessages = [
  "Hey there! 👋",
  "Hello everyone! 🌟",
  "How's it going, folks? 😊",
  "I'm excited for this livestream! 🎉",
  "Is the audio okay? 🔊",
  "Where is everyone tuning in from? 🌎",
  "Love the content! ❤️",
  "This is so informative! 💡",
  "Can you please explain that again? 🤔",
  "Great explanation! 👍",
  "Wow, mind-blowing stuff! 💥",
  "I have a question: What's your favorite programming language?",
  "Any updates on the latest tech trends?",
  "The host is doing a great job! 👏",
  "I'm learning a lot from this! 📚",
  "Let's chat about web development! 💬",
  "I'm a big fan of this channel! 🙌",
  "Do you have any merch available? 👕",
  "Can you recommend a book on software architecture? 📖",
  "I just subscribed! 🔔",
  "I can't wait for the next video! ⏭️",
  "The emojis make this chat more fun! 😄",
  "I'm sharing this livestream with my friends! 👥",
  "Who else is excited for the coding challenge? 🎊",
  "This is my first time here! 🆕",
  "What's your favorite video from this channel? 📺",
  "I love the energy in this livestream! ⚡",
  "Can you give a shoutout to John? 📣",
  "What's the topic for today's discussion? 📋",
  "I'm taking notes! 📝",
  "I have a suggestion for a future video: How to optimize website performance.",
  "Is there a giveaway today? 🎁",
  "I'm here for the knowledge sharing! 🧠",
  "I'm using JavaScript for my project. Anyone else? 🧙‍♂️",
  "This livestream is better than TV! 📺",
  "What's the secret to your success? 🤫",
  "I'm getting inspired by this! 💪",
  "I'm getting hungry watching this! 🍔",
  "I need coffee for this! ☕",
  "Are there any upcoming tech conferences? 📅",
  "What's the time there? ⏰",
  "The background music is great! 🎵",
  "How can I support the channel? 💵",
  "I'm a front-end developer too! 💻",
  "Let's keep the chat positive! ✨",
  "I'm still in school, but this is motivating! 🎓",
  "I'm coding while watching! 💻",
  "I'm here for the code! 🧐",
  "Keep up the good work! 💪",
  "I just followed you on Twitter! 🐦",
  "How do you stay motivated? 💡",
  "I'm sharing this livestream on my social media! 📢",
  "I need more emojis in my life! 😂",
  "I'm late to the party, but I made it! ⌛",
  "I'm taking a break from work to be here! ⏳",
  "What's your favorite programming language? 🚀",
  "I'm watching this in my pajamas! 🌙",
  "Can you explain responsive web design in simple terms? 🤓",
  "I'm a designer, and I find this interesting too! 🎨",
  "I'm a night owl, so this is perfect timing! 🦉",
  "I'm here from India! 🌍",
  "I want to start a YouTube channel too! 🎥",
  "I'm amazed by your knowledge! 🤯",
  "Let's brainstorm ideas for a new app! 🧠",
  "I'm rewatching your old videos too! 🔄",
  "I just hit the like button! 👍",
  "I wish I had discovered this channel sooner! 🕒",
  "I'm recommending your channel to my classmates! 👨‍🎓",
  "I'm using Visual Studio Code for my coding projects. What about you? ⌨️",
  "I'm working on a machine learning project right now! 💼",
  "Can you talk about cybersecurity in your next video? 📹",
  "I'm loving the community here! 🤗",
  "I'm here for the knowledge sharing! 🧠",
  "I'm coding with a cup of tea! ☕",
  "What's the key to staying productive? 🚀",
  "I'm watching this during my lunch break! 🥪",
  "I'm a fan of your tech reviews! 📱",
  "I'm writing a research paper on artificial intelligence! 📄",
  "I'm here to support your content! 👊",
  "I'm an aspiring developer too! 💻",
  "I just turned on notifications! 🔔",
  "I'm here for the code and camaraderie! 🤝",
  "I'm taking a break from coding to join this! ⏸️",
  "I'm learning so much from your videos! 📚",
  "I'm working on a startup idea inspired by your content! 💡",
  "I'm in the middle of a hackathon! 💻🚀",
  "I'm attending from my favorite coffee shop! ☕🏙️",
  "I'm here to connect with fellow tech enthusiasts! 👩‍💻👨‍💻",
  "I just shared this livestream on my LinkedIn! 📤",
  "I'm here to soak up the knowledge! 🧽💡",
  "I'm watching while debugging! 🐞💻",
  "I'm coding with my coding playlist on! 🎶💻",
  "I'm taking a break from debugging to say hi! 👋🐞",
  "I'm excited for this coding session! 🚀💻",
  "I'm coding and enjoying the livestream! 💻📺",
  "I'm here to learn and chat! 📚💬",
  "I'm coding and celebrating your success! 🥳💻",
  "I'm debugging and tuning in! 🐞📺",
  "I'm coding and enjoying the coding vibes! 💻🎉",
  "I'm here for the tech talk! 🗣️👨‍💻",
  "I'm coding and coding and coding! 💻💻💻"
];

export const getRandomChatMessages = ()=> {
  const randomNumber = Math.floor(Math.random() * liveChatMessages.length);
  return liveChatMessages[randomNumber]
};

const indianFirstNames = [
  "Rishabh",
  "Raj",
  "Priya",
  "Rahul",
  "Neha",
  "Akshay",
  "Deepika",
  "Ankit",
  "Pooja",
  "Aryan",
  "Swati",
  "Suresh",
  "Sneha",
  "Ravi",
  "Alisha",
  "Arjun",
  "Aarti",
  "Rohit",
  "Kavita",
  "Raghav",
  "Meera",
  "Prakash",
  "Nisha",
  "Devendra",
  "Shruti",
  "Vipul",
  "Tanvi",
  "Sanjay",
  "Megha",
  "Sameer",
  "Ritu",
  "Abhinav",
  "Sakshi",
  "Manoj",
  "Anjali",
  "Sumit",
  "Simran",
  "Sunil",
  "Sanya",
  "Vikram",
  "Rina",
  "Ashok",
  "Payal",
  "Arvind",
  "Aparna",
  "Amar",
  "Kirti",
  "Pranav",
  "Shilpa",
  "Sushant",
  "Jyoti",
  "Harish",
  "Mansi",
  "Rajesh",
  "Komal",
  "Vivek",
  "Divya",
  "Ramesh",
  "Suman",
  "Naveen",
  "Sarika",
  "Vinay",
  "Sonia",
  "Dinesh",
  "Smita",
  "Anand",
  "Rashmi",
  "Gaurav",
  "Preeti",
  "Satish",
  "Sangeeta",
  "Amit",
  "Ritu",
  "Vikas",
  "Rakhi",
  "Praveen",
  "Kavita",
  "Rahul",
  "Neha",
  "Avinash",
  "Alka",
  "Manish",
  "Rupal",
  "Rajeev",
  "Poonam",
  "Alok",
  "Juhi",
  "Mukesh",
  "Arti",
  "Anil",
  "Nandini",
  "Vijay",
  "Neeta",
  "Arun",
  "Sweta",
  "Sanjeev",
  "Deepa",
  "Ashish",
  "Ruchi",
  "Saurabh",
  "Sarita",
  "Mayank",
  "Anita",
  "Rohini",
  "Harpreet",
  "Suman",
  "Kanika",
  "Rajat",
  "Savita",
  "Ankur",
  "Pallavi",
  "Vikrant",
  "Sneha",
  "Vishal",
  "Rekha",
  "Hemant",
  "Chhaya",
  "Nitin",
  "Nisha",
  "Mohan",
  "Archana",
  "Amit",
  "Rashmi",
  "Prakash",
  "Neelam",
  "Rajeev",
  "Sunita",
  "Rohit",
  "Manju",
  "Amitabh",
  "Renu",
  "Rakesh",
  "Savita",
  "Rajendra",
  "Neelam",
  "Anupam",
  "Asha",
  "Rajiv",
  "Alka",
  "Vishnu",
  "Seema",
  "Sandeep",
  "Monica",
  "Vijay",
  "Sarika",
  "Sanjay",
  "Poonam",
  "Rajesh",
  "Kusum"
];

export const getRandomFirstName = ()=>{
  const randomNumber = Math.floor(Math.random() * indianFirstNames.length);
  return indianFirstNames[randomNumber]
};


const indianLastNames = [
  "Kumar",
  "Singh",
  "Sharma",
  "Verma",
  "Gupta",
  "Patel",
  "Yadav",
  "Chauhan",
  "Mehta",
  "Jain",
  "Shah",
  "Pandey",
  "Dutta",
  "Das",
  "Bose",
  "Choudhury",
  "Mishra",
  "Banerjee",
  "Sinha",
  "Rao",
  "Thakur",
  "Reddy",
  "Agarwal",
  "Saxena",
  "Mukherjee",
  "Malik",
  "Puri",
  "Gandhi",
  "Goswami",
  "Nair",
  "Iyer",
  "Menon",
  "Desai",
  "Naidu",
  "Ahmed",
  "Rajput",
  "Joshi",
  "Khan",
  "Trivedi",
  "Majumdar",
  "Chakraborty",
  "Lal",
  "Rastogi",
  "Shukla",
  "Sharma",
  "Srivastava",
  "Dubey",
  "Mittal",
  "Nath",
  "Kapoor",
  "Ganguly",
  "Pillai",
  "Balakrishnan",
  "Purohit",
  "Rathore",
  "Deshmukh",
  "Yadav",
  "Rastogi",
  "Verma",
  "Dewan",
  "Sarin",
  "Chopra",
  "Malhotra",
  "Kaul",
  "Mehra",
  "Sabharwal",
  "Khanna",
  "Mangal",
  "Saini",
  "Khatri",
  "Varma",
  "Sethi",
  "Tiwari",
  "Shukla",
  "Mishra",
  "Bhat",
  "Vohra",
  "Gandhi",
  "Dhar",
  "Sardar",
  "Roy",
  "Dasgupta",
  "Bakshi",
  "Chowdhury",
  "Chakrabarti",
  "Dutta",
  "Majumdar",
  "Sen",
  "Gupta",
  "Sardar",
  "Roy",
  "Sarkar",
  "Basu",
  "Das",
  "Saha",
  "Das",
  "Bhattacharyya",
  "Kar",
  "Sanyal",
  "Das",
  "Mandal",
  "Ghosh",
  "Chowdhury",
  "Dey",
  "Das",
  "Chakraborty",
  "Bose",
  "Majumder",
  "Chatterjee",
  "Ganguly",
  "Gupta",
  "Mitra",
  "Paul",
  "Dhar",
  "Choudhury",
  "Sanyal",
  "Sarkar",
  "Mukherjee",
  "Nath",
  "Saha",
  "Basu",
  "Chatterjee",
  "Bhattacharya",
  "Kar",
  "Biswas",
  "Das",
  "Mandal",
  "Ghosh",
  "Sarkar",
  "Dasgupta",
  "Chakraborty",
  "Ganguly",
  "Sengupta",
  "Sen",
  "Gupta",
  "Mitra",
  "Paul",
  "Dhar",
  "Choudhury",
  "Sanyal",
  "Sarkar",
  "Mukherjee",
  "Nath",
  "Saha",
  "Basu",
  "Chatterjee",
  "Bhattacharya",
  "Kar",
  "Biswas",
  "Das",
  "Mandal",
  "Banerjee",
  "Ghosh",
  "Sarkar",
  "Dasgupta",
  "Chakraborty",
  "Ganguly",
  "Sengupta",
  "Sen",
  "Gupta",
  "Mitra",
  "Paul",
  "Dhar",
  "Choudhury",
  "Sanyal",
  "Sarkar",
  "Mukherjee",
  "Nath",
  "Saha",
  "Basu",
  "Chatterjee",
  "Bhattacharya",
  "Kar",
  "Biswas",
  "Das",
  "Mandal",
  "Ghosh",
  "Sarkar",
  "Dasgupta",
  "Chakraborty",
  "Ganguly",
  "Sengupta",
  "Sen",
  "Gupta",
  "Mitra",
  "Paul",
  "Dhar",
  "Choudhury",
  "Sanyal",
  "Sarkar",
  "Mukherjee",
  "Nath",
  "Saha",
  "Basu",
  "Chatterjee",
  "Bhattacharya",
  "Kar",
  "Biswas",
  "Das",
  "Mandal",
  "Ghosh",
  "Sarkar",
  "Dasgupta",
  "Chakraborty",
  "Ganguly",
  "Sengupta",
  "Sen",
  "Gupta",
  "Mitra",
  "Paul",
  "Dhar",
  "Choudhury",
  "Sanyal",
  "Sarkar",
  "Mukherjee",
  "Nath",
  "Saha",
  "Basu",
  "Chatterjee",
  "Bhattacharya",
  "Kar",
  "Biswas",
  "Das",
  "Mandal",
  "Ghosh",
  "Sarkar",
  "Dasgupta",
  "Chakraborty",
  "Ganguly",
  "Sengupta",
  "Sen",
  "Gupta",
  "Mitra",
  "Paul",
  "Dhar",
  "Choudhury",
  "Sanyal",
  "Sarkar",
  "Mukherjee",
  "Nath",
  "Saha",
  "Basu",
  "Chatterjee",
  "Bhattacharya",
  "Kar",
  "Biswas",
  "Das",
  "Mandal",
  "Ghosh",
  "Sarkar",
  "Dasgupta",
  "Chakraborty",
  "Ganguly",
  "Sengupta",
  "Sen",
  "Gupta",
  "Mitra",
  "Paul",
  "Dhar",
  "Choudhury",
  "Sanyal",
  "Sarkar",
  "Mukherjee",
  "Nath",
  "Saha",
  "Basu",
  "Chatterjee",
  "Bhattacharya",
  "Kar",
  "Biswas",
  "Das",
  "Mandal",
  "Ghosh",
  "Sarkar",
  "Dasgupta",
  "Chakraborty",
  "Ganguly",
  "Sengupta",
  "Sen",
  "Gupta",
  "Mitra",
  "Paul",
  "Dhar",
  "Choudhury",
  "Sanyal",
  "Sarkar",
  "Mukherjee",
  "Nath",
  "Saha",
  "Basu",
  "Chatterjee",
  "Bhattacharya",
  "Kar",
  "Biswas",
  "Das",
  "Mandal",
  "Ghosh",
  "Sarkar",
  "Dasgupta",
  "Chakraborty",
  "Ganguly",
  "Sengupta",
  "Sen",
  "Gupta",
  "Mitra",
  "Paul",
  "Dhar",
  "Choudhury",
  "Sanyal",
  "Sarkar",
  "Mukherjee",
  "Nath",
  "Saha",
  "Basu",
  "Chatterjee",
  "Bhattacharya",
  "Kar",
  "Biswas",
  "Das",
  "Mandal",
  "Ghosh",
  "Sarkar",
  "Dasgupta",
  "Chakraborty",
  "Ganguly",
  "Sengupta",
  "Sen",
  "Gupta",
  "Mitra",
  "Paul",
  "Dhar",
  "Choudhury",
  "Sanyal",
  "Sarkar",
  "Mukherjee",
  "Nath",
  "Saha",
  "Basu",
  "Chatterjee",
  "Bhattacharya",
  "Kar",
  "Biswas",
  "Das",
  "Mandal",
  "Ghosh",
  "Sarkar",
  "Dasgupta",
  "Chakraborty",
  "Ganguly",
  "Sengupta",
  "Sen",
  "Gupta",
  "Mitra",
  "Paul",
  "Dhar",
  "Choudhury",
  "Sanyal",
  "Sarkar",
  "Mukherjee",
  "Nath",
  "Saha",
  "Basu",
  "Chatterjee",
  "Bhattacharya",
  "Kar",
  "Biswas",
  "Das",
  "Mandal",
  "Ghosh",
  "Sarkar",
  "Dasgupta",
  "Chakraborty",
  "Ganguly",
  "Sengupta",
  "Sen",
  "Gupta",
  "Mitra",
  "Paul",
  "Dhar",
  "Choudhury",
  "Sanyal",
  "Sarkar",
  "Mukherjee",
  "Nath",
  "Saha",
  "Basu",
  "Chatterjee",
  "Bhattacharya",
  "Kar",
  "Biswas",
  "Das",
  "Mandal",
  "Ghosh",
  "Sarkar",
  "Dasgupta",
  "Chakraborty",
  "Ganguly",
  "Sengupta",
  "Sen",
  "Gupta",
  "Mitra",
  "Paul",
  "Dhar",
  "Choudhury",
  "Sanyal",
  "Sarkar",
  "Mukherjee",
  "Nath",
  "Saha",
  "Basu",
  "Chatterjee",
  "Bhattacharya",
  "Kar",
  "Biswas",
  "Das",
  "Mandal",
  "Ghosh",
  "Sarkar",
  "Dasgupta",
  "Chakraborty",
  "Ganguly",
  "Sengupta",
  "Sen",
  "Gupta",
  "Mitra",
  "Paul",
  "Dhar",
  "Choudhury",
  "Sanyal",
  "Sarkar",
  "Mukherjee",
  "Nath",
  "Saha",
  "Basu",
  "Chatterjee",
  "Bhattacharya",
  "Kar",
  "Biswas",
  "Das",
  "Mandal",
  "Ghosh",
  "Sarkar",
  "Dasgupta",
  "Chakraborty",
  "Ganguly",
  "Sengupta",
  "Sen",
  "Gupta",
  "Mitra",
  "Paul",
  "Dhar",
  "Choudhury",
  "Sanyal",
  "Sarkar",
  "Mukherjee",
  "Nath",
  "Saha",
  "Basu",
  "Chatterjee",
  "Bhattacharya",
  "Kar",
  "Biswas",
  "Das",
  "Mandal",
  "Ghosh",
  "Sarkar",
  "Dasgupta",
  "Chakraborty",
  "Ganguly",
  "Sengupta",
  "Sen",
  "Gupta",
  "Mitra",
  "Paul",
  "Dhar",
  "Choudhury",
  "Sanyal",
  "Sarkar",
  "Mukherjee",
  "Nath",
  "Saha",
  "Basu",
  "Chatterjee",
  "Bhattacharya",
  "Kar",
  "Biswas",
  "Das",
  "Mandal",
  "Ghosh",
  "Sarkar",
  "Dasgupta",
  "Chakraborty",
  "Ganguly",
  "Sengupta",
  "Sen",
  "Gupta",
  "Mitra",
  "Paul",
  "Dhar",
  "Choudhury",
  "Sanyal",
  "Sarkar",
  "Mukherjee",
  "Nath",
  "Saha",
  "Basu",
  "Chatterjee",
  "Bhattacharya",
  "Kar",
  "Biswas",
  "Das",
  "Mandal",
  "Ghosh",
  "Sarkar",
  "Dasgupta",
  "Chakraborty",
  "Ganguly",
  "Sengupta",
  "Sen",
  "Gupta",
  "Mitra",
];

export const getRandomLastName = ()=>{
  const randomNumber = Math.floor(Math.random() * indianLastNames.length);
  return indianLastNames[randomNumber]
};