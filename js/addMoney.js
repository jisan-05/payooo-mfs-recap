document
    .getElementById("btn-add-money")
    .addEventListener("click", function (event) {
        event.preventDefault();
        const addMoney = document.getElementById("input-add-money").value;
        const addMoneyNumber = parseFloat(addMoney);
        const pin = document.getElementById("input-pin-number").value;
        if (pin === "1234") {
            const balance = document.getElementById("account-balance").innerText;
            const balanceNumber = parseFloat(balance);
            const updateBalance = balanceNumber + addMoneyNumber;

            document.getElementById('account-balance').innerText = updateBalance;

        } else {
            alert("Faild to add money . Try again and Enter right pin");
        }
    });
