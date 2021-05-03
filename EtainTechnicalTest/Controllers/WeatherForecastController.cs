using EtainTechnicalTest.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

namespace EtainTechnicalTest.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly HttpClient client = new HttpClient();

        private static string baseUrl = "https://www.metaweather.com";
        private static string belfastApi = "/api/location/44544/";

        public WeatherForecastController()
        {
        }

        [HttpGet("GetFiveDayForcast")]
        public async Task<IActionResult> GetFiveDayForcastAsync()
        {
            var url = new Uri(baseUrl + belfastApi);

            var response = await client.GetStringAsync(url);

            return Ok(JsonConvert.DeserializeObject<WeatherDto>(response));
        }
    }
}
