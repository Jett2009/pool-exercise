describe("payment test (with setup and tear-down)", function () {
	beforeEach(function () {
		// initialization logic
		billAmtInput.value = 100;
		tipAmtInput.value = 15;
	});

	it("should add a new payment", function () {
		submitPaymentInfo();

		expect(Object.keys(allPayments).length).toEqual(1);
		expect(allPayments["payment1"].billAmt).toEqual("100");
		expect(allPayments["payment1"].tipAmt).toEqual("15");
		expect(allPayments["payment1"].tipPercent).toEqual(15);
	});

	it("should update paymentTable ", function () {
		let curPayment = createCurPayment();
		allPayments["payment1"] = curPayment;

		appendPaymentTable(curPayment);

		let currentTable = document.querySelectorAll("#paymentTable tbody tr td");

		expect(currentTable.length).toEqual(3);
		expect(currentTable[0].innerText).toEqual("$100");
		expect(currentTable[1].innerText).toEqual("$15");
		expect(currentTable[2].innerText).toEqual("15%");
	});

	it("should create a payment", function () {
		let expectedPayment = {
			billAmt: "100",
			tipAmt: "15",
			tipPercent: 15,
		};

		expect(createCurPayment()).toEqual(expectedPayment);
	});
	//
	it("should not create payment with empty input on createCurPayment()", function () {
		billAmtInput.value = "";
		tipAmtInput.value = "";
		let curPayment = createCurPayment();

		expect(curPayment).toEqual(undefined);
	});

	afterEach(function () {
		// teardown logic
		billAmtInput.value = "";
		tipAmtInput.value = "";
		allPayments = {};
		paymentId = 0;
		paymentTbody.innerHTML = "";
		summaryTds[0].innerHTML = "";
		summaryTds[1].innerHTML = "";
		summaryTds[2].innerHTML = "";
		serverTbody.innerHTML = "";
	});
});
