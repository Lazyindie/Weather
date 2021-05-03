using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EtainTechnicalTest.Models
{
    public class ParentDto
    {

        [JsonProperty("title")] 
        public string Title { get; set; }
        
        [JsonProperty("location_type")]
        public string LocationType { get; set; }
        
        [JsonProperty("woeid")]
        public int WoeId { get; set; }
        
        [JsonProperty("latt_long")]
        public string LattLong { get; set; }
    }
}
