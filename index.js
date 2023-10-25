const WebSocket = require('ws');
const hosGeldin = require('./hosGeldin');
const soruModulu = require('./soruSor');
const sozModulu = require('./soz');
const ayarlar = require('./ayarlar');
const ozelMesajModulu = require('./ozelMesaj');
const botAtama = require('./botAtama');
const socket = new WebSocket(`wss://${ayarlar.adres}:${ayarlar.port}`);

// botAtama.botlariCalistir();

socket.on('open', () => {
   // bla bla bla
});

socket.on('message', (data) => {
	// console.log(`Socket durum mesajlari: ${data}`);
});

socket.on('close', () => {
	// ayarlar.js icinden botun nicki geliyor. Durum ogren.
	console.log(`Soket hesabi ${ayarlar.nick} kapandi`);
});

socket.on('error', (error) => {
	// ayarlar.js icinden botun herhangi hata vermesi durumunda...
	console.error(`Hesap hatasi ${row.id}: ${error.message}`);
});
