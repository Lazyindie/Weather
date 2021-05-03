using Newtonsoft.Json;

namespace EtainTechnicalTest.Models
{
    public class SourceDto
    {

        [JsonProperty("title")] 
        public string Title { get; set; }
        
        [JsonProperty("slug")]
        public string Slug { get; set; }
        
        [JsonProperty("url")]
        public string Url { get; set; }
        
        [JsonProperty("crawl_rate")]
        public string CrawlRate { get; set; }
    }
}
