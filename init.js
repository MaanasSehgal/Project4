const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
	.then(() => {
		console.log("Connection Successful");
	})
	.catch((err) => {
		console.log(err);
	});

async function main() {
	await mongoose.connect("mongodb://127.0.0.1:27017/newWhatsapp");
}

// Generating Sample Chat Data

const allChats = [
	{
		from: "Rahul",
		to: "Aarti",
		msg: "Hi Aarti, how's it going?",
		created_at: new Date(),
	},
	{
		from: "Priya",
		to: "Vikas",
		msg: "Hey Vikas, what's up?",
		created_at: new Date(),
	},
	{
		from: "Amit",
		to: "Sneha",
		msg: "Hi Sneha, long time no see. How have you been?",
		created_at: new Date(),
	},
	{
		from: "Tanvi",
		to: "Raj",
		msg: "Hello Raj, did you watch the latest movie?",
		created_at: new Date(),
	},
	{
		from: "Kunal",
		to: "Simran",
		msg: "Hey Simran, let's catch up this weekend!",
		created_at: new Date(),
	},
	{
		from: "Swati",
		to: "Avinash",
		msg: "Hi Avinash, any plans for the evening?",
		created_at: new Date(),
	},
	{
		from: "Vivek",
		to: "Nisha",
		msg: "Hello Nisha, how's your day going?",
		created_at: new Date(),
	},
	{
		from: "Ayesha",
		to: "Sameer",
		msg: "Hey Sameer, need your opinion on something.",
		created_at: new Date(),
	},
	{
		from: "Pooja",
		to: "Ankit",
		msg: "Hi Ankit, let's grab coffee sometime!",
		created_at: new Date(),
	},
	{
		from: "Akash",
		to: "Sakshi",
		msg: "Hey Sakshi, remember that trip we planned?",
		created_at: new Date(),
	},
	{
		from: "Riya",
		to: "Rohit",
		msg: "Hello Rohit, how's your new project coming along?",
		created_at: new Date(),
	},
	{
		from: "Rajat",
		to: "Ishita",
		msg: "Hi Ishita, did you try that new restaurant?",
		created_at: new Date(),
	},
	{
		from: "Shreya",
		to: "Gaurav",
		msg: "Hey Gaurav, let's play some games tonight!",
		created_at: new Date(),
	},
	{
		from: "Aditya",
		to: "Kritika",
		msg: "Hi Kritika, any interesting updates?",
		created_at: new Date(),
	},
	{
		from: "Neha",
		to: "Shubham",
		msg: "hey bro, how are you",
		created_at: new Date(),
	},
	{
		from: "Sagar",
		to: "Ananya",
		msg: "Hello Ananya, long time no chat. How have you been?",
		created_at: new Date(),
	},
	{
		from: "Vaishali",
		to: "Rohit",
		msg: "Hi Rohit, what's happening in your world?",
		created_at: new Date(),
	},
	{
		from: "Ravi",
		to: "Preeti",
		msg: "Hey Preeti, let's plan something fun this weekend!",
		created_at: new Date(),
	},
	{
		from: "Shivam",
		to: "Muskan",
		msg: "Hello Muskan, did you check out the latest music release?",
		created_at: new Date(),
	},
	{
		from: "Prachi",
		to: "Yash",
		msg: "Hi Yash, how's life treating you?",
		created_at: new Date(),
	},
];
console.log(allChats);
Chat.insertMany(allChats);
