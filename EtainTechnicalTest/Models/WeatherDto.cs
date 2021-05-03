using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace EtainTechnicalTest.Models
{
    public class WeatherDto
    {
        [JsonProperty("consolidated_weather")] 
        public List<ForecastDto> ConsolidatedWeather { get; set; }
        
        [JsonProperty("time")] 
        public DateTimeOffset Time { get; set; }
        
        [JsonProperty("sun_rise")] 
        public DateTimeOffset Sunrise { get; set; }
        
        [JsonProperty("sun_set")] 
        public DateTimeOffset Sunset { get; set; }
        
        [JsonProperty("timezone_name")] 
        public string TimezoneName { get; set; }
        
        [JsonProperty("title")] 
        public string Title { get; set; }
        
        [JsonProperty("location_type")] 
        public string LocationType { get; set; }
        
        [JsonProperty("woeid")] 
        public int WoeId { get; set; }
        
        [JsonProperty("latt_long")] 
        public string LattLong { get; set; }
        
        [JsonProperty("timezone")] 
        public string Timezone { get; set; }
        
        [JsonProperty("parent")] 
        public ParentDto Parent { get; set; }

        [JsonProperty("sources")]
        public List<SourceDto> Sources { get; set; }
    }
}
