'use strict';
const chalk = require('chalk');
const cliSpinners = require('cli-spinners');
const log = require('single-line-log').stdout;
const MongoClient = require('mongodb').MongoClient;



// export default 
function MongoAPI() {

	//Mongo DB
	const useRemoteMongoDB = true; //false
	let mongoURI = 'mongodb://localhost:27017'; /// exevute - mongod - on terminal
	if (useRemoteMongoDB) mongoURI = 'mongodb+srv://lucaju:Dreaming.80@fluxoart-ik2c8.gcp.mongodb.net/test?retryWrites=true';

	const mongoConnect = function mongoConnect() {
		return new Promise(
			(resolve) => {
				const client = new MongoClient(mongoURI, { useNewUrlParser: true });
				client.connect(err => {

					if (err) {
						console.error(err);
						return;
					}
					// console.log('mongo connected')
					resolve(client);
				});
			});
	};

	this.insertMany = function insertMany(collection,data) {
		return new Promise(
			(resolve) => {
				mongoConnect()
					.then(client => {

						const mongoCollection = client.db('rankflow').collection(collection);
						// console.log('mongo saving')
						const spinner = cliSpinners[process.argv[2] || 'dots'];
						let i = 0;

						let spinnerInterval = setInterval(() => {
							const {frames} = spinner;
							log(frames[i = ++i % frames.length] + ' saving');
						}, spinner.interval);

						mongoCollection.insertMany(data)
							.then(result => {
								clearInterval(spinnerInterval);
								log('saved');
								// console.log(chalk.blue(`${result.ops.length} items inserted`));
								client.close();
								// console.log('mongo disconected')
								resolve(result.ops);
							})
							.catch(err => {
								console.log(chalk.red(err));
							});

					}).catch(err => {
						console.log(chalk.red(err));
					});
			});
	};

	this.insertOne = function insertOne(collection,item) {
		return new Promise(
			(resolve) => {
				mongoConnect()
					.then(client => {

						const mongoCollection = client.db('rankflow').collection(collection);

						mongoCollection.insertOne(item)
							.then(result => {
								// console.log(chalk.blue(`1 item inserted`));
								client.close();
								// console.log('mongo disconected')
								resolve(result.ops);
							})
							.catch(err => {
								console.log(chalk.red(err));
							});

					}).catch(err => {
						console.log(chalk.red(err));
					});
			});
	};

	this.find = function find(collection,query) {
		return new Promise(
			(resolve) => {
				mongoConnect()
					.then(client => {

						const mongoCollection = client.db('rankflow').collection(collection);

						mongoCollection.find(query).toArray()
							.then(result => {
								// console.log(result);
								client.close();
								resolve(result);
							})
							.catch(err => {
								console.log(chalk.red(err));
							});

					}).catch(err => {
						console.log(chalk.red(err));
					});
			});
	};
	
}

var test = {

	uri: function() {
		const useRemoteMongoDB = true; //false
		let mongoURI = 'mongodb://localhost:27017'; /// exevute - mongod - on terminal
		if (useRemoteMongoDB) mongoURI = 'mongodb+srv://lucaju:Dreaming.80@fluxoart-ik2c8.gcp.mongodb.net/test?retryWrites=true';
		return mongoURI;
	}
	
}

module.exports = test;