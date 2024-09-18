namespace backend.Services;

public interface ICurrenciesService
{
    IEnumerable<string> GetSupportedCurrencies();
    Dictionary<string, decimal>? GetExchangeRates(string currency);
}
