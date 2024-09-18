using backend.Data;

namespace backend.Services;

public class CurrenciesServiceFake : ICurrenciesService
{
    private readonly Dictionary<string, decimal> _exchangeRates;

    public CurrenciesServiceFake()
    {
        _exchangeRates = new Dictionary<string, decimal>();
        InitializeExchangeRates();
    }

    private void InitializeExchangeRates()
    {
        var random = new Random();

        foreach (var currency in CurrencyData.Currencies)
        {
            _exchangeRates[currency] = Math.Round((decimal)(random.NextDouble() * 5 + 0.5), 2);
        }
    }

    public IEnumerable<string> GetSupportedCurrencies()
    {
        return _exchangeRates.Keys;
    }

    public Dictionary<string, decimal>? GetExchangeRates(string currency)
    {
        if (!_exchangeRates.ContainsKey(currency))
        {
            return null; 
        }

        var rates = new Dictionary<string, decimal>();
        decimal baseRate = _exchangeRates[currency];

        foreach (var kvp in _exchangeRates)
        {
            if(kvp.Key!= currency)
            {
                rates[kvp.Key] = kvp.Value / baseRate;

            }
        }

        return rates;
    }
}
