using System.Collections.Generic;

namespace SP_DomainEntities
{
    public class BusinessElementChoiceConcrete : BusinessElementChoice
    {
        public BusinessElementChoice Parent { get; set; }
        public IEnumerable<File> Files { get; set; }
        public IEnumerable<Message> Messages { get; set; }
        public IEnumerable<Task> Tasks { get; set; }
    }
}
