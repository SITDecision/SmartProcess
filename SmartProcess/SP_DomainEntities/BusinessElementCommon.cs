using System.Collections.Generic;

namespace SP_DomainEntities
{
    public class BusinessElementCommon : BusinessElement
    {
        public BusinessElement From { get; set; }
        public IEnumerable<BusinessElement> To { get; set; }
        public IEnumerable<User> Viewers { get; set; }
        public IEnumerable<User> Editors { get; set; }
    }
}
