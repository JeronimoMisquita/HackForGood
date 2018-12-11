# HackForGood - Please run following commands in node to install plugins

ionic cordova plugin add cordova-plugin-qrscanner

ionic cordova plugin add cordova-plugin-network-information

ionic cordova plugin add cordova-plugin-geolocation

npm install --save @ionic-native/qr-scanner	

npm install -save @ionic-native/network

npm install --save @ionic-native/geolocation

npm install @types/google-maps --save

ionic cordova plugin add cordova-plugin-advanced-http

npm install --save @ionic-native/http


{
	"data": [

		{
			"Info": "Date",
			"id": "Date1",
			"component": "input",
			"type": "date",
			"value": []
		},

		{
			"Info": "Type",
			"id": "TypeOfFair1",
			"component": "input",
			"type": "text",
			"value": []
		},

		{
			"Info": "Number of Days",
			"id": "NumOfDays1",
			"component": "input",
			"type": "number",
			"value": []
		},



		{
			"Info": "Expense Location",
			"id": "Location1",
			"component": "select",
			"type": "",
			"value": ["Delhi", "Maharashtra"]
		}



	]
}
