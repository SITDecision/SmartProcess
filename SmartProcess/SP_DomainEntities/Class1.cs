using System.Collections.Generic;

namespace SP_DomainEntities
{
    public class BusinessProcess
    {
        public BusinessElementStart Start { get; set; }
        public BusinessElementEnd End { get; set; }
        public IEnumerable<BusinessElementCommon> BusinessElementCommons { get; set; }
        public IEnumerable<BusinessElementChoice> BusinessElementChoices { get; set; }
        public IEnumerable<BusinessElementTransition> BusinessElementTransitions { get; set; }

    }


    public class BusinessElement
    {
        public int Id { get; set; }
        public int Name { get; set; }
    }


    public class BusinessElementCommon : BusinessElement
    {
        public BusinessElement From { get; set; }
        public BusinessElement To { get; set; }
        public IEnumerable<User> Viewers { get; set; }
        public IEnumerable<User> Editors { get; set; }
        public BusinessProcess BusinessProcess { get; set; }
        public IEnumerable<File> Files { get; set; }

    }


    public class BusinessElementChoice : BusinessElement
    {
        public BusinessElement From { get; set; }
        public BusinessElement ToFirstOption { get; set; }
        public BusinessElement ToSecondOption { get; set; }
    }


    public class BusinessElementEnd: BusinessElement
    {
        public BusinessElement From { get; set; }
    }


    public class BusinessElementStart : BusinessElement
    {
        public BusinessElement To { get; set; }
    }


    public class BusinessElementTransition
    {
        public BusinessElement To { get; set; }
    }


    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }

    }


    public class Message
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IEnumerable<File> Files { get; set; }
    }


    public class Task
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IEnumerable<File> Files { get; set; }
    }


    public class File
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
