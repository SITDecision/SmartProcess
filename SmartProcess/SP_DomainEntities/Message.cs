using System.Collections.Generic;

namespace SP_DomainEntities
{
    public class Message
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IEnumerable<File> Files { get; set; }
    }
}
