describe("Servers test (with setup and tear-down)", function () {
	beforeEach(function () {
		// initialization logic
		serverNameInput.value = "Alice";
	});

	it("should add a new server to allServers on submitServerInfo()", function () {
		submitServerInfo();

		expect(Object.keys(allServers).length).toEqual(1);
		expect(allServers["server" + serverId].serverName).toEqual("Alice");
	});
});

describe("update server table", function () {
	beforeEach(function () {
		serverTbody = "server 1";
	});

	it("should update the table data with the server name and earnings", function () {
		submitServerInfo();
		updateServerTable();

		let currentTable = document.querySelectorAll("#serverTable tbody tr td");
		expect(currentTable.length).toequal(2);
		expect(currentTable[0].innerText).toEqual("Alice");
		expect(currentTable[1].innerText).toEqual("$0.00");
	});
	it("should not add a new server on submitServerInfo() with empty input", function () {
		serverNameInput.value = "";
		submitServerInfo();

		expect(Object.keys(allServers).length).toEqual(0);
	});
	afterEach(function () {
		// teardown logic
		serverNameInput = "";
		allServers = {};
		serverId = 0;
	});
});
