using System.Collections.Generic;

namespace SP_DomainEntities
{
    public class BusinessProcess
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public BusinessElementStart Start { get; set; }
        public BusinessElementEnd End { get; set; }
        public IEnumerable<BusinessElementCommon> BusinessElementCommons { get; set; }
        public IEnumerable<BusinessElementChoice> BusinessElementChoices { get; set; }
        public IEnumerable<BusinessElementTransition> BusinessElementTransitions { get; set; }
        public BusinessElement CurrentElement { get; set; }
    }
}
