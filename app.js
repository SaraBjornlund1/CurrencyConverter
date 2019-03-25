getData();

let convert = document.getElementById('btnBuy');
convert.addEventListener('click', Convert);

async function getData()
{
    let url = "https://api.exchangeratesapi.io/latest?base=USD";
    let result = await api.fetchData(url);
    sessionStorage.setItem('rates', JSON.stringify(result));
    setInterval(getData, 60*60*1000);
    fillList();
}

async function fillList()
{
    let currencies = JSON.parse(sessionStorage.getItem('rates'));
    let startCurrency = document.querySelector('#fromCurrency');
    let endCurrency = document.querySelector('#toCurrency');

    for(const [key, values] of Object.entries(currencies.rates))
    {
        let option = document.createElement('option');
        option.value = values;
        option.innerHTML = key;
        startCurrency.appendChild(option);

        let option2 = document.createElement('option');
        option2.value = values;
        option2.innerHTML = key;
        endCurrency.appendChild(option2);
    }
}

function Convert(){
    let currencyInput = document.getElementById('inputCurrency').value;
    let fromCurrency = document.getElementById('fromCurrency').value;
    let toCurrency = document.getElementById('toCurrency').value;

    let newValue = currencyInput / fromCurrency * toCurrency;
    document.getElementById('newCurrency').value = newValue;
}

