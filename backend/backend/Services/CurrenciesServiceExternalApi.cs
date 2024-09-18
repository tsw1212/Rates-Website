using backend.Data;
using backend.Services;
using System.Net.Http;
using System.Text.Json;

public class CurrenciesServiceExternalApi : ICurrenciesService
{
    private readonly HttpClient _httpClient;
    private readonly List<string> currencies = CurrencyData.Currencies;
    private const string ApiUrl = "https://api.exchangerate-api.com/v4/latest";

    public CurrenciesServiceExternalApi(HttpClient httpClient)
    {
        var handler = new HttpClientHandler
        {
            ServerCertificateCustomValidationCallback = (message, cert, chain, errors) => true
        };

        _httpClient = new HttpClient(handler);
    }

    public IEnumerable<string> GetSupportedCurrencies()
    {
        return currencies;
    }

    public Dictionary<string, decimal>? GetExchangeRates(string baseCurrency)
    {
        var exchangeRates = new Dictionary<string, decimal>();

        if (!currencies.Contains(baseCurrency))
        {
            throw new ArgumentException("Currency not supported.");
        }

        try
        {
            var url = $"{ApiUrl}/{baseCurrency}";
            var response = _httpClient.GetStringAsync(url).Result;
            var jsonDocument = JsonDocument.Parse(response);
            var rates = jsonDocument.RootElement.GetProperty("rates");

            foreach (var rate in rates.EnumerateObject())
            {
                var currency = rate.Name;
                if (currencies.Contains(currency) && currency != baseCurrency)
                {
                    exchangeRates[currency] = Math.Round(rate.Value.GetDecimal(), 5);
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error fetching exchange rates: {ex.Message}");
        }

        return exchangeRates;
    }
}
