namespace SP_DomainEntities
{
    public class BusinessElementChoice : BusinessElement
    {
        public BusinessElement From { get; set; }
        public BusinessElement ToFirstOption { get; set; }
        public BusinessElement ToSecondOption { get; set; }
    }
}
