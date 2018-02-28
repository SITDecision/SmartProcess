using System.Collections.Generic;

namespace SP_DomainEntities
{
    public class BusinessProcess
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public BusinessElementStart StartElement { get; set; }
        public BusinessElementEnd EndElement { get; set; }
        public IEnumerable<BusinessElementCommon> CommonElements { get; set; }
        public IEnumerable<BusinessElementChoice> ChoiceElements { get; set; }
        public IEnumerable<BusinessElementTransition> TransitionElements { get; set; }
        public BusinessElement CurrentElement { get; set; }
    }
}
