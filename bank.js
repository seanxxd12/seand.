const accounts = [];

function createAccount() {
    const accountName = document.getElementById("accountName").value;
    const initialBalance = parseFloat(document.getElementById("initialBalance").value);
    
    if (accountName && !isNaN(initialBalance) && initialBalance >= 0) {
        accounts.push({ name: accountName, balance: initialBalance });
        updateAccountSelect();
        document.getElementById("output").innerText = `Account "${accountName}" created with initial balance ₱${initialBalance.toFixed(2)}`;
    } else {
        document.getElementById("output").innerText = "Invalid input. Please enter a valid account name and initial balance.";
    }
}

function deposit() {
    const accountName = document.getElementById("accountSelect").value;
    const amount = parseFloat(document.getElementById("amount").value);
    
    if (!isNaN(amount) && amount > 0) {
        const account = findAccount(accountName);
        if (account) {
            account.balance += amount;
            document.getElementById("output").innerText = `Deposited ₱${amount.toFixed(2)} into account "${accountName}"`;
        } else {
            document.getElementById("output").innerText = `Account "${accountName}" not found.`;
        }
    } else {
        document.getElementById("output").innerText = "Invalid deposit amount.";
    }
}

function withdraw() {
    const accountName = document.getElementById("accountSelect").value;
    const amount = parseFloat(document.getElementById("amount").value);
    
    if (!isNaN(amount) && amount > 0) {
        const account = findAccount(accountName);
        if (account) {
            if (amount <= account.balance) {
                account.balance -= amount;
                document.getElementById("output").innerText = `Withdrawn ₱${amount.toFixed(2)} from account "${accountName}"`;
            } else {
                document.getElementById("output").innerText = `Insufficient funds in account "${accountName}"`;
            }
        } else {
            document.getElementById("output").innerText = `Account "${accountName}" not found.`;
        }
    } else {
        document.getElementById("output").innerText = "Invalid withdrawal amount.";
    }
}

function checkBalance() {
    const accountName = document.getElementById("accountSelect").value;
    const account = findAccount(accountName);
    
    if (account) {
        document.getElementById("output").innerText = `Account "${accountName}" balance: ₱${account.balance.toFixed(2)}`;
    } else {
        document.getElementById("output").innerText = `Account "${accountName}" not found.`;
    }
}

function updateAccountSelect() {
    const selectElement = document.getElementById("accountSelect");
    selectElement.innerHTML = "";
    accounts.forEach(account => {
        const option = document.createElement("option");
        option.text = account.name;
        selectElement.add(option);
    });
}

function findAccount(name) {
    return accounts.find(acc => acc.name === name);
}

function goBack() {
    window.history.back(); // This will navigate to the previous page in history
}
