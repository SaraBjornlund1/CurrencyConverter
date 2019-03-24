const api = (function () {

    async function fetchData(url)
    {
        let promise = await fetch(url);
        let data = await promise.json();
        return data;
        
        // let url = 'https://api.exchangeratesapi.io/latest?base=USD';
        // fetch(url)
        // .then(res => res.json())
        // .then(function (response){
        //     sessionStorage.setItem("rates", JSON.stringify(response.rates));
        //     //alert(response);
        // });
    }

    return {
        fetchData: fetchData
    }
})();