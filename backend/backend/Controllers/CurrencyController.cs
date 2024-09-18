using backend.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace backend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CurrencyController : ControllerBase
{
    private readonly ICurrenciesService _currencyService;

    public CurrencyController(ICurrenciesService currencyService)
    {
        _currencyService = currencyService;
    }

    [HttpGet("supported-currencies")]
    public IActionResult GetNames()
    {
        var currencyNames = _currencyService.GetSupportedCurrencies();
        if (currencyNames == null || !currencyNames.Any())
        {
            return NotFound("No currencies found.");
        }

        return Ok(currencyNames);
    }


    [HttpGet("exchange-rates/{currency}")]
    public IActionResult GetRateByCurrency(string currency)
    {
        var rates = _currencyService.GetExchangeRates(currency);
        if (rates == null)
        {
            return NotFound("Currency not supported.");
        }

        return Ok(rates);
    }
}
